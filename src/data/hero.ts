import heroImage from '../assets/images/hero/professora-com-aluna.png';

export const hero = {
  eyebrow: 'Reforço escolar personalizado',
  title: 'Seu filho entende a matéria, não só decora.',
  subtitle:
    'Reforço escolar em todas as disciplinas, do Fundamental I ao Ensino Médio. A Professora Meire descobre onde está a dúvida, explica com calma e acompanha até o aluno conseguir sozinho.',
  /** Botão secundário: leva à seção "Como funciona". O principal abre o contato. */
  secondaryCta: { label: 'Ver como funcionam as aulas', href: '#como-funciona' },
  highlights: [
    { icon: 'user-check', text: 'Acompanhamento personalizado' },
    { icon: 'notebook', text: 'Apoio nas atividades escolares' },
    { icon: 'target', text: 'Atenção às necessidades de cada aluno' },
    { icon: 'heart', text: 'Ambiente acolhedor' },
  ],
  image: {
    src: heroImage,
    alt: 'Professora Meire sorrindo enquanto acompanha uma aluna que escreve no caderno',
  },
  badge: {
    title: 'Cada aluno no seu ritmo',
    text: 'Atenção individual em cada aula',
  },
};
