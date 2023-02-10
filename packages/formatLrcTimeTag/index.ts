import formatSeconds from '../formatSeconds';
import type { LrcTimeTagOption } from './typing';

// 默认选项
const defaultOptions: LrcTimeTagOption = {
  type: 'line',
  digits: 2,
}

/**
 * 格式化 LRC 歌词的 Line Time Tag
 * @param {number} seconds 原始时间
 * @param {LrcTimeTagOption} options
 *
 * @example 100.0123 => 01:40.012
 */
const formatLrcTimeTag = (
  seconds: number,
  options?:LrcTimeTagOption
): string => {
  const customOption = Object.assign({}, defaultOptions, options);

  const int = ~~seconds;
  const float = (seconds % 1).toFixed(customOption.digits).substring(2);

  if (customOption.type === 'line') {
    return `[${formatSeconds(int)}.${float}]`;
  } else {
    return `<${formatSeconds(int)}.${float}>`;
  }
};

export default formatLrcTimeTag;
