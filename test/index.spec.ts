import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { project } from '../src';

const test = suite('Jumpstart Initial Setup');

test('Project Name is Correct', async () => {
  assert.equal(project, 'jumpstart');
});

export const { run } = test;
