/** @type {import('next').NextConfig} */
const nextConfig = {
	distDir: "build",
	env: {
		SERVER_HOSTNAME: process.env.NEXT_PUBLIC_SERVER_HOSTNAME,
		MAPBOX_ACCESS_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
		STRIPE_KEY: process.env.NEXT_PUBLIC_STRIPE_KEY
	},
	images: {
		domains: ["axrdwmkjjfqxhpmhabxn.supabase.co", "images.unsplash.com"]
	},
	i18n: {
		// These are the locales you want to support
		locales: ['en', 'fr'],
		// This is the default locale you want to be used when visiting a non-locale prefixed path
		defaultLocale: 'en',
	},
}

export default nextConfig;
