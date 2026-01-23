"use client";

import { useEffect, useRef, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    delay?: number; // 1 = 0.2s, 2 = 0.4s
    className?: string;
}

export default function RevealOnScroll({ children, delay = 0, className = '' }: Props) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const delayClass = delay === 1 ? 'delay-1' : delay === 2 ? 'delay-2' : '';

    return (
        <div ref={ref} className={`reveal-text ${delayClass} ${className}`}>
            {children}
        </div>
    );
}
