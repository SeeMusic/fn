# filterEmptyParams
axios空值过滤函数（只过滤第一层）

## 使用方法

```ts
import { filterEmptyParams } from '@kanjianmusic/fn';

// 默认过滤空字符串、空数组、空对象
filterEmptyParams({ foo: '', bar: 'bar, 'arr: [], obj: {} }) // { bar: 'bar'}

// 自定义过滤选项
filterEmptyParams({ foo: '', bar: 'bar, 'arr: [], obj: {} }, {
  filterEmptyString: false,
  filtersEmptyArray: false,
  filtersEmptyObject: false
}) // { foo: '', bar: 'bar, 'arr: [], obj: {} }
```
