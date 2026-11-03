'use strict';
const gts = require('gts');
const globals = require('globals');

module.exports = [
  {
    ignores: [
      'dist/',
      'coverage/',
      'lib/**/*.js',
      'lib/**/*.d.ts',
      'test/**/*.js',
      'test/**/*.d.ts',
    ],
  },
  ...gts,
  {
    languageOptions: {
      globals: globals.node,
    },
  },
];
