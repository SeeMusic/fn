import { describe, it, expect } from 'vitest';

import checkPassword from './index';

describe('checkPassword', () => {
  it('不符合密码规则', () => {
    expect(checkPassword('kanjian', /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/)).toBe(false);
  })

  it('大于最长长度', () => {
    expect(checkPassword('kanjian1234', /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/)).toBe(false);
  })

  it('小于最短长度', () => {
    const rule = new RegExp(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/);

    expect(checkPassword('kan12', rule)).toBe(false);
  })

  it('符合规则', () => {
    expect(checkPassword('kanjian123')).toBe(true);
  })
})
