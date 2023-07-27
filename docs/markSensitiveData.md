# markSensitiveData
敏感信息加密显示。

## 用法

```ts
import { markSensitiveData } from '@kanjianmusic/fn';

// 前后保留 2 位
markSensitiveData('0123456789', 2); // 01******89
// 前面保留 2 位，后面保留 3 位
markSensitiveData('0123456789',
  {
    headRetainCharCount: 2,
    tailRetainCharCount: 3
  }
); // 01*****789

// 按照 email 类型的预设规则加密
markSensitiveData('0123456789@gmail.com',
  {
    headRetainCharCount: 1,
    tailRetainCharCount: 1,
    preset: 'email'
  }
); // 0********9@gmail.com

// 自定义加密符号
markSensitiveData('0123456789',
  {
    headRetainCharCount: 1,
    tailRetainCharCount: 1,
    placeholder: '@'
  }
); // 01@@@@@789
markSensitiveData('0123456789@qq.com',
  {
    headRetainCharCount: 2,
    tailRetainCharCount: 2,
    placeholder: '~',
    preset: 'email'
  }
); // 01~~~~~~89@qq.com
```

## 类型声明

```ts
// 当前仅支持 email
type PresetType = 'email';

interface RetainCharOption {
  headRetainCharCount: number
  tailRetainCharCount: number
  preset?: PresetType
  placeholder?: string
}

/**
 * 敏感词加密
 * @param {string} originalText - 目标内容
 * @param {number|RetainCharOption} countOrOption - 字符串两边保留的长度或传入对象自定义配置
 */
export declare function markSensitiveData(originalText: string, countOrOption: number | MaskOption): string
```
