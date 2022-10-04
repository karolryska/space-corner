/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles')],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
    reactStrictMode: true,
    swcMinify: true,
    env: {
        API_URL: process.env.API_URL,
    },
    images: {
        domains: ['images.ctfassets.net'],
    },
};

module.exports = nextConfig;
