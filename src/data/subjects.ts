/**
 * ÁREAS DE ACOMPANHAMENTO
 * Lista editável: adicione, remova ou renomeie itens conforme as
 * disciplinas confirmadas pela Professora Meire.
 * Ícones disponíveis: veja src/components/ui/Icon.astro.
 */
export const subjectsSection = {
  eyebrow: 'Áreas de acompanhamento',
  title: 'Disciplinas',
  /** Disciplinas de cada etapa. Preencha só com o que a professora confirmar.
   *  Enquanto as três listas estiverem vazias, aparece a lista geral `items` abaixo. */
  stages: [
    { name: 'Fundamental I', subjects: [] as string[] },
    { name: 'Fundamental II', subjects: [] as string[] },
    { name: 'Ensino Médio', subjects: [] as string[] },
  ],
  intro: 'O foco é sempre a necessidade do aluno. Consulte a professora para confirmar como sua dúvida pode ser trabalhada.',
  items: [
    { icon: 'calculator', title: 'Matemática' },
    { icon: 'type', title: 'Língua Portuguesa' },
    { icon: 'book-open', title: 'Leitura e interpretação' },
    { icon: 'pen', title: 'Produção de texto' },
    { icon: 'notebook', title: 'Atividades escolares' },
    { icon: 'clipboard', title: 'Preparação para avaliações' },
    { icon: 'list-checks', title: 'Organização dos estudos' },
  ],
};
