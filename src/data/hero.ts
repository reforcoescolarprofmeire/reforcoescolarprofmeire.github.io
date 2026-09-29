import heroImage from '../assets/images/hero/professora-com-aluna.png';

export const hero = {
  eyebrow: 'Reforço escolar personalizado',
  title: 'Aprender pode ser mais leve, seguro e confiante.',
  subtitle:
    'Acompanhamento escolar personalizado para ajudar crianças e adolescentes a superar dificuldades, fortalecer o aprendizado e desenvolver mais confiança nos estudos.',
  primaryCta: { label: 'Conheça o reforço escolar', href: '#como-funciona' },
  secondaryCta: { label: 'Falar com a Professora Meire' },
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
