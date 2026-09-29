/**
 * Itens do menu. `requires` oculta o item automaticamente quando a seção
 * correspondente não tem conteúdo (ex.: nenhum depoimento cadastrado).
 */
export type NavItem = {
  label: string;
  href: string;
  requires?: 'testimonials' | 'videos';
  footer?: boolean;
};

export const navigation: NavItem[] = [
  { label: 'Início', href: '#inicio', footer: true },
  { label: 'A professora', href: '#sobre', footer: true },
  { label: 'Como funciona', href: '#como-funciona', footer: true },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Acompanhamento', href: '#acompanhamento' },
  { label: 'Galeria', href: '#galeria', footer: true },
  { label: 'Depoimentos', href: '#depoimentos', requires: 'testimonials' },
  { label: 'Dúvidas', href: '#duvidas', footer: true },
  { label: 'Contato', href: '#contato', footer: true },
];
