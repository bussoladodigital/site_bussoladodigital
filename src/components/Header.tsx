"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <Link href="/" className="logo-container">
                    <img src="/logo.jpg" alt="Logo Bússola do Digital" className="logo-img" />
                    <span>Bússola<span className="text-highlight">.Digital</span></span>
                </Link>
                <nav className="nav">
                    <ul className="nav-list hidden md:flex"> {/* Keep it simple for now, mobile menu logic requires more state */}
                        <li><Link href="#inicio" className="nav-link">Início</Link></li>
                        <li><Link href="#servicos" className="nav-link">Serviços</Link></li>
                        <li><Link href="#portfolio" className="nav-link">Portfólio</Link></li>
                        <li><Link href="#sobre" className="nav-link">Sobre</Link></li>
                        <li><Link href="#contato" className="nav-link btn-cta">Fale Conosco</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
