# safeParseInt
string 类型转为 number 类型

## 使用方法

```ts
import { safeParseInt } from '@kanjianmusic/fn';

safeParseInt('100'); // 100
safeParseInt('', '-'); // '-'
```
