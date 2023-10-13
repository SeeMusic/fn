import { isString, isObject, isUndefined, isNull, isEmpty } from '..';

/**
 * axios空值参数过滤(只过滤第一层)
 * @param params 参数对象
 * @param options 是否过滤空字符串、空数组、空对象（默认全都过滤）
 * @returns
 */
const filterEmptyParams = <T extends object>(params: T, options?: {
  excludes?: (keyof T)[],
  filterEmptyString?: boolean,
  filtersEmptyArray?: boolean,
  filtersEmptyObject?: boolean
}) => {
  const result: Partial<T> = {};
  const keys = Object.keys(params) as (keyof T)[];
  for (let i = 0; i < keys.length; i++) {
    const value = params[keys[i]];
    if (options?.excludes?.includes(keys[i])) {
      result[keys[i]] = value;
      continue;
    } else if (isUndefined(value) || isNull(value)) {
      continue;
    } else if (isString(value)) {
      if (isEmpty(value) && (isUndefined(options?.filterEmptyString) || options?.filterEmptyString)) {
        continue;
      }
    } else if (Array.isArray(value)) {
      if (isEmpty(value) && (isUndefined(options?.filtersEmptyArray) || options?.filtersEmptyArray)) {
        continue;
      }
    } else if (isObject(value)) {
      if (isEmpty(value) && (isUndefined(options?.filtersEmptyObject) || options?.filtersEmptyObject)) {
        continue;
      }
    }
    result[keys[i]] = value;
  }
  return result;
};

export default filterEmptyParams;
