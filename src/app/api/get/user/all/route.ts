import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

import { prisma } from "@/lib/prisma";
import { NextApiRequest } from "next";

// GET Get all users
// GET /api/get/user/all
export async function GET(req: NextApiRequest) {

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

	// Check if the request method is POST
	if (req.method !== "GET") {
		return new Response(JSON.stringify({ status: 405, message: "Method not allowed" }), { headers });
	}

	try {
		// Get all data from Users Table
        const data = await prisma.users.findMany();

		return new Response(JSON.stringify({ status: 201, message: "Success", rows: data }), { headers });

	} catch(error) {
		if (error as Error) {
			return new Response(JSON.stringify({ status: 500, message: "Server Error" }), { headers });
		}
	}

	return new Response(JSON.stringify({ status: 500, message: "Server Error" }), { headers });
}
