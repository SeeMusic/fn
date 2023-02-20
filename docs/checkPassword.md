# checkPassword
密码规则校验测试函数

## 使用方法

```ts
import { checkPassword } from '@kanjianmusic/fn';

const password = 'kanjian123';

checkPassword(password, /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/); // true
```
