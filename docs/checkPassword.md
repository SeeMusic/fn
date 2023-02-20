# checkPassword
密码规则校验测试函数

## 使用方法

```ts
import { checkPassword } from '@kanjianmusic/fn';

const password = 'kanjian123';

checkPassword(password, {
  min: 6,
  max: 20,
}); // true
```
