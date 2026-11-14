import type { ImageMetadata } from 'astro';
import real2 from '../assets/images/professora/foto-real-2.png';
import real3 from '../assets/images/professora/foto-real-3.png';
import real5 from '../assets/images/professora/foto-real-5.png';

/**
 * Dados da Professora Meire (confirmados em 14/11/2026, ver docs/DADOS_CONFIRMADOS.md).
 * Listas vazias não aparecem no site.
 * `portrait`: o retrato gerado por IA foi retirado. Quando houver uma foto real em boa
 * resolução, importe-a aqui e preencha { src, alt }; até lá aparece o cartão com as iniciais.
 */
export const teacher = {
  name: 'Professora Meire',
  fullName: 'Eudemeire',
  initials: 'M',
  role: 'Psicopedagoga',
  eyebrow: 'Sobre a professora',
  title: 'Conheça a Professora Meire',
  paragraphs: [
    'São mais de 30 anos dedicados à educação: em reforço escolar, na coordenação de escolas e em sala de aula, em escolas públicas e particulares. Com especialização em Psicopedagogia, a Professora Meire sabe que dificuldade na escola não é sinal de incapacidade. É um sinal de que aquele estudante precisa ser entendido.',
    'Por isso, antes de ensinar, ela observa como o jovem lê, raciocina, organiza o tempo e reage à pressão das provas. A partir disso, retoma o que ficou para trás, ensina método de estudo e ajuda o estudante a ganhar autonomia, sempre em parceria próxima com a família.',
  ],
  /** Citação em destaque, nas palavras da professora. Deixe vazio para ocultar. */
  quote: '',
  values: [
    { icon: 'heart', title: 'Acolhimento', text: 'Um espaço onde o estudante se sente à vontade para perguntar.' },
    { icon: 'eye', title: 'Olhar atento', text: 'Observação cuidadosa das dificuldades e dos avanços.' },
    { icon: 'users', title: 'Parceria com a família', text: 'Pais e responsáveis sabem como o estudante está evoluindo.' },
  ],

  education: ['Curso superior de Telecomunicações (IFBA)', 'Farmácia', 'Física (UFBA)'],
  experience: [
    'Mais de 30 anos em reforço escolar',
    'Coordenação escolar',
    'Professora de escolas públicas e particulares',
  ],
  courses: [] as string[],
  specializations: ['Psicopedagogia'],

  /** Escolas de onde vieram alunos que a professora já acompanhou (não indica vínculo com as escolas). */
  schoolsTitle: 'Já acompanhou alunos de',
  schools: ['IFBA', 'Colégio São Paulo', 'Colégio Mendel', 'Antônio Vieira', 'Acadêmico', 'Salesiano', 'Medalha Milagrosa', 'Maristas', 'e outros'],

  portrait: null as null | { src: ImageMetadata; alt: string },
  /** Fotos reais exibidas em miniatura. Deixe a lista vazia para ocultar. */
  moments: [
    { src: real2, alt: 'Professora Meire em uma comemoração', position: '50% 15%' },
    { src: real3, alt: 'Professora Meire sorrindo ao ar livre', position: '50% 40%' },
    { src: real5, alt: 'Professora Meire em uma festa com balões', position: '50% 30%' },
  ],
  momentsCaption: 'Momentos da Professora Meire',
};
