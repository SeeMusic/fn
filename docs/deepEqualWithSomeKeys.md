# deepEqualWithSomeKeys
判断两个对象的指定字段值是否相等

## 使用方法

```ts
import { deepEqualWithSomeKeys } from '@kanjianmusic/fn';

const arg1 = { foo: 'foo', bar: { name: 'bar' }};
const arg2 = { foo: 'foo', bar: { name: 'baz' }};

deepEqualWithSomeKeys(arg1, arg2, ['foo', 'bar']); // false
deepEqualWithSomeKeys(arg1, arg2, ['foo']); // true
deepEqualWithSomeKeys(arg1, arg2, []); // false
```
