# nl2br
转换文本中不可见的 `\n` 换行符 为 HTML 的 `<br>` 标签

## 使用方法

```ts
import { nl2br } from '@kanjianmusic/fn';

const content = 'abc\ndef';

nl2br(content) // 'abc<br>def'

// 默认占位符
// => '-'
nl2br('')
nl2br(null)

// 自定义占位符
// => '/'
nl2br('', '/')
```
