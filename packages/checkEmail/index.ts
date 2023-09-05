/**
 * 邮箱 测试函数
 * @param {string} value 邮箱
 * @param {RegExp} rule 自定义校验规则
 */
// eslint-disable-next-line no-useless-escape
const checkEmail = (value: string, rule = /^[a-zA-Z0-9]+([+\-_.][a-zA-Z0-9]+)*@([a-zA-Z0-9]+\.)+[A-Za-z]{2,}$/) => {
  return rule.test(value);
};

export default checkEmail;
