import { describe, it, expect } from 'vitest';

import checkPhoneNumber from './index';

describe.only('checkPhoneNumber', () => {
  it('固定电话', () => {
    expect(checkPhoneNumber('021-63570107')).toBe(true);
    expect(checkPhoneNumber('+86021-63570107')).toBe(true);
    expect(checkPhoneNumber('86021-63570107')).toBe(true);
    expect(checkPhoneNumber('02163570107')).toBe(false);
    expect(checkPhoneNumber('0536-7210654')).toBe(true);
    expect(checkPhoneNumber('+860536-7210654')).toBe(true);
    expect(checkPhoneNumber('860536-7210654')).toBe(true);
    expect(checkPhoneNumber('0536 7210654')).toBe(false);
  });
  it('手机号', () => {
    expect(checkPhoneNumber('15056579829')).toBe(true);
    expect(checkPhoneNumber('8615056579829')).toBe(true);
    expect(checkPhoneNumber('+8615056579829')).toBe(true);
    expect(checkPhoneNumber('25056579829')).toBe(false);
    expect(checkPhoneNumber('1505657289')).toBe(false);
    expect(checkPhoneNumber('15x5657289')).toBe(false);
  });

  it('自定义规则', () => {
    expect(checkPhoneNumber('150-5657-9829', /^1[3-9][0-9]-[0-9]{4}-([0-9]{4})$/)).toBe(true);
    expect(checkPhoneNumber('100-5657-9829', /^1[3-9][0-9]-[0-9]{4}-([0-9]{4})$/)).toBe(false);
    expect(checkPhoneNumber('150-5657-9829', /^1[3-9][0-9]-[0-9]{4}-([0-9]{3})$/)).toBe(false);
  });
});
