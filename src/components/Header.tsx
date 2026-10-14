"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { servicesData } from '@/data/services';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
    };

    useEffect(() => {
        if (!mobileMenuOpen) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setMobileMenuOpen(false);
                setServicesDropdownOpen(false);
            }
        };
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMobileMenuOpen(false);
                setServicesDropdownOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('resize', handleResize);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('resize', handleResize);
        };
    }, [mobileMenuOpen]);

    return (
        <>
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <Link href="/" className="logo-container text-lg md:text-2xl" onClick={closeMenu}>
                    <img src="/LogoBussolaDoDigital.png" alt="Logo Bússola do Digital" className="logo-img h-8 md:h-10 w-auto" />
                    <span>Bússola <span className="text-highlight">do Digital</span></span>
                </Link>

                {/* Desktop Nav */}
                <nav className="nav hidden lg:block" aria-label="Navegação principal">
                    <ul className="nav-list flex gap-8 items-center h-full">
                        <li><Link href="/#inicio" className="nav-link">Início</Link></li>

                        {/* Services Dropdown */}
                        <li
                            className="relative h-full flex items-center group"
                            onMouseEnter={() => setServicesDropdownOpen(true)}
                            onMouseLeave={() => setServicesDropdownOpen(false)}
                        >
                            <Link href="/#servicos" className="nav-link flex items-center gap-1 group-hover:text-white">
                                Serviços <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`}></i>
                            </Link>

                            {/* Dropdown Menu */}
                            <div className={`
                                absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[600px]
                                transition-all duration-300 transform origin-top
                                ${servicesDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
                            `}>
                                <div className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl grid grid-cols-2 gap-4">
                                    {servicesData.map((service) => (
                                        <Link
                                            key={service.id}
                                            href={`/servicos/${service.slug}`}
                                            className="group/item flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors"
                                            onClick={() => setServicesDropdownOpen(false)}
                                        >
                                            <div className="mt-1 text-[var(--primary-accent)] group-hover/item:scale-110 transition-transform">
                                                <i className={`fa-solid ${service.icon} text-lg`}></i>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm text-white group-hover/item:text-[var(--primary-accent)] transition-colors">
                                                    {service.title}
                                                </h4>
                                                <p className="text-xs text-gray-400 line-clamp-2 mt-1">
                                                    {service.shortDescription}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </li>

                        <li><Link href="/#portfolio" className="nav-link">Portfólio</Link></li>
                        <li><Link href="/#sobre" className="nav-link">Sobre</Link></li>
                        <li><Link href="/#contato" className="nav-link btn-cta">Fale Conosco</Link></li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-2xl text-white mobile-menu-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={mobileMenuOpen}
                    aria-controls="mobile-navigation"
                >
                    <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                </button>

            </div>
        </header>

                {/* Mobile Menu Overlay */}
                {mobileMenuOpen && <nav id="mobile-navigation" aria-label="Navegação mobile" className="mobile-nav lg:hidden">
                    <ul className="flex flex-col items-center gap-6 text-xl w-full max-w-md px-6">
                        <li><Link href="/#inicio" className="nav-link" onClick={closeMenu}>Início</Link></li>

                        {/* Mobile Services Accordion */}
                        <li className="w-full text-center">
                            <button
                                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                                className="nav-link flex items-center justify-center gap-2 mx-auto"
                                aria-expanded={servicesDropdownOpen}
                                aria-controls="mobile-services"
                            >
                                Serviços <i className={`fa-solid fa-chevron-down text-sm transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`}></i>
                            </button>

                            <div id="mobile-services" className={`
                                overflow-hidden transition-all duration-300 ease-in-out
                                ${servicesDropdownOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}
                            `} inert={!servicesDropdownOpen}>
                                <ul className="flex flex-col gap-4 bg-white/5 rounded-xl p-4 text-base">
                                    {servicesData.map((service) => (
                                        <li key={service.id}>
                                            <Link
                                                href={`/servicos/${service.slug}`}
                                                className="text-gray-300 hover:text-[var(--primary-accent)] block py-1"
                                                onClick={closeMenu}
                                            >
                                                {service.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>

                        <li><Link href="/#portfolio" className="nav-link" onClick={closeMenu}>Portfólio</Link></li>
                        <li><Link href="/#sobre" className="nav-link" onClick={closeMenu}>Sobre</Link></li>
                        <li><Link href="/#contato" className="nav-link btn-cta" onClick={closeMenu}>Fale Conosco</Link></li>
                    </ul>
                </nav>}
        </>
    );
}
