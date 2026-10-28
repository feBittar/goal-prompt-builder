#!/usr/bin/env node
// Gate determinístico do /goal renderizado.
// Reprova (exit 1) se: tiver diretiva de "token budget" OU passar de 4000 caracteres.
//
// Uso:
//   node validate-goal.mjs --file <path>
//   node validate-goal.mjs <path>
//   echo "<texto>" | node validate-goal.mjs        (lê do stdin)

import fs from 'node:fs';

const MAX = 4000;
const BUDGET_RE = /use a token budget|token budget of\s*[\d.,kK]+|budget of\s*[\d.,kK]+\s*tokens|tokens?\s+for this goal|use um or[çc]amento de\s*[\d.,kK]+\s*tokens/i;

const args = process.argv.slice(2);
const fi = args.indexOf('--file');
const file = fi >= 0 ? args[fi + 1] : args.find((a) => !a.startsWith('--'));

let text = '';
try {
  text = file ? fs.readFileSync(file, 'utf8') : fs.readFileSync(0, 'utf8');
} catch {
  console.error('erro: passe --file <path> ou envie o texto por stdin');
  process.exit(2);
}

const errors = [];
if (text.trim().length === 0) errors.push('goal vazio');
if (text.length > MAX) errors.push(`excede ${MAX} chars (tem ${text.length})`);
if (BUDGET_RE.test(text)) errors.push('contém diretiva de "token budget" (proibido)');

if (errors.length) {
  console.error(`REPROVADO:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
console.log(`OK — ${text.length}/${MAX} chars, sem token budget.`);
