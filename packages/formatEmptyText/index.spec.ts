import { describe, it, expect } from 'vitest';

import formatEmptyText from './index';

describe('util / formatEmptyText', () => {
  it('传入空字符串', () => {
    expect(formatEmptyText('')).toBe('-')
  })

  it('传入null', () => {
    expect(formatEmptyText(null, '-')).toBe('-')
  })

  it('传入undefined', () => {
    expect(formatEmptyText(undefined, '-')).toBe('-')
  })
})
