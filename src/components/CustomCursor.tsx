"use client";

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const cursorOutlineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            const posX = e.clientX;
            const posY = e.clientY;

            if (cursorDotRef.current && cursorOutlineRef.current) {
                cursorDotRef.current.style.left = `${posX}px`;
                cursorDotRef.current.style.top = `${posY}px`;

                cursorOutlineRef.current.animate({
                    left: `${posX}px`,
                    top: `${posY}px`
                }, { duration: 500, fill: "forwards" });
            }
        };

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <>
            <div className="cursor-dot" ref={cursorDotRef}></div>
            <div className="cursor-outline" ref={cursorOutlineRef}></div>
        </>
    );
}
