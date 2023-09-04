# checkPhoneNumber
电话号码校验函数

## 使用方法

```ts
import { checkPhoneNumber } from '@kanjianmusic/fn';

// 默认校验规则
// 国内手机号：/^((\+?86)|(\(\+86\)))?1[3-9]([0-9]{9})$/  => +861XXXXXXXXX，861XXXXXXXXX，1XXXXXXXXX
// 国内固定电话：/^((\+?86)|(\(\+86\)))?\d{3,4}-\d{7,8}$/  => +86021-63570107，86021-63570107，021-63570107，+860536-7210654， 860536-7210654， 0536-7210654

checkPhoneNumber('+8615056579829'); // true
checkPhoneNumber('8615056579829'); // true
checkPhoneNumber('15056579829'); // true
checkPhoneNumber('021-63570107'); // true
checkPhoneNumber('+86021-63570107'); // true
checkPhoneNumber('02163570107'); // false

// 自定义规则
checkPhoneNumber('150-5657-9829', /^1[3-9][0-9]-[0-9]{4}-([0-9]{4})$/); // true
checkPhoneNumber('150-5657-9829', /^1[3-9][0-9]-[0-9]{4}-([0-9]{3})$/) // false
```
