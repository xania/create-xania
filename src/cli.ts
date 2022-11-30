#!/usr/bin/env node

import { create } from 'create-create-app';
import { resolve } from 'path';

const templateRoot = resolve(__dirname, '..', 'templates');

const caveat = `
Welcome to xania App
`;

// See https://github.com/uetchy/create-create-app/blob/master/README.md for other options.

create('create-xania', {
  templateRoot,
  after: ({ answers }) => console.log(`Ok you chose ${answers.architecture}.`),
  caveat,
});