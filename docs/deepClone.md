# deepClone
深拷贝方法

## 使用方法

```ts
import { deepClone } from '@kanjianmusic/fn';

const obj = { foo: 'foo', bar: { name: 'bar', baz: [{ name: 'baz' }] } };
deepClone(obj);
```
