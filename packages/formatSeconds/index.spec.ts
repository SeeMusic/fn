import { describe, it, expect } from 'vitest';

import formatSeconds from './index';

describe('media / formatSeconds', () => {
  it('小于 1 分钟', () => {
    expect(formatSeconds(40)).toBe('00:40');
  });

  it('等于 1 分钟', () => {
    expect(formatSeconds(60)).toBe('01:00');
  });

  it('大于 1 分钟', () => {
    expect(formatSeconds(100)).toBe('01:40');
  });

  it('大于 10 分钟', () => {
    expect(formatSeconds(650)).toBe('10:50');
  });

  it('大于 99 分钟', () => {
    expect(formatSeconds(6050)).toBe('100:50');
  });
});
