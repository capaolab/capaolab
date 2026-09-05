export const base = {
    title: "Capão Lab",
    subtitle: "Nossa natureza é tecnológica",
    email: 'contato@capaolab.com.br',
    phone: '75 98335 1650',
    address: 'Caeté-Açu, Palmeiras — Bahia',
}

export const page = {
    header: {
        navLinksContent: [
            {
                label: 'Projetos',
                link: '/#projetos'
            },
            {
                label: 'Frentes',
                link: '/#frentes'
            },
            {
                label: 'Quem Somos',
                link: '/#quem-somos'
            },
            {
                // TODO: swap for the real Substack publication URL once it's live.
                label: 'Blog',
                link: 'https://capaolab.substack.com',
                external: true
            },
            {
                label: 'Contato',
                link: '/#contato'
            }
        ]
    },
    stats: [
        { label: 'base', value: 'Caeté-Açu, Palmeiras — BA' },
        { label: 'natureza', value: 'Soft house · sob demanda' },
        { label: 'frentes ativas', value: '04' },
        { label: 'índice atualizado', value: process.env.NEXT_PUBLIC_DEPLOY_DATE ?? '04.09.2026' },
    ],
    footer: {
        siga:[
            { label: 'LinkedIn', href: '/#contato' },
            { label: 'YouTube', href: '/#contato' },
            { label: 'Instagram', href: '/#contato' },
        ],
        indice: [
            { label: 'Projetos', href: '/#projetos' },
            { label: 'Frentes', href: '/#frentes' },
            { label: 'Quem somos', href: '/#quem-somos' },
        ]
    }
}