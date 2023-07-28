/**
 * 逗号分割数字
 * @param {number} 原始数字
 *
 * @example
 * -123456789 => '-123,456,789'
 * 123456789 => '123,456,789'
 * 1.23456789 => '1.23456789'
 */
const commaNumber = (number: number): string=> {
  // eslint-disable-next-line prefer-const
  let [integer, fraction] = number.toString().split('.');

  integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  if (fraction) {
    return `${integer}.${fraction}`;
  }

  return integer;
};

export default commaNumber;
