
type RuleType = 'email';
type ConfigType = { left: number; right: number };

/**
 * @description 敏感词加密
 * @param {string} target - 目标内容
 * @param {number} reservedNum - 保留非加密信息的长度
 * @param {RuleType} rule - 规则
 */
export default function markSensitiveWord(target: string, reservedNum: number, rule?: RuleType): string

/**
 * @description 敏感词加密
 * @param {string} target - 目标内容
 * @param {ConfigType} config - 保留非加密信息的长度
 * @param {RuleType} rule - 规则
 */
export default function markSensitiveWord(target: string, config: ConfigType, rule?: RuleType): string
export default function markSensitiveWord(target: string, numOrConfig: any, rule?: RuleType ): string {
  if (!numOrConfig || !target) {
    return target;
  }

  const { prefix, content, suffix } = getTextForRule(target, rule);
  target = content;

  if (typeof numOrConfig === 'number') {
    const reservedNum = numOrConfig;
    // 长度 >= 目标长度，或者长度 - 目标长度绝对值 <= 1
    if (
      reservedNum >= target.length ||
      Math.abs(reservedNum - target.length) <= 1 ||
      reservedNum <= 0
    ) {
      return contactText(prefix, target, suffix);
    }

    return contactText(prefix, formatText(target, reservedNum, target.length - reservedNum), suffix);

  } else {
    const { left, right } = numOrConfig;
    // 总长度 >= 目标长度, left 和 right 要存在
    if (
      left + right >= target.length ||
      left <= 0 ||
      right <= 0
    ) {
      return contactText(prefix, target, suffix);
    }

    return contactText(prefix, formatText(target, left, target.length - right), suffix)
  }
};

/**
 * 提取目标字符串并替换成 * 号
 * @param {string} target
 * @param {number} startIdx
 * @param {number} endIdx
 */
function formatText(target: string, startIdx: number, endIdx: number) {
  const str = target.slice(startIdx, endIdx);
  return target.replace(new RegExp(str), (subStr) => '*'.repeat(subStr.length));
}

/**
 * 根据已有规则获取对应的文本
 * @param {string} target
 * @param {RuleType} rule
 */
function getTextForRule(target: string, rule?: RuleType) {
  const extract = {
    content: target,
    prefix: '',
    suffix: ''
  }
  if (rule) {
    const rules = [
      {
        rule: 'email',
        validator: (val: string) => /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(val)
      }
    ];

    for (let item of rules) {
      if (item.rule === rule && item.validator(target)) {
        const reg = /@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

        extract.suffix = (target.match(reg) || [''])[0];
        extract.content = target.replace(extract.suffix, '');

      } else {
        throw new Error('Please enter the correct email address ~');
      }
    }
  }
  return extract;
}

/**
 * 拼接字符串
 * @param {string[]} args
 */
function contactText(...args: string[]) {
  let ret = ''
  args.forEach(i => ret += i);
  return ret;
}

// console.log(markSensitiveWord('1234567890', 2));
// console.log(markSensitiveWord('1234567890', 4));
// console.log(markSensitiveWord('1234567890', 0));
// console.log(markSensitiveWord('1234567890', 1));
// console.log(markSensitiveWord('1234567890', 10));
// console.log(markSensitiveWord('1234567890', 9));
// console.log(markSensitiveWord('1234567890', { l: 2, r: 3} ));
// console.log(markSensitiveWord('1234567890', { l: 3, r: 2}));
// console.log(markSensitiveWord('1234567890', { l: 1, r: 8}));
// console.log(markSensitiveWord('1234567890', { l: 8, r: 1}));
// console.log(markSensitiveWord('1234567890', { l: 10, r: 1}));
// console.log(markSensitiveWord('1234567890', { l: 1, r: 10}));
// console.log(markSensitiveWord('1234567890', { l: 9, r: 1}));
// console.log(markSensitiveWord('1234567890', { l: 1, r: 9}));
// console.log(markSensitiveWord('1234567890', { l: 10, r: 0}));
// console.log(markSensitiveWord('1234567890', { l: 0, r: 10}));
// console.log(markSensitiveWord('1234567890', { l: 9, r: 0}));
// console.log(markSensitiveWord('1234567890', { l: 0, r: 9}));
// console.log(markSensitiveWord('1234567890@qq.com', { l: 0, r: 9}, 'email'));
// console.log(markSensitiveWord('1234567890@sdfsdfsdfsdfsd.com', { l: 0, r: 9}, 'email'));
// console.log(markSensitiveWord('1234567890@qq.com', 2, 'email'));
// console.log(markSensitiveWord('1234567890@qq.com', 4, 'email'));
// console.log(markSensitiveWord('1234567890@qq.com', 0, 'email'));
// console.log(markSensitiveWord('1234567890@qq.com', 1, 'email'));
// console.log(markSensitiveWord('1234567890@qq.com', 10, 'email'));
// console.log(markSensitiveWord('1234567890@qq.com', 9, 'email'));
// console.log(markSensitiveWord('1234567890@qq.com', { l: 2, r: 3}, 'email'));
// console.log(markSensitiveWord('1234567890@qq.com', { l: 3, r: 2}, 'email'));
// console.log(markSensitiveWord('1234567890@qq.com', { l: 1, r: 8}, 'email'));
// console.log(markSensitiveWord('1234567890@qq.com', { l: 8, r: 1}, 'email'));
// console.log(markSensitiveWord('1234567890@qq.com', { l: 10, r: 1}, 'email'));
// console.log(markSensitiveWord('1234567890@qq.com', { l: 1, r: 10}, 'email'));
// console.log(markSensitiveWord('1234567890@qq.com', { l: 9, r: 1}, 'email'));
// console.log(markSensitiveWord('1234567890@qq.com', { l: 1, r: 9}, 'email'));
// console.log(markSensitiveWord('1234567890@qq.com', { l: 10, r: 0}, 'email'));
// console.log(markSensitiveWord('1234567890@qq.com', { l: 0, r: 10}, 'email'));
// console.log(markSensitiveWord('1234567890@qq.com', { l: 9, r: 0}, 'email'));
// console.log(markSensitiveWord('1234567890@qq.com', { l: 0, r: 9}, 'email'));

