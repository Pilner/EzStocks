import { prisma } from "@/lib/prisma";
import { NextApiRequest } from "next";

interface params {
	params: {
		id: string
	}
}

// GET Get list of items in inventory by user_id
// GET /api/getInventory/[id]
export async function GET(req: NextApiRequest, params: params) {
	const user_id = parseInt(params.params.id);

	// Set headers
	let headers = {
		"Content-Type": "application/json",
	};

	// Check if the request method is POST
	if (req.method !== "GET") {
		return new Response(JSON.stringify({ status: 405, message: "Method not allowed" }), { headers });
	}

	try {
		// Retrieve data from Inventory Table
		const data = await prisma.inventory.findMany({
			where: {
				user_id: user_id
			}
		})

		return new Response(JSON.stringify({ status: 201, message: "Success", rows: data }), { headers });

	} catch (error) {
		if (error as Error) {
			return new Response(JSON.stringify({ status: 500, message: "Server Error" }), { headers });
		}
	}

	return new Response(JSON.stringify({ status: 500, message: "Server Error" }), { headers });
}