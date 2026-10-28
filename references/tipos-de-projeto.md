# Tipos de projeto: o que vira prova

Cada tipo dá comandos reais para o "pronto quando" e para o "pare se". Prefira sempre o comando real ao genérico:
`npm test` com o resumo colado vale mais que "garanta que os testes passam".

Antes de usar a tabela, olhe a pasta. Um `CLAUDE.md`, `AGENTS.md`, `CONTRIBUTING.md` ou `README.md` pode ter os comandos
do projeto; eles valem mais que estes.

---

## Sem código (pasta de arquivos, documentos, conteúdo)

**Sinais:** fotos, planilhas, textos, PDFs; nenhum `package.json`, `pyproject.toml` ou parecido.

- **Provas:** listar a pasta com a contagem; mostrar o resultado (a tabela, o texto, a estrutura); conferir cada dado
  contra a fonte, item por item; contar as linhas ou itens do arquivo criado por comando.
- **Não pode:** apagar, mover ou renomear os originais; inventar dado que não está nos arquivos; publicar ou enviar.
- **Pare se:** um arquivo de origem não existir ou não abrir; um dado essencial faltar em mais de N itens.
- **Atenção:** planilha `.xlsx` e documento `.docx` pedem ferramenta para ler. Se a pessoa puder exportar para `.csv` ou
  `.txt` antes, o goal fica mais simples e não depende de instalar nada.

---

## Node / TypeScript

**Sinais:** `package.json`, `tsconfig.json`, `package-lock.json`.

- **Teste:** `npm test` (em modo que termina, não em watch)
- **Build / tipos:** `npm run build` ou `npx tsc --noEmit`
- **Pare se:** precisar de dependência nova; um teste existente falhar; o modo estrito exigir `any` novo.
- **Atenção:** testes pulados (`.skip`, `.todo`) contam como zero.

---

## Python

**Sinais:** `pyproject.toml`, `requirements.txt`, `setup.py`, `pytest.ini`.

- **Teste:** `pytest -q`
- **Tipos / lint:** `mypy <pacote>` ou `ruff check .`
- **Pare se:** precisar de dependência nova; mudar a versão mínima do Python; um teste existente falhar.

---

## Go

**Sinais:** `go.mod`, `go.sum`, `*_test.go`.

- **Teste:** `go test ./...`
- **Build:** `go build ./...` e `go vet ./...`
- **Pare se:** `go.mod` ganhar dependência nova; um teste existente falhar.

---

## Rust

**Sinais:** `Cargo.toml`, `Cargo.lock`.

- **Teste:** `cargo test`
- **Build:** `cargo check --all-targets` ou `cargo clippy --all-targets -- -D warnings`
- **Pare se:** `Cargo.toml` ganhar dependência nova; um teste existente falhar; aparecer `unsafe` novo.

---

## Swift / iOS

**Sinais:** `Package.swift`, `*.xcodeproj`, `*.xcworkspace`.

- **Teste:** `swift test`, ou `xcodebuild ... test` com o simulador escolhido
- **Pare se:** precisar editar `project.pbxproj` à mão; precisar de pacote novo.

---

## Site estático ou documentação

**Sinais:** maioria de `.html` ou `.md`, `mkdocs.yml`, `docusaurus.config.js`.

- **Provas:** os arquivos criados com a estrutura; a contagem do que foi pedido (seções, páginas, cards); cada link e
  imagem local apontando para um arquivo que existe.
- **Pare se:** um link local apontar para arquivo inexistente; uma imagem pedida não estiver na pasta.
- **Atenção:** o visual é julgamento da pessoa. O goal prova a estrutura; o "ficou bonito" vem depois, na conversa.

---

## Tipo desconhecido

Pergunte: qual comando testa, qual comando gera a versão final, o que não pode ser alterado. Use as respostas direto no
"não pode" e no "pronto quando".
