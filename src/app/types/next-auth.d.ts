import NextAuth from "next-auth"

declare module "next-auth" {
	interface Session {
		user: {
			id: string
			username: string
		}
	}

	interface User {
		token: string
		type: string
		id: string
		username: string
		email: string
		dob: string
		phone: string
		countryOfResidences: string
	}
}