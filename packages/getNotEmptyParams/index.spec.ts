import { describe, it, expect } from 'vitest';

import { getNotEmptyParams } from './index';

describe('getNotEmptyParams', () => {
  it('undefined or null', () => {
    expect(getNotEmptyParams({ foo: undefined })).toStrictEqual({});
    expect(getNotEmptyParams({ foo: null })).toStrictEqual({});
  });
  it('字符串', () => {
    expect(getNotEmptyParams({ foo: '' })).toStrictEqual({});
    expect(getNotEmptyParams({ foo: 'foo' })).toStrictEqual({ foo: 'foo'  });
  });
  it('数组', () => {
    expect(getNotEmptyParams({ foo: [] })).toStrictEqual({});
    expect(getNotEmptyParams({ foo: [0, '', {}, 'foo'] })).toStrictEqual({ foo: [0, '', {}, 'foo'] });
  });
  it('对象', () => {
    expect(getNotEmptyParams({ foo: {} })).toStrictEqual({});
    expect(getNotEmptyParams({ foo: { foo: 'bar'} })).toStrictEqual({ foo: { foo: 'bar'} });
  });

  it('options', () => {
    expect(getNotEmptyParams({ foo: '', arr: [], obj: {} }, {})).toStrictEqual({});
    expect(getNotEmptyParams({ foo: '', arr: [], obj: {} }, { filterEmptyString: false })).toStrictEqual({ foo: '' });
    expect(getNotEmptyParams({ foo: '', arr: [], obj: {} }, { filtersEmptyArray: false })).toStrictEqual({ arr: [] });
    expect(getNotEmptyParams({ foo: '', arr: [], obj: {} }, { filtersEmptyObject: false })).toStrictEqual({ obj: {} });
  });
})
