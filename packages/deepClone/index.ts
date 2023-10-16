/**
 * 深拷贝方法
 *
 * @example
 */

import { isObject } from '..';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const deepClone = (target: any, hash = new WeakMap()) => {
  if (target instanceof Date) { return new Date(target); }

  if (!isObject(target)) { return target; }

  if (hash.get(target)) { return hash.get(target); }
  const cloneTarget = new target.constructor();
  hash.set(target, cloneTarget);

  Reflect.ownKeys(target).forEach((key) => {
    cloneTarget[key] = deepClone(target[key], hash);
  });
  return cloneTarget;
};

export default deepClone;
