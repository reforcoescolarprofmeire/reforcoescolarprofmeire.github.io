/**
 * Itens do menu (no máximo 5). `requires` oculta o item quando a seção não tem conteúdo.
 */
export type NavItem = {
  label: string;
  href: string;
  requires?: 'testimonials' | 'videos';
  footer?: boolean;
};

export const navigation: NavItem[] = [
  { label: 'Como funciona', href: '#como-funciona', footer: true },
  { label: 'Planos', href: '#planos', footer: true },
  { label: 'A professora', href: '#sobre', footer: true },
  { label: 'Dúvidas', href: '#duvidas', footer: true },
  { label: 'Contato', href: '#contato', footer: true },
];
