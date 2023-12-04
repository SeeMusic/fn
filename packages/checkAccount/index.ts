/**
 * 账号规则测试函数（不能包含汉字、@, 不能是纯数字), 主要用于区分账号/手机号/邮箱
 *
 * @example
 */
const checkAccount = (value: string) => {
  const rule1 = /[\u4e00-\u9fa5@]/; // 匹配任何包含汉字或@的字符串
  const rule2 = /^\d+$/; // 匹配任何纯数字的字符串
  return !(rule1.test(value) || rule2.test(value));
};

export default checkAccount;
