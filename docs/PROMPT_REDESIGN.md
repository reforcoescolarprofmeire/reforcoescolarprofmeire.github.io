# Prompt: redesenho do site da Professora Meire (acompanhamento psicopedagógico)

> Cole este prompt numa sessão do Claude Code aberta na pasta do projeto (`/mnt/dados/projetos/REFORÇO`, que também é o atalho `~/Área de trabalho/REFORÇO`).
> Para fazer uma fase de cada vez, diga: "Siga o docs/PROMPT_REDESIGN.md, fase N".

---

## Papel

Atue como desenvolvedor front-end sênior, especialista em UX e conversão de sites de serviços locais e redator de marketing para educação. Você vai evoluir um site já existente, não refazê-lo do zero.

## Contexto do negócio

- Cliente: **Professora Eudimere, conhecida como "Professora Meire"**. Ela dá reforço escolar com **fundamentação psicopedagógica**: investiga por que o aluno não aprende, monta um plano individual e acompanha a família de perto.
- Quem decide a compra: mães, pais, avós, tios e responsáveis. Quem é atendido: crianças e adolescentes (do Fundamental I ao Ensino Médio, a confirmar).
- O site hoje vende "reforço escolar genérico". O objetivo é **vender o acompanhamento psicopedagógico e os planos de acompanhamento**, com aparência mais profissional, sem perder o acolhimento.

## Leia antes de qualquer alteração

1. `docs/AUDITORIA_E_PLANO_DE_ACAO.md`: diagnóstico, posicionamento, nova estrutura, planos, direção visual e fases. **É a fonte da verdade deste trabalho.**
2. `docs/QUESTIONARIO_PROFESSORA.md`: veja o que já foi respondido. Só use dados que estejam lá ou que o usuário informar no chat.
3. `README.md`, `src/config/site.ts`, `src/data/*.ts`, `src/pages/index.astro`, `src/styles/global.css` e os componentes em `src/components/`.
4. `PROMPT/PROMPT`: o briefing original. As regras de não inventar dados, dados centralizados e estados vazios continuam valendo.

## Regras obrigatórias

1. **Não invente informações:** formação, anos de experiência, preços, depoimentos, números de alunos, resultados, endereço. O que não estiver confirmado fica vazio e **não aparece** no site (siga o padrão atual de listas e campos vazios ocultos). Preços vazios mostram "Consulte valores".
2. **Ética psicopedagógica:**
   - Só escreva "psicopedagoga" se o questionário confirmar a especialização em Psicopedagogia. Caso contrário, use "abordagem psicopedagógica" ou "olhar psicopedagógico".
   - Nunca prometa diagnóstico nem diagnostique (TDAH, dislexia, TEA etc.). Pode dizer que acompanha estudantes com laudo ou em investigação e que orienta a família a procurar outros profissionais, **somente se a professora confirmar**.
   - Nunca prometa resultado garantido (notas, aprovação).
3. **Imagens:** só fotos reais. Remova as imagens geradas por IA (hero `professora-com-aluna.png` e as galerias marcadas como ilustrativas) assim que houver fotos reais. Enquanto não houver, mantenha as atuais e registre a pendência. Fotos de alunos só com autorização (ver questionário). Não use bancos de imagem com crianças.
4. **Visual:** evolua a identidade atual (Fraunces + Nunito Sans, azul/verde/amarelo, fundos claros, foto real da professora em destaque). **Não repita o redesenho "margem do caderno" de 10/10/2026**, que o usuário rejeitou por ficar frio, sem a foto da professora e com cores piores.
5. **Arquitetura:** mantenha os dados centralizados (`src/config/site.ts` e `src/data/*.ts`), os componentes pequenos e reutilizáveis e o funcionamento correto com dados vazios. Sem dependências novas, a não ser que sejam realmente necessárias (pergunte antes).
6. **Textos:** em pt-BR, tom acolhedor e profissional, frases curtas, falando com "você" (o responsável) e "seu filho / sua filha". Sem jargão clínico. No máximo 6 itens por lista.
7. **Git e publicação:**
   - Trabalhe numa branch (`redesign/psicopedagogico` ou a que o usuário indicar). **Push na `main` publica o site automaticamente**, então nunca faça merge ou push na `main` sem o "pode publicar" do usuário.
   - O autor dos commits já está configurado no repositório ("Reforço Escolar Prof. Meire").
   - O push usa a chave `~/.ssh/id_ed25519`, que tem senha: peça a senha por uma janela `zenity` via `SSH_ASKPASS`, nunca no chat.
8. **Prévia antes de aprovar:** ao fim de cada fase, rode `npm run build` e `npm run preview` (http://localhost:4321), abra no navegador do app e mostre em 375 px e 1280 px. Peça a aprovação do usuário.
9. Ao terminar cada fase, registre uma linha no `~/CONTEXTO_CLAUDE.md` (Projetos → Site da Meire) e o detalhe com data no `~/HISTORICO_CLAUDE.md` (categoria 8).

## Nova estrutura da página (alvo)

1. Header (5 links + botão "Agendar conversa")
2. Hero (promessa + diferencial psicopedagógico + foto real visível na 1ª tela do celular + botão de WhatsApp + faixa de confiança)
3. Sinais de alerta (6 sinais em 3 grupos)
4. Mais que reforço (abordagem psicopedagógica + tabela comparativa)
5. Como funciona (linha do tempo em 5 passos, com o que a família recebe em cada um)
6. Planos (avaliação inicial + 3 cartões, com o do meio em destaque)
7. A professora (história, formação, citação, foto grande)
8. Para quem e o que trabalhamos (por etapa; une Para quem + Disciplinas + Metodologia)
9. Prova social (depoimentos, vídeos, galeria enxuta)
10. Dúvidas (FAQ novo: preço, duração, frequência, formato, local, laudo, diferença para psicopedagogo clínico)
11. CTA final + contato (WhatsApp, formulário curto que monta a mensagem)
- Rodapé com link para `/privacidade`; no celular, barra fixa com "WhatsApp" e "Ver planos".

Detalhes de cada seção, textos-guia e a tabela de planos estão nas seções 3 a 6 da auditoria.

## Fases (faça uma por vez, mostre a prévia e espere a aprovação)

### Fase 1: conteúdo
- Reescreva os arquivos de `src/data/` para o novo posicionamento. Crie `src/data/approach.ts` (Mais que reforço + comparação), `signals.ts` (sinais de alerta) e `plans.ts` (planos; preços vazios = "Consulte valores").
- Reescreva o FAQ, com pelo menos 10 perguntas, incluindo as da auditoria.
- Atualize `siteConfig.seo` (título e descrição com "acompanhamento psicopedagógico" e a cidade/bairro, se conhecidos).
- Entregue ao usuário uma lista "textos novos para aprovar" antes de mexer no layout.
- **Pronto quando** o usuário aprovar os textos.

### Fase 2: estrutura
- Reorganize `src/pages/index.astro` na nova ordem e reduza o menu (`navigation.ts`) a 5 itens.
- Funda Para quem + Disciplinas + Metodologia em um componente. Aproveite o melhor de Benefícios e Acompanhamento nas seções novas e remova as que sobrarem (apague os componentes e dados sem uso).
- **Pronto quando** a página tiver 11 seções e, no celular (375 px), `scrollHeight / innerHeight` ≤ 10.

### Fase 3: componentes novos
- `TrustStrip`, `ComparisonTable`, `Timeline`, `Plans` + `PricingCard`, `QuoteHighlight` e `StickyMobileCTA`; ajuste o `Hero`.
- Todos funcionam com dados vazios (somem ou mostram um estado neutro) e cheios.
- **Pronto quando** nenhum componente quebrar com dados vazios e o build passar.

### Fase 4: visual
- Alterne os fundos das seções (branco / azul muito claro / creme), com no máximo uma grade de ícones na página e variações de cartão.
- Galeria com 4 a 6 fotos reais (carrossel com scroll-snap no celular), sem o aviso de "ilustrativas" quando todas forem reais.
- Foto real no hero, visível sem rolar no celular.
- Alvos de toque ≥ 44 px, contraste AA, `prefers-reduced-motion`.
- **Pronto quando** o usuário aprovar a prévia em 375 px e 1280 px.

### Fase 5: conversão
- Todos os botões "Agendar" abrem o WhatsApp (`utils/contact.ts`) com uma mensagem específica para cada botão (por exemplo, a do plano escolhido).
- Formulário curto: responsável, série/idade, principal preocupação e melhor horário. Ele monta a mensagem do WhatsApp; usa o `form.endpoint` se estiver configurado.
- Eventos de clique para GA4/Meta só se os IDs estiverem configurados.
- **Pronto quando** cada botão abrir o WhatsApp com o texto certo (teste no navegador).

### Fase 6: legal e SEO
- Página `src/pages/privacidade.astro` (dados do formulário, WhatsApp, analytics, imagem de alunos com consentimento; LGPD).
- JSON-LD `EducationalOrganization` + `LocalBusiness` no `BaseLayout`, só com os campos preenchidos. Sitemap com a página nova.
- Escreva para o usuário um passo a passo do **Perfil da Empresa no Google** (ação dele).
- **Pronto quando** o build passar e o JSON-LD validar.

### Fase 7: qualidade e publicação
- `npm run check` e `npm run build` sem erros; console do navegador limpo.
- Teste em 375, 768 e 1280 px; Lighthouse ≥ 90 nos 4 itens (rode pelo navegador do app ou pelo `npx lighthouse`, se disponível).
- Atualize o `README.md` (onde editar planos, abordagem e sinais).
- Peça o "pode publicar". Com o ok: merge na `main`, push (senha via zenity) e confira o site no ar depois do deploy do GitHub Actions.

## Formato das respostas ao usuário

- Em português, curtas, com o que foi feito, o que falta e o que depende dele.
- Sempre que houver dado faltando, liste exatamente qual pergunta do questionário o resolve.
