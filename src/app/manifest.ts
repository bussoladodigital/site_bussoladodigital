import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Bússola do Digital',
        short_name: 'Bússola',
        description: 'Agência de marketing focada em direcionar seu negócio para o sucesso digital.',
        start_url: '/',
        display: 'standalone',
        background_color: '#020202',
        theme_color: '#0052FF',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/icon-192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon-512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    };
}
