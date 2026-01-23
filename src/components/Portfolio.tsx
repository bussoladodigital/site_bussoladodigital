export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Cases Recentes</h2>
                </div>
                <div className="portfolio-grid">
                    <article className="project-card">
                        <div className="project-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')" }}></div>
                        <div className="project-overlay">
                            <h3>Nexus Tech</h3>
                            <p>Branding & UI Design</p>
                        </div>
                    </article>
                    <article className="project-card">
                        <div className="project-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')" }}></div>
                        <div className="project-overlay">
                            <h3>Alpha Capital</h3>
                            <p>Gestão de Tráfego</p>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    );
}
