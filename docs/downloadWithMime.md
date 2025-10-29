# downloadWithMime
文件流转换为指定文件类型并自动下载

## 使用方法

```ts
import { downloadWithMime } from '@kanjianmusic/fn';

const data = new Blob([new Uint8Array([0x49, 0x42, 0x50, 0x4D])]);
await downloadWithMime(data, 'test.xlsx');
```
