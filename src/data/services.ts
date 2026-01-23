
export interface ServiceData {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon: string;
    image: string;
    features: string[];
    benefits: string[];
    process: { title: string; desc: string }[];
}

export const servicesData: ServiceData[] = [
    {
        id: 'performance-ads',
        slug: 'performance-ads',
        title: "Performance & Ads",
        shortDescription: "Domine o mercado com tráfego qualificado e ROI máximo.",
        fullDescription: "Não gastamos seu dinheiro, nós o multiplicamos. Nossa gestão de tráfego é baseada em ciência de dados, testes A/B contínuos e otimização obsessiva. Transformamos cliques em clientes e investimento em lucro líquido. Seja no Google, Meta, LinkedIn ou TikTok, sua marca aparecerá para a pessoa certa, no momento exato de compra.",
        icon: "fa-chart-line",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        features: [
            "Gestão de Google Ads (Search, Display, Shopping)",
            "Campanhas de Meta Ads (Facebook & Instagram)",
            "LinkedIn Ads para B2B",
            "Refinamento de Pixel e API de Conversão",
            "Relatórios de Performance em Tempo Real"
        ],
        benefits: [
            "Aumento imediato de leads qualificados",
            "Redução do Custo por Aquisição (CPA)",
            "Escalabilidade previsível de vendas",
            "Total transparência nos investimentos"
        ],
        process: [
            { title: "Diagnóstico", desc: "Analisamos suas campanhas atuais e o mercado." },
            { title: "Estratégia", desc: "Definimos canais, budget e segmentação." },
            { title: "Execução", desc: "Implementação de tracking e subida de campanhas." },
            { title: "Otimização", desc: "Ajustes diários para maximizar o ROI." }
        ]
    },
    {
        id: 'branding-design',
        slug: 'branding-design',
        title: "Branding & Design",
        shortDescription: "Dê vida à sua marca com uma identidade visual inesquecível.",
        fullDescription: "Sua marca é o ativo mais valioso da sua empresa. Mais do que um logotipo bonito, construímos ecossistemas visuais que comunicam autoridade, confiança e valor. Do conceito primal à aplicação final, garantimos que sua empresa seja percebida como líder de mercado antes mesmo do cliente ler uma palavra.",
        icon: "fa-layer-group",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
        features: [
            "Criação de Naming e Slogan",
            "Identidade Visual Completa (Logo, Cores, Tipografia)",
            "Brandbook e Guia de Estilo",
            "Design de Materiais Institucionais",
            "Rebranding Estratégico"
        ],
        benefits: [
            "Diferenciação clara da concorrência",
            "Percepção de alto valor agregado",
            "Consistência em todos os pontos de contato",
            "Facilidade de expansão da marca"
        ],
        process: [
            { title: "Imersão", desc: "Entendemos a essência e os valores da empresa." },
            { title: "Conceito", desc: "Exploração criativa e definição visual." },
            { title: "Design", desc: "Desenvolvimento dos ativos da marca." },
            { title: "Entrega", desc: "Brandbook completo e arquivos finais." }
        ]
    },
    {
        id: 'social-media',
        slug: 'social-media',
        title: "Social Media",
        shortDescription: "Conexões reais que transformam seguidores em fãs leais.",
        fullDescription: "As redes sociais são o SAC, a vitrine e a sala de estar da sua empresa. Não fazemos apenas 'posts', criamos narrativas que engajam e vendem. Nossa estratégia une conteúdo relevante, estética impecável e copy persuasiva para transformar seguidores passivos em defensores ativos da sua marca.",
        icon: "fa-share-nodes",
        image: "/social-media-3d.png",
        features: [
            "Planejamento Estratégico de Conteúdo",
            "Criação de Reels, Stories e Carrosséis",
            "Gestão de Comunidade e SAC 2.0",
            "Direção de Arte para Redes Sociais",
            "Análise de Métricas e Engajamento"
        ],
        benefits: [
            "Autoridade digital consolidada",
            "Aumento do engajamento orgânico",
            "Humanização da marca",
            "Canal direto de vendas e relacionamento"
        ],
        process: [
            { title: "Persona", desc: "Mapeamento do público e tom de voz." },
            { title: "Editorial", desc: "Definição das linhas de conteúdo." },
            { title: "Produção", desc: "Design e copywriting dos posts." },
            { title: "Análise", desc: "Relatórios mensais de crescimento." }
        ]
    },
    {
        id: 'web-development',
        slug: 'web-development',
        title: "Web Development",
        shortDescription: "Experiências digitais rápidas e intuitivas que vendem por você.",
        fullDescription: "Seu site é seu vendedor 24h. Se ele é lento, feio ou confuso, você está perdendo dinheiro. Desenvolvemos sites de alta performance, Landing Pages focadas em conversão e sistemas web robustos. Utilizamos as tecnologias mais modernas (Next.js, React) para garantir velocidade instantânea e SEO técnico impecável.",
        icon: "fa-code",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
        features: [
            "Sites Institucionais Responsivos",
            "Landing Pages de Alta Conversão",
            "E-commerces Personalizados",
            "Otimização de SEO Técnico",
            "Integração com CRMs e APIs"
        ],
        benefits: [
            "Velocidade de carregamento superior",
            "Melhor posicionamento no Google",
            "Experiência do usuário (UX) fluida",
            "Segurança e estabilidade total"
        ],
        process: [
            { title: "Wireframe", desc: "Estrutura e fluxo de navegação." },
            { title: "UI Design", desc: "Layout visual fiel à marca." },
            { title: "Code", desc: "Desenvolvimento front-end e back-end." },
            { title: "Launch", desc: "Testes, otimização e publicação." }
        ]
    },
    {
        id: 'midia-impressa',
        slug: 'midia-impressa',
        title: "Mídia Impressa",
        shortDescription: "O toque físico da sua marca em materiais de alto impacto.",
        fullDescription: "No mundo digital, o tangível se torna premium. A experiência tátil de um cartão de visita com verniz localizado, uma embalagem bem construída ou um catálogo de luxo cria uma memória sensorial duradoura. Cuidamos de tudo: do design criativo à finalização do arquivo para impressão perfeita.",
        icon: "fa-print",
        image: "/print-service.png",
        features: [
            "Cartões de Visita Premium",
            "Folders, Catálogos e Brochuras",
            "Design de Embalagens",
            "Papelaria Corporativa Completa",
            "Materiais para Ponto de Venda (PDV)"
        ],
        benefits: [
            "Credibilidade imediata em reuniões",
            "Experiência de marca memorável",
            "Destaque físico frente à concorrência",
            "Luxo e sofisticação tangíveis"
        ],
        process: [
            { title: "Briefing", desc: "Definição dos materiais e acabamentos." },
            { title: "Criação", desc: "Design focado na experiência tátil." },
            { title: "Prototipagem", desc: "Mockups digitais para aprovação." },
            { title: "Finalização", desc: "Fechamento técnico para gráfica." }
        ]
    },
    {
        id: 'business-analytics',
        slug: 'business-analytics',
        title: "Business Analytics",
        shortDescription: "Foco no Resultado: Decisões baseadas em fatos, não em palpites.",
        fullDescription: "Dados sem análise são apenas números. Transformamos terabytes de informações em insights acionáveis para o seu negócio. Implementamos dashboards de Business Intelligence, configuramos rastreamento avançado e ajudamos você a entender exatamente onde está cada centavo do seu investimento e para onde sua empresa deve ir.",
        icon: "fa-magnifying-glass-chart",
        image: "/business-analytics.png",
        features: [
            "Dashboards de B.I. (Power BI / Looker)",
            "Auditoria de Dados e Rastreamento",
            "Análise de Coortes e LTV",
            "Modelagem de Atribuição",
            "Consultoria de Crescimento Baseada em Dados"
        ],
        benefits: [
            "Visão 360º da saúde do negócio",
            "Fim do achismo nas tomadas de decisão",
            "Identificação de gargalos de receita",
            "Previsibilidade de crescimento"
        ],
        process: [
            { title: "Coleta", desc: "Integração de fontes de dados." },
            { title: "Tratamento", desc: "Limpeza e organização da base." },
            { title: "Visualização", desc: "Criação de dashboards intuitivos." },
            { title: "Insights", desc: "Análise periódica e planos de ação." }
        ]
    }
];
