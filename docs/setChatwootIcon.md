# setChatwootIcon
覆写 chatwoot 客户端的 icon

> 前置依赖：`initChatwootClient` 函数初始化 Chatwoot 客户端

## 使用方法

```ts
import { setChatwootIcon } from '@kanjianmusic/fn';

setChatwootIcon('zh-CN')
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| locale | `zh-CN \| en-US` | 语种 |

> 当前上传到 OSS `https://pics.kanjian.com/kanjiancom/` 下 的 icon 有 `zh-CN` 和 `en-US` 两个语种。如果要扩展，增加 `chatwoot-icon-${locale}.png` 文件即可。


