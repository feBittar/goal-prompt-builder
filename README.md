# goal-prompt-builder

Uma skill do Claude Code que transforma uma ideia vaga num `/goal`: o comando que faz o Claude trabalhar sozinho até
terminar. Ela te entrevista, decide com você o que é "pronto" e só entrega um goal que dá para conferir no fim.

Serve para código e para o resto: um calendário de posts, um relatório, uma pasta para organizar, um site pessoal.

## Instalar

Cole isto no Claude Code:

```
Instala a skill goal-prompt-builder do repositório https://github.com/feBittar/goal-prompt-builder na minha pasta de skills pessoais (~/.claude/skills/goal-prompt-builder). Use git clone; sem git, baixe https://github.com/feBittar/goal-prompt-builder/archive/refs/heads/main.zip e extraia de modo que o SKILL.md fique direto nessa pasta. Depois leia o SKILL.md, me explique em três linhas o que ela faz e me pergunte se quero adaptar algo ao meu jeito de trabalhar.
```

Se a skill não aparecer em seguida, digite `/reload-skills` ou abra uma sessão nova.

## Usar

- `/goal-prompt-builder montar o calendário de posts de novembro`, ou
- só diga "me ajuda a escrever um /goal para ..."

No fim, cole o `/goal` que ela entregar. Para ele rodar sem pedir permissão a cada passo, use o auto mode do Claude Code.
`/goal` sozinho mostra o andamento; `/goal clear` cancela.

## O que tem aqui

- `SKILL.md`: o método e a checklist.
- `references/`: os moldes, os comandos por tipo de projeto e três exemplos.
- `validate-goal.mjs`: confere o tamanho máximo (4.000 caracteres) e barra orçamento de tokens. Usa Node; sem Node, a
  skill faz a mesma conferência de outro jeito.

## Créditos

A ideia vem do [win4r/goal-prompt-builder](https://github.com/win4r/goal-prompt-builder), sob licença MIT, feito para o
Codex CLI. Esta versão foi reescrita para o `/goal` do Claude Code e para tarefas fora do código, também sob licença MIT
(arquivo `LICENSE`).
