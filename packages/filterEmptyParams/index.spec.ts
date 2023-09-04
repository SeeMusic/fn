import { describe, it, expect } from 'vitest';

import filterEmptyParams from './index';

describe('filterEmptyParams', () => {
  it('undefined or null', () => {
    expect(filterEmptyParams({ foo: undefined })).toStrictEqual({});
    expect(filterEmptyParams({ foo: null })).toStrictEqual({});
  });
  it('字符串', () => {
    expect(filterEmptyParams({ foo: '' })).toStrictEqual({});
    expect(filterEmptyParams({ foo: 'foo' })).toStrictEqual({ foo: 'foo'  });
  });
  it('数组', () => {
    expect(filterEmptyParams({ foo: [] })).toStrictEqual({});
    expect(filterEmptyParams({ foo: [0, '', {}, 'foo'] })).toStrictEqual({ foo: [0, '', {}, 'foo'] });
  });
  it('对象', () => {
    expect(filterEmptyParams({ foo: {} })).toStrictEqual({});
    expect(filterEmptyParams({ foo: { foo: 'bar' } })).toStrictEqual({ foo: { foo: 'bar' } });
  });

  it('options', () => {
    expect(filterEmptyParams({ foo: '', arr: [], obj: {} }, {})).toStrictEqual({});
    expect(filterEmptyParams({ foo: '', arr: [], obj: {} }, { filterEmptyString: false })).toStrictEqual({ foo: '' });
    expect(filterEmptyParams({ foo: '', arr: [], obj: {} }, { filtersEmptyArray: false })).toStrictEqual({ arr: [] });
    expect(filterEmptyParams({ foo: '', arr: [], obj: {} }, { filtersEmptyObject: false })).toStrictEqual({ obj: {} });
  });
});
