import type { EmptyTextOriginValueType } from './typing';

/**
 * 格式化空文本
 * @param { EmptyTextOriginValueType } value 原始值
 * @param { string } placeholder 占位符
 *
 * @example '' => '-'
 */

const formatEmptyText = (value: EmptyTextOriginValueType, placeholder: string = '-') => {
  const isEmpty = [null, '', undefined].includes(value);

  return isEmpty ? placeholder : value;
}

export default formatEmptyText;
