import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

import { prisma } from "@/lib/prisma";
import { NextApiRequest } from "next";

interface params {
	params: {
		id: string
	}
}

interface SessionUser {
	id?: string;
	name?: string | null;
	email?: string | null;
	image?: string | null;
}


// GET Get list of items in inventory by session user
// GET /api/inventory/get
export async function GET(req: NextApiRequest, params: params) {

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

	// Check if the request method is POST
	if (req.method !== "GET") {
		return new Response(JSON.stringify({ status: 405, message: "Method not allowed" }), { headers });
	}

	try {
		// retrive data from Inventory and Products table
		const data = await prisma.inventory.findMany({
			where: {
				user_id: user_id
			},
			include: {
				Products: true
			}
		});

		return new Response(JSON.stringify({ status: 200, message: "Success", rows: data }), { headers });

	} catch (error) {
		if (error as Error) {
			return new Response(JSON.stringify({ status: 500, message: "Server Error" }), { headers });
		}
	}

	return new Response(JSON.stringify({ status: 500, message: "Server Error" }), { headers });
}