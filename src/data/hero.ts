/**
 * Topo da página.
 * `exercises`: um exercício corrigido por etapa. Cada linha da resposta do aluno é uma
 * lista de partes; uma parte `{ texto, marca }` recebe a correção da professora
 * ('circulo' circula o trecho, 'risco' risca o trecho).
 */
export type Parte = string | { texto: string; marca: 'circulo' | 'risco' };

export type Exercicio = {
  id: string;
  etapa: string;
  disciplina: string;
  enunciado: string;
  resposta: Parte[][];
  /** Correção descrita em texto, para leitores de tela */
  descricao: string;
  nota: { regra: string; correto: string };
  /** Altura da nota na margem, alinhada à linha com o erro */
  notaTop: string;
};

export const hero = {
  title: 'Seu filho entende a matéria, não só decora.',
  subtitle:
    'Reforço escolar em todas as disciplinas, do Fundamental I ao Ensino Médio. A Professora Meire descobre onde está a dúvida, explica com calma e acompanha até o aluno conseguir sozinho.',
  secondaryCta: { label: 'Ver como funcionam as aulas', href: '#como-funciona' },
  highlights: [
    { text: 'Acompanhamento personalizado' },
    { text: 'Apoio nas atividades escolares' },
    { text: 'Atenção às necessidades de cada aluno' },
    { text: 'Ambiente acolhedor' },
  ],
  exercises: [
    {
      id: 'fund1',
      etapa: 'Fundamental I',
      disciplina: 'Português',
      enunciado: 'Passe a frase para o plural: “O menino chegou cedo.”',
      resposta: [['Os ', { texto: 'menino', marca: 'circulo' }, ' ', { texto: 'chegou', marca: 'circulo' }, ' cedo.']],
      descricao: 'A professora circulou as palavras “menino” e “chegou”.',
      nota: { regra: 'plural no sujeito, plural no verbo', correto: 'Os meninos chegaram cedo.' },
      notaTop: '3.4rem',
    },
    {
      id: 'fund2',
      etapa: 'Fundamental II',
      disciplina: 'Matemática',
      enunciado: 'Resolva a equação: 2x + 5 = 13',
      resposta: [['2x + 5 = 13'], ['2x = 13 ', { texto: '+ 5', marca: 'circulo' }], ['2x = 18']],
      descricao: 'A professora circulou o “+ 5”, que passou para o outro lado ainda somando.',
      nota: { regra: 'trocou de lado, troca o sinal', correto: '2x = 13 − 5 = 8, logo x = 4' },
      notaTop: '5.6rem',
    },
    {
      id: 'medio',
      etapa: 'Ensino Médio',
      disciplina: 'Física',
      enunciado: 'Um carro percorre 120 km em 2 h. Qual é a velocidade média?',
      resposta: [['v = 120 ', { texto: '×', marca: 'risco' }, ' 2'], ['v = 240 km/h']],
      descricao: 'A professora riscou o sinal de multiplicação.',
      nota: { regra: 'velocidade = distância ÷ tempo', correto: 'v = 120 ÷ 2 = 60 km/h' },
      notaTop: '3.4rem',
    },
  ] satisfies Exercicio[],
};
