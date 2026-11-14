/**
 * CONFIGURAÇÃO PRINCIPAL DO SITE
 * ------------------------------------------------------------------
 * Este é o único arquivo que precisa ser editado para cadastrar
 * contatos, redes sociais, domínio e integrações.
 *
 * Campos vazios ("") são tratados automaticamente pelo site:
 * nada de "undefined", links vazios ou botões quebrados.
 */

export const siteConfig = {
  name: 'Reforço Escolar da Professora Meire',
  shortName: 'Reforço Escolar',
  teacher: 'Professora Meire',
  tagline: 'Reforço escolar com abordagem psicopedagógica: entender, planejar e acompanhar.',

  /** Domínio final, sem barra no fim. Ex.: "https://www.reforcomeire.com.br".
   *  Enquanto estiver vazio, canonical, sitemap e URLs absolutas de SEO ficam desativados. */
  url: 'https://reforcoescolarprofmeire.github.io',

  seo: {
    title: 'Professora Meire | Reforço escolar com abordagem psicopedagógica',
    description:
      'Acompanhamento escolar com olhar psicopedagógico para crianças e adolescentes: avaliação inicial, plano individual e devolutivas para a família. Conheça os planos da Professora Meire.',
    ogImage: '/og-image.jpg',
    locale: 'pt_BR',
  },

  contact: {
    /** Somente números, com DDI e DDD. Ex.: "5571999999999".
     *  Ao preencher, os botões passam a abrir o WhatsApp e o botão flutuante aparece. */
    whatsapp: '',
    /** Formato livre para exibição. Ex.: "(71) 3333-3333" */
    phone: '',
    email: '',
    /** Endereço completo. Se vazio, o endereço não é exibido. */
    address: '',
    /** Bairro e cidade, para a faixa de confiança e a busca local. Ex.: "Itapuã, Salvador - BA" */
    area: '',
    /** Ex.: "Presencial e online". Se vazio, não aparece. */
    format: '',
    /** Ex.: "Segunda a sexta, das 8h às 18h" */
    openingHours: '',
  },

  social: {
    /** Apenas o usuário, sem @. Ex.: "reforcomeire" */
    instagram: '',
    facebook: '',
  },

  /** Mensagem pré-preenchida ao abrir o WhatsApp pelos botões do site. */
  whatsappMessage:
    'Olá, Professora Meire! Vi o seu site e gostaria de agendar uma conversa sobre o acompanhamento do meu filho.',

  form: {
    /** URL de um serviço/backend que receba o formulário via POST (JSON).
     *  Ex.: Formspree, Getform ou uma API própria. Se vazio, o formulário usa o WhatsApp
     *  (quando cadastrado) ou exibe o aviso de formulário demonstrativo. */
    endpoint: '',
  },

  analytics: {
    /** Ex.: "G-XXXXXXXXXX". Se vazio, nenhum script é carregado. */
    googleAnalyticsId: '',
    /** ID numérico do Meta Pixel. Se vazio, nenhum script é carregado. */
    metaPixelId: '',
  },
} as const;

export type SiteConfig = typeof siteConfig;
