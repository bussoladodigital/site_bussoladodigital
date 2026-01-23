export default function Contact() {
    return (
        <section id="contato" className="contact section-padding">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h2 className="section-title" style={{ marginBottom: '1rem' }}>Vamos Conversar</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Preencha o formulário para agendarmos uma reunião estratégica.</p>

                        <div className="info-item" style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                            <i className="fa-solid fa-envelope" style={{ color: 'var(--primary-accent)' }}></i>
                            <span>hello@bussoladodigital.com</span>
                        </div>
                        <div className="info-item" style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                            <i className="fa-brands fa-instagram" style={{ color: 'var(--primary-accent)' }}></i>
                            <a href="https://instagram.com/bussola.dgt" target="_blank" rel="noopener noreferrer">@bussola.dgt</a>
                        </div>
                    </div>
                    <form className="contact-form">
                        <div className="form-group" style={{ marginBottom: '1rem' }}>
                            <input type="text" placeholder="Seu Nome" />
                        </div>
                        <div className="form-group" style={{ marginBottom: '1rem' }}>
                            <input type="email" placeholder="Seu E-mail" />
                        </div>
                        <div className="form-group" style={{ marginBottom: '1rem' }}>
                            <textarea rows={4} placeholder="Como podemos ajudar?"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Enviar Mensagem</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
