# formatEmptyText

格式化空值占位符

## 使用方法

```ts
import { formatEmptyText } from '@kanjianmusic/fn';

const value = '';

// 缺省替换
// => '-'
formatEmptyText(value)

// 可以填入自定义 placeholder
// => '暂无内容'
formatEmptyText(value, '暂无内容')
```
