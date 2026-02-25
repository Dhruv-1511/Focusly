import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://focusly.app';
  
  const routes = [
    '',
    '/dashboard',
    '/problems',
    '/planner',
    '/focus',
    '/tools',
    '/community',
    '/mental-health',
    '/rewards',
    '/settings',
    '/login',
    '/register',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly' as any,
    priority: route === '' ? 1 : 0.8,
  }));
}
