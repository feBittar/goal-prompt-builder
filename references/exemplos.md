# Exemplos: do pedido vago ao `/goal`

Cada exemplo mostra o pedido, o que a entrevista descobriu e o `/goal` final. Os três passam no validador.

---

## 1. Fora do código: o calendário da confeitaria

**Pedido:**
> "tenho uma confeitaria e quero que o claude monte sozinho o calendário de posts de novembro. tenho as fotos dos doces e
> um arquivo com os preços."

**Entrevista (uma pergunta por vez):**
- Quantos posts e em que dias? → segunda, quarta e sexta, de 2/11 a 27/11 (12 posts).
- Onde estão os arquivos? → `fotos/` e `precos.csv`, na mesma pasta.
- O que não pode? → inventar preço ou promoção; não tem promoção em novembro.
- Como você quer receber? → numa planilha que abra no Excel.

**`/goal` final:**
```
/goal Criar o calendário de posts do Instagram de novembro de 2026 em calendario-novembro.csv, nesta pasta: 12 posts, segunda, quarta e sexta, de 2/11 a 27/11.

Onde mexer: ler fotos/ e precos.csv; criar só calendario-novembro.csv.

Não pode:
  - Alterar, renomear ou apagar as fotos e o precos.csv.
  - Inventar preço, sabor, promoção ou prazo; o que faltar vira "a confirmar".
  - Publicar ou agendar qualquer coisa.

Pronto quando (mostre cada prova aqui na conversa):
  1. A lista de fotos/ com a contagem, e quais foram usadas.
  2. O calendário completo, cada post com data, dia da semana, foto, produto, preço, legenda e hashtags.
  3. Cada preço conferido contra a linha de precos.csv de onde saiu.
  4. O dia da semana de cada data conferido por comando, não de cabeça.
  5. calendario-novembro.csv criado, com a contagem de linhas mostrada por comando (12 posts e o cabeçalho).

Pare se:
  - fotos/ ou precos.csv não existir ou não abrir.
  - Mais de 3 doces das fotos não estiverem no precos.csv.
  - Passarem 25 rodadas sem concluir.
Ao parar, escreva "BLOQUEADO:" e o motivo.
```

**Por que funciona:**
- **Os números vieram dela.** Doze posts, os dias e "sem promoção" foram respostas, não palpites.
- **Toda prova aparece na conversa.** O avaliador não abre a planilha; ele lê a conferência dos preços e a contagem.
- **Faltar dado não trava.** Um preço ausente vira "a confirmar"; só um buraco grande vira BLOQUEADO.
- **O que é gosto fica com ela.** Se a foto combina com o doce e se a legenda tem a cara da loja, ela confere depois.

---

## 2. Projeto pessoal: o site de portfólio

**Pedido:**
> "quero que o claude code faça um site de portfólio pra mim, com meus 3 projetos e um formulário de contato."

**Entrevista:**
- Onde estão os textos e as imagens? → `conteudo.md` com nome, frase e os 3 projetos; imagens em `imagens/`.
- O formulário envia para onde? → por enquanto, abrir o e-mail do visitante para `contato@exemplo.com`.
- Vai publicar agora? → não, só quer ver no computador.

**`/goal` final:**
```
/goal Criar nesta pasta um site de portfólio de uma página (index.html, style.css, script.js, sem instalar nada) que abre com dois cliques, com apresentação, os 3 projetos de conteudo.md e um formulário de contato.

Onde mexer: ler conteudo.md e imagens/; criar só index.html, style.css e script.js.

Não pode:
  - Inventar texto, projeto ou imagem: usar só o que está em conteudo.md e imagens/.
  - Alterar conteudo.md ou as imagens.
  - Publicar, criar conta ou instalar pacote.

Pronto quando (mostre cada prova aqui na conversa):
  1. Os três arquivos criados; mostre o index.html inteiro.
  2. A contagem de projetos no index.html é 3, cada um com título, descrição e imagem que existe em imagens/.
  3. O formulário tem nome, e-mail e mensagem, os três obrigatórios, e o envio abre o e-mail para contato@exemplo.com.
  4. A lista de cada imagem e link do index.html, com a confirmação de que o arquivo existe.

Pare se:
  - conteudo.md não existir ou não tiver os 3 projetos.
  - Uma imagem citada em conteudo.md não estiver em imagens/.
  - Passarem 20 rodadas sem concluir.
Ao parar, escreva "BLOQUEADO:" e o motivo.
```

**Por que funciona:**
- **Nada para instalar.** As provas são ler o próprio arquivo e contar, sem navegador automático nem script de teste.
- **O conteúdo vem da pessoa.** Sem `conteudo.md` completo, o goal para em vez de inventar um portfólio.
- **O visual fica de fora de propósito.** O goal prova a estrutura; "deixa a fonte maior" vem depois, numa conversa normal.

---

## 3. Código: refatorar com testes

**Pedido:**
> "me ajuda a escrever um goal pra refatorar o middleware de auth pra suportar rotação de API key"

**Entrevista:**
- Projeto? → Node/TypeScript, testes com `npm test`.
- Quais arquivos? → só `src/auth/middleware.ts` e `tests/auth/middleware.test.ts`.
- Estado depois? → aceitar a chave atual e a anterior por 7 dias.
- A API pública muda? → não.

**`/goal` final (o código é em inglês, então o goal também):**
```
/goal Refactor src/auth/middleware.ts to accept both the current and the previous API key, with a 7-day grace window for the previous one.

Scope: src/auth/middleware.ts and tests/auth/middleware.test.ts only.

Constraints:
  - Do not change the public exports of src/auth/index.ts.
  - Do not touch the database schema or migrations/.
  - No new npm dependencies.

Done when (show each proof in this conversation):
  1. middleware.ts accepts the current key and the previous key within 7 days.
  2. middleware.test.ts adds 4 passing tests: current key; previous key within grace; previous key past grace; both expired.
  3. npm test exits 0; paste the summary showing the 4 new tests.
  4. npx tsc --noEmit exits 0.
  5. A final list of every modified file with its line count.

Stop if:
  - The change needs the schema or migrations/.
  - An existing test fails (do not modify tests to make them pass).
  - A new dependency is needed.
  - 30 turns pass without finishing.
When stopping, write "BLOCKED:" and the reason.
```

**Por que funciona:**
- **"7 dias" mede o vago.** "Suportar rotação" vira um comportamento que dá para testar.
- **Os quatro casos de teste são contáveis.** O avaliador lê o resumo colado e vê se estão lá.
- **A trava de regressão.** "Não altere os testes" impede o atalho de consertar o teste em vez do código.

---

## O que deixa um goal fraco

- "Otimizar o fluxo de login": sem antes e depois que dê para medir.
- "Corrigir os problemas que encontrar": em vez de uma lista ou um teste por caso.
- "Organizar todos os arquivos": "todos" sem uma lista ou uma contagem.
- "Pare se ficar confuso": o Claude não consegue detectar isso sozinho.
- "Pronto quando os testes passarem": sem pedir o resumo colado, o avaliador não tem o que ler.
- Decidir pela pessoa quantos posts, que tom ou que formato: pergunte, porque o goal roda sem ninguém para responder.
