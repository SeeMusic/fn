import { describe, it, expect } from 'vitest';

import markSensitiveData from '.';

describe('util / markSensitiveData', () => {
  it('前后平均隐藏： 第 0 个开始保留最后 0 个', () => {
    expect(markSensitiveData('0123456789', 0)).toBe('**********')
  })

  it('前后平均隐藏： 第 1 个开始保留最后 1 个', () => {
    expect(markSensitiveData('0123456789', 1)).toBe('0********9')
  })

  it('前后平均隐藏： 负数不处理', () => {
    expect(markSensitiveData('0123456789', -1)).toBe('0123456789')
  })

  it('前后平均隐藏： 传入长度大于目标长度不处理', () => {
    expect(markSensitiveData('0123456789', 6)).toBe('0123456789')
  })

  it('前后平均隐藏： 传入长度等于目标长度不处理', () => {
    expect(markSensitiveData('0123456789', 5)).toBe('0123456789')
  })

  it('前后平均隐藏： 自定义符号', () => {
    expect(markSensitiveData('0123456789', 3, '', '!')).toBe('012!!!!789')
  })

  it('前后平均隐藏(邮箱)： 第 0 个开始保留最后 0 个', () => {
    expect(markSensitiveData('0123456789@qq.com', 0, 'email')).toBe('**********@qq.com')
  })

  it('前后平均隐藏(邮箱)： 第 1 个开始保留最后 1 个', () => {
    expect(markSensitiveData('0123456789@qq.com', 1, 'email')).toBe('0********9@qq.com')
  })

  it('前后平均隐藏(邮箱)： 负数不处理', () => {
    expect(markSensitiveData('0123456789@qq.com', -1, 'email')).toBe('0123456789@qq.com')
  })

  it('前后平均隐藏(邮箱)： 传入长度大于目标长度不处理', () => {
    expect(markSensitiveData('0123456789@qq.com', 6, 'email')).toBe('0123456789@qq.com')
  })

  it('前后平均隐藏(邮箱)： 传入长度等于目标长度不处理', () => {
    expect(markSensitiveData('0123456789@qq.com', 5, 'email')).toBe('0123456789@qq.com')
  })

  it('前后平均隐藏(邮箱)： 自定义符号', () => {
    expect(markSensitiveData('0123456789@qq.com', 3, 'email', '?')).toBe('012????789@qq.com')
  })


  it('自定义隐藏： 第 0 个开始保留最后 0 个', () => {
    expect(markSensitiveData('0123456789', { left: 0, right: 0 })).toBe('**********')
  })

  it('自定义隐藏： 第 0 个开始保留最后 1 个', () => {
    expect(markSensitiveData('0123456789', { left: 0, right: 1 })).toBe('*********9')
  })

  it('自定义隐藏： 第 1 个开始保留最后 0 个', () => {
    expect(markSensitiveData('0123456789', { left: 1, right: 0 })).toBe('0*********')
  })

  it('自定义隐藏： 第 3 个开始保留最后 4 个', () => {
    expect(markSensitiveData('0123456789', { left: 3, right: 4 })).toBe('012***6789')
  })

  it('自定义隐藏： l + r 大于目标长度不处理', () => {
    expect(markSensitiveData('0123456789', { left: 6, right: 5 })).toBe('0123456789')
  })

  it('自定义隐藏： l + r 等于目标长度不处理', () => {
    expect(markSensitiveData('0123456789', { left: 5, right: 5 })).toBe('0123456789')
  })

  it('自定义隐藏： l 负数不处理', () => {
    expect(markSensitiveData('0123456789', { left: -1, right: 5 })).toBe('0123456789')
  })

  it('自定义隐藏： r 负数不处理', () => {
    expect(markSensitiveData('0123456789', { left: 1, right: -4 })).toBe('0123456789')
  })

  it('自定义隐藏： 自定义符号', () => {
    expect(markSensitiveData('0123456789', { left: 2, right: 4 }, '', '@%')).toBe('01@%@%@%@%6789')
  })

  it('自定义隐藏(邮箱)： 第 0 个开始保留最后 0 个', () => {
    expect(markSensitiveData('0123456789@gmail.com', { left: 0, right: 0 }, 'email')).toBe('**********@gmail.com')
  })

  it('自定义隐藏(邮箱)： 第 0 个开始保留最后 1 个', () => {
    expect(markSensitiveData('0123456789@gmail.com', { left: 0, right: 1 }, 'email')).toBe('*********9@gmail.com')
  })

  it('自定义隐藏(邮箱)： 第 1 个开始保留最后 0 个', () => {
    expect(markSensitiveData('0123456789@gmail.com', { left: 1, right: 0 }, 'email')).toBe('0*********@gmail.com')
  })

  it('自定义隐藏(邮箱)： 第 3 个开始保留最后 4 个', () => {
    expect(markSensitiveData('0123456789@gmail.com', { left: 3, right: 4 }, 'email')).toBe('012***6789@gmail.com')
  })

  it('自定义隐藏(邮箱)： l + r 大于目标长度不处理', () => {
    expect(markSensitiveData('0123456789@gmail.com', { left: 6, right: 5 }, 'email')).toBe('0123456789@gmail.com')
  })

  it('自定义隐藏(邮箱)： l + r 等于目标长度不处理', () => {
    expect(markSensitiveData('0123456789@gmail.com', { left: 5, right: 5 }, 'email')).toBe('0123456789@gmail.com')
  })

  it('自定义隐藏(邮箱)： l 负数不处理', () => {
    expect(markSensitiveData('0123456789@gmail.com', { left: -1, right: 5 }, 'email')).toBe('0123456789@gmail.com')
  })

  it('自定义隐藏(邮箱)： r 负数不处理', () => {
    expect(markSensitiveData('0123456789@gmail.com', { left: 1, right: -4 }, 'email')).toBe('0123456789@gmail.com')
  })

  it('自定义隐藏(邮箱)： 自定义符号', () => {
    expect(markSensitiveData('0123456789@gmail.com', { left: 2, right: 4 }, 'email', '@')).toBe('01@@@@6789@gmail.com')
  })
})
