import RevealOnScroll from './RevealOnScroll';
import HeroCarousel from './HeroCarousel';

export default function Hero() {
    return (
        <section id="inicio" className="hero">
            <div className="hero-bg"></div>
            <div className="container hero-content grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-0">
                {/* Left Side: 50% */}
                <div className="hero-text-content w-full min-w-0 pr-0 lg:pr-8 z-20">
                    <RevealOnScroll>
                        <h1 className="hero-title">
                            Guiando sua marca para o <span className="text-highlight">Futuro</span>
                        </h1>
                    </RevealOnScroll>

                    <RevealOnScroll delay={1}>
                        <p className="hero-subtitle">
                            Marketing estratégico, sites, aplicativos e sistemas sob medida para impulsionar seu negócio.
                        </p>
                    </RevealOnScroll>

                    <RevealOnScroll delay={2}>
                        <div className="hero-actions">
                            <a href="#contato" className="btn btn-primary">
                                Iniciar Projeto <i className="fa-solid fa-arrow-right ml-2"></i>
                            </a>
                            <a href="#portfolio" className="btn btn-outline">Nossos Cases</a>
                        </div>
                    </RevealOnScroll>
                </div>

                {/* Right Side: 50% */}
                <div className="hero-carousel w-full flex justify-center items-center relative z-10 mt-8 lg:mt-0 pl-0 lg:pl-8 h-[400px] md:h-[500px]">
                    <RevealOnScroll delay={3} className="w-full h-full flex items-center justify-center">
                        <HeroCarousel />
                    </RevealOnScroll>
                </div>
            </div>
            <div className="scroll-down">
                <span className="scroll-text">Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
}
