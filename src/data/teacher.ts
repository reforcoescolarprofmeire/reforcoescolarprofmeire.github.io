import portrait from '../assets/images/professora/retrato-sorrindo.jpg';
import real2 from '../assets/images/professora/foto-real-2.png';
import real3 from '../assets/images/professora/foto-real-3.png';
import real5 from '../assets/images/professora/foto-real-5.png';

/**
 * Dados da Professora Meire.
 * Os campos de formação, experiência, cursos e especializações estão vazios
 * de propósito: preencha apenas com informações reais. Listas vazias não aparecem no site.
 */
export const teacher = {
  name: 'Professora Meire',
  /** Nome completo exibido na seção Sobre. Confirme a grafia com a professora. */
  fullName: 'Eudimere',
  eyebrow: 'Sobre a professora',
  title: 'Conheça a Professora Meire',
  paragraphs: [
    'Para a Professora Meire, dificuldade na escola não é sinal de incapacidade. É um sinal de que aquele aluno precisa ser entendido. Por isso, antes de ensinar, ela observa: como a criança lê, como resolve um problema, onde se distrai, o que a deixa insegura.',
    'A partir disso, ela retoma o que ficou para trás, ensina estratégias de estudo e ajuda o aluno a construir segurança para seguir em frente, sempre em parceria próxima com a família.',
  ],
  /** Citação em destaque, nas palavras da professora. Deixe vazio para ocultar. */
  quote: '',
  values: [
    { icon: 'heart', title: 'Acolhimento', text: 'Um espaço onde o aluno se sente à vontade para perguntar.' },
    { icon: 'eye', title: 'Olhar atento', text: 'Observação cuidadosa das dificuldades e dos avanços.' },
    { icon: 'users', title: 'Parceria com a família', text: 'Pais e responsáveis sabem como o estudante está evoluindo.' },
  ],

  /** Preencha quando houver informações confirmadas. Ex.: ['Licenciatura em Pedagogia'] */
  education: [] as string[],
  /** Ex.: ['Experiência com alunos do ensino fundamental'] */
  experience: [] as string[],
  /** Ex.: ['Curso de alfabetização e letramento'] */
  courses: [] as string[],
  /** Ex.: ['Psicopedagogia'] */
  specializations: [] as string[],

  portrait: {
    src: portrait,
    alt: 'Retrato da Professora Meire sorrindo em uma sala de aula',
  },
  /** Fotos pessoais exibidas em miniatura. Deixe a lista vazia para ocultar. */
  moments: [
    { src: real2, alt: 'Professora Meire em uma comemoração', position: '50% 15%' },
    { src: real3, alt: 'Professora Meire sorrindo ao ar livre', position: '50% 40%' },
    { src: real5, alt: 'Professora Meire em uma festa com balões', position: '50% 30%' },
  ],
  momentsCaption: 'Momentos da Professora Meire',
};
