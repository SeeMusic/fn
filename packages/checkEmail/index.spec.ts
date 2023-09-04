import { describe, it, expect } from 'vitest';

import checkEmail from './index';

describe('checkEmail', () => {
  it('默认规则', () => {
    expect(checkEmail('zhangsan@kanjian.com')).toBe(true);
    expect(checkEmail(' zhangsan@kanjian.com')).toBe(false);
    expect(checkEmail('zhang-san@kanjian.com')).toBe(true);
    expect(checkEmail('zhangsan-@kanjian.com')).toBe(false);
    expect(checkEmail('zhang-san@kanjian.cn')).toBe(true);
    expect(checkEmail('zhangsankanjian.com')).toBe(false);
    expect(checkEmail('zhangsan@kanjiancom')).toBe(false);
    expect(checkEmail('zhangsan@.com')).toBe(false);
    expect(checkEmail('zhangsan@kanjian.c')).toBe(false);
    expect(checkEmail('zhangsan@.comcom')).toBe(false);
  });
  it('自定义规则', () => {
    expect(checkEmail('zhangsan@kanjian.com', /^[a-zA-Z0-9]+@([a-zA-Z0-9]+\.)+com$/)).toBe(true);
    expect(checkEmail('zhangsan@kanjian.cn', /^[a-zA-Z0-9]+@([a-zA-Z0-9]+\.)+com$/)).toBe(false);
  });
})
