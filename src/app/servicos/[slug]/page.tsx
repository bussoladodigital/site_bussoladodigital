
import { servicesData } from '@/data/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Generate static params for all services (SSG)
export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#020202] text-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/50 to-transparent"></div>
                </div>

                <div className="container relative z-10 text-center px-4">
                    <div className="inline-block p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 animate-fade-in-up">
                        <i className={`fa-solid ${service.icon} text-3xl text-[var(--primary-accent)]`}></i>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 animate-fade-in-up delay-100">
                        {service.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
                        {service.shortDescription}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-10">
                <div className="container px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Left Column: Description & Benefits */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-heading font-bold mb-6 text-[var(--primary-accent)]">
                                    Sobre o Serviço
                                </h2>
                                <p className="text-lg text-gray-300 leading-relaxed text-justify">
                                    {service.fullDescription}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-6">Por que escolher esta solução?</h3>
                                <ul className="space-y-4">
                                    {service.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start gap-4">
                                            <i className="fa-solid fa-check-circle text-[var(--primary-accent)] mt-1"></i>
                                            <span className="text-gray-300">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Column: Features & Process */}
                        <div className="space-y-12">
                            <div className="bg-[var(--surface-color)] p-8 rounded-2xl border border-white/5">
                                <h3 className="text-2xl font-bold mb-6">O que está incluso</h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {service.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                            <div className="w-2 h-2 rounded-full bg-[var(--primary-accent)]"></div>
                                            <span className="text-gray-200">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-6">Nosso Processo</h3>
                                <div className="space-y-6">
                                    {service.process.map((step, index) => (
                                        <div key={index} className="relative pl-8 border-l-2 border-[var(--primary-accent)]/30 last:border-0 pb-1">
                                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--primary-accent)]"></div>
                                            <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                                            <p className="text-gray-400 text-sm">{step.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-b from-[#020202] to-[var(--primary-accent)]/10">
                <div className="container text-center px-4">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
                        Pronto para transformar seus resultados?
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Agende uma consultoria gratuita e descubra como nossa solução de {service.title} pode alavancar seu negócio.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/#contato" className="px-8 py-4 bg-[var(--primary-accent)] hover:bg-[var(--primary-accent-hover)] text-white font-bold rounded-lg text-lg transition-all shadow-[0_0_20px_rgba(0,82,255,0.3)] hover:shadow-[0_0_30px_rgba(0,82,255,0.5)]">
                            Falar com Especialista
                        </Link>
                        <Link href="/" className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-bold rounded-lg text-lg transition-all">
                            Voltar para Início
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
