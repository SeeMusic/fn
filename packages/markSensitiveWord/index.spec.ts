import { describe, it, expect } from 'vitest';

import markSensitiveWord from '.';

describe('media / markSensitiveWord', () => {
  it('前后平均隐藏： 0 个', () => {
    expect(markSensitiveWord('0123456789', 0)).toBe('0123456789')
  })

  it('前后平均隐藏： 2 个', () => {
    expect(markSensitiveWord('0123456789', 2)).toBe('01******89')
  })

  it('前后平均隐藏：最大边界', () => {
    expect(markSensitiveWord('0123456789', 4)).toBe('0123**6789')
  })

  it('前后平均隐藏：最小边界', () => {
    expect(markSensitiveWord('0123456789', 1)).toBe('0********9')
  })

  it('前后平均隐藏：传入长度大于目标长度', () => {
    expect(markSensitiveWord('0123456789', 5)).toBe('0123456789')
  })

  it('前后平均隐藏：负数', () => {
    expect(markSensitiveWord('0123456789', -2)).toBe('0123456789')
  })

  it('前后平均隐藏(邮箱)： 0 个', () => {
    expect(markSensitiveWord('0123456789@qq.com', 0, 'email')).toBe('0123456789@qq.com')
  })

  it('前后平均隐藏(邮箱)： 2 个', () => {
    expect(markSensitiveWord('0123456789@qq.com', 2, 'email')).toBe('01******89@qq.com')
  })

  it('前后平均隐藏(邮箱)：最大边界', () => {
    expect(markSensitiveWord('0123456789@qq.com', 4, 'email')).toBe('0123**6789@qq.com')
  })

  it('前后平均隐藏(邮箱)：最小边界', () => {
    expect(markSensitiveWord('0123456789@qq.com', 1, 'email')).toBe('0********9@qq.com')
  })

  it('前后平均隐藏(邮箱)：传入长度大于目标长度', () => {
    expect(markSensitiveWord('0123456789@qq.com', 5, 'email')).toBe('0123456789@qq.com')
  })

  it('前后平均隐藏(邮箱)：负数', () => {
    expect(markSensitiveWord('0123456789@qq.com', -2, 'email')).toBe('0123456789@qq.com')
  })


  it('前后自定义隐藏： l: 0, r: 0', () => {
    expect(markSensitiveWord('0123456789', { left: 0, right: 0 })).toBe('0123456789')
  })

  it('前后自定义隐藏： l: 1, r: 0', () => {
    expect(markSensitiveWord('0123456789', { left: 1, right: 0 })).toBe('0123456789')
  })

  it('前后自定义隐藏： l: 0, r: 1', () => {
    expect(markSensitiveWord('0123456789', { left: 0, right: 1 })).toBe('0123456789')
  })

  it('前后自定义隐藏： l: 2, r: 3', () => {
    expect(markSensitiveWord('0123456789', { left: 2, right: 3 })).toBe('01*****789')
  })

  it('前后自定义隐藏： 最大边界', () => {
    expect(markSensitiveWord('0123456789', { left: 5, right: 4 })).toBe('01234*6789')
  })

  it('前后自定义隐藏： 最小边界', () => {
    expect(markSensitiveWord('0123456789', { left: 1, right: 1 })).toBe('0********9')
  })

  it('前后自定义隐藏(邮箱)： l: 0, r: 0', () => {
    expect(markSensitiveWord('0123456789@gmail.com', { left: 0, right: 0 }, 'email')).toBe('0123456789@gmail.com')
  })

  it('前后自定义隐藏(邮箱)： l: 1, r: 0', () => {
    expect(markSensitiveWord('0123456789@gmail.com', { left: 1, right: 0 }, 'email')).toBe('0123456789@gmail.com')
  })

  it('前后自定义隐藏(邮箱)： l: 0, r: 1', () => {
    expect(markSensitiveWord('0123456789@gmail.com', { left: 0, right: 1 }, 'email')).toBe('0123456789@gmail.com')
  })

  it('前后自定义隐藏(邮箱)： l: 2, r: 3', () => {
    expect(markSensitiveWord('0123456789@gmail.com', { left: 2, right: 3 }, 'email')).toBe('01*****789@gmail.com')
  })

  it('前后自定义隐藏(邮箱)： 最大边界', () => {
    expect(markSensitiveWord('0123456789@gmail.com', { left: 5, right: 4 }, 'email')).toBe('01234*6789@gmail.com')
  })

  it('前后自定义隐藏(邮箱)： 最小边界', () => {
    expect(markSensitiveWord('0123456789@gmail.com', { left: 1, right: 1 }, 'email')).toBe('0********9@gmail.com')
  })
})
