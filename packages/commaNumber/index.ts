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
  const numberString = `${number}`;

  if (numberString.includes('.')) {
    return numberString;
  }

  return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default commaNumber;
