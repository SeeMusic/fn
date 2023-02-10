import { describe, it, expect } from 'vitest';

import padLeadingZero from './index';

describe('util / padLeadingZero', () => {
  it('小于 10', () => {
    expect(padLeadingZero(0)).toBe('00')
  })

  it('等于 10', () => {
    expect(padLeadingZero(10)).toBe('10')
  })

  it('大于 10', () => {
    expect(padLeadingZero(100)).toBe('100')
  })
})
