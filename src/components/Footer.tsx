"use client";

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer bg-black border-t border-white/10 pt-16 pb-8">
            <div className="container px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <img src="/LogoBussolaDoDigital.png" alt="Logo Bússola do Digital" className="h-10 w-auto" />
                            <span className="text-xl font-heading font-bold text-white">
                                Bússola <span className="text-[var(--primary-accent)]">do Digital</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Guiando sua marca para o futuro com estratégias baseadas em dados e criatividade de alto impacto.
                        </p>
                        {/* Social Media - Integrated here for mobile visibility too */}
                        <div className="flex gap-4 pt-2">
                            <a
                                href="https://instagram.com/bussola.dgt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[var(--primary-accent)] hover:scale-110 transition-all"
                            >
                                <i className="fa-brands fa-instagram text-lg"></i>
                            </a>
                            <a
                                href="https://wa.me/5511970718438"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[var(--primary-accent)] hover:scale-110 transition-all"
                            >
                                <i className="fa-brands fa-whatsapp text-lg"></i>
                            </a>
                        </div>
                    </div>

                    {/* Sitemap */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Mapa do Site</h4>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-gray-400 hover:text-[var(--primary-accent)] transition-colors">Início</Link></li>
                            <li><Link href="/#servicos" className="text-gray-400 hover:text-[var(--primary-accent)] transition-colors">Serviços</Link></li>
                            <li><Link href="/#portfolio" className="text-gray-400 hover:text-[var(--primary-accent)] transition-colors">Portfólio</Link></li>
                            <li><Link href="/#sobre" className="text-gray-400 hover:text-[var(--primary-accent)] transition-colors">Sobre Nós</Link></li>
                            <li><Link href="/#contato" className="text-gray-400 hover:text-[var(--primary-accent)] transition-colors">Fale Conosco</Link></li>
                        </ul>
                    </div>

                    {/* Services Sitemap */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Soluções</h4>
                        <ul className="space-y-3">
                            <li><Link href="/servicos/performance-ads" className="text-gray-400 hover:text-[var(--primary-accent)] transition-colors">Performance & Ads</Link></li>
                            <li><Link href="/servicos/branding-design" className="text-gray-400 hover:text-[var(--primary-accent)] transition-colors">Branding & Design</Link></li>
                            <li><Link href="/servicos/social-media" className="text-gray-400 hover:text-[var(--primary-accent)] transition-colors">Social Media</Link></li>
                            <li><Link href="/servicos/web-development" className="text-gray-400 hover:text-[var(--primary-accent)] transition-colors">Web Development</Link></li>
                            <li><Link href="/servicos/midia-impressa" className="text-gray-400 hover:text-[var(--primary-accent)] transition-colors">Mídia Impressa</Link></li>
                            <li><Link href="/servicos/business-analytics" className="text-gray-400 hover:text-[var(--primary-accent)] transition-colors">Business Analytics</Link></li>
                        </ul>
                    </div>

                    {/* Contacts */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Contato</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <i className="fa-regular fa-envelope text-[var(--primary-accent)] mt-1"></i>
                                <a href="mailto:bussoladodigital@gmail.com" className="text-gray-400 hover:text-white transition-colors break-all">
                                    bussoladodigital@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fa-brands fa-whatsapp text-[var(--primary-accent)] mt-1"></i>
                                <a href="https://wa.me/5511970718438" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    11 97071-8438
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fa-brands fa-instagram text-[var(--primary-accent)] mt-1"></i>
                                <a href="https://instagram.com/bussola.dgt" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    @bussola.dgt
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        &copy; 2026 Bússola do Digital. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacidade</a>
                        <a href="#" className="hover:text-white transition-colors">Termos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
