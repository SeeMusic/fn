/**
 * 密码规则测试函数
 * @param {string} value 原始值
 * @param {string} rule 校验规则
 *
 */
const checkPassword = (
  value: string,
  rule: string = '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$',
) => {
  const PASSWORD_REGEXP = new RegExp(rule);

  return PASSWORD_REGEXP.test(value);
};

export default checkPassword;
