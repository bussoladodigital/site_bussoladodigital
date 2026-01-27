"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { servicesData } from '@/data/services';

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);
    const services = servicesData;
    const router = useRouter();

    // Drag state
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [prevTranslate, setPrevTranslate] = useState(0);
    const draggingRef = useRef(false);
    const startTimeRef = useRef(0);

    // Auto-advance
    useEffect(() => {
        if (isDragging) return;

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % services.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [services.length, isDragging]);

    const getCardStyle = (index: number) => {
        const total = services.length;
        let diff = (index - current + total) % total;
        if (diff > total / 2) diff -= total;

        // Config for smoother transitions
        // 0: Center
        // 1: Right (Next)
        // -1: Left (Prev)
        // Others: Hidden behind

        let zIndex = 0;
        let x = '0%';
        let scale = 0.8;
        let opacity = 0;
        let brightness = 0.4;

        if (diff === 0) {
            zIndex = 30;
            scale = 1;
            opacity = 1;
            x = '0%';
            brightness = 1;
        } else if (diff === 1) {
            zIndex = 20;
            scale = 0.8;
            opacity = 0.8;
            x = '50%'; // Peek right
            brightness = 0.6;
        } else if (diff === -1) {
            zIndex = 20;
            scale = 0.8;
            opacity = 0.8;
            x = '-50%'; // Peek left
            brightness = 0.6;
        } else {
            zIndex = 10;
            scale = 0.6;
            opacity = 0;
            x = diff > 0 ? '100%' : '-100%';
        }

        // Add subtle offset during drag for feedback (optional, but nice)
        // For simplicity in this 3D carousel, strict index switching is often better than pixel-perfect mapping
        // due to the complex transforms. We will stick to switching index on release.

        return {
            zIndex,
            transform: `translateX(${x}) scale(${scale})`,
            opacity,
            filter: `brightness(${brightness})`,
            transition: isDragging ? 'none' : 'all 1.0s cubic-bezier(0.4, 0.0, 0.2, 1)'
        };
    };

    // Drag Handlers
    const handleDragStart = (clientX: number) => {
        setIsDragging(true);
        setStartPos(clientX);
        draggingRef.current = false;
        startTimeRef.current = Date.now();
    };

    const handleDragMove = (clientX: number) => {
        if (!isDragging) return;
        const diff = clientX - startPos;
        // Mark as being dragged if moved more than 5px
        if (Math.abs(diff) > 5) {
            draggingRef.current = true;
        }
    };

    const handleDragEnd = (clientX: number) => {
        setIsDragging(false);
        const diff = clientX - startPos;
        const timeElapsed = Date.now() - startTimeRef.current;

        // Swipe threshold
        if (Math.abs(diff) > 50 || (Math.abs(diff) > 20 && timeElapsed < 300)) {
            if (diff > 0) {
                // Swiped Right -> Go to Prev
                setCurrent((prev) => (prev - 1 + services.length) % services.length);
            } else {
                // Swiped Left -> Go to Next
                setCurrent((prev) => (prev + 1) % services.length);
            }
        }
    };

    // Mouse Events
    const onMouseDown = (e: React.MouseEvent) => handleDragStart(e.clientX);
    const onMouseMove = (e: React.MouseEvent) => handleDragMove(e.clientX);
    const onMouseUp = (e: React.MouseEvent) => handleDragEnd(e.clientX);
    const onMouseLeave = () => {
        if (isDragging) setIsDragging(false);
    };

    // Touch Events
    const onTouchStart = (e: React.TouchEvent) => handleDragStart(e.touches[0].clientX);
    const onTouchMove = (e: React.TouchEvent) => handleDragMove(e.touches[0].clientX);
    const onTouchEnd = (e: React.TouchEvent) => handleDragEnd(e.changedTouches[0].clientX);

    const handleCardClick = (e: React.MouseEvent, slug: string) => {
        if (draggingRef.current) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        router.push(`/servicos/${slug}`);
    };

    return (
        <div
            className="relative w-full h-full flex justify-center items-center overflow-visible select-none"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {services.map((service, index) => {
                const style = getCardStyle(index);

                return (
                    <div
                        key={index}
                        onClick={(e) => handleCardClick(e, service.slug)}
                        className={`
                            absolute w-[240px] md:w-[320px] lg:w-[380px] h-[340px] md:h-[440px]
                            rounded-2xl overflow-hidden
                            flex flex-col justify-end
                            cursor-pointer group
                            -ml-[120px] -mt-[170px]
                            md:-ml-[160px] md:-mt-[220px]
                            lg:-ml-[190px]
                        `}
                        style={{
                            ...style,
                            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                            left: '50%',
                            top: '50%',
                        }}
                    >

                        <div className="absolute inset-0 z-0">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                                draggable={false}
                            />
                            {/* Strong gradient at bottom for text readability, fade to transparent top */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                        </div>

                        <div className="relative z-10 p-6 md:p-8 text-left pb-8 md:pb-12 w-full flex flex-col items-start">
                            <h3 className="text-xl md:text-2xl font-heading font-bold mb-3 icon-glow text-white tracking-wide">
                                {service.title}
                            </h3>
                            <p className="text-gray-200 text-sm md:text-base leading-relaxed line-clamp-3">
                                {service.shortDescription}
                            </p>
                            <span className="mt-4 text-xs uppercase tracking-widest text-[var(--primary-accent)] font-bold opacity-0 translate-y-4 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                                Ver Detalhes <i className="fa-solid fa-arrow-right ml-1"></i>
                            </span>
                        </div>
                    </div>
                );
            })}

            {/* Progress indicator - Interactive */}
            <div className="absolute -bottom-8 md:-bottom-12 z-50 flex gap-3">
                {services.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-2 rounded-full transition-all duration-300 shadow-sm cursor-pointer ${idx === current ? 'w-10 bg-primary shadow-[0_0_10px_rgba(0,82,255,0.5)]' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
