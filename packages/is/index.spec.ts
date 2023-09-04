import { describe, it, expect } from 'vitest';

import {getType, isString, isNumber, isStringNumber, isObject, isUndefined, isNull, isEmpty} from './index';

describe('is', () => {
  it('getType', () => {
    expect(getType('0')).toBe('String');
    expect(getType(0)).toBe('Number');
    expect(getType(NaN)).toBe('Number');
    expect(getType(Symbol())).toBe('Symbol');
    expect(getType([])).toBe('Array');
    expect(getType({})).toBe('Object');
    expect(getType(true)).toBe('Boolean');
    expect(getType(undefined)).toBe('Undefined');
    expect(getType(null)).toBe('Null');
    expect(getType((() => {}))).toBe('Function');
    expect(getType((new RegExp('')))).toBe('RegExp');
    expect(getType((new Date()))).toBe('Date');
  });

  it('isString', () => {
    expect(isString('')).toBe(true);
    expect(isString(new String())).toBe(true);
  });

  it('isNumber', () => {
    expect(isNumber(0)).toBe(true);
    expect(isNumber(new Number())).toBe(true);
    expect(isNumber(NaN)).toBe(true);
  });

  it('isStringNumber', () => {
    expect(isStringNumber('0')).toBe(true);
    expect(isStringNumber('-1')).toBe(true);
    expect(isStringNumber('1')).toBe(true);
    expect(isStringNumber('NaN')).toBe(false);
    expect(isStringNumber('100 ')).toBe(true);
    expect(isStringNumber('100a')).toBe(false);
  });

  it('isObject', () => {
    expect(isObject({})).toBe(true);
    expect(isObject(new Object())).toBe(true);
    expect(isObject(() => {})).toBe(false);
    expect(isObject(new Date())).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
  });

  it('isUndefined', () => {
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined('')).toBe(false);
  });

  it('isNull', () => {
    expect(isNull(undefined)).toBe(false);
    expect(isNull(null)).toBe(true);
    expect(isNull('')).toBe(false);
  });

  it('isEmpty', () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({foo: 'foo'})).toBe(false);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty(['foo'])).toBe(false);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty('aaa')).toBe(false);
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });
})
