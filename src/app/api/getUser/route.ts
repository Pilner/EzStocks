import { prisma } from "@/lib/prisma";
import { NextApiRequest } from "next";

// GET Get all users
// GET /api/getUser
export async function GET(req: NextApiRequest) {

	// Set headers
	let headers = {
		"Content-Type": "application/json",
	};

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
