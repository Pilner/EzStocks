import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

interface SessionUser {
	id?: string;
	name?: string | null;
	email?: string | null;
	image?: string | null;
}

// POST /api/register
export async function PUT(req: NextApiRequest, res: NextApiResponse) {

	// Set headers
	let headers = {
		"Content-Type": "application/json",
	};

	const session = await getServerSession(authOptions);
	if (!session) {
		return new Response(JSON.stringify({
			status: 401,
			message: "Unauthorized"
		}), { headers });
	}

	const user_id = parseInt((session?.user as SessionUser)?.id?.toString() ?? "0");

	// Check if the request method is PUT
	if (req.method !== "PUT") {
		return new Response(JSON.stringify({ status: 405, message: "Method not allowed" }), { headers });
	}

	// Get data from the registration form
	const {
		username,
		fname: first_name,
		lname: last_name,
		email,
		mobilenumber: phone_number,
		gender,
		birthdate
	} = await new Response(req.body).json();

	const birthday = new Date(birthdate);

	// check if the username already exists
	const user = await prisma.users.findUnique({
		where: { username }
	});

	if (!user) {
		return new Response(JSON.stringify({ status: 409, message: "Username does not exist" }), { headers });
	}

	try {
		if (!username || !first_name || !last_name || !email || !phone_number || !gender || !birthday) {
			throw new Error("Bad Request");
		}
	} catch (error) {
		if ((error as Error).message === "Bad Request") {
			return new Response(JSON.stringify({ status: 400, message: "Bad Request" }), { headers });
		}
	}
	
	try {
		// Update the user in the database
		await prisma.userInfo.update({
			where: {
				user_id: user_id
			},
			data: {
				first_name,
				last_name,
				email,
				phone_number,
				gender,
				birthday
			}
		});

		return new Response(JSON.stringify({ status: 201, message: "User updated" }), { headers });
	} catch (error) {
		return new Response(JSON.stringify({ status: 500, message: "Internal Server Error" }), { headers });
	}
}
