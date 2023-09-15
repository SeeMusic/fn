import dayjs from 'dayjs';
import { formatEmptyText } from '..';
import { EmptyTextOriginValueType } from '@packages/formatEmptyText/typing';

/**
 * 格式化带时区的 ISO 8601 时间为当地时间文本
 * @param {string | undefined | null} date ISO 8601 时间
 * @param {string} formatter 格式，默认 'YYYY.MM.DD'
 * @param {string} placeholder date为空时的占位符，默认 '-'
 * @docs https://day.js.org/docs/zh-CN/display/format
 */
const formatIsoDate = (date: EmptyTextOriginValueType, formatter = 'YYYY.MM.DD', placeholder = '-'): string => {
  return date ? dayjs(date).format(formatter): formatEmptyText(date, placeholder);
};

export default formatIsoDate;
