/**
 * DISCIPLINAS
 * `stages`: disciplinas atendidas em cada etapa. Preencha só com o que a
 * Professora Meire confirmar. Ex.: subjects: ['Português', 'Matemática', 'Ciências'].
 * Enquanto as três listas estiverem vazias, o site mostra a lista geral `items`.
 */
export const subjectsSection = {
  title: 'Disciplinas',
  intro: 'O foco é sempre a necessidade do aluno. Consulte a professora para confirmar como sua dúvida pode ser trabalhada.',
  stages: [
    { name: 'Fundamental I', subjects: [] as string[] },
    { name: 'Fundamental II', subjects: [] as string[] },
    { name: 'Ensino Médio', subjects: [] as string[] },
  ],
  items: [
    { title: 'Matemática' },
    { title: 'Língua Portuguesa' },
    { title: 'Leitura e interpretação' },
    { title: 'Produção de texto' },
    { title: 'Atividades escolares' },
    { title: 'Preparação para avaliações' },
    { title: 'Organização dos estudos' },
  ],
};
