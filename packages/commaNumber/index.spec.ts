import { describe, it, expect } from 'vitest';

import commaNumber from './index';

describe('util / commaNumber', () => {
  it('小数', () => {
    expect(commaNumber(1.23456789)).toBe('1.23456789')
  })

  it('整数', () => {
    expect(commaNumber(0)).toBe('0')
    expect(commaNumber(100)).toBe('100')
    expect(commaNumber(1000)).toBe('1,000')
    expect(commaNumber(10000)).toBe('10,000')
    expect(commaNumber(100000)).toBe('100,000')
    expect(commaNumber(-12345678)).toBe('-12,345,678')
    expect(commaNumber(123456789)).toBe('123,456,789')
  })

  it('负数', () => {
    expect(commaNumber(-12345678)).toBe('-12,345,678')
    expect(commaNumber(-1.23456789)).toBe('-1.23456789')
  })
})
