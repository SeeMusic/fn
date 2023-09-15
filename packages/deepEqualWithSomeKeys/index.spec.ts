import { describe, it, expect } from 'vitest';

import deepEqualWithSomeKeys from './index';

describe('deepEqualWithSomeKeys', () => {
  const arg1 = { foo: 'foo', bar: { name: 'bar' } };
  const arg2 = { foo: 'foo', bar: { name: 'baz' } };
  it('Object', () => {
    expect(deepEqualWithSomeKeys(arg1, arg1, ['foo', 'bar'])).eq(true);
    expect(deepEqualWithSomeKeys(arg1, arg2, ['foo', 'bar'])).eq(false);
    expect(deepEqualWithSomeKeys(arg1, arg2, ['foo'])).eq(true);
  });

  it('empty keys', () => {
    expect(deepEqualWithSomeKeys(arg1, arg2, [])).eq(false);
  });

  it('key is not property of object', () => {
    const arg1 = { foo: 'foo', bar: { name: 'bar' } };
    const arg2 = { foo: 'foo', bar: { name: 'baz' }, items: [] };
    expect(deepEqualWithSomeKeys(arg1, arg1, ['key'])).eq(true);
    expect(deepEqualWithSomeKeys(arg1, arg2, ['key'])).eq(false);
    expect(deepEqualWithSomeKeys(arg1, arg2, ['items'])).eq(false);
  });
});
