/**
 * 手机号/固定电话 测试函数
 * @param {string} value 手机号/固定电话 
 * @param {RegExp} rule 自定义校验规则
 * 默认规则：国内手机号 +861XXXXXXXXX，861XXXXXXXXX，1XXXXXXXXX， 
 *         国内固定电话 +86021-63570107，86021-63570107，021-63570107，+860536-7210654， 860536-7210654， 0536-7210654
 */
const checkPhoneNumber = (value: string, rule?: RegExp) => {
  const mobileRule = /^((\+?86)|(\(\+86\)))?1[3-9]([0-9]{9})$/;
  const TelPhoneRule = /^((\+?86)|(\(\+86\)))?\d{3,4}-\d{7,8}$/;
  if (rule) {
    return rule.test(value);
  }
  return mobileRule.test(value) || TelPhoneRule.test(value);
};

export default checkPhoneNumber;
