import axios from "axios"
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			// The name to display on the sign in form (e.g. "Sign in with...")
			name: "Credentials",
			// `credentials` is used to generate a form on the sign in page.
			// You can specify which fields should be submitted, by adding keys to the `credentials` object.
			// e.g. domain, username, password, 2FA token, etc.
			// You can pass any HTML attribute to the <input> tag through the object.
			credentials: {
				username: { label: "Username", type: "text", placeholder: "jsmith" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				const { username, password } = credentials as any
				try {
					const { data, status } = await axios.post(
						"http://localhost:8080/api/auth/signin",
						{ username, password },
						{
							headers: {
								"Content-Type": "application/json",
								Accept: "application/json",
							},
						}
					)

					return data
				} catch (error) {
					if (axios.isAxiosError(error)) {
						console.log("error message: ", error.message)
						// 👇️ error: AxiosError<any, any>
						return null
					} else {
						console.log("unexpected error: ", error)
						return null
					}
				}
			},
		}),
	],
	session: {
		strategy: "jwt",
		maxAge: 30 * 24 * 60 * 60, // 30 days
		updateAge: 24 * 60 * 60, // 24 hours
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.accessToken = user.token
				token.id = user.id
			}

			return token
		},
		async session({ session, token }) {
			if (session.user) session.user.id = token.id as string
			return session
		},
	},
	pages: {
		signIn: "/",
	},
}

export default NextAuth(authOptions)
