# formatLrcTimeTag
格式化 LRC 歌词的 Line Time Tag

## 使用方法

```ts
import { formatLrcTimeTag } from '@kanjianmusic/fn';

const time = 123.456;

formatLrcTimeTag(time) // '[02:03.45]'
formatLrcTimeTag(time, { type: 'word' }) // '<02:03.45>'
formatLrcTimeTag(time, { digits: 3 }) // '[02:03.456]'
formatLrcTimeTag(time, { type: 'word', digits: 3 }) // '<02:03.456>'
```
