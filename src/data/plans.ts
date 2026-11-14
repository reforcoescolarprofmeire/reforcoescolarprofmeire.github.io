/**
 * PLANOS
 * Preencha `price` (ex.: 'a partir de R$ 000/mês') e `frequency` (ex.: '2 encontros por semana')
 * somente com valores confirmados pela professora. Campos vazios mostram "Consulte valores" e
 * "Frequência a combinar". `featured: true` destaca o plano (use featuredLabel honesto).
 */
export type Plan = {
  id: string;
  name: string;
  forWho: string;
  frequency: string;
  price: string;
  features: string[];
  featured?: boolean;
};

export const plansSection = {
  eyebrow: 'Planos',
  title: 'Escolha o acompanhamento ideal para o seu filho ou filha',
  intro: 'Todo acompanhamento começa pela avaliação inicial. Depois dela, a professora indica o plano mais adequado. Você não precisa decidir sozinho.',
  featuredLabel: 'Recomendado',
  emptyPrice: 'Consulte valores',
  emptyFrequency: 'Frequência a combinar',
  ctaLabel: 'Quero este plano',
  footnote: 'Todos os planos podem ser em casa (Salvador) ou online. Valores, horários e reposição de faltas são combinados na conversa inicial.',
};

export const assessment = {
  name: 'Avaliação inicial',
  text: 'Conversa com a família, encontros de observação e uma devolutiva com o plano proposto. É o primeiro passo para qualquer plano.',
  price: '',
  ctaLabel: 'Agendar avaliação',
};

export const plans: Plan[] = [
  {
    id: 'essencial',
    name: 'Essencial',
    forWho: 'Para dificuldades pontuais em uma ou duas matérias ou numa unidade mais pesada.',
    frequency: '',
    price: '',
    features: ['Revisão dos conteúdos com dúvida', 'Preparação para provas e trabalhos', 'Retorno para a família'],
  },
  {
    id: 'acompanhamento',
    name: 'Acompanhamento',
    forWho: 'Quando a dificuldade vai além de uma matéria: rotina, organização, interpretação ou confiança.',
    frequency: '',
    price: '',
    features: ['Plano de acompanhamento individual', 'Método de estudo e organização da rotina', 'Apoio na transição para o 6º ano ou o Ensino Médio', 'Devolutivas periódicas para a família'],
    featured: true,
  },
  {
    id: 'intensivo',
    name: 'Intensivo',
    forWho: 'Para recuperação, fim de ano letivo ou quando é preciso mais presença.',
    frequency: '',
    price: '',
    features: ['Tudo do plano Acompanhamento', 'Mais encontros por semana', 'Metas de curto prazo para provas e recuperação', 'Contato com a escola quando for útil'],
  },
];
