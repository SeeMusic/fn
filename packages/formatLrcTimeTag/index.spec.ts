import { describe, it, expect } from 'vitest';

import formatLrcTimeTag from './index';

describe('media / formatLrcTimeTag', () => {
  it('没有小数位', () => {
    expect(formatLrcTimeTag(100)).toBe('[01:40.00]');
  });

  it('0', () => {
    expect(formatLrcTimeTag(0)).toBe('[00:00.00]');
  });

  it('小于 1 分钟', () => {
    expect(formatLrcTimeTag(50.123)).toBe('[00:50.12]');
  });

  it('大于 1 分钟', () => {
    expect(formatLrcTimeTag(100.678)).toBe('[01:40.68]');
  });

  it('类型为 word', () => {
    expect(formatLrcTimeTag(100.0123, {
      type: 'word'
    })).toBe('<01:40.01>');
  });

  it('保留小数 3 位', () => {
    expect(formatLrcTimeTag(100.456, {
      digits: 3
    })).toBe('[01:40.456]');
  });
});
