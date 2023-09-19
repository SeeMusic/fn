import { deepEqual, isObject } from '..';

/**
 * 判断两个对象的指定字段值是否相等
 *
 * @example
 */
const deepEqualWithKeys = (x: Record<string, unknown>, y: Record<string, unknown>, keys: string[]) => {
  const _keys = keys.filter(key => Object.prototype.hasOwnProperty.call(x, key) || Object.prototype.hasOwnProperty.call(y, key));
  if (!_keys.length) {
    return deepEqual(x, y);
  }
  
  if (isObject(x) && isObject(y)) {
    for (const key of _keys) {
      if (!deepEqual(x[key], y[key])) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
};

export default deepEqualWithKeys;
