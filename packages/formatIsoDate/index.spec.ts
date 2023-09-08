import { describe, it, expect } from 'vitest';

import formatIsoDate from './index';

describe('formatIsoDate', () => {
  it('基础日期', () => {
    expect(formatIsoDate('2000-01-01T00:00:00Z')).toBe('2000.01.01');
  });

  it('自定义格式', () => {
    expect(formatIsoDate('2000-01-01T00:00:00Z', 'YYYY-MM-DD')).toBe('2000-01-01');
  });

  it('时分秒', () => {
    expect(formatIsoDate('2000-01-01T00:00:00Z', 'YYYY.MM.DD HH:mm:ss')).toBe('2000.01.01 08:00:00');
  });

  it('毫秒精度忽略', () => {
    expect(formatIsoDate('2000-01-01T00:00:00.999Z', 'YYYY.MM.DD HH:mm:ss')).toBe('2000.01.01 08:00:00');
  });

  it('原始日期带时区信息(东八区为例)', () => {
    expect(formatIsoDate('2000-01-01T17:30:08+08:00', 'YYYY.MM.DD HH:mm:ss')).toBe('2000.01.01 17:30:08');
  });
});

describe('formatIsoDate: invalid date', () => {
  it('empty string', () => {
    expect(formatIsoDate('')).toBe('-');
  });
  it('undefined', () => {
    expect(formatIsoDate(undefined as unknown as string)).toBe('-');
  });
  it('null', () => {
    expect(formatIsoDate(null as unknown as string)).toBe('-');
  });
  it('placeHolder', () => {
    expect(formatIsoDate('', 'YYYY.MM.DD', '/')).toBe('/');
  });
});
