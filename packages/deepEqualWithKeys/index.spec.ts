import { describe, it, expect } from 'vitest';

import deepEqualWithKeys from './index';

describe('deepEqualWithKeys', () => {
  const arg1 = { foo: 'foo', bar: { name: 'bar' } };
  const arg2 = { foo: 'foo', bar: { name: 'baz' } };
  it('Object', () => {
    expect(deepEqualWithKeys(arg1, arg1, ['foo', 'bar'])).eq(true);
    expect(deepEqualWithKeys(arg1, arg2, ['foo', 'bar'])).eq(false);
    expect(deepEqualWithKeys(arg1, arg2, ['foo'])).eq(true);
  });

  it('empty keys', () => {
    expect(deepEqualWithKeys(arg1, arg2, [])).eq(false);
  });

  it('key is not property of object', () => {
    const arg1 = { foo: 'foo', bar: { name: 'bar' } };
    const arg2 = { foo: 'foo', bar: { name: 'baz' }, items: [] };
    expect(deepEqualWithKeys(arg1, arg1, ['key'])).eq(true);
    expect(deepEqualWithKeys(arg1, arg2, ['key'])).eq(false);
    expect(deepEqualWithKeys(arg1, arg2, ['items'])).eq(false);
  });
});
