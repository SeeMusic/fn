# checkEmail
邮箱校验函数

## 使用方法

```ts
import { checkEmail } from '@kanjianmusic/fn';

// 默认校验规则 /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+\.)+[A-Za-zd]{2,5}$/
checkEmail('zhangsan@kanjian.com'); // true
checkEmail('zhang-san@kanjian.com'); // true
checkEmail('zhangsan-@kanjian.com'); // false

// 自定义规则
checkEmail('zhangsan@kanjian.com', /^[a-zA-Z0-9]+@([a-zA-Z0-9]+\.)+com$/) // true
checkEmail('zhangsan@kanjian.cn', /^[a-zA-Z0-9]+@([a-zA-Z0-9]+\.)+com$/) // false
```
