# checkPassword
密码规则校验测试函数

## 使用方法

```ts
import { checkPassword } from '@kanjianmusic/fn';

const password = 'kanjian123';

// 缺省内置星发的密码校验规则 /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
// => true
checkPassword(password);

// 支持传入自定义正则
// => false
checkPassword(password, /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{12,20}$/);
```
