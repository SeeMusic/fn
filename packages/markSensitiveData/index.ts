
type PresetType = '' | 'email';
type ConfigType = { left: number; right: number };

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
 * @param {number} maskReserve - 保留非加密信息的长度，两边隐藏的长度
 * @param {PresetType} preset - 预设，不需要时可不传或空字符串
 * @param {string} maskChar - 加密内容部分的字符，默认 *
 */
function markSensitiveData(originalText: string, maskReserve: number, preset?: PresetType, maskChar?: string): string
/**
 * 敏感词加密
 * @param {string} originalText - 目标内容
 * @param {ConfigType} maskOption - 保留非加密信息的长度，自定义两边隐藏的长度
 * @param {PresetType} preset - 预设，不需要时可不传或空字符串
 * @param {string} maskChar - 加密内容部分的字符，默认 *
 */
function markSensitiveData(originalText: string, maskOption: ConfigType, preset?: PresetType, maskChar?: string): string
function markSensitiveData(originalText: string, reserveOrOption: number | ConfigType, preset?: PresetType, maskChar?: string): string {
  if (!originalText) {
    return originalText;
  }

  const { prefix, content, suffix } = getTextForpreset(originalText, preset);
  originalText = content;

  if (typeof reserveOrOption === 'number') {
    // 总长度 > 目标长度, 总长度为负数,
    if (reserveOrOption * 2 > originalText.length || reserveOrOption < 0) {
      return concatText(prefix, originalText, suffix);
    }
    return concatText(prefix, formatText(originalText, reserveOrOption, originalText.length - reserveOrOption, maskChar), suffix);

  } else {
    const { left, right } = reserveOrOption;
    // 总长度 >= 目标长度, left 和 right 是负数
    if (
      left + right > originalText.length
        || left < 0
        || right < 0
    ) {
      return concatText(prefix, originalText, suffix);
    }

    let startIdx = left;
    let endIdx = originalText.length - right;

    // 都为 0
    if (!left && !right) {
      startIdx = 0;
      endIdx = originalText.length;
    } else if (!right) {
      endIdx = originalText.length
    }

    return concatText(prefix, formatText(originalText, startIdx, endIdx, maskChar), suffix);
  }
};

export default markSensitiveData;
