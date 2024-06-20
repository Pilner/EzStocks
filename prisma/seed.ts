import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const initialUsers = [
	{
		username: "Pilner",
		password_hash: "1111",
		UserInfo: {
			first_name: "Pilner",
			last_name: "Doe",
			email: "pilnerdoe@gmail.com",
			phone_number: "09123456789",
		}
	},
	{
		username: "John",
		password_hash: "2222",
		UserInfo: {
			first_name: "John",
			last_name: "Doe",
			email: "johndoe@gmail.com",
			phone_number: "09123456789",
		},
	},
	{
		username: "Alice",
		password_hash: "3333",
		UserInfo: {
			first_name: "Alice",
			last_name: "Doe",
			email: "alicedoe@gmail.com",
			phone_number: "09123456789",
		}
	},
	{
		username: "Dog",
		password_hash: "4444",
		UserInfo: {
			first_name: "Dog",
			last_name: "Doe",
			email: "dogdoe@gmail.com",
			phone_number: "09123456789",
		}
	},
]

const seed = async () => {
	await prisma.users.deleteMany();
	await prisma.userInfo.deleteMany();
	await prisma.inventory.deleteMany();
	await prisma.products.deleteMany();

	for (const user of initialUsers) {
		await prisma.users.create({
			data: {
				username: user.username,
				password_hash: user.password_hash,
				UserInfo: {
					create: {
						first_name: user.UserInfo.first_name,
						last_name: user.UserInfo.last_name,
						email: user.UserInfo.email,
						phone_number: user.UserInfo.phone_number,
					}
				}
			}
		});
	}

}

seed();