/**
 * DEPOIMENTOS
 * Cadastre somente depoimentos reais, com autorização das famílias.
 * Enquanto a lista estiver vazia, a seção e o item de menu ficam ocultos.
 *
 * Exemplo:
 * {
 *   name: 'Ana',
 *   relationship: 'Mãe de aluno do 5º ano',
 *   text: 'Texto do depoimento...',
 *   rating: 5, // opcional, de 1 a 5
 * },
 */
export type Testimonial = {
  name: string;
  relationship: string;
  text: string;
  rating?: number;
};

export const testimonialsSection = {
  eyebrow: 'Depoimentos',
  title: 'O que as famílias dizem',
};

export const testimonials: Testimonial[] = [];
