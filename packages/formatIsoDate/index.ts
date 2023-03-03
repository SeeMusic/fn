import dayjs from 'dayjs';

/**
 * 格式化带时区的 ISO 8601 时间为当地时间文本
 * @param {string} date ISO 8601 时间
 * @param {string} formatter 格式，默认 'YYYY.MM.DD'
 * @docs https://day.js.org/docs/zh-CN/display/format
 */
const formatIsoDate = (date: string, formatter = 'YYYY.MM.DD'): string => dayjs(date).format(formatter);

export default formatIsoDate;
