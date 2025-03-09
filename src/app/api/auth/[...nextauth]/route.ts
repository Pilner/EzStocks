import NextAuth, { User, type NextAuthOptions } from 'next-auth';
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
				console.log(credentials)
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
							name: user.username,
						}
					} else {
						throw new Error('Invalid Credentials');
					}
				} catch (error) {
					return null;
				}
			}
		})
	],
	pages: {
		signIn: '/login'
	},
	callbacks: {
		session: ({session, token}) => {
			return {
				...session,
				user: {
					...session.user,
					id: token.id,
				}
			}
		},
		jwt: ({token, user}) => {
			if (user) {
				const u = user as unknown as User;
				return {
					...token,
					id: u.id,
				}
			}
			return token;
		}
	}
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };