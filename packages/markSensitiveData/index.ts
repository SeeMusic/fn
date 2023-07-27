// 当前仅支持 email
type PresetType = 'email';

interface RetainCharOption {
  headRetainCharCount: number
  tailRetainCharCount: number
  preset?: PresetType
  placeholder?: string
}

/**
 * 拼接字符串
 * @param {string[]} args
 */
const concatText = (...args: string[]) => args.join('');

/**
 * 提取目标字符串并替换成 * 号
 * @param {string} originalText 目标
 * @param {number} startIdx 开始索引 - 第 n 个开始不包含 n
 * @param {number} endIdx 结束索引 - 第 n 个 包含 n
 */
function formatText(originalText: string, startIdx: number, endIdx: number, maskChar?: string) {
  const str = originalText.slice(startIdx, endIdx);
  return originalText.replace(new RegExp(str), (subStr) => `${maskChar ? maskChar : '*'}`.repeat(subStr.length));
}

/**
 * 根据已有规则获取对应的文本
 * @param {string} originalText
 * @param {presetType} preset
 */
function getTextForpreset(originalText: string, preset?: PresetType) {
  const extract = {
    content: originalText,
    prefix: '',
    suffix: ''
  }
  if (preset) {
    const presets = [
      {
        preset: 'email',
        validator: (val: string) => /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(val)
      }
    ];

    for (let item of presets) {
      if (item.preset === preset && item.validator(originalText)) {
        const reg = /@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

        extract.suffix = (originalText.match(reg) || [''])[0];
        extract.content = originalText.replace(extract.suffix, '');

      } else {
        throw new Error('Please enter the correct email address ~');
      }
    }
  }
  return extract;
}



/**
 * 敏感词加密
 * @param {string} originalText - 目标内容
 * @param {number} retainCharCount - 保留非加密信息的长度，两边保留的长度
 */
function markSensitiveData(originalText: string, retainCharCount: number): string
/**
 * 敏感词加密
 * @param {string} originalText - 目标内容
 * @param {RetainCharOption} retainCharOption - 保留非加密信息的长度，自定义两边隐藏的长度
 */
function markSensitiveData(originalText: string, retainCharOption: RetainCharOption): string
function markSensitiveData(originalText: string, countOrOption: number | RetainCharOption): string {
  if (!originalText) {
    return originalText;
  }

  if (typeof countOrOption === 'number') {
    // 总长度 > 目标长度, 总长度为负数,
    if (countOrOption * 2 > originalText.length || countOrOption < 0) {
      return originalText;
    }
    return formatText(originalText, countOrOption, originalText.length - countOrOption);

  } else {
    const { headRetainCharCount, tailRetainCharCount, placeholder, preset } = countOrOption;
    const { prefix, content, suffix } = getTextForpreset(originalText, preset);

    originalText = content;
    // 总长度 >= 目标长度, start 和 end 是负数
    if (
      headRetainCharCount + tailRetainCharCount > originalText.length
        || headRetainCharCount < 0
        || tailRetainCharCount < 0
    ) {
      return concatText(prefix, originalText, suffix);
    }

    let startIdx = headRetainCharCount;
    let endIdx = originalText.length - tailRetainCharCount;

    // 都为 0
    if (!headRetainCharCount && !tailRetainCharCount) {
      startIdx = 0;
      endIdx = originalText.length;
    } else if (!tailRetainCharCount) {
      endIdx = originalText.length
    }

    return concatText(prefix, formatText(originalText, startIdx, endIdx, placeholder), suffix);
  }
};

export default markSensitiveData;
