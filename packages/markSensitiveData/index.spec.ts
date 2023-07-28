import { describe, it, expect } from 'vitest';

import markSensitiveData from '.';

describe('util / markSensitiveData', () => {
  it('指定字符串两边保留字符个数：前后保留 0 位', () => {
    expect(markSensitiveData('0123456789', 0)).toBe('**********');
  });

  it('指定字符串两边保留字符个数：前后保留 1 位', () => {
    expect(markSensitiveData('0123456789', 1)).toBe('0********9');
  });

  it('指定字符串两边保留字符个数： 负数不处理', () => {
    expect(markSensitiveData('0123456789', -1)).toBe('0123456789');
  });

  it('指定字符串两边保留字符个数： 传入长度大于目标长度不处理', () => {
    expect(markSensitiveData('0123456789', 6)).toBe('0123456789');
  });

  it('指定字符串两边保留字符个数： 传入长度等于目标长度不处理', () => {
    expect(markSensitiveData('0123456789', 5)).toBe('0123456789');
  });


  it('自定义字符串保留个数： 前后保留 0 位', () => {
    expect(markSensitiveData('0123456789', { headRetainCharCount: 0, tailRetainCharCount: 0 })).toBe('**********');
  });

  it('自定义字符串保留个数： 前面保留 0 位，后面保留 1 位', () => {
    expect(markSensitiveData('0123456789', { headRetainCharCount: 0, tailRetainCharCount: 1 })).toBe('*********9');
  });

  it('自定义字符串保留个数： 前面保留 1 位，后面保留 0 位', () => {
    expect(markSensitiveData('0123456789', { headRetainCharCount: 1, tailRetainCharCount: 0 })).toBe('0*********');
  });

  it('自定义字符串保留个数： 前面保留 3 位，后面保留 4 位', () => {
    expect(markSensitiveData('0123456789', { headRetainCharCount: 3, tailRetainCharCount: 4 })).toBe('012***6789');
  });

  it('自定义字符串保留个数： headRetainCharCount + tailRetainCharCount 大于目标长度不处理', () => {
    expect(markSensitiveData('0123456789', { headRetainCharCount: 6, tailRetainCharCount: 5 })).toBe('0123456789');
  });

  it('自定义字符串保留个数： headRetainCharCount + tailRetainCharCount 等于目标长度不处理', () => {
    expect(markSensitiveData('0123456789', { headRetainCharCount: 5, tailRetainCharCount: 5 })).toBe('0123456789');
  });

  it('自定义字符串保留个数： headRetainCharCount 负数不处理', () => {
    expect(markSensitiveData('0123456789', { headRetainCharCount: -1, tailRetainCharCount: 5 })).toBe('0123456789');
  });

  it('自定义字符串保留个数： tailRetainCharCount 负数不处理', () => {
    expect(markSensitiveData('0123456789', { headRetainCharCount: 1, tailRetainCharCount: -4 })).toBe('0123456789');
  });

  it('自定义字符串保留个数： 自定义符号', () => {
    expect(markSensitiveData('0123456789', { headRetainCharCount: 2, tailRetainCharCount: 4, placeholder: '@%' })).toBe('01@%@%@%@%6789');
  });

  it('自定义字符串保留个数(邮箱)： 前后保留 0 位', () => {
    expect(markSensitiveData('0123456789@gmail.com', { headRetainCharCount: 0, tailRetainCharCount: 0, preset: 'email' })).toBe('**********@gmail.com');
  });

  it('自定义字符串保留个数(邮箱)： 前面保留 0 位，后面保留 1 位', () => {
    expect(markSensitiveData('0123456789@gmail.com', { headRetainCharCount: 0, tailRetainCharCount: 1, preset: 'email' })).toBe('*********9@gmail.com');
  });

  it('自定义字符串保留个数(邮箱)： 前面保留 1 位，后面保留 0 位', () => {
    expect(markSensitiveData('0123456789@gmail.com', { headRetainCharCount: 1, tailRetainCharCount: 0, preset: 'email' })).toBe('0*********@gmail.com');
  });

  it('自定义字符串保留个数(邮箱)： 前面保留 3 位，后面保留 4 位', () => {
    expect(markSensitiveData('0123456789@gmail.com', { headRetainCharCount: 3, tailRetainCharCount: 4, preset: 'email' })).toBe('012***6789@gmail.com');
  });

  it('自定义字符串保留个数(邮箱)： headRetainCharCount + tailRetainCharCount 大于目标长度不处理', () => {
    expect(markSensitiveData('0123456789@gmail.com', { headRetainCharCount: 6, tailRetainCharCount: 5, preset: 'email' })).toBe('0123456789@gmail.com');
  });

  it('自定义字符串保留个数(邮箱)： headRetainCharCount + tailRetainCharCount 等于目标长度不处理', () => {
    expect(markSensitiveData('0123456789@gmail.com', { headRetainCharCount: 5, tailRetainCharCount: 5, preset: 'email' })).toBe('0123456789@gmail.com');
  });

  it('自定义字符串保留个数(邮箱)： headRetainCharCount 负数不处理', () => {
    expect(markSensitiveData('0123456789@gmail.com', { headRetainCharCount: -1, tailRetainCharCount: 5, preset: 'email' })).toBe('0123456789@gmail.com');
  });

  it('自定义字符串保留个数(邮箱)： tailRetainCharCount 负数不处理', () => {
    expect(markSensitiveData('0123456789@gmail.com', { headRetainCharCount: 1, tailRetainCharCount: -4, preset: 'email' })).toBe('0123456789@gmail.com');
  });

  it('自定义字符串保留个数(邮箱)： 自定义符号', () => {
    expect(markSensitiveData('0123456789@gmail.com', { headRetainCharCount: 2, tailRetainCharCount: 4, preset: 'email', placeholder: '@' })).toBe('01@@@@6789@gmail.com');
  });
});
