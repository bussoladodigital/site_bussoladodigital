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
        } catch (error) {
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
                            <span>bussoladodigital@gmail.com</span>
                        </div>
                        <div className="info-item" style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                            <i className="fa-brands fa-instagram" style={{ color: 'var(--primary-accent)' }}></i>
                            <a href="https://instagram.com/bussola.dgt" target="_blank" rel="noopener noreferrer">@bussola.dgt</a>
                        </div>
                        <div className="info-item" style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                            <i className="fa-brands fa-whatsapp" style={{ color: 'var(--primary-accent)' }}></i>
                            <a href="https://wa.me/5511970718438" target="_blank" rel="noopener noreferrer">(11) 97071-8438</a>
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group" style={{ marginBottom: '1rem' }}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Seu Nome *"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group" style={{ marginBottom: '1rem' }}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Seu E-mail *"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ marginBottom: '1rem' }}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="whatsapp"
                                    placeholder="WhatsApp (com DDD)"
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Nome da Empresa"
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group" style={{ marginBottom: '1rem' }}>
                            <textarea
                                name="message"
                                rows={4}
                                placeholder="Como podemos ajudar? *"
                                required
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
                            <p className="text-green-500 mt-4 text-center">Mensagem enviada com sucesso!</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-500 mt-4 text-center">Erro ao enviar. Tente novamente.</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
