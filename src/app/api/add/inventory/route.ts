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

export async function POST(req: NextApiRequest, res: NextApiResponse) {
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
	if (req.method !== "POST") {
		return new Response(JSON.stringify({ status: 405, message: "Method not allowed" }), { headers });
	}

	// Get data from the registration form
	let {
		productname: product_name,
		category,
		price: product_price,
		quantity
	} = await new Response(req.body).json();

	// Convert the price and quantity to numbers
	product_price = parseFloat(product_price);
	quantity = parseInt(quantity);

	try {
		if (!product_name || !category || !product_price || !quantity) {
			throw new Error("Bad Request");
		} 
	
	} catch (error) {
		if ((error as Error).message === "Bad Request") {
			return new Response(JSON.stringify({ status: 400, message: "Bad Request" }), { headers });
		}
	}

	try {
		const productData = await prisma.products.findFirst({
			where: { product_name }
		});

		// Need to implement if product exist then discard product_price

		if (productData) {
			const userInventoryData = await prisma.inventory.findFirst({
				where: {
					user_id: user_id,
					products_id: productData.products_id
				}
			});

			if (userInventoryData) {
				const newQuantity = userInventoryData.quantity + quantity;
				await prisma.inventory.update({
					where: {
						inventory_id: userInventoryData.inventory_id
					},
					data: {
						quantity: newQuantity
					}
				});

				return new Response(JSON.stringify({
					status: 201,
					message: "Product added to inventory"
				}), { headers });
			} else {
				await prisma.inventory.create({
					data: {
						user_id: user_id!,
						products_id: productData.products_id,
						quantity
					}
				});

				return new Response(JSON.stringify({
					status: 201,
					message: "Product added to inventory"
				}), { headers });
			}
		} else {

			const newProduct = await prisma.products.create({
				data: {
					product_name,
					category,
					product_price
				}
			});

			await prisma.inventory.create({
				data: {
					user_id: user_id!,
					products_id: newProduct.products_id,
					quantity
				}
			});

			return new Response(JSON.stringify({
				status: 201,
				message: "Product added to inventory"
			}), { headers });
		}
	} catch(error) {
		if (error as Error) {
			console.log(error);
			return new Response(JSON.stringify({ status: 500, message: "Server Error" }), { headers });
		}
	}

	return new Response(JSON.stringify({ status: 500, message: "Server Error" }), { headers });
}