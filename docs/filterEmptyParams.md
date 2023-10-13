# filterEmptyParams
axios空值过滤函数（只过滤第一层）

## 使用方法

```ts
import { filterEmptyParams } from '@kanjianmusic/fn';

const args = { foo: '', bar: 'bar', arr: [], obj: {} };

// 默认过滤空字符串、空数组、空对象
filterEmptyParams(args) // { bar: 'bar'}

// 自定义过滤选项
filterEmptyParams(args, {
  filterEmptyString: false,
  filtersEmptyArray: false,
  filtersEmptyObject: false
}) // { foo: '', bar: 'bar', arr: [], obj: {} }

filterEmptyParams(args, { excludes: ['foo', 'obj'] }); // { foo: '', bar: 'bar', obj: {} });
```
