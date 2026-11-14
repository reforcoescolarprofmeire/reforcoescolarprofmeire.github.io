import heroImage from '../assets/images/hero/professora-com-aluna.png';

export const hero = {
  eyebrow: 'Reforço escolar com abordagem psicopedagógica',
  title: 'Mais que reforço: um plano para o jeito que seu filho aprende.',
  subtitle:
    'A Professora Meire investiga por que a dificuldade acontece, monta um plano de acompanhamento só para o seu filho e mantém a família informada sobre cada avanço.',
  /** Botão secundário. O principal abre o WhatsApp (ou o contato, enquanto não houver WhatsApp). */
  secondaryCta: { label: 'Conhecer os planos', href: '#planos' },
  image: {
    src: heroImage,
    alt: 'Professora Meire sorrindo enquanto acompanha uma aluna que escreve no caderno',
  },
  badge: {
    title: 'Plano individual',
    text: 'Cada aluno com objetivos próprios',
  },
};
