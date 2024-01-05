/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        domains: ['1h3.googleusercontent.com'],
    },
    wepack(config) {
        config.experiments = {
            ...config.experiments,
            toplevelAwait:true,
        }
        return config
    }
}

module.exports = nextConfig
