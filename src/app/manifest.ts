import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'EzStocks',
		short_name: 'EzStocks',
		description: 'A web application designed to simplify inventory management for businesses of all sizes.',
		start_url: '/',
		display: 'standalone',
		background_color: '#F4F4F4',
		theme_color: '#3B82F6',
		icons: [
			{
				src: "/images/icon-192.png",
				sizes: "192x192",
				type: "image/png"
			},
			{
				src: "/images/icon-512.png",
				sizes: "512x512",
				type: "image/png"
			},
			{
				src: "/images/apple-icon.png",
				sizes: "180x180",
				type: "image/png"
			}
		],
	}
}
