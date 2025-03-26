/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ["i.ytimg.com", 'images.pexels.com'],
    },
    env: {
        PLACES_API_KEY: process.env.PLACES_API_KEY,
        MONGODB_URI: process.env.MONGODB_URI
    }
}
export default nextConfig;
