
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
