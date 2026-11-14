export const howItWorks = {
  eyebrow: 'Como funciona',
  title: 'Do primeiro contato à evolução, em 5 passos',
  intro: 'Você sabe o que acontece em cada etapa e o que recebe de volta.',
  steps: [
    { icon: 'message', title: 'Conversa inicial', text: 'Você conta o que tem percebido e tira suas dúvidas.', delivers: 'Orientação sobre o melhor caminho' },
    { icon: 'search', title: 'Avaliação inicial', text: 'Encontros para observar leitura, interpretação, raciocínio, atenção e organização.', delivers: 'Um retrato de onde o estudante está' },
    { icon: 'file-text', title: 'Plano individual', text: 'Metas para os próximos meses, rotina de estudo e frequência recomendada.', delivers: 'Plano de acompanhamento apresentado à família' },
    { icon: 'book-open', title: 'Encontros de acompanhamento', text: 'Conteúdos da escola, método de estudo e preparação para as provas.', delivers: 'Rotina de estudo com apoio de perto' },
    { icon: 'users', title: 'Devolutiva para a família', text: 'Conversas periódicas sobre avanços, desafios e próximos passos.', delivers: 'Você acompanha a evolução de verdade' },
  ],
  /** Como são os encontros em cada formato. Deixe a lista vazia para ocultar. */
  formatsTitle: 'Como são os encontros',
  formats: [
    {
      icon: 'home',
      title: 'Na casa do aluno (Salvador)',
      text: 'A professora vai até vocês. O estudante aprende no próprio ambiente, com o material da escola, e a rotina de estudo é organizada no lugar onde ele realmente estuda.',
      items: ['Sem deslocamento para a família', 'Organização do espaço e do material', 'Contato próximo com os responsáveis'],
    },
    {
      icon: 'monitor',
      title: 'Online (todo o Brasil)',
      text: 'Encontros por videochamada com ferramentas digitais interativas: quadro virtual, exercícios na tela, materiais compartilhados e o mesmo plano individual do presencial.',
      items: ['Quadro digital e atividades interativas', 'Materiais e tarefas compartilhados', 'Horários mais flexíveis'],
    },
  ],
};
