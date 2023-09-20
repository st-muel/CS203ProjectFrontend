export function getCookie(cookieName: string) {
	const cookies = document.cookie.split(";")
	for (let i = 0; i < cookies.length; i++) {
		const cookie = cookies[i].trim()
		// Check if this cookie starts with the specified name
		if (cookie.startsWith(cookieName + "=")) {
			// Extract and return the cookie value
			return decodeURIComponent(cookie.substring(cookieName.length + 1))
		}
	}
	// Cookie not found
	return null
}

export function removeCookie(cookieName: string) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}