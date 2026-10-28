# Moldes de `/goal`

Escolha um. Preencha os `<campos>` com o que a pessoa disse e com os nomes reais da pasta. Se a tarefa não cabe em
nenhum, use o livre (5) em vez de forçar.

Em todos, a última linha é a mesma: `Ao parar, escreva "BLOQUEADO:" e o motivo.` Ela deixa claro para o avaliador que o
goal acabou sem cumprir, em vez de ficar rodando.

---

## 1. Criar algo novo

**Quando:** o resultado ainda não existe. Um site, um documento, um calendário, uma planilha, um app pequeno.

```
/goal Criar <o quê>, em <arquivo ou pasta>, com <o que precisa ter no fim>.

Onde mexer: ler <insumos>; criar só <arquivos novos>.

Não pode:
  - Alterar ou apagar <insumos>.
  - Inventar <dados que só a pessoa tem>; o que faltar vira "a confirmar".
  - Publicar, enviar ou instalar algo fora desta pasta.

Pronto quando (mostre cada prova aqui na conversa):
  1. <arquivo> existe; mostre o conteúdo ou a estrutura.
  2. A contagem de <itens> bate com <número combinado>.
  3. Cada <dado> conferido contra <a fonte>, item por item.
  4. Resumo final: arquivos criados e o que eu ainda preciso fazer.

Pare se:
  - <insumo> não existir ou não abrir.
  - A mesma checagem falhar 3 vezes pelo mesmo motivo.
  - Passarem <N> rodadas sem concluir.
Ao parar, escreva "BLOQUEADO:" e o motivo.
```

**Provas típicas:** fora do código, listar e contar, mostrar a tabela pronta, conferir cada dado na fonte. Em código, o
comando de build ou de teste com a saída colada (`references/tipos-de-projeto.md`).

---

## 2. Mudar algo que existe

**Quando:** o resultado já existe e precisa ficar diferente. Refatorar um módulo, reorganizar uma pasta, revisar textos.

```
/goal <mudança>, deixando <estado depois, concreto>.

Onde mexer: <arquivos ou pasta exatos>.

Não pode:
  - Mexer em <o que fica de fora>.
  - Mudar <o que precisa continuar igual: API pública, nomes de arquivo, o texto aprovado>.
  - <padrões do tipo de projeto>

Pronto quando (mostre cada prova aqui na conversa):
  1. <arquivo> faz <comportamento ou tem estrutura nova>.
  2. <prova de que nada quebrou: testes com resumo colado, ou a lista antes/depois>.
  3. A lista de cada arquivo alterado, com o que mudou.

Pare se:
  - A mudança exigir mexer em <zona proibida>.
  - Um teste que já existia falhar (não altere os testes para fazê-los passar).
  - Precisar de dependência nova.
  - Passarem <N> rodadas sem concluir.
Ao parar, escreva "BLOQUEADO:" e o motivo.
```

**Provas típicas:** em código, testes e build com o resumo colado. Fora do código, a lista da pasta antes e depois, com
contagem, mostrando que nenhum arquivo sumiu.

**Fora do código, guarde o antes.** Peça no primeiro item do "pronto quando" a lista do que existe (ou uma cópia da
pasta, quando o conteúdo dos arquivos vai mudar), antes da primeira alteração. Ela prova que nada se perdeu e permite
desfazer. Em projeto com git, o próprio git cumpre esse papel.

---

## 3. N itens parecidos

**Quando:** "faça a mesma coisa em N itens". Corrigir N bugs, legendar N fotos, renomear N arquivos, traduzir N textos.
N precisa vir de uma fonte que dê para contar.

```
/goal <ação> nos <N> <itens> de <fonte que dá para contar>.

Onde mexer: <o que pode mudar em cada item>.

Não pode:
  - Pegar itens fora de <fonte>.
  - Mexer em mais de <um item por vez / um commit por item>.
  - <padrões do tipo de projeto>

Pronto quando (mostre cada prova aqui na conversa):
  1. A lista dos <N> itens, tirada de <fonte>, com a contagem.
  2. Cada item feito, com a prova do item (<arquivo, teste, antes/depois>).
  3. Uma tabela final: item / o que foi feito / prova.

Pare se:
  - Um item não existir ou não der para reproduzir.
  - Um item exigir mudança que quebra outra coisa.
  - Passarem <N> rodadas sem concluir.
Ao parar, escreva "BLOQUEADO:" e o motivo.
```

---

## 4. Só ler e relatar

**Quando:** entender um código, pesquisar num material, auditar se algo bate com o que a documentação promete. Nada muda;
o resultado é um relatório.

```
/goal Ler <o material> e escrever <relatório>, sem mudar nada do que existe.

Onde mexer: só leitura em <pasta>; criar só <relatório.md>.

Não pode:
  - Alterar qualquer arquivo de <pasta>.
  - Rodar comandos que instalem ou mudem o ambiente.
  - Afirmar algo sem citar de onde veio (arquivo e linha, página, link).

Pronto quando (mostre cada prova aqui na conversa):
  1. <relatório.md> criado, com <as seções combinadas>.
  2. Cada afirmação com a fonte ao lado.
  3. <pelo menos N> pontos de <o que a pessoa quer achar>.
  4. A lista de arquivos alterados mostrando só <relatório.md> (em projeto com git, `git status`).

Pare se:
  - Algum arquivo de <pasta> for alterado.
  - Duas fontes disserem coisas opostas sobre o mesmo fato (anote as duas e pare).
  - Passarem <N> rodadas sem concluir.
Ao parar, escreva "BLOQUEADO:" e o motivo.
```

---

## 5. Livre

**Quando:** nenhum dos quatro serve.

- Use as 5 partes do `SKILL.md` direto.
- Capriche no "pronto quando" e no "pare se", que é onde um goal livre costuma falhar.
- Com menos de 3 provas ou menos de 3 condições de parada, não entregue: volte à entrevista.
