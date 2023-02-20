/**
 * 密码规则测试函数
 * @param {string} value 原始值
 * @param {number} min 最小长度
 * @param {number} max 最大长度
 *
 * @example
 */
const checkPassword = (
  value: string,
  options: {
    rule?: string,
    min: number,
    max: number,
  } = {
    rule: '(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]',
    min: 6,
    max: 20,
  },
) => {
  console.log(options, 'options');

  const PASSWORD_REGEXP = new RegExp(`^${
    options.rule || '(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]'
  }{${options.min},${options.max}}$`);

  return PASSWORD_REGEXP.test(value);
};

export default checkPassword;
