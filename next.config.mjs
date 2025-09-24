/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
    },
    output: "export",
    basePath: isProd ? "/opsta" : "",
};

export default nextConfig;
