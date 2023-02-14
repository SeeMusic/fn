# commaNumber
逗号分割数字，即 `123456789` 转为 `'123,456,789'` 格式的 **字符**

## 使用方法

```ts
import { commaNumber } from '@kanjianmusic/fn';

const price = 1234.56789;

commaNumber(price) // '1,234.56789'
```

## 为什么不用 toLocaleString
Chrome (`109.0.5414.119`) 下， `Number.toLocaleString('en-US')` 会默认只保留 3 位小数，且四舍五入，这和预期不符，所以当前功能使用正则实现。

```
(-1.23456789).toLocaleString('en-US') // '-1.235'
```
