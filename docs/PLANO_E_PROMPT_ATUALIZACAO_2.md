# Atualização 2 do site: plano de ação e prompt melhorado

Data: 14/11/2026. Esta atualização vem depois do redesenho psicopedagógico (commit c09dc20) e usa os dados que a professora confirmou (ver `docs/DADOS_CONFIRMADOS.md`).

## 1. O que mudou no briefing

| Tema | Antes | Agora |
|---|---|---|
| Público | Fundamental I ao Ensino Médio, foco em "criança" | **10 a 18 anos**: Fundamental II e Ensino Médio, pré-adolescentes e adolescentes |
| Formato | Não aparecia | **Domiciliar em Salvador e online para todo o Brasil** |
| Formação | Vazia, e o site evitava a palavra "psicopedagoga" | Telecomunicações (IFBA), Farmácia, Física (UFBA), **Especialização em Psicopedagogia**, mais de 30 anos de experiência |
| Fotos | Hero, galeria, retrato e capas de vídeo gerados por IA | **Sem imagens de IA.** Ficam só as fotos reais, pequenas |
| Contato | Vazio, formulário só demonstrativo | WhatsApp (71) 99317-1570 e eudemeiren@gmail.com; o formulário envia pelo WhatsApp ou por e-mail |

## 2. Plano de ação

### Fase A: conteúdo (src/data e src/config)
1. `site.ts`:
   - Preencher `contact.whatsapp` (5571993171570), `contact.email`, `contact.area` ("Salvador - BA") e `contact.format` ("Domiciliar em Salvador e online").
   - Reescrever a descrição de SEO para "adolescentes, Fundamental II e Ensino Médio, Salvador".
   - Trocar "meu filho" por "meu filho ou minha filha" na mensagem do WhatsApp.
2. `hero.ts`:
   - Promessa voltada para jovens de 10 a 18 anos: autonomia, rotina, provas e transição escolar.
   - Incluir a frase "Atendimento domiciliar em Salvador e online para todo o Brasil".
3. `signals.ts`:
   - Sinais típicos da adolescência: queda de notas na passagem para o 6º ano ou para o Ensino Médio, desorganização com muitas matérias, procrastinação, ansiedade antes das provas, desânimo.
4. `approach.ts`: falar em "jovem" e "estudante" e incluir autonomia e método de estudo.
5. `howItWorks.ts`:
   - Manter os 5 passos.
   - Acrescentar o bloco "Como são os encontros": em casa, o ambiente do aluno, o material da escola e a rotina organizada no lugar onde ele estuda; online, videochamada com quadro digital, exercícios interativos, materiais compartilhados e o mesmo plano individual.
6. `plans.ts`: textos voltados para provas, recuperação, transição de ciclo e preparação para o Ensino Médio.
7. `forWhom.ts`:
   - Grades: "Dos 10 aos 18 anos: Fundamental II e Ensino Médio".
   - Etapas: Fundamental II e Ensino Médio.
   - Habilidades: rotina e organização, método de estudo, preparação para provas e transição escolar.
8. `teacher.ts`:
   - Formação: Telecomunicações (IFBA), Farmácia, Física (UFBA).
   - Especialização: Psicopedagogia.
   - Experiência: mais de 30 anos em reforço escolar, coordenação escolar e como professora de escolas públicas e particulares.
   - Escolas: lista de colégios cujos alunos ela já acompanhou (IFBA, São Paulo, Mendel, Antônio Vieira, Acadêmico, Salesiano, Medalha Milagrosa, Maristas e outros).
9. `faq.ts`:
   - Idades atualizadas e uma pergunta nova sobre aulas online e em casa.
   - Agora pode dizer "psicopedagoga" (especialização confirmada), sem prometer diagnóstico.

### Fase B: imagens
1. Remover do site o hero `professora-com-aluna.png`, a galeria, o `retrato-sorrindo.jpg` e os vídeos com as capas. Todos são imagens geradas por IA e mostram crianças pequenas, fora do novo público.
2. No lugar da foto do hero: um cartão de credenciais (Psicopedagogia, mais de 30 anos, domiciliar e online), sem foto.
3. Na seção da professora: um cartão com iniciais e as 3 fotos reais pequenas ("Momentos da Professora Meire").
4. Quando chegarem fotos reais em boa resolução, voltar a usar foto no hero e na seção Sobre.

### Fase C: contato e formulário
1. Botões principais abrem o WhatsApp com mensagem pronta; botão flutuante e barra fixa no celular passam a aparecer.
2. Formulário:
   - Botão principal "Enviar pelo WhatsApp" e botão secundário "Enviar por e-mail", que abre um `mailto:` com a mesma mensagem.
   - Campo "Formato preferido" (em casa ou online).
   - Exemplo do campo de série atualizado ("Ex.: 14 anos, 9º ano").
3. Seção de contato com WhatsApp, e-mail e área de atendimento.

### Fase D: verificação e publicação
1. `npm run build` sem erros; prévia em 375 px e 1280 px; console limpo.
2. Testar o link do WhatsApp (wa.me/5571993171570) e o mailto.
3. Commit na `main`, push e acompanhar o GitHub Actions até o deploy concluir. Conferir o site no ar.

## 3. Prompt melhorado (para próximas rodadas no Claude Code)

> Cole numa sessão do Claude Code aberta em `/mnt/dados/projetos/REFORÇO`.

---

Atue como desenvolvedor front-end sênior, especialista em UX e conversão de serviços locais e redator de marketing para educação. Evolua o site existente (Astro, dados em `src/config/site.ts` e `src/data/*.ts`); não refaça do zero.

**Leia primeiro:**
- `docs/DADOS_CONFIRMADOS.md`, a fonte dos dados reais;
- este arquivo;
- `docs/AUDITORIA_E_PLANO_DE_ACAO.md`;
- o `README.md`.

**Negócio:**
- Professora **Eudemeire**, a "Professora Meire", **psicopedagoga** (especialização em Psicopedagogia).
- Formação: Telecomunicações (IFBA), Farmácia e Física (UFBA).
- Mais de 30 anos de experiência em reforço escolar, coordenação escolar e como professora de escolas públicas e particulares.
- Já acompanhou alunos do IFBA, Colégio São Paulo, Mendel, Antônio Vieira, Acadêmico, Salesiano, Medalha Milagrosa, Maristas e outros.
- Atende **jovens de 10 a 18 anos** (Fundamental II e Ensino Médio), **em domicílio em Salvador e online para todo o Brasil**.
- Quem compra: mães, pais e responsáveis de pré-adolescentes e adolescentes.

**Mensagens-chave:**
- autonomia;
- organização da rotina;
- método de estudo;
- preparação para provas;
- transição escolar (5º para 6º ano, 9º ano para o Ensino Médio);
- confiança;
- família informada.

**Regras:**
1. Não invente dados, depoimentos, preços, resultados nem bairros. O que não estiver confirmado fica vazio e não aparece.
2. Pode usar "psicopedagoga", mas nunca prometa diagnóstico nem resultado garantido. Escreva que ela orienta a procurar outros profissionais quando necessário.
3. Os colégios citados descrevem **de onde vinham os alunos que ela acompanhou**. Não sugira vínculo ou parceria com as escolas.
4. **Imagens:** proibido usar imagens geradas por IA ou de banco com crianças. Use só fotos reais enviadas pela professora (fotos de alunos só com autorização escrita).
5. Fale com o responsável por "você" e sobre "seu filho ou sua filha", "o jovem", "o estudante". Evite "criança" e "aluninho". Mantenha frases curtas e no máximo 6 itens por lista.
6. Mantenha a identidade visual (Fraunces + Nunito Sans; azul `#215b98`, verde `#36906a`, amarelo `#f2b632`) e os componentes funcionando com dados vazios.
7. **Contato:**
   - WhatsApp 5571993171570 e e-mail eudemeiren@gmail.com, os dois em `site.ts`.
   - Cada botão abre o WhatsApp com uma mensagem própria.
   - O formulário envia pelo WhatsApp ou por e-mail (`mailto`).
8. **Publicação:** push na `main` publica pelo GitHub Actions. Só publique com o pedido do usuário e acompanhe o deploy (`gh run watch`) até o fim. A senha da chave SSH, se for pedida, vai por janela `zenity` (`SSH_ASKPASS`), nunca pelo chat.
9. Ao terminar, registre uma linha no `~/CONTEXTO_CLAUDE.md` e o detalhe com data no `~/HISTORICO_CLAUDE.md` (categoria 8).

**Pendências que dependem da professora:**
- fotos reais em boa resolução;
- preços e frequências;
- bairros de Salvador atendidos;
- depoimentos autorizados;
- Instagram.
