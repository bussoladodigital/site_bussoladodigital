"use client";

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        company: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', whatsapp: '', company: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <section id="contato" className="contact section-padding">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h2 className="section-title" style={{ marginBottom: '1rem' }}>Vamos Conversar</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Preencha o formulário para agendarmos uma reunião estratégica.</p>

                        <div className="info-item" style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                            <i className="fa-solid fa-envelope" style={{ color: 'var(--primary-accent)' }}></i>
                            <a href="mailto:bussoladodigital@gmail.com">bussoladodigital@gmail.com</a>
                        </div>
                        <div className="info-item" style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                            <i className="fa-brands fa-instagram" style={{ color: 'var(--primary-accent)' }}></i>
                            <a href="https://instagram.com/bussola.dgt" target="_blank" rel="noopener noreferrer">@bussola.dgt</a>
                        </div>
                        <div className="info-item" style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                            <i className="fa-brands fa-whatsapp" style={{ color: 'var(--primary-accent)' }}></i>
                            <a href="https://wa.me/5511925895956" target="_blank" rel="noopener noreferrer">(11) 92589-5956</a>
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group" style={{ marginBottom: '1rem' }}>
                            <label htmlFor="contact-name">Seu nome *</label>
                            <input
                                id="contact-name"
                                type="text"
                                name="name"
                                autoComplete="name"
                                maxLength={120}
                                placeholder="Seu Nome *"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group" style={{ marginBottom: '1rem' }}>
                            <label htmlFor="contact-email">Seu e-mail *</label>
                            <input
                                id="contact-email"
                                type="email"
                                name="email"
                                autoComplete="email"
                                maxLength={254}
                                placeholder="Seu E-mail *"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4" style={{ marginBottom: '1rem' }}>
                            <div className="form-group">
                                <label htmlFor="contact-whatsapp">WhatsApp (com DDD)</label>
                                <input
                                    id="contact-whatsapp"
                                    type="tel"
                                    name="whatsapp"
                                    autoComplete="tel"
                                    maxLength={40}
                                    placeholder="WhatsApp (com DDD)"
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact-company">Nome da empresa</label>
                                <input
                                    id="contact-company"
                                    type="text"
                                    name="company"
                                    autoComplete="organization"
                                    maxLength={120}
                                    placeholder="Nome da Empresa"
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group" style={{ marginBottom: '1rem' }}>
                            <label htmlFor="contact-message">Como podemos ajudar? *</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                rows={4}
                                placeholder="Como podemos ajudar? *"
                                required
                                maxLength={5000}
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{ width: '100%' }}
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
                        </button>

                        {status === 'success' && (
                            <p role="status" className="text-green-500 mt-4 text-center">Mensagem enviada com sucesso!</p>
                        )}
                        {status === 'error' && (
                            <p role="alert" className="text-red-500 mt-4 text-center">Erro ao enviar. Tente novamente.</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
