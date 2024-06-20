import { prisma } from "@/lib/prisma";
import { NextApiRequest } from "next";

interface params {
    params: {
        id: string
    }
}

// GET Get full user information by user_id
// GET /api/getFullUser/[id]
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
        // retrieve joined data from Users Table and UserInfo Table
        const data = await prisma.users.findUniqueOrThrow({
            where: {
                user_id: user_id
            },
            include: {
                UserInfo: true
            }
        })

		// Return only necessary data
        return new Response(JSON.stringify({ status: 201, message: "Success", rows: {
			user_id: data.user_id,
			username: data.username,
			UserInfo: data.UserInfo
		} }), { headers });
        
    } catch (error) {
        if (error as Error) {
            return new Response(JSON.stringify({ status: 500, message: "Server Error" }), { headers });
        }
    } 

    return new Response(JSON.stringify({ status: 500, message: "Server Error" }), { headers });
}