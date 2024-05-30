/**
 * 深拷贝方法
 *
 * @example
 */

import { isObject } from '..';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const deepClone = (target: any, hash = new WeakMap()): typeof target => {
  if (target instanceof Date) { return new Date(target); }

  if (target instanceof RegExp) { return new RegExp(target); }

  if (target instanceof Array) {
    return target.map((item) => deepClone(item, hash));
  }

  if (target instanceof Function) {
    return new Function('return ' + target.toString())();
  }

  if (isObject(target)) {
    if (hash.get(target)) { return hash.get(target); }
    const cloneTarget = new target.constructor();
    hash.set(target, cloneTarget);

    Reflect.ownKeys(target).forEach((key) => {
      cloneTarget[key] = deepClone(target[key], hash);
    });
    return cloneTarget;
  }
  return target;
};

export default deepClone;
