# Reforço Escolar da Professora Meire

Landing page do serviço de reforço escolar da Professora Meire. O público principal são pais e responsáveis.

O objetivo é transmitir confiança e explicar, de forma rápida:

- quem é a professora;
- como funciona o acompanhamento;
- para quem ele é indicado;
- como entrar em contato.

## Tecnologias

- **[Astro](https://astro.build/)**: gera HTML estático, rápido e bom para SEO, com componentes organizados.
- **Otimização de imagens do Astro:** gera WebP em vários tamanhos, com lazy loading.
- **CSS puro:** variáveis de design em `src/styles/global.css` e estilos locais em cada componente.
- **TypeScript**, apenas para os poucos scripts do navegador: menu, galeria, formulário e animações.
- **Fontes auto-hospedadas** via Fontsource: Fraunces (títulos) e Nunito Sans (texto).

O site não usa frameworks de JavaScript nem bibliotecas de UI.

## Como instalar e executar

Pré-requisito: Node.js 18.20 ou superior (recomendado: 20 ou 22).

```bash
npm install        # instala as dependências
npm run dev        # ambiente de desenvolvimento em http://localhost:4321
npm run build      # gera a versão final na pasta dist/
npm run preview    # abre a versão final localmente para conferência
```

## Estrutura das pastas

```
REFORÇO/
├── IMAGENS PESSOA/        ← fotos originais enviadas (preservadas, não usadas diretamente)
├── IMAGENS REFORÇO/       ← imagens originais enviadas (preservadas)
├── VIDEOS/                ← vídeos originais enviados (preservados)
├── PROMPT/                ← briefing do projeto
├── public/
│   ├── videos/            ← vídeos usados no site
│   ├── favicon.svg, favicon.ico, apple-touch-icon.png, icon-512.png
│   ├── og-image.jpg       ← imagem de compartilhamento (WhatsApp, Facebook etc.)
│   └── site.webmanifest
└── src/
    ├── config/site.ts     ← ⭐ CONFIGURAÇÃO PRINCIPAL (contatos, redes, domínio, integrações)
    ├── data/              ← textos e listas de cada seção
    ├── assets/images/     ← imagens do site (otimizadas automaticamente no build)
    │   ├── hero/          ← foto da primeira dobra
    │   ├── professora/    ← retrato e fotos da professora
    │   ├── galeria/       ← fotos da galeria
    │   └── videos/        ← capas dos vídeos
    ├── components/        ← uma seção por arquivo (Hero, AboutTeacher, Gallery…)
    │   └── ui/            ← peças reutilizáveis (Button, Section, SectionHeader, Icon)
    ├── layouts/BaseLayout.astro  ← <head>, SEO, Open Graph, dados estruturados
    ├── pages/             ← index.astro (página), robots.txt e sitemap.xml
    ├── scripts/           ← animação de entrada ao rolar
    ├── styles/global.css  ← cores, tipografia, botões e utilitários
    └── utils/contact.ts   ← links de WhatsApp, telefone, Instagram etc.
```

## Onde alterar cada coisa

| O que | Onde |
|---|---|
| **WhatsApp** | `src/config/site.ts` → `contact.whatsapp`. Use só números, com DDI e DDD. Ex.: `5571999999999` |
| **Telefone** | `src/config/site.ts` → `contact.phone` |
| **Instagram** | `src/config/site.ts` → `social.instagram`. Use só o usuário, sem @ |
| E-mail, endereço, horários | `src/config/site.ts` → `contact.email`, `contact.address`, `contact.openingHours` |
| Mensagem automática do WhatsApp | `src/config/site.ts` → `whatsappMessage` |
| Domínio (canonical e sitemap) | `src/config/site.ts` → `url`. Ex.: `https://www.seudominio.com.br` |
| Título e descrição para o Google | `src/config/site.ts` → `seo` |
| Bairro/cidade e formato (presencial/online) | `src/config/site.ts` → `contact.area`, `contact.format` (aparecem na faixa de confiança do topo) |
| Textos do topo (headline, botões) | `src/data/hero.ts` |
| Textos sobre a professora, nome completo, citação, formação e cursos | `src/data/teacher.ts` (`fullName`, `quote`, `education`...) |
| Sinais de alerta | `src/data/signals.ts` |
| "Mais que reforço" e tabela comparativa | `src/data/approach.ts` |
| Como funciona (5 passos) | `src/data/howItWorks.ts` |
| **Planos, preços e frequência** | `src/data/plans.ts` (preço vazio = "Consulte valores") |
| Para quem é, disciplinas por etapa, alunos com laudo | `src/data/forWhom.ts` (`grades`, `stages`, `inclusion`) |
| **Depoimentos** | `src/data/testimonials.ts` |
| Perguntas frequentes | `src/data/faq.ts` |
| CTA final e textos do contato | `src/data/cta.ts` |
| Itens do menu (máx. 5) | `src/data/navigation.ts` |
| Política de privacidade | `src/pages/privacidade.astro` |
| Cores e fontes | `src/styles/global.css` (bloco `:root`) |

Campos deixados vazios (`''`) **não aparecem** no site: não surgem "undefined", links vazios nem botões quebrados.

### Comportamento automático conforme os dados

- **Sem WhatsApp:** os botões "Falar com a Professora Meire" e "Quero saber mais" levam à seção de contato, e o botão flutuante fica oculto.
- **Com WhatsApp:**
  - os botões abrem a conversa com uma mensagem pronta;
  - o botão flutuante aparece;
  - o formulário monta a mensagem com os dados preenchidos e abre o WhatsApp.
- **Sem nenhum contato:** a seção de contato mostra "Canais de atendimento em breve", e o formulário exibe o aviso de que é demonstrativo.
- **Sem depoimentos:** a seção e o item "Depoimentos" do menu ficam ocultos.
- **Sem vídeos:** a seção de vídeos não aparece.
- **Formação, experiência, cursos e especializações:** só aparecem quando as listas em `teacher.ts` forem preenchidas.

## Imagens

### Galeria

1. Coloque a foto em `src/assets/images/galeria/` (JPG, PNG ou WebP).
2. Em `src/data/gallery.ts`, adicione um item:
   ```ts
   { file: 'nome-da-foto.jpg', alt: 'Descrição do que aparece na foto', caption: 'Legenda curta' },
   ```
   Use `wide: true` para a foto ocupar duas colunas no computador.
3. Quando todas as fotos forem reais, mude `galleryHasIllustrativeImages` para `false`. Isso remove o aviso "Algumas imagens são ilustrativas".

### Foto do topo e retrato da professora

Troque os arquivos em `src/assets/images/hero/` e `src/assets/images/professora/`. Em seguida, ajuste os `import` em `src/data/hero.ts` e `src/data/teacher.ts`.

O Astro gera automaticamente versões leves (WebP) e em vários tamanhos. Envie a imagem na melhor qualidade disponível.

## Vídeos

1. Coloque o arquivo em `public/videos/`. Prefira `.mp4` com codec H.264, que funciona em todos os navegadores.
2. (Opcional) Coloque uma imagem de capa em `src/assets/images/videos/` e importe-a em `src/data/videos.ts`.
3. Adicione o item na lista `videos` de `src/data/videos.ts`.

Os vídeos não iniciam sozinhos e só são baixados quando o visitante clica em reproduzir. Com mais vídeos do que `initialCount`, aparece o botão "Ver mais vídeos".

## Depoimentos

Em `src/data/testimonials.ts`, adicione somente depoimentos **reais e autorizados**:

```ts
export const testimonials: Testimonial[] = [
  { name: 'Ana', relationship: 'Mãe de aluno do 5º ano', text: 'Texto do depoimento...', rating: 5 },
];
```

O campo `rating` (de 1 a 5) é opcional.

## Formulário de interesse

O formulário escolhe o modo de envio nesta ordem:

1. **`form.endpoint` preenchido** em `site.ts`: envia os dados em JSON via POST. Funciona com Formspree, Getform ou uma API própria.
2. **WhatsApp preenchido:** abre o WhatsApp com a mensagem montada.
3. **Nenhum dos dois:** valida os campos e informa que o formulário é demonstrativo. Nada é enviado, e a página não finge um envio.

## Integrações futuras já preparadas

- **Google Analytics:** `analytics.googleAnalyticsId` em `site.ts`.
- **Meta Pixel:** `analytics.metaPixelId` em `site.ts`.
- **Backend do formulário:** `form.endpoint`.
- **Domínio próprio:** `url`. Ativa o canonical, as URLs absolutas do Open Graph e o sitemap.

Os scripts de métricas só são carregados quando os IDs estão preenchidos.

## Como publicar

Rode `npm run build` e publique a pasta **`dist/`** em qualquer hospedagem de site estático.

- **Netlify:** arraste a pasta `dist/` em app.netlify.com/drop, ou conecte o repositório com build `npm run build` e pasta `dist`.
- **Vercel:** importe o repositório. O Astro é detectado automaticamente.
- **GitHub Pages / Cloudflare Pages:** use build `npm run build` e pasta de saída `dist`.
- **Hospedagem tradicional (cPanel/FTP):** envie o conteúdo de `dist/` para a pasta `public_html`.

Depois de configurar o domínio, preencha `url` em `src/config/site.ts` e gere o build novamente.

## Observação sobre as mídias

As imagens de `IMAGENS REFORÇO/` e os vídeos de `VIDEOS/` foram gerados por IA e **foram retirados do site em 14/11/2026** (hero, galeria, retrato e vídeos). Não volte a usá-los. As fotos de `IMAGENS PESSOA/` são reais, mas pequenas; elas aparecem em miniatura na seção "Conheça a Professora Meire". Enquanto não houver fotos reais em boa resolução, o topo e a seção da professora mostram cartões de credenciais no lugar da foto. Os dados confirmados da professora estão em `docs/DADOS_CONFIRMADOS.md`.

Assim que houver fotos reais das aulas, basta substituí-las seguindo as instruções acima.

Os arquivos originais foram preservados. O site usa cópias com nomes padronizados em `src/assets/images/`, quadros extraídos dos vídeos e vídeos com carregamento rápido (`faststart`) em `public/videos/`.
