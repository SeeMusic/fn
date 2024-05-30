import { getType, isObject } from '..';

/**
 * 判断两个变量值是否相等
 *
 * @example
 */
const deepEqual = (x: unknown, y: unknown) => {
  if (x === y) { // 值类型
    return true;
  } else if (x !== x && y !== y) { // NaN
    return true;
  } else if (isObject(x) && isObject(y)) { // 对象类型
    const _x = x as object;
    const _y = y as object;
    if (Object.keys(_x).length !== Object.keys(_y).length) {
      return false;
    }
    for (const prop in _x) {
      if (Object.prototype.hasOwnProperty.call(_y, prop)) {
        if (!deepEqual(_x[prop as keyof typeof _x], _y[prop as keyof typeof _x])) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  } else if (Array.isArray(x) && Array.isArray(y)) { // 数组
    if (x.length !== y.length) {
      return false;
    } else {
      for (let i = 0; i < x.length; i++) {
        if (!deepEqual(x[i], y[i])) {
          return false;
        }
      }
      return true;
    }
  } else if (getType(x) === 'Date' && getType(y) === 'Date') { // 日期时间
    return (x as Date).getTime() === (y as Date).getTime();
  } else if (getType(x) === 'Symbol' && getType(y) === 'Symbol') { // Symbol
    return (x as symbol).toString() === (y as symbol).toString();
  } else if (getType(x) === 'RegExp' && getType(y) === 'RegExp') { // RegExp
    return (x as RegExp).toString() === (y as RegExp).toString();
  } else if (getType(x) === 'Function' && getType(y) === 'Function') { // RegExp
    // eslint-disable-next-line @typescript-eslint/ban-types
    return (x as Function).toString() === (y as Function).toString();
  } else {
    return false;
  }
};

export default deepEqual;
