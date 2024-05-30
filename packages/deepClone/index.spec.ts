import { describe, it, expect } from 'vitest';
import { deepClone, deepEqual, getType } from '..';
import { deepCopyFunction } from '.';

describe('deepClone', () => {

  it('primivates', () => {
    expect(deepClone('2023-08-30T16:00:00.000Z')).toBe('2023-08-30T16:00:00.000Z');
    expect(deepClone(1)).toBe(1);
    expect(deepEqual(Symbol('foo'), Symbol('foo'))).toBe(true);
    expect(deepClone(true)).toBe(true);
    expect(deepClone(NaN)).toBe(NaN);
    expect(deepClone(null)).toBe(null);
  });

  it('array', () => {
    expect(deepEqual(deepClone(['foo', 'bar']), ['foo', 'bar'])).eq(true);
    const arr = ['foo', 'bar', { name: 'baz' }];
    const copiedArr = deepClone(arr);
    copiedArr[0] = 'foo-bar';
    copiedArr[2].name = 'baz-bar';
    expect(deepEqual(arr, ['foo', 'bar', { name: 'baz' }])).eq(true);
    const reg = { regexp: /\d+/g };
    expect(deepEqual(reg, deepClone(reg))).eq(true);
    const foo = (a: number, b: number) => a + b;
    expect(deepEqual(foo, deepClone(foo))).eq(true);
  });

  it('Date', () => {
    expect(deepEqual(deepClone(new Date('2023-8-31')), new Date('2023-8-31'))).eq(true);
  });

  it('Object', () => {
    const obj = { foo: 'foo', bar: { name: 'bar', baz: [{ name: 'baz' }] } };
    expect(deepEqual(deepClone(obj), obj)).eq(true);
  });
});
