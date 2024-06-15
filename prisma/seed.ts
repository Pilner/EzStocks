import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const initialUsers = [
	{username: "Pilner", password_hash: "1111"},
	{username: "John", password_hash: "2222"},
	{username: "Alice", password_hash: "3333"},
	{username: "Dog", password_hash: "4444"},
]

const seed = async () => {
	await prisma.products.deleteMany();

	for (const user of initialUsers) {
		await prisma.users.create({
			data: user
		});
	}
}

seed();