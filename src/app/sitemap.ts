import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://teodev.cl',
      lastModified: new Date().toISOString(),
      priority: 1.0,
      changeFrequency: 'daily',
    },
    /* {
      url: 'https://teodev.cl/proyectos',
      lastModified: new Date().toISOString(),
      priority: 0.8,
      changeFrequency: 'weekly',
    }, */
  ];
}
