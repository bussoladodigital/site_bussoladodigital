import TiltCard from './TiltCard';

export default function Services() {
    return (
        <section id="servicos" className="services section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Nossas Soluções</h2>
                    <p className="section-desc">Estratégias sob medida para cada etapa do seu crescimento.</p>
                </div>
                <div className="services-grid">
                    <TiltCard className="service-card">
                        <div className="service-icon"><i className="fa-solid fa-chart-line"></i></div>
                        <h3>Performance & Ads</h3>
                        <p>Gestão de tráfego focada em ROI. Google Ads, Meta Ads e LinkedIn Ads.</p>
                    </TiltCard>
                    <TiltCard className="service-card">
                        <div className="service-icon"><i className="fa-solid fa-layer-group"></i></div>
                        <h3>Branding & Design</h3>
                        <p>Criação de marcas memoráveis e identidades visuais que comunicam valor.</p>
                    </TiltCard>
                    <TiltCard className="service-card">
                        <div className="service-icon"><i className="fa-solid fa-share-nodes"></i></div>
                        <h3>Social Media</h3>
                        <p>Estratégia de conteúdo e gestão de comunidades para engajamento real.</p>
                    </TiltCard>
                    <TiltCard className="service-card">
                        <div className="service-icon"><i className="fa-solid fa-code"></i></div>
                        <h3>Web Development</h3>
                        <p>Sites institucionais e LPs de alta conversão, rápidos e otimizados.</p>
                    </TiltCard>
                </div>
            </div>
        </section>
    );
}
