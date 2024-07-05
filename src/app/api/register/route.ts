import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";

// POST /api/register
export async function POST(req: NextApiRequest, res: NextApiResponse) {

	// Set headers
	let headers = {
		"Content-Type": "application/json",
	};

	// Check if the request method is POST
	if (req.method !== "POST") {
		return new Response(JSON.stringify({ status: 405, message: "Method not allowed" }), { headers });
	}
	
	// Get data from the registration form
	const { username, password, first_name, last_name, email, phone_number, gender } = req.body;

	// check if the username already exists
	const user = await prisma.users.findUnique({
		where: { username }
	});
	
	if (user) {
		return new Response(JSON.stringify({ status: 409, message: "Username already exists" }), { headers });
	}

	try {
		if (!username || !password || !first_name || !last_name || !email || !phone_number || !gender) {
			throw new Error("Bad Request");
		}
	} catch(error) {
		if ((error as Error).message === "Bad Request") {
			return new Response(JSON.stringify({ status: 400, message: "Bad Request" }), { headers });
		}
	}

	try {
		// Hash the password
		const password_hash = await bcrypt.hash(password, 10);

		// Create a new user in the database
		const Users = await prisma.users.create({
			data: {
				username,
				password_hash
			}
		});
		await prisma.userInfo.create({
			data: {
				user_id: Users.user_id,
				first_name,
				last_name,
				email,
				phone_number,
				gender,
			}
		});

		return new Response(JSON.stringify({ status: 201, message: "User created" }), { headers });

	} catch(error) {
		if (error as Error) {
			return new Response(JSON.stringify({ status: 500, message: "Server Error" }), { headers });
		}
	}

	return new Response(JSON.stringify({ status: 500, message: "Server Error" }), { headers });
}
