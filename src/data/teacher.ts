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
  title: 'Conheça a Professora Meire',
  paragraphs: [
    'A Professora Meire acredita que cada aluno possui seu próprio ritmo de aprendizagem. Por isso, o acompanhamento busca compreender as dificuldades individuais e criar um ambiente onde estudar seja mais leve, organizado e produtivo.',
    'Com paciência e atenção, ela observa onde o aluno está encontrando obstáculos, retoma o que ficou para trás e ajuda a construir segurança para seguir em frente, sempre mantendo uma conversa próxima com a família.',
  ],
  values: [
    { title: 'Acolhimento', text: 'Um espaço onde o aluno se sente à vontade para perguntar.' },
    { title: 'Olhar atento', text: 'Observação cuidadosa das dificuldades e dos avanços.' },
    { title: 'Parceria com a família', text: 'Pais e responsáveis sabem como o estudante está evoluindo.' },
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
