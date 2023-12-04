import { EmptyTextOriginValueType } from '@packages/formatEmptyText/typing';
import { isString } from '..';

/**
 * 字符串转数字
 * @param {string | undefined | null} target
 * @param {number | string} defaultValue 默认值
 * @returns {number}
 */
const safeParseInt = (target: EmptyTextOriginValueType, defaultValue: string | number = 0 ) => {
  try {
    if (!target) {
      return defaultValue;
    }
    if (isString(target)) {
      const unsignedString = target.replace(/^-([^-]+)/g,'$1');
      const maxStr = Number.MAX_SAFE_INTEGER.toString();
      if (unsignedString.length > maxStr.length || (unsignedString.length >= maxStr.length && unsignedString > maxStr)) {
        return defaultValue;
      }
    }
    const res = parseInt(target.toString(), 10);
    return Number.isNaN(res) ? defaultValue : res;
  } catch (error) {
    return defaultValue;
  }
};

export default safeParseInt;
