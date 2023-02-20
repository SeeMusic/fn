import { describe, it, expect } from 'vitest';

import checkPassword from './index';

describe('checkPassword', () => {
  it('不符合密码规则', () => {
    expect(checkPassword('kanjian', {
      rule: '(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]',
      min: 6,
      max: 20,
    })).toBe(false);
  })

  it('大于最长长度', () => {
    expect(checkPassword('kanjian1234', {
      rule: '(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]',
      min: 6,
      max: 10,
    })).toBe(false);
  })

  it('小于最短长度', () => {
    expect(checkPassword('kan12', {
      rule: '(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]',
      min: 6,
      max: 20,
    })).toBe(false);
  })

  it('符合规则', () => {
    expect(checkPassword('kanjian123', {
      min: 6,
      max: 20,
    })).toBe(true);
  })
})
