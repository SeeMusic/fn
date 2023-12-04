import { describe, it, expect } from 'vitest';

import checkAccount from './index';

describe('checkAccount', () => {
  it('correct case', () => {
    expect(checkAccount('seemusic')).toBe(true);
    expect(checkAccount('1seemusic')).toBe(true);
    expect(checkAccount('hi seemusic')).toBe(true);
  });
  it('only number', () => {
    expect(checkAccount('123')).toBe(false);
  });
  it('has Chinese', () => {
    expect(checkAccount('嗨，seemusic')).toBe(false);
  });
  it('has "@"', () => {
    expect(checkAccount('@seemusic')).toBe(false);
  });
});
