// @ts-check
import withPlaiceholder from '@plaiceholder/next'

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure pageExtensions to include md and mdx
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	reactStrictMode: true,
	experimental: {
		optimizeCss: true
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com'
			}
		]
	}
}

export default withPlaiceholder(nextConfig)
