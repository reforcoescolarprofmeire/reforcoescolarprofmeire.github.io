/**
 * TOPO DA PÁGINA
 * Sem foto por enquanto: as imagens geradas por IA foram retiradas (14/11/2026).
 * Quando houver uma foto real da professora em boa resolução, ela pode voltar aqui.
 */
export const hero = {
  eyebrow: 'Psicopedagoga · Fundamental II e Ensino Médio',
  title: 'Seu filho mais organizado, seguro e preparado para as provas.',
  subtitle:
    'Acompanhamento escolar com olhar psicopedagógico para jovens de 10 a 18 anos. A Professora Meire descobre onde está a dificuldade, monta um plano individual e ajuda o estudante a ganhar rotina, método e autonomia.',
  /** Destaque do formato de atendimento, logo abaixo do subtítulo. */
  format: {
    title: 'Atendimento domiciliar em Salvador',
    text: 'e online para todo o Brasil',
  },
  /** Botão secundário. O principal abre o WhatsApp. */
  secondaryCta: { label: 'Conhecer os planos', href: '#planos' },
  /** Cartão de credenciais exibido no lugar da foto. Só dados confirmados. */
  card: {
    name: 'Professora Meire',
    role: 'Psicopedagoga',
    items: [
      { icon: 'award', strong: '+30 anos', text: 'de experiência em reforço e coordenação escolar' },
      { icon: 'graduation-cap', strong: 'Psicopedagogia', text: 'especialização, com formação em Física (UFBA)' },
      { icon: 'map-pin', strong: 'Em casa ou online', text: 'domiciliar em Salvador, online para todo o Brasil' },
    ],
  },
};
