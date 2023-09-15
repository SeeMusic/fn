import dayjs from 'dayjs';

/**
 * 格式化带时区的 ISO 8601 时间为当地时间文本
 * @param {string | undefined | null} date ISO 8601 时间
 * @param {string} formatter 格式，默认 'YYYY.MM.DD'
 * @param {string} placeholder date为空时的占位符，默认 '-'
 * @docs https://day.js.org/docs/zh-CN/display/format
 */
const formatIsoDate = (date: string | undefined | null, formatter = 'YYYY.MM.DD', placeholder = '-'): string => {
  return date ? dayjs(date).format(formatter): placeholder;
};

export default formatIsoDate;
