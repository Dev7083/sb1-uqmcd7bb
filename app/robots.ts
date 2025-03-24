import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: 'Bingbot',
        allow: ['/', '/api/*'],
        crawlDelay: 1,
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      }
    ],
    sitemap: 'https://collegehike.com/sitemap.xml', // Update to match your actual domain
  }
}