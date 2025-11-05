# Pensando nas boas praticas de Commit, foi desenvolvido uma configuração para a padronização, se baseando nos exemplos citados do desafio

## Arquivo de configuração

### Depedencias `package.json`

```json
{
  ...
    "scripts": {
    "prepare": "pnpm exec husky init"
  },
  "devDependencies": {
    "@commitlint/cli": "^20.1.0",
    "@commitlint/config-conventional": "^20.0.0",
    "husky": "^9.1.7"
  },
  ...
}
```

### Hook `.husky/commit-msg`

```sh
# Verifica se o commit está no padrão
pnpm dlx commitlint --edit $1

```

### Configuração `commitlint.config.js`

```js
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 🔧 Aceita SOMENTE os tipos definidos no desafio
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'chore',
        'perf',
        'build'
      ],
    ],

    // ✅ Exige formato <type>(scope): <message>
    'type-case': [2, 'always', 'lower-case'],
    'scope-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'always', ['sentence-case', 'lower-case', 'start-case']],

    // ❌ Não permite ponto no final
    'subject-full-stop': [2, 'never', '.'],

    // 🔧 Permite escopos livres (products, api, auth, etc.)
    'scope-case': [2, 'always', ['lower-case', 'kebab-case']],

    // ✅ Message precisa ser no mínimo minimamente clara
    'header-max-length': [2, 'always', 100]
  },
};
```
