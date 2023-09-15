import { describe, it, expect } from 'vitest';

import nl2br from './index';

describe('media / formatSeconds', () => {
  it('没有换行符，原样输出', () => {
    expect(nl2br('abcdefg')).toBe('abcdefg');
  });

  it('包含换行符', () => {
    expect(nl2br('abc\ndef')).toBe('abc<br>def');
  });
});

describe('empty content', () => {
  it('empty string', () => {
    expect(nl2br('')).toBe('-');
  });

  it('null', () => {
    expect(nl2br(null)).toBe('-');
  });

  it('placeholder', () => {
    expect(nl2br(null, '/')).toBe('/');
  });
});
