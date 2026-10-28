---
name: goal-prompt-builder
description: Use quando alguém quer que o Claude Code trabalhe sozinho até terminar uma tarefa com o /goal, pede "me ajuda a escrever um /goal", "transforma isso num goal" ou descreve uma tarefa vaga para o agente fazer sem supervisão. Entrevista a pessoa, transforma a ideia em escopo (objetivo, onde mexer, o que não pode, pronto quando, pare se) e entrega um /goal conferido, para código ou fora dele.
argument-hint: "[a tarefa, do jeito que vier] — ex.: 'montar o calendário de posts de novembro', ou deixe vazio que eu pergunto"
---

# goal-prompt-builder

Transforma uma ideia vaga num `/goal` que o Claude Code consegue perseguir sozinho e que dá para conferir no fim.

Fale com a pessoa em português. O `/goal` sai no idioma de trabalho dela; se a tarefa ou o código forem em inglês, use
inglês e as seções Objective / Scope / Constraints / Done when / Stop if.

## Como o /goal funciona

- `/goal <condição>` faz o Claude trabalhar rodada após rodada. Depois de cada rodada, um modelo pequeno lê a conversa e
  decide: ainda não, cumprido ou impossível.
- Esse avaliador **não abre arquivos nem roda comandos**. Ele só julga o que o Claude mostrou na conversa. Por isso todo
  item de "pronto quando" pede uma prova que apareça no chat.
- A condição tem no máximo 4.000 caracteres.
- Durante o goal ninguém responde perguntas. Tudo que precisa de decisão é decidido antes, na entrevista.
- Fonte: https://code.claude.com/docs/en/goal

Um pedido vago faz o agente andar na direção errada e declarar sucesso. O remédio é escopo: decidir antes o que é pronto.

## As 5 partes

```
/goal <objetivo: o que existe no fim, concreto>.

Onde mexer: <pasta, arquivos ou área>.

Não pode:
  - <regras duras>

Pronto quando (mostre cada prova aqui na conversa):
  1. <prova verificável>
  2. <prova verificável>
  3. <prova verificável>

Pare se:
  - <condição que o próprio Claude detecta>
  - <condição que o próprio Claude detecta>
  - passarem <N> rodadas sem concluir.
Ao parar, escreva "BLOQUEADO:" e o motivo.
```

## O fluxo

1. **Ouça a ideia.** Se a pessoa colou uma descrição, extraia o que der. Se veio uma frase solta, pergunte.
2. **Pergunte só o que só ela sabe**, uma pergunta por vez, no máximo cinco: o resultado esperado (quanto, em que
   formato), onde estão os insumos, o que não pode mudar nem ser inventado, como ela vai conferir. Nunca invente
   conteúdo, números, preços, nomes ou datas. Se ela não souber, proponha uma opção e diga que é sugestão sua.
3. **Olhe a pasta** para usar nomes reais de arquivos. Se for código, ache os comandos reais de teste e build
   (`references/tipos-de-projeto.md`).
4. **Escolha o molde** em `references/cenarios.md`: criar algo novo, mudar algo que existe, N itens parecidos, só ler e
   relatar, ou livre.
5. **Confira com a checklist.** Se faltar mais de dois itens, mostre à pessoa o que está fraco e conserte antes.
6. **Passe no validador.** Grave o `/goal` num arquivo temporário e rode, na pasta desta skill,
   `node validate-goal.mjs --file <arquivo>`. Só entregue com saída 0. Sem Node, conte os caracteres por comando e
   confira as duas regras do validador à mão.
7. **Entregue** o `/goal` num bloco copiável e diga, em poucas linhas:
   - abrir o Claude Code na pasta certa;
   - para rodar sem pedir permissão a cada passo, usar o auto mode (ou ao menos aceitar edições);
   - `/goal` sozinho mostra o andamento e `/goal clear` cancela;
   - o que ela ainda precisa julgar com os próprios olhos (gosto, tom, visual).

## Checklist

- [ ] O objetivo descreve o estado final, não só um verbo ("melhorar", "organizar" sem o depois não vale)
- [ ] "Onde mexer" nomeia pasta ou arquivos reais
- [ ] Nada de "tudo", "todos", "qualquer" sem uma lista ou fonte que dê para contar
- [ ] "Não pode" proíbe inventar o que a pessoa não deu
- [ ] "Pronto quando" tem de 3 a 8 itens, cada um com uma prova concreta (arquivo, contagem, comando e sua saída)
- [ ] Pelo menos uma prova pede o resultado colado na conversa, não só "deu certo"
- [ ] A prova é a mais simples que funciona: listar, contar, conferir linha a linha. Não instale ferramenta só para provar
- [ ] "Pare se" tem pelo menos 3 condições detectáveis, uma delas um limite de rodadas
- [ ] Se mexe em código com testes: "não altere os testes para fazê-los passar"
- [ ] Passou no validador: até 4.000 caracteres e sem orçamento de tokens

## Erros comuns

| Erro | Conserto |
|---|---|
| Decidir pela pessoa quantidade, formato ou tom | Perguntar. Sem resposta, propor e marcar como sugestão |
| "Pare se ficar confuso" | Algo detectável: "o arquivo X não existe", "a mesma checagem falhou 3 vezes" |
| Pronto = "os testes passam" | "`npm test` termina sem erro; cole o resumo" |
| Verificação pesada para quem não programa | Listar, contar e conferir na própria conversa |
| Goal sem limite | "ou pare depois de 30 rodadas" |
| Achar que o avaliador conferiu o arquivo | Ele só lê a conversa. O que é gosto fica com a pessoa |

## Referências

- `references/cenarios.md`: os moldes, com provas típicas dentro e fora do código.
- `references/tipos-de-projeto.md`: comandos de teste e build por linguagem, e a versão sem código.
- `references/exemplos.md`: três pedidos vagos que viraram `/goal`, e o que deixa um goal fraco.

Créditos: a ideia vem do [win4r/goal-prompt-builder](https://github.com/win4r/goal-prompt-builder) (MIT), feito para o
Codex CLI. Esta versão foi reescrita para o `/goal` do Claude Code e para tarefas fora do código.
