import NextAuth, { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt'
	},
	providers: [
		CredentialsProvider({
			name: 'Username',
			credentials: {
				username: { label: 'Username', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				// Handle Authorization
				try {
					const user = await prisma.users.findUnique({
						where: {
							username: credentials?.username,
						}
					})
					if (user) {

						const isPasswordValid = await bcrypt.compare(credentials?.password ?? '', user.password_hash);

						if (!isPasswordValid) {
							throw new Error('Invalid Credentials');
						}

						return {
							id: user.user_id.toString(),
							username: user.username,
						}
					} else {
						throw new Error('Invalid Credentials');
					}
				} catch (error) {
					return null;
				}
			}
		})
	]
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };