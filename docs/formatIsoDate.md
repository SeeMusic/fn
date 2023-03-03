# formatIsoDate
格式化带时区的 ISO 8601 时间为当地时间文本

> 需要使用方自己安装 'dayjs'

## 使用方法

以所处中国（东八区）为例：

```ts
import { formatIsoDate } from '@kanjianmusic/fn';

// 缺省格式，仅包含日期信息
// => '2000.01.01'
// 实际完整本地时间为 2000.01.01 08:00:00
formatIsoDate('2000-01-01T00:00:00Z');

// 输出连带时分秒
// => '2000.01.01 08:00:00'
formatIsoDate('2000-01-01T00:00:00Z', 'YYYY.MM.DD HH:mm:ss');

// 原始时间使用自带时区信息的格式
// => 2000.01.01 17:30:08
// 一般扔建议数据源统一用 0 时区的 {date}T{time}Z 格式
formatIsoDate('2000-01-01T17:30:08+08:00', 'YYYY.MM.DD HH:mm:ss');
```
