/**
 * 密码规则测试函数
 * @param {string} value 原始值
 * @param {number} min 最小长度
 * @param {number} max 最大长度
 *
 * @example
 */
const detectPassword = (value: string, min: number, max: number) => {
  const PASSWORD_REGEXP = new RegExp(`^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{${min},${max}}$`);

  return PASSWORD_REGEXP.test(value);
};

export default detectPassword;
