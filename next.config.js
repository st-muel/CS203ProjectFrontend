/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['static.ticketmaster.sg', 'localhost'],
    },
    eslint: {
        ignoreDuringBuilds: true,
    }
}

module.exports = nextConfig
