/**
 * 类型判断方法
 */

function getType (val: unknown) {
  return Object.prototype.toString.call(val).replace(/^\[object (\S+)\]$/, '$1');
}

function isString(val: unknown) {
  return getType(val) === 'String';
}

function isNumber(val: unknown) {
  return getType(val) === 'Number';
}

function isStringNumber(val: unknown) {
  if (!isString(val)) {
    return false;
  }
  return !Number.isNaN(Number(val));
}

function isObject(val: unknown) {
  return getType(val) === 'Object';
}

function isUndefined(val: unknown) {
  return getType(val) === 'Undefined';
}

function isNull(val: unknown) {
  return getType(val) === 'Null';
}

function isEmpty(val: unknown) {
  let res = false;
  if (isUndefined(val) || isNull(val)) {
    res = true;
  } else if (Array.isArray(val)) {
    res = !val.length;
  } else if (isObject(val)) {
    res = !Object.keys(val as object).length;
  } else if (isString(val)) {
    res = !val;
  }
  return res;
}

export default {
  getType,
  isString,
  isNumber,
  isStringNumber,
  isObject,
  isUndefined,
  isNull,
  isEmpty
};
