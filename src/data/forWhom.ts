/**
 * PARA QUEM E O QUE TRABALHAMOS
 * Público confirmado em 14/11/2026: 10 a 18 anos (Fundamental II e Ensino Médio).
 * `stages[].subjects`: preencha só com as disciplinas confirmadas pela professora.
 * Enquanto as listas estiverem vazias, aparece a lista geral `subjects`.
 * `inclusion`: deixe vazio se a professora não acompanhar alunos com laudo.
 */
export const forWhomSection = {
  eyebrow: 'Para quem é',
  title: 'Para quem é e o que trabalhamos',
  intro: 'Pré-adolescentes e adolescentes que precisam de mais do que uma revisão de matéria.',
  grades: 'Dos 10 aos 18 anos: Fundamental II e Ensino Médio',
  stages: [
    { name: 'Fundamental II', subjects: [] as string[] },
    { name: 'Ensino Médio', subjects: [] as string[] },
  ],
  subjectsTitle: 'Conteúdos da escola',
  subjects: ['Matemática', 'Língua Portuguesa', 'Interpretação e produção de texto', 'Preparação para provas e recuperação'],
  skillsTitle: 'O que está por trás do conteúdo',
  skills: [
    { icon: 'calendar', text: 'Rotina e organização dos estudos' },
    { icon: 'compass', text: 'Autonomia para estudar sozinho' },
    { icon: 'target', text: 'Método de estudo e preparação para provas' },
    { icon: 'trending-up', text: 'Transição para o 6º ano e para o Ensino Médio' },
    { icon: 'star', text: 'Confiança e menos ansiedade nas provas' },
  ],
  /** Ex.: 'Também acompanhamos estudantes com laudo ou em investigação (TDAH, dislexia, TEA), em parceria com a família e outros profissionais.' */
  inclusion: '',
};
