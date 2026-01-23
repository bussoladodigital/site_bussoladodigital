export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <p className="logo-footer" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700 }}>
                        Bússola.Digital
                    </p>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Guiando seu sucesso digital.</p>
                </div>
                <div className="footer-links" style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
                    <a href="#" style={{ color: 'var(--text-secondary)' }}>Privacidade</a>
                    <a href="#" style={{ color: 'var(--text-secondary)' }}>Termos</a>
                </div>
                <div className="copyright" style={{ width: '100%', textAlign: 'center', marginTop: '3rem', color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
                    &copy; 2024 Bússola do Digital. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}
