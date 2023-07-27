# markSensitiveData
敏感信息加密显示，从第 `n` 个开始，最后保留 `n` 个内容 （头不包含，尾包含）。

## 用法

```ts
import { markSensitiveData } from '@kanjianmusic/fn';

// 从 第 2 位开始，最后保留 2 位
markSensitiveData('0123456789', 2); // 01******89
// 从 第 2 位开始，最后保留 3 位
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
type PresetType = '' | 'email';

interface MaskOption {
  headRetainCharCount: number
  tailRetainCharCount: number
  preset?: PresetType
  placeholder?: string
}

/**
 * 敏感词加密
 * @param {string} originalText - 目标内容
 * @param {number|MaskOption} reserveOrOption - 字符串两边保留的长度或传入对象自定义配置
 */
export declare function markSensitiveData(originalText: string, reserveOrOption: number | MaskOption): string
```
