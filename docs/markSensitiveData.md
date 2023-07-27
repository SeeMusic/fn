# markSensitiveData
敏感信息加密显示，从第 `n` 个开始，最后保留 `n` 个内容 （头不包含，尾包含）。

```ts
import { markSensitiveData } from '@kanjianmusic/fn';

// 从 第 2 位开始，最后保留 2 位
markSensitiveData('0123456789', 2); // 01******89
// 从 第 2 位开始，最后保留 3 位
markSensitiveData('0123456789', { left: 2, right: 3 }); // 01*****789

// 特定规则不需要可不传或空字符串
markSensitiveData('0123456789@qq.com', 2, 'email'); // 01******89@qq.com
markSensitiveData('0123456789@gmail.com', { left: 1, right: 1 }, 'email'); // 0********9@gmail.com

// 自定义加密符号
markSensitiveData('0123456789', { left: 2, right: 3 }, '', '@'); // 01@@@@@789
markSensitiveData('0123456789@qq.com', 2, 'email', '~'); // 01~~~~~~89@qq.com
```
