import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    i18n: {
        locales: ['en-US', 'fa-IR'],
        defaultLocale: 'en-US'
    },
    images: {
        domains: ['localhost'],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    env: {
        APP_TITLE: process.env.NEXT_PUBLIC_APP_TITLE,
        APP_DESCRIPTION: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
        API_URL: process.env.NEXT_PUBLIC_APP_URL,
        API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
    pageExtensions: ['tsx', 'js'],
    webpack: (config) => {
        config.resolve.alias.canvas = false;

        return config;
    }
};

export default nextConfig;