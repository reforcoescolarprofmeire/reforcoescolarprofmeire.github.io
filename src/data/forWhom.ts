/**
 * PARA QUEM E O QUE TRABALHAMOS (une público, disciplinas e metodologia)
 * `stages[].subjects`: preencha só com as disciplinas confirmadas pela professora.
 * Enquanto as listas estiverem vazias, aparece a lista geral `subjects`.
 * `inclusion`: deixe vazio se a professora não acompanhar alunos com laudo.
 */
export const forWhomSection = {
  eyebrow: 'Para quem é',
  title: 'Para quem é e o que trabalhamos',
  intro: 'Crianças e adolescentes que precisam de mais do que uma revisão de matéria.',
  grades: 'Do Fundamental I ao Ensino Médio',
  stages: [
    { name: 'Fundamental I', subjects: [] as string[] },
    { name: 'Fundamental II', subjects: [] as string[] },
    { name: 'Ensino Médio', subjects: [] as string[] },
  ],
  subjectsTitle: 'Conteúdos da escola',
  subjects: ['Matemática', 'Língua Portuguesa', 'Leitura e interpretação', 'Produção de texto', 'Tarefas e preparação para provas'],
  skillsTitle: 'O que está por trás do conteúdo',
  skills: [
    { icon: 'focus', text: 'Atenção e concentração' },
    { icon: 'calendar', text: 'Organização e rotina de estudos' },
    { icon: 'compass', text: 'Autonomia para estudar sozinho' },
    { icon: 'star', text: 'Autoestima e confiança para aprender' },
  ],
  /** Ex.: 'Também acompanhamos estudantes com laudo ou em investigação (TDAH, dislexia, TEA), em parceria com a família e outros profissionais.' */
  inclusion: '',
};
