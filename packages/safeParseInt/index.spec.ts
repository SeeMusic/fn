import { describe, it, expect } from 'vitest';

import safeParseInt from './index';

describe('safeParseInt', () => {
  it('默认规则', () => {
    expect(safeParseInt('0')).toBe(0);
    expect(safeParseInt('1')).toBe(1);
    expect(safeParseInt('-1')).toBe(-1);
    expect(safeParseInt('a')).toBe(0);
    expect(safeParseInt('a1')).toBe(0);
    expect(safeParseInt('')).toBe(0);
    expect(safeParseInt(undefined)).toBe(0);
    expect(safeParseInt(null)).toBe(0);
  });
  it('自定义defaultValue', () => {
    const defaultValue = 2099;
    expect(safeParseInt('0', defaultValue)).toBe(0);
    expect(safeParseInt('1', defaultValue)).toBe(1);
    expect(safeParseInt('-1', defaultValue)).toBe(-1);
    expect(safeParseInt('a', defaultValue)).toBe(defaultValue);
    expect(safeParseInt('a1', defaultValue)).toBe(defaultValue);
    expect(safeParseInt('', defaultValue)).toBe(defaultValue);
    expect(safeParseInt(undefined, '-')).toBe('-');
    expect(safeParseInt(null, '/')).toBe('/');
  });
  it('bigger number', () => {
    expect(safeParseInt('9007199254740991')).toBe(9007199254740991);
    expect(safeParseInt('9007199254740992')).toBe(0);
    expect(safeParseInt('19007199254740991')).toBe(0);
    expect(safeParseInt('-9007199254740992')).toBe(0);
    expect(safeParseInt('-19007199254740991')).toBe(0);
    expect(safeParseInt('99')).toBe(99);
    expect(safeParseInt('-999')).toBe(-999);
  });
});
