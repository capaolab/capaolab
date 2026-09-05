export interface SearchSource {
    kind: string;
    label: string;
    meta: string;
    href: string;
}

export interface SearchEntry {
    keywords: string[];
    paragraphs: string[];
    sources: SearchSource[];
    followups: string[];
}

// Tiny keyword-matched knowledge base powering the "ask in natural language"
// search on the homepage. It is a UX device, not a real assistant: it scores
// entries by keyword overlap and falls back to SEARCH_FALLBACK.
export const SEARCH_KB: SearchEntry[] = [
    {
        keywords: ['projeto', 'projetos', 'ativo', 'ativos', 'andamento', 'curso', 'portfolio', 'portfólio'],
        paragraphs: [
            'Cinco registros constam no índice. Em curso: a busca em linguagem natural, aberta desde 2026. Aberto para novas empresas: o Diagnóstico Digital. Em operação continuada: Automatização Inteligente, ChatBot para Atendimento e Soluções Integradas.',
            'A lista cronológica completa, com situação de cada frente, está na seção Projetos associados.',
        ],
        sources: [
            { kind: 'projeto · em curso', label: 'Busca em linguagem natural', meta: '2026 · índice conversacional do lab', href: '#projetos' },
            { kind: 'projeto · aberto', label: 'Diagnóstico Digital', meta: '2025 · avaliação gratuita do nível digital', href: '#projetos' },
            { kind: 'índice', label: 'Projetos associados', meta: '05 registros em ordem cronológica', href: '#projetos' },
        ],
        followups: ['Como funciona o diagnóstico digital?', 'Como proponho um projeto em parceria?', 'O que já está em operação?'],
    },
    {
        keywords: ['diagnóstico', 'diagnostico', 'nível digital', 'nivel digital', 'gratuito', 'avaliação', 'avaliacao'],
        paragraphs: [
            'O Diagnóstico Digital é uma avaliação gratuita do nível digital de uma empresa. Ao final, o lab entrega um plano de prioridades: o que resolver primeiro, o que pode esperar e o que não precisa de software.',
            'A frente está aberta desde 2025 e o pedido é feito pelo contato direto do lab.',
        ],
        sources: [
            { kind: 'projeto · aberto', label: 'Diagnóstico Digital', meta: '2025 · plano de prioridades ao final', href: '#projetos' },
            { kind: 'contato', label: 'accounts@capaolab.com.br', meta: 'canal de entrada para diagnóstico', href: '#contato' },
        ],
        followups: ['Quais projetos estão ativos agora?', 'Quanto custa um software sob demanda?', 'Onde o lab fica?'],
    },
    {
        keywords: ['chatbot', 'bot', 'atendimento', 'whatsapp', 'instagram'],
        paragraphs: [
            'O ChatBot para Atendimento opera em WhatsApp, Instagram e site, 24 horas. Responde o básico e transfere para atendimento humano quando a pergunta sai do escopo configurado.',
            'Está em operação desde 2024 e integra a frente de atendimento automatizado.',
        ],
        sources: [
            { kind: 'projeto · em operação', label: 'ChatBot para Atendimento', meta: '2024 · WhatsApp, Instagram e site', href: '#projetos' },
            { kind: 'frente 03', label: 'Atendimento automatizado', meta: 'canais próprios do cliente', href: '#frentes' },
        ],
        followups: ['O que já está em operação?', 'Como funciona a automação de processos?', 'Como proponho um projeto em parceria?'],
    },
    {
        keywords: ['automação', 'automacao', 'processo', 'processos', 'integração', 'integracao', 'integradas'],
        paragraphs: [
            'A Automatização Inteligente mapeia tarefas repetitivas, automatiza e monitora o resultado, integrando-se aos sistemas já em uso. O ganho é medido em horas de operação liberadas.',
            'Soluções Integradas cobre o escopo completo, da concepção à implementação, em um único contrato.',
        ],
        sources: [
            { kind: 'projeto · em operação', label: 'Automatização Inteligente', meta: '2024 · integração com sistemas em uso', href: '#projetos' },
            { kind: 'projeto · contínuo', label: 'Soluções Integradas', meta: '2023 · concepção à implementação', href: '#projetos' },
            { kind: 'frente 02', label: 'Automação de processos', meta: 'mapear, automatizar, integrar', href: '#frentes' },
        ],
        followups: ['Quais projetos estão ativos agora?', 'Quem somos?', 'Como proponho um projeto em parceria?'],
    },
    {
        keywords: ['parceria', 'parceiro', 'parceiros', 'propor', 'proposta', 'associar', 'edital', 'investidor'],
        paragraphs: [
            'O lab associa-se a projetos de terceiros e mantém este site como índice público do que está em curso. Cada projeto em parceria entra no índice com escopo, situação e ponto de contato declarados.',
            'Propostas de parceria e chamadas de edital vão para contato@capaolab.com.br. A resposta inclui a leitura técnica do escopo.',
        ],
        sources: [
            { kind: 'quem somos', label: 'Como o lab se associa', meta: 'escopo, situação e contato declarados', href: '#quem-somos' },
            { kind: 'contato', label: 'contato@capaolab.com.br', meta: 'propostas e editais', href: '#contato' },
        ],
        followups: ['Quais projetos estão ativos agora?', 'Onde o lab fica?', 'Quem somos?'],
    },
    {
        keywords: ['onde', 'local', 'endereço', 'endereco', 'fica', 'cidade', 'bahia', 'chapada', 'caeté', 'caete'],
        paragraphs: [
            'O lab fica em Caeté-Açu, Palmeiras, Bahia — Chapada Diamantina. O trabalho é remoto para clientes de qualquer região.',
            'Contato: (71) 9 9999-9999 e contato@capaolab.com.br.',
        ],
        sources: [
            { kind: 'contato', label: 'Caeté-Açu, Palmeiras — Bahia', meta: 'base do lab, Chapada Diamantina', href: '#contato' },
            { kind: 'quem somos', label: 'Uma soft house na Chapada', meta: 'abordagem integrada, sob demanda', href: '#quem-somos' },
        ],
        followups: ['Quem somos?', 'Como proponho um projeto em parceria?', 'Quais projetos estão ativos agora?'],
    },
    {
        keywords: ['quem', 'equipe', 'time', 'história', 'historia', 'sobre', 'empresa', 'lab'],
        paragraphs: [
            'O Capão Lab é uma soft house que desenvolve soluções sob demanda, específicas para cada negócio. A abordagem é integrada: comunicação, colaboração e criação no mesmo processo.',
            'Quatro frentes sustentam o trabalho: software sob demanda, automação de processos, atendimento automatizado e suporte continuado.',
        ],
        sources: [
            { kind: 'quem somos', label: 'Natureza do lab', meta: 'soft house, sob demanda, Chapada Diamantina', href: '#quem-somos' },
            { kind: 'índice', label: 'Frentes', meta: '04 frentes de trabalho', href: '#frentes' },
        ],
        followups: ['Quais projetos estão ativos agora?', 'Como proponho um projeto em parceria?', 'Onde o lab fica?'],
    },
    {
        keywords: ['software', 'sob demanda', 'sistema', 'desenvolvimento', 'custo', 'preço', 'preco', 'prazo', 'suporte'],
        paragraphs: [
            'Software sob demanda é a primeira frente: sistemas escritos do zero quando a solução pronta não atende à operação. Escopo, prazo e custo são definidos após leitura do processo do cliente.',
            'O suporte continuado mantém e evolui o que foi entregue, com canal direto de quem escreveu o código.',
        ],
        sources: [
            { kind: 'frente 01', label: 'Software sob demanda', meta: 'sistemas específicos por operação', href: '#frentes' },
            { kind: 'frente 04', label: 'Suporte continuado', meta: 'manutenção e evolução', href: '#frentes' },
            { kind: 'contato', label: 'contato@capaolab.com.br', meta: 'orçamento e prazo', href: '#contato' },
        ],
        followups: ['Como funciona o diagnóstico digital?', 'O que já está em operação?', 'Quem somos?'],
    },
];

export const SEARCH_FALLBACK: SearchEntry = {
    keywords: [],
    paragraphs: [
        'O índice não tem registro correspondente a essa pergunta. Ele cobre, por enquanto, os projetos associados, as quatro frentes de trabalho, a natureza do lab e os canais de contato.',
        'Reformule em outros termos ou use uma das entradas abaixo.',
    ],
    sources: [
        { kind: 'índice', label: 'Projetos associados', meta: '05 registros em ordem cronológica', href: '#projetos' },
        { kind: 'índice', label: 'Frentes', meta: '04 frentes de trabalho', href: '#frentes' },
        { kind: 'contato', label: 'contato@capaolab.com.br', meta: 'pergunta direta ao lab', href: '#contato' },
    ],
    followups: ['Quais projetos estão ativos agora?', 'Quem somos?', 'Onde o lab fica?'],
};

export const SEARCH_SUGGESTIONS = [
    'Quais projetos estão ativos agora?',
    'Como funciona o diagnóstico digital?',
    'Como proponho um projeto em parceria?',
    'Onde o lab fica?',
];

function normalize(value: string): string {
    return value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

export function answerQuery(query: string): SearchEntry {
    const normalizedQuery = normalize(query);
    let best: SearchEntry | null = null;
    let bestScore = 0;

    for (const entry of SEARCH_KB) {
        let score = 0;
        for (const keyword of entry.keywords) {
            const normalizedKeyword = normalize(keyword);
            if (normalizedQuery.includes(normalizedKeyword)) {
                score += normalizedKeyword.length;
            }
        }
        if (score > bestScore) {
            bestScore = score;
            best = entry;
        }
    }

    return bestScore > 0 && best ? best : SEARCH_FALLBACK;
}
