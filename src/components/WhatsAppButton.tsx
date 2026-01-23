"use client";

import { useEffect, useState } from 'react';

export default function WhatsAppButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <a
            href="https://wa.me/5511970718438"
            target="_blank"
            rel="noopener noreferrer"
            className={`
                fixed bottom-6 right-6 z-[9999]
                w-14 h-14 md:w-16 md:h-16
                bg-[#25D366] text-white
                rounded-full shadow-[0_4px_12px_rgba(37,211,102,0.5)]
                flex items-center justify-center
                transition-all duration-500 ease-in-out
                hover:scale-110 hover:-translate-y-2
                ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
            `}
            aria-label="Fale conosco no WhatsApp"
        >
            <i className="fa-brands fa-whatsapp text-3xl md:text-4xl"></i>
            {/* Ping animation ring */}
            <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping"></span>
        </a>
    );
}
