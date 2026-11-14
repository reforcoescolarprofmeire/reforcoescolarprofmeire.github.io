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
  tagline: 'Reforço escolar com psicopedagoga para jovens de 10 a 18 anos: entender, planejar e acompanhar.',

  /** Domínio final, sem barra no fim. Ex.: "https://www.reforcomeire.com.br".
   *  Enquanto estiver vazio, canonical, sitemap e URLs absolutas de SEO ficam desativados. */
  url: 'https://reforcoescolarprofmeire.github.io',

  seo: {
    title: 'Professora Meire | Psicopedagoga e reforço escolar em Salvador e online',
    description:
      'Reforço escolar com psicopedagoga para jovens de 10 a 18 anos (Fundamental II e Ensino Médio): rotina, método de estudo e preparação para provas. Atendimento domiciliar em Salvador e online para todo o Brasil.',
    ogImage: '/og-image.jpg',
    locale: 'pt_BR',
  },

  contact: {
    /** Somente números, com DDI e DDD. Ex.: "5571999999999".
     *  Ao preencher, os botões passam a abrir o WhatsApp e o botão flutuante aparece. */
    whatsapp: '5571993171570',
    /** Formato livre para exibição. Ex.: "(71) 3333-3333" */
    phone: '',
    email: 'eudemeiren@gmail.com',
    /** Endereço completo. Se vazio, o endereço não é exibido. */
    address: '',
    /** Bairro e cidade, para a faixa de confiança e a busca local. Ex.: "Itapuã, Salvador - BA" */
    area: 'Salvador - BA',
    /** Ex.: "Presencial e online". Se vazio, não aparece. */
    format: 'Domiciliar em Salvador e online',
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
    'Olá, Professora Meire! Vi o seu site e gostaria de agendar uma conversa sobre o acompanhamento do meu filho/minha filha.',

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
