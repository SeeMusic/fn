export function getType (val: unknown) {
  return Object.prototype.toString.call(val).replace(/^\[object (\S+)\]$/, '$1');
}

export function isString(val: unknown) {
  return getType(val) === 'String'
};

export function isNumber(val: unknown) {
  return getType(val) === 'Number'
};

export function isStringNumber(val: unknown) {
  if (!isString(val)) {
    return false;
  }
  return !Number.isNaN(Number(val));
};

export function isObject(val: unknown) {
  return getType(val) === 'Object'
};

export function isUndefined(val: unknown) {
  return getType(val) === 'Undefined'
};

export function isNull(val: unknown) {
  return getType(val) === 'Null'
};

export function isEmpty(val: unknown) {
  let res = false;
  if (isUndefined(val) || isNull(val)) {
    res = true;
  }else if (Array.isArray(val)) {
    res = !val.length;
  } else if (isObject(val)) {
    res = !Object.keys(val as Object).length;
  } else if (isString(val)) {
    res = !val;
  }
  return res;
}