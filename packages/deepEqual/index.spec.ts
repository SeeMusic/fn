import { describe, it, expect } from 'vitest';

import deepEqual from './index';

describe('deepEqual', () => {
  it('primivates', () => {
    expect(deepEqual('foo', 'foo')).eq(true);
    expect(deepEqual('foo', 'bar')).eq(false);
    expect(deepEqual('2023-08-30T16:00:00.000Z', '2023-08-30T16:00:00.000Z')).eq(true);
    expect(deepEqual(1, 1)).eq(true);
    expect(deepEqual(1, 2)).eq(false);
    expect(deepEqual(+0, -0)).eq(true);
    expect(deepEqual(true, true)).eq(true);
    expect(deepEqual(true, false)).eq(false);
    expect(deepEqual(true, false)).eq(false);
    expect(deepEqual(undefined, undefined)).eq(true);
    expect(deepEqual(undefined, undefined)).eq(true);
    expect(deepEqual(undefined, null)).eq(false);
    expect(deepEqual(NaN, NaN)).eq(true);
    expect(deepEqual(Symbol('foo'), Symbol('foo'))).eq(true);
    expect(deepEqual(Symbol('foo'), Symbol('bar'))).eq(false);
  });

  it('array', () => {
    expect(deepEqual([], [])).eq(true);
    expect(deepEqual([1], [1, '1'])).eq(false);
    // TODO
    expect(deepEqual(['1', 1], [1, '1'])).eq(false);
  });

  it('Date', () => {
    expect(deepEqual(new Date('2023-8-31'), new Date('2023-8-31'))).eq(true);
    expect(deepEqual(new Date('2023-8-30'), new Date('2023-8-31'))).eq(false);
  });
  
  it('Object', () => {
    expect(deepEqual({ foo: 'foo', bar: { name: 'bar' } }, { foo: 'foo', bar: { name: 'bar' } })).eq(true);
    expect(deepEqual({ foo: 'foo', bar: { name: 'foo' } }, { foo: 'foo', bar: { name: 'bar' } })).eq(false);
    expect(deepEqual([{ foo: { bar: ['baz'] } }, { bar: 'baz' }], [{ foo: { bar: ['baz'] } }, { bar: 'baz' }])).eq(true);
    expect(deepEqual([{ foo: { bar: ['baz'] } }, { bar: 'baz' }], [{ foo: { bar: ['bar'] } }, { bar: 'baz' }])).eq(false);
  });
});
