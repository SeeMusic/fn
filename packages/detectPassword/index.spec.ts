import { describe, it, expect } from 'vitest';

import detectPassword from './index';

describe('detectPassword', () => {
  it('不符合密码规则', () => {
    expect(detectPassword('kanjian', 6, 10)).toBe(false);
  })

  it('大于最长长度', () => {
    expect(detectPassword('kanjian1234', 6, 10)).toBe(false);
  })

  it('小于最短长度', () => {
    expect(detectPassword('kan12', 6, 20)).toBe(false);
  })

  it('符合规则', () => {
    expect(detectPassword('kanjian123', 6, 20)).toBe(true);
  })
})
