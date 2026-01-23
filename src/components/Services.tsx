
import TiltCard from './TiltCard';
import { servicesData } from '@/data/services';
import Link from 'next/link';

export default function Services() {
    return (
        <section id="servicos" className="services section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Nossas Soluções</h2>
                    <p className="section-desc">Estratégias sob medida para cada etapa do seu crescimento.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {servicesData.map((service) => (
                        <Link key={service.id} href={`/servicos/${service.slug}`} className="contents">
                            <TiltCard className="service-card cursor-pointer group h-full">
                                <div className="service-icon transition-colors group-hover:text-white">
                                    <i className={`fa-solid ${service.icon}`}></i>
                                </div>
                                <h3 className="group-hover:text-[var(--primary-accent)] transition-colors">{service.title}</h3>
                                <p>{service.shortDescription}</p>
                                <span className="inline-block mt-4 text-sm font-bold text-[var(--primary-accent)] group-hover:translate-x-2 transition-transform">
                                    Saiba mais <i className="fa-solid fa-arrow-right ml-1"></i>
                                </span>
                            </TiltCard>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
