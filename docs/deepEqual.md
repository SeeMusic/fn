# deepEqual
判断两个变量值是否相等

## 使用方法

```ts
import { deepEqual } from '@kanjianmusic/fn';

// 值类型
deepEqual('foo', 'foo'); // true
deepEqual('foo', 'bar') // false
deepEqual(+0, -0); // true
deepEqual(true, false) // false
deepEqual(undefined, null) // false
deepEqual(NaN, NaN); // true
deepEqual(Symbol('foo'), Symbol('bar')) // false

// 引用类型
const arg1 = [{ foo: { bar: ['baz'] } }, { bar: 'baz' }];
const arg2 = [{ foo: { bar: ['baz'] } }, { bar: 'baz' }];
const arg3 = [{ foo: { bar: ['bar'] } }, { bar: 'baz' }];
deepEqual(arg1, arg2) // true
deepEqual(arg1, arg3) // false
```
