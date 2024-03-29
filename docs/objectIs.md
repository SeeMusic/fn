# objectIs
类型校验函数组, 包含以下方法
- getType
- isString
- isNumber
- isStringNumber
- isObject
- isUndefined
- isNull
- isEmpty

## 使用方法

### getType
返回参数类型

```ts
import { getType } from '@kanjianmusic/fn';

getType('foo'); // String
getType(0); // Number
getType([]); // Array
getType({}); // Object
getType(true); // Boolean
getType(undefined); // Undefined
getType(null); // Null
getType((() => {}));  // Function
getType((new RegExp(''))); // RegExp
getType((new Date())); // Date
```

### isString
是否是字符串

```ts
import { isString } from '@kanjianmusic/fn';

isString('foo'); // true
```

### isNumber
是否是数字类型

```ts
import { isNumber } from '@kanjianmusic/fn';

isNumber(-1); // true
isNumber(NaN); // true
```

### isStringNumber
是否是数字字符串

```ts
import { isStringNumber } from '@kanjianmusic/fn';

isStringNumber('-1'); // true
isStringNumber('NaN'); // false
isStringNumber('100a'); // false
```

### isObject
是否是对象类型

```ts
import { isObject } from '@kanjianmusic/fn';

isObject({}); // true
```

### isUndefined
是否是undefined

```ts
import { isUndefined } from '@kanjianmusic/fn';

isUndefined(undefined); // true
```

### isNull
是否是null

```ts
import { isNull } from '@kanjianmusic/fn';

isNull(null); // true
```

### isEmpty
是否是空字符串、空数组、空对象

```ts
import { objectIs } from '@kanjianmusic/fn';
const { isEmpty }  = objectIs;

isEmpty({}); // true
isEmpty({ foo: 'foo' }); // false
isEmpty([]); // true
isEmpty(['foo']); // false
isEmpty(''); // true
isEmpty('aaa'); // false
isEmpty(0); // false
isEmpty(null); // false
isEmpty(undefined); // false
```
