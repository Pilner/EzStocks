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
export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
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

	// Check if the request method is DELETE
	if (req.method !== "DELETE") {
		return new Response(JSON.stringify({ status: 405, message: "Method not allowed" }), { headers });
	}

	// Get data from the body
	let { products_id } = await new Response(req.body).json();

	// Convert the product_id to a number
	products_id = parseInt(products_id);

	try {
		if (!products_id) {
			throw new Error("Bad Request");
		}
	} catch (error) {
		if ((error as Error).message === "Bad Request") {
			return new Response(JSON.stringify({ status: 400, message: "Bad Request" }), { headers });
		}
	}

	try {
		const inventoryData = await prisma.inventory.findFirst({
			where: {
				user_id: user_id,
				products_id: products_id
			}
		});

		if (!inventoryData) {
			return new Response(JSON.stringify({ status: 404, message: "Not Found" }), { headers });
		}

		await prisma.inventory.delete({
			where: {
				inventory_id: inventoryData.inventory_id
			}
		});

		try {
			const productData = await prisma.products.findFirst({
				where: {
					products_id: products_id,
					createdBy: user_id!
				}
			});

			if (!productData) {
				return new Response(JSON.stringify({ status: 404, message: "Not Found" }), { headers });
			}

			await prisma.products.delete({
				where: {
					products_id: products_id
				}
			});

			return new Response(JSON.stringify({ status: 200, message: "Product deleted from inventory" }), { headers });
		
		} catch (error) {
			return new Response(JSON.stringify({ status: 500, message: "Server Error" }), { headers });
		}



	} catch (error) {
		return new Response(JSON.stringify({ status: 500, message: "Server Error" }), { headers });
	}
}