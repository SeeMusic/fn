/**
 * 密码规则测试函数
 * @param {string} value 原始值
 * @param {RegExp} rule 校验规则
 *
 */
const checkPassword = (
  value: string,
  rule: RegExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
) => {
  return rule.test(value);
};

export default checkPassword;
