/**
 * SINAIS DE ALERTA
 * Situações que os responsáveis reconhecem. No máximo 2 por grupo, para a seção ficar curta.
 */
export const signalsSection = {
  eyebrow: 'Para mães, pais e responsáveis',
  title: 'Você percebe algum destes sinais no seu filho?',
  intro: 'Eles são mais comuns do que parecem e quase nunca são preguiça. Muitas vezes, falta entender como aquela criança ou adolescente aprende.',
  groups: [
    {
      icon: 'book-open',
      title: 'Na aprendizagem',
      items: ['Estuda, mas não consegue mostrar o que sabe nas provas', 'Tem dificuldade com leitura, escrita ou matemática básica'],
    },
    {
      icon: 'heart',
      title: 'Nas emoções',
      items: ['Fica inseguro, ansioso ou desiste rápido diante de uma tarefa', 'Diz que "não é bom" em uma matéria ou não quer ir à escola'],
    },
    {
      icon: 'calendar',
      title: 'Na organização',
      items: ['Perde prazos, esquece materiais e acumula conteúdo', 'Precisa de alguém ao lado para fazer as tarefas de casa'],
    },
  ],
  closing: 'Não é falta de esforço. Muitas vezes, é falta do apoio certo.',
};
