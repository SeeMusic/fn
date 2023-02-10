/**
 * 数字转成 00 的显示格式
 * @param {number} sourceNumber
 */
const padLeadingZero = (sourceNumber: number): string => {
  return sourceNumber < 10 ? `0${sourceNumber}` : `${sourceNumber}`;
}

export default padLeadingZero;
