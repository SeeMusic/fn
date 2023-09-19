# deepEqualWithKeys
判断两个对象的指定字段值是否相等

## 使用方法

```ts
import { deepEqualWithKeys } from '@kanjianmusic/fn';

const arg1 = { foo: 'foo', bar: { name: 'bar' }};
const arg2 = { foo: 'foo', bar: { name: 'baz' }};

deepEqualWithKeys(arg1, arg2, ['foo', 'bar']); // false
deepEqualWithKeys(arg1, arg2, ['foo']); // true
deepEqualWithKeys(arg1, arg2, []); // false
```
