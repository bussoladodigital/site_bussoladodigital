import RevealOnScroll from './RevealOnScroll';

export default function Hero() {
    return (
        <section id="inicio" className="hero">
            <div className="hero-bg"></div>
            <div className="container hero-content">
                <RevealOnScroll>
                    <h1 className="hero-title">
                        Norteando sua marca para o <span className="text-highlight">Futuro</span>
                    </h1>
                </RevealOnScroll>

                <RevealOnScroll delay={1}>
                    <p className="hero-subtitle">
                        Marketing estratégico que une dados, criatividade e tecnologia.
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
            <div className="scroll-down">
                <span className="scroll-text">Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
}
