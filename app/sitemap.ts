// app/sitemap.ts
import { MetadataRoute } from 'next';

const BASE_URL = 'https://corporatekaryalay.com';

const serviceSlugs = [
  'gst-registration',
  'itr-filing',
  'company-incorporation',
  'statutory-audit',
  'roc-compliance',
  'legal-documentation',
  'gst-return-filing',
  'trademark-registration',
  'legal-consultation',
  'tds-return-filing',
  'msme-registration',
  'annual-compliance',
  'ngo-darpan-registration',
  'import-export-code',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${BASE_URL}/service/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}