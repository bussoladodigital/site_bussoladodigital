import { MetadataRoute } from 'next';
import { servicesData } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://bussoladodigital.vercel.app';

    // Static pages
    const routes = [
        '',
        '#servicos',
        '#portfolio',
        '#sobre',
        '#contato',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 1,
    }));

    // Dynamic service pages
    const serviceRoutes = servicesData.map((service) => ({
        url: `${baseUrl}/servicos/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [...routes, ...serviceRoutes];
}
