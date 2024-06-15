import { prisma } from "@/lib/prisma";

import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {

	let headers = {
		"Content-Type": "application/json",
	};

	// get data from prisma db file from Users table
	const data = await prisma.users.findMany();

	console.log(data);
	console.log("data");
	
    
    // output data
	return new Response(JSON.stringify(data), {headers});
}
