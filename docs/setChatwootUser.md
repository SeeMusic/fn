# setChatwootUser
传递当前登录用户信息给 chatwoot 客户端

## 使用方法

```ts
import { setChatwootUser } from '@kanjianmusic/fn';

setChatwootUser('user-id-1', {
  name: 'abc',
  email: 'abc@def.com',
  avatar_url: 'https://example.com/avatar.png'
})
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| id | `string \| number` | 用户 ID |
| user | `ChatwootUser` | 用户信息 |

```ts
interface ChatwootUser {
  name?: string;
  email?: string;
  avatar_url?: string;
}
```

用户信息中，至少需要包含 `avatar_url`, `email`, `name` 其中一项。具体信息，请参考 [chatwoot 官方文档](https://docs.chatwoot.com/docs/chatwoot-sdk/user-identification)


