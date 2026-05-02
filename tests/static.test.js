'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const indexPath = path.join(__dirname, '..', 'index.html');
const source = fs.readFileSync(indexPath, 'utf8');

test('contains exactly 44 grammar rules', () => {
  const matches = source.match(/\{ id: \d+, t:/g) || [];
  assert.equal(matches.length, 44);
});

test('contains inversion rule and quiz tab', () => {
  assert.equal(source.includes('Inversjon'), true);
  assert.equal(source.includes('{ id: "quiz", label: "Quiz" }'), true);
});

test('contains reduced motion and skip link support', () => {
  assert.equal(source.includes('prefers-reduced-motion'), true);
  assert.equal(source.includes('Hopp til innhold'), true);
});
