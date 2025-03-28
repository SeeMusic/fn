# initChatwootClient
初始化 Chatwoot 客户端。执行后，会自动在页面中插入 Chatwoot 的 JS SDK 文件，并设置全局配置。

## 使用方法

```ts
import { initChatwootClient } from '@kanjianmusic/fn';

initChatwootClient({
  baseUrl: 'https://example.com',
  websiteToken: '1234567890',
  settings: {
    position: 'right',
    type: 'expanded_bubble',
    launcherTitle: '联系我们',
  }
});
```

## 参数说明

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| baseUrl | string | Chatwoot 的 API 地址 |
| websiteToken | string | Chatwoot 的网站标识 |
| settings | Record<string, unknown> | Chatwoot 的全局配置，`可选` |

## 注意事项

- 仅限浏览器环境使用
- 执行后，chatwoot 的 SDK 会暴漏一些内部的高阶方法，参见 [官方文档](https://www.chatwoot.com/hc/user-guide/articles/1677587234-how-to-send-additional-user-information-to-chatwoot-using-sdk)