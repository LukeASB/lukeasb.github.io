/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    reactStrictMode: false,
    swcMinify: true,
    output: 'export',
    distDir: 'docs',
};

export default nextConfig;
