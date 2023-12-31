/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'static.ticketmaster.sg', 
            'localhost', 
            process.env.NEXT_PUBLIC_BACKEND_URL.replace('https://', '').replace('http://', '').split(":")[0]],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },

    async rewrites() {
        return [
            {
                source: '/v1/:path*',
                destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/:path*`,
            }
        ]
    }
}

module.exports = nextConfig
