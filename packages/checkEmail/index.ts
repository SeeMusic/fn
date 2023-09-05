/**
 * 邮箱 测试函数
 * @param {string} value 邮箱
 * @param {RegExp} rule 自定义校验规则
 */
const checkEmail = (value: string, rule = /^[a-zA-Z0-9]+([+-_.][a-zA-Z0-9]+)*@([a-zA-Z0-9]+\.)+[A-Za-zd]{2,5}$/) => {
  return rule.test(value);
};

export default checkEmail;
