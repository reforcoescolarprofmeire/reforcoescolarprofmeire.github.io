# Auditoria e plano de ação: site da Professora Eudimere (Meire)

Data: 14/11/2026 · Auditado: versão publicada (commit `c2dcaea`, https://reforcoescolarprofmeire.github.io) e código em `src/`.
Documentos relacionados: `docs/PROMPT_REDESIGN.md` (instruções para o Claude executar) e `docs/QUESTIONARIO_PROFESSORA.md` (dados a coletar com a professora).

---

## 1. Resumo executivo

O site está tecnicamente bem feito: é rápido, organizado e trata bem os dados vazios. Mas, do jeito que está, **não consegue converter nenhum visitante e não comunica o que a professora oferece de diferente**.

| # | Problema | Gravidade |
|---|---|---|
| 1 | Nenhum contato preenchido: o botão principal ("Falar com a professora") leva a "canais em breve" e o formulário é só demonstrativo. Hoje o site tem conversão zero. | Crítica |
| 2 | O posicionamento é de "reforço escolar genérico". O diferencial real, o **acompanhamento com base psicopedagógica**, não aparece em nenhum lugar. | Crítica |
| 3 | A foto principal do topo e parte da galeria foram **geradas por IA**. Num serviço que vende confiança para pais, isso é um risco: se alguém perceber, a credibilidade cai. | Alta |
| 4 | Não há **planos, formatos nem preços** (nem um "a partir de"). O pai não sabe o que está comprando. | Alta |
| 5 | O site é longo e repetitivo: 15 seções e **61 cartões com o mesmo visual** (ícone + texto curto). São cerca de 14.200 px no computador e **~25 telas de rolagem no celular**. Problemas, Benefícios, Metodologia e Acompanhamento dizem quase a mesma coisa. | Alta |
| 6 | Não há credenciais: formação, experiência e especializações estão vazias. Também não há depoimentos (a seção fica oculta). | Alta |
| 7 | O nome completo da professora (Eudimere) e a cidade ou bairro não aparecem, o que prejudica a confiança e a busca local no Google. | Média |
| 8 | O hero no celular empurra a foto da professora para baixo da primeira tela, e há 8 alvos de toque com menos de 40 px. | Média |
| 9 | Falta página de privacidade, consentimento de imagem dos alunos (LGPD/ECA) e dados estruturados de negócio local. | Média |

**Pontos fortes a manter:** tipografia (Fraunces + Nunito Sans), paleta azul/verde/amarelo, a foto real da professora em destaque, o tom acolhedor, os dados centralizados em `src/config/site.ts` e `src/data/*.ts`, as seções que se ocultam quando vazias, o desempenho (vídeos com `preload="none"`, imagens otimizadas) e o deploy automático.

> Lembrete do histórico: em 10/10/2026, o redesenho "margem do caderno" foi **rejeitado** porque ficou frio, sem a foto da professora e com cores piores. O novo trabalho evolui o visual atual, não o substitui.

---

## 2. Auditoria detalhada

### 2.1 Conteúdo e posicionamento
- A promessa do hero ("Seu filho entende a matéria, não só decora") é boa, mas fala de reforço. Não diz **como** a professora é diferente nem **para quem** ela é a escolha certa.
- Não existe uma explicação de "reforço × acompanhamento psicopedagógico", que é justamente o que justifica um preço maior que o de um reforço comum.
- Falta tangibilidade: o pai não vê o que recebe (avaliação inicial? plano escrito? relatório? reunião?).
- O FAQ evita perguntas centrais: preço, duração, frequência, presencial ou online, local, atendimento de alunos com laudo (TDAH, dislexia, TEA) e diferença para um psicopedagogo clínico.
- Os textos se repetem entre seções: "acompanhamento próximo", "no ritmo do aluno" e "atenção individual" aparecem mais de 5 vezes.

### 2.2 Arquitetura da informação e UX
Ordem atual: Hero → Disciplinas → Dificuldades (10) → Professora → Como funciona (4) → Benefícios (10) → Para quem (5) → Metodologia (8) → Acompanhamento (7) → Galeria (6) → Vídeos (2) → FAQ (8) → CTA → Contato → Rodapé.

- **Disciplinas logo depois do hero** quebra a narrativa: o pai ainda não sabe por que confiar.
- A professora só aparece na 4ª seção, embora a confiança nela seja o motivo da compra.
- Quatro seções de grade de ícones seguidas (Benefícios, Para quem, Metodologia, Acompanhamento) cansam a leitura, porque nada se destaca.
- Não há seção de **planos**, e a conversão depende de um contato que não existe.
- O menu tem 10 itens, muitos para uma página única.
- No celular, não há barra fixa com o botão de WhatsApp. O botão flutuante só aparece quando o WhatsApp está cadastrado.

### 2.3 Visual
- Os cartões são todos iguais (mesmo raio, borda, ícone e tamanho), por isso a página fica monótona e sem hierarquia.
- Usa poucas fotos e muitos ícones: a emoção vem das fotos reais, e elas aparecem pouco.
- A galeria é alta (~1.500 px) e mistura fotos reais com imagens de IA, com um aviso de "imagens ilustrativas" que reduz a confiança.
- Faltam variações de layout: texto ao lado de imagem, linha do tempo, tabela comparativa, cartões de preço e citações em destaque.

### 2.4 Técnico (está bom, com ajustes pequenos)
- Astro 7, site estático, fontes auto-hospedadas e imagens em WebP: ótimo.
- Imagem do hero: o PNG original tem 1,9 MB (é otimizado no build, mas é de IA e deve ser trocado).
- Acessibilidade: 8 alvos de toque abaixo de 40 px no celular; conferir o contraste do texto cinza sobre os fundos coloridos.
- SEO: falta JSON-LD `EducationalOrganization`/`LocalBusiness`, bairro e cidade no título e na descrição, e um domínio próprio (opcional).
- Não há página `/privacidade`, que se torna necessária quando o formulário e o analytics forem ativados.

### 2.5 Ética, legal e reputação (obrigatório num serviço com crianças)
- **Título "psicopedagoga":** o exercício da psicopedagogia ganhou lei recentemente (a Lei 15.519/2026 foi noticiada com veto ao artigo que exigia formação). As fontes divergem, então é preciso conferir o texto no Planalto antes de publicar. Independentemente da lei, **só usar "psicopedagoga" se a professora tiver especialização em Psicopedagogia**. Sem isso, usar "acompanhamento escolar com abordagem psicopedagógica" ou "olhar psicopedagógico".
- **Nunca diagnosticar nem prometer diagnóstico** (TDAH, dislexia etc.). O site pode dizer que acompanha estudantes com laudo ou em investigação e que **orienta a família a procurar** fonoaudiólogo, psicólogo ou neuropediatra quando necessário.
- **Não prometer resultado** ("nota 10 garantida", "aprovação garantida").
- **Imagem de crianças:** usar foto de aluno só com autorização escrita do responsável (ECA e LGPD). Preferir fotos de costas, das mãos ou dos materiais.
- **Depoimentos:** só reais e autorizados, com o primeiro nome e a relação (por exemplo, "Ana, mãe do Pedro, 5º ano").

---

## 3. Novo posicionamento (proposta)

**Quem:** Professora Eudimere ("Meire"). Validar se a professora prefere aparecer como "Professora Meire" com o nome completo na seção Sobre.

**O quê:** acompanhamento escolar com abordagem psicopedagógica, ou seja, reforço que investiga **por que** o aluno não aprende, cria um plano individual e mantém a família informada.

**Para quem decide:** mães, pais, avós, tios e responsáveis que já tentaram "aula particular comum" e não viram mudança, ou que percebem que a dificuldade vai além de uma matéria (concentração, leitura, organização, insegurança, rejeição à escola).

**Promessa central (rascunho):**
> "Mais que reforço: descobrimos como seu filho aprende e montamos um plano só para ele."

**Três pilares:**
1. **Entender:** conversa com a família e avaliação inicial (sondagem de leitura, escrita, raciocínio matemático, atenção e organização).
2. **Planejar:** um **plano de acompanhamento individual** por escrito, com objetivos para 2 a 3 meses.
3. **Acompanhar:** aulas ou intervenções, mais **devolutivas regulares para a família** (relatório e conversa) e diálogo com a escola quando for útil.

**Comparação que vende (seção nova):**

| Reforço comum | Acompanhamento com a Professora Meire |
|---|---|
| Revisa a matéria da prova | Descobre a origem da dificuldade |
| Aula igual para todos | Plano individual por escrito |
| O pai não sabe o que acontece | Devolutivas periódicas para a família |
| Termina na prova | Desenvolve autonomia e rotina de estudo |

---

## 4. Nova estrutura da página (mobile first)

Corta 15 seções para 11, sem perder conteúdo útil: as grades repetidas são fundidas.

1. **Header:** logo, 5 links (Como funciona · Planos · A professora · Dúvidas · Contato) e o botão "Agendar conversa".
2. **Hero:** promessa + subtítulo com o diferencial psicopedagógico, **foto real da professora visível já na primeira tela do celular**, botão principal "Agendar avaliação inicial" (WhatsApp), botão secundário "Ver planos" e uma faixa de confiança (formação · anos de experiência · etapas atendidas · bairro/cidade).
3. **Sinais de alerta:** "Seu filho passa por alguma destas situações?". São 6 sinais em 3 grupos (Aprendizagem · Emoções e comportamento · Organização), substituindo os 10 cartões. Termina com "Não é falta de esforço. Muitas vezes é falta do apoio certo."
4. **Mais que reforço:** explica a abordagem psicopedagógica em linguagem simples, com a tabela comparativa e uma foto real.
5. **Como funciona:** linha do tempo de 5 passos com o que a família recebe em cada um: Conversa inicial (gratuita?) → Avaliação inicial → Plano individual → Aulas e intervenções → Devolutiva para a família.
6. **Planos:** 3 cartões, com o do meio em destaque, e a avaliação inicial à parte (ver seção 5).
7. **A professora:** nome completo, história, formação e especializações, anos de experiência, foto real grande, valores e "por que eu faço isso" (citação em destaque).
8. **Para quem e o que trabalhamos:** une Para quem + Disciplinas + Metodologia, com abas ou blocos por etapa (Fundamental I · Fundamental II · Ensino Médio) e uma linha "também acompanhamos estudantes com laudo ou em investigação (em parceria com outros profissionais)", se for verdade.
9. **Prova social:** depoimentos (quando houver), 2 vídeos e uma galeria enxuta (4 a 6 fotos **reais**, em carrossel no celular).
10. **Dúvidas:** perguntas novas sobre preço, duração, frequência, presencial/online, local, laudo e a diferença para um psicopedagogo clínico.
11. **CTA final + contato:** WhatsApp (principal), telefone, Instagram, endereço/bairro com mapa (opcional) e um formulário curto (nome do responsável, série/idade, principal preocupação, melhor horário) que monta a mensagem do WhatsApp.

**Rodapé:** contatos, links, "Política de privacidade" (página nova) e CNPJ/MEI, se houver.
**Celular:** barra fixa inferior com "WhatsApp" e "Ver planos" (aparece depois do hero).

---

## 5. Planos e formatos (estrutura proposta; **preços e frequências definidos pela professora**)

| Plano | Para quem | Inclui (sugestão) |
|---|---|---|
| **Avaliação inicial** (entrada) | Toda família nova | Conversa com os responsáveis + 1 a 2 encontros de sondagem + devolutiva com o plano proposto |
| **Essencial** | Dificuldade pontual em uma matéria | 1 encontro/semana · acompanhamento de tarefas e provas · conversa mensal rápida com a família |
| **Acompanhamento** (destaque) | Dificuldade que vai além de uma matéria | 2 encontros/semana · plano individual escrito · relatório mensal + reunião de devolutiva |
| **Intensivo** | Recuperação, fim de unidade, pré-prova ou alunos com laudo | 3 ou mais encontros/semana · plano com metas quinzenais · contato com a escola quando útil |
| **Pacotes avulsos** (opcional) | Férias, recuperação ou preparação para provas | Calendário fechado de X encontros |

Regras de exibição:
- Campos de preço vazios mostram "Consulte valores" e não quebram o layout. Preencher com "a partir de R$ …" quando a professora decidir.
- Deixar claro o formato (presencial/online), a duração do encontro, a forma de pagamento e a política de faltas e reposições.
- O plano em destaque recebe o rótulo "Mais escolhido" **só se for verdade**. Caso contrário, usar "Recomendado".

---

## 6. Direção visual

- **Manter:** Fraunces + Nunito Sans, azul como cor principal, verde para "positivo", amarelo para destaques, fundos claros, cantos arredondados, foto real da professora.
- **Mudar:**
  - Ritmo: alternar seções de texto + foto, linha do tempo, tabela, cartões de preço e citação. No máximo uma grade de ícones na página.
  - Hierarquia: títulos maiores e menos itens por seção (máximo de 6), com um elemento principal por seção.
  - Fotos: mais fotos reais e maiores, todas de verdade, sem o aviso "ilustrativas".
  - Fundos alternados suaves (branco / azul muito claro / creme) para separar as seções sem linhas.
  - Elementos gráficos discretos (sublinhado a lápis, estrela, número), sem exageros infantis.
  - Componentes novos: `ComparisonTable`, `Timeline`, `PricingCard`, `QuoteHighlight`, `TrustStrip`, `StickyMobileCTA`.
- **Acessibilidade:** contraste AA, alvos de toque ≥ 44 px, foco visível, `prefers-reduced-motion` respeitado.

---

## 7. Plano de ação por fases

| Fase | O que fazer | Quem | Depende de | Pronto quando |
|---|---|---|---|---|
| **0. Dados** | Preencher o `docs/QUESTIONARIO_PROFESSORA.md` com a professora: nome, formação, experiência, especialização em psicopedagogia (sim/não), público, formato, local, planos e preços, fotos reais autorizadas, depoimentos e contatos | Usuário + professora | Nada | Questionário respondido |
| **1. Conteúdo** | Reescrever todos os textos de `src/data/` para o novo posicionamento, com o FAQ novo e os textos de planos. Revisar com as regras éticas (seção 2.5) | Claude | Fase 0 (parcial: dá para começar com marcadores) | Usuário aprova os textos |
| **2. Estrutura** | Reorganizar `index.astro` na nova ordem; fundir Para quem + Disciplinas + Metodologia; remover Benefícios e Acompanhamento como seções isoladas (aproveitar o melhor do texto); menu com 5 itens | Claude | Fase 1 | Página com 11 seções e ≤ 10 telas no celular |
| **3. Componentes novos** | Hero novo + `TrustStrip`, `ComparisonTable`, `Timeline`, `PricingCard`/`Plans`, `QuoteHighlight`, `StickyMobileCTA`; dados em `src/data/plans.ts`, `approach.ts` e `signals.ts` | Claude | Fase 2 | Componentes funcionando com dados vazios e cheios |
| **4. Visual** | Ritmo de fundos, variações de cartão, galeria enxuta em carrossel no celular, troca da foto do hero por foto real | Claude | Fotos da Fase 0 | Prévia aprovada pelo usuário |
| **5. Conversão** | WhatsApp em todos os botões, formulário curto que monta a mensagem, barra fixa no celular, eventos de clique (GA4/Meta só se configurados) | Claude | WhatsApp da Fase 0 | Clique em "Agendar" abre o WhatsApp com a mensagem certa |
| **6. Legal e SEO** | Página `/privacidade`, nota de consentimento de imagem, JSON-LD de negócio local, título e descrição com bairro e cidade, sitemap; perfil no Google Empresas (ação do usuário) | Claude + usuário | Cidade/bairro | Página no ar e Rich Results Test sem erros |
| **7. Qualidade e publicação** | `npm run build` e `astro check` sem erros; teste em 375/768/1280 px; Lighthouse ≥ 90 em todos os itens; console limpo; prévia local aprovada → merge na `main` (que publica sozinho) | Claude → usuário aprova | Fases 1 a 6 | Site publicado e conferido no ar |

**Ordem sugerida das sessões:**
- Sessão 1: Fases 1 e 2 com marcadores onde faltam dados.
- Sessão 2: Fase 3.
- Sessão 3: Fases 4 e 5.
- Sessão 4: Fases 6 e 7.

Cada sessão termina com uma prévia local para o usuário ver antes de qualquer publicação.

---

## 8. Métricas de sucesso

- Primeira tela no celular: promessa + foto real + botão de WhatsApp visíveis sem rolar.
- Página no celular com ≤ 10 telas (hoje são ~25).
- 100% das fotos reais e autorizadas; nenhum aviso de "imagens ilustrativas".
- Lighthouse ≥ 90 (desempenho, acessibilidade, boas práticas e SEO).
- Depois de publicado: cliques no WhatsApp por semana (GA4) e número de avaliações iniciais agendadas por mês (anotado pela professora).

---

## 9. Pendências que só o usuário ou a professora resolvem

1. Responder o questionário (`docs/QUESTIONARIO_PROFESSORA.md`).
2. Confirmar a grafia do nome (Eudimere) e como ela prefere ser chamada no site.
3. Confirmar se ela tem especialização em Psicopedagogia (define o vocabulário do site inteiro).
4. Enviar fotos **reais**: da professora, do espaço e dos materiais. Fotos de alunos só com autorização escrita.
5. Decidir planos, preços (ou "consulte") e a política de faltas.
6. WhatsApp, Instagram, bairro/cidade e, se quiser, um domínio próprio.
7. Pedir 2 ou 3 depoimentos reais às famílias atendidas (com autorização).

Fontes sobre a regulamentação (conferir no Planalto antes de citar):
[Sou Brasília (06/11/2026)](https://soubrasilia.com/pl-1675-2023-psicopedagogia-diploma-regulamentacao-sancao/) ·
[Diário do Pará](https://diariodopara.com.br/noticias/psicopedagogia-camara-aprova-novas-regras-para-profissao-veja-formacao-exigida-e-quando-comeca/) ·
[CFP sobre o PL 1.675/2023](https://site.cfp.org.br/alerta-na-saude-e-na-educacao-entenda-os-riscos-do-pl-1-675-2023-para-a-psicologia-e-a-fonoaudiologia/)
