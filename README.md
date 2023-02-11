# fn

看见音乐公共函数库

**业务无关** 且 **跨项目（工程）高频使用** 的函数库。

## 安装
```
pnpm i @kanjianmusic/fn
```

## 使用
```ts
import { padLeadingZero } from '@kanjianmusic/fn';

padLeadingZero(9);
// 09
```

或

```ts
import * as Fn from '@kanjianmusic/fn';

Fn.padLeadingZero(9);
```

## 开发相关

### 边界
当前阶段，此函数库只包含工具化的函数，如 `formatSeconds()` 只是为了把 `audio.duration` 转为 `01:02` 的格式显示。
某种意义上，更像 Vue2 时的 filter。

具体业务对象的操作方法，如 `dsp.getLogo()`，不在当前的计划中。

### 命名
函数的参数名，如果原生 JS 有类似场景实现，则遵循原生 JS 的命名，如 ```digits```，即为 [toFixed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) 的原生参数名

### 发布到 npm 的版本号要求
使用通行的 semver 规范外，需要遵循一条约定：

任何新增函数的发布，都必须要有配套的测试代码及文档；如果确实需要临时发布，必须使用 [先行版本号(Pre-Release-Version)](https://semver.org/lang/zh-CN/#spec-item-9) 修饰，如 `1.1.0-beta.1`

## 其他

### 为什么没有像 vueuse 一样分成多个包？
> Done is better than perfect

初始阶段，同时满足 **业务无关** 、**跨项目高频使用** 条件的函数数量并不算多。在这个前提下去拆分，性价比太低。

一方面，单一子包内可能只有 1-2 个函数，信息过于分散；

另一方面，配套的文档、编译等工程复杂度直线上升，投入产出比过低。
