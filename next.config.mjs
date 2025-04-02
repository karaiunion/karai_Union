/** @type {import('next').NextConfig} */
const nextConfig = {

    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
        { 
            protocol: 'https',
            hostname:'i.ytimg.com',
            pathname:'**'
        },
        {
            protocol: 'https',
            hostname: 'images.pexels.com',
            pathname:'**'
            }
            ]
    },
    env: {
        PLACES_API_KEY: process.env.PLACES_API_KEY,
        MONGODB_URI: process.env.MONGODB_URI
    }
}
export default nextConfig;
