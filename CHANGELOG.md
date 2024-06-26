## [0.12.1](https://github.com/SeeMusic/fn/compare/v0.12.0...v0.12.1) (2024-05-30)


### Bug Fixes

* update deepClone, deepEqual to appropriate for type of Array, RegExp and Function ([077d93f](https://github.com/SeeMusic/fn/commit/077d93f8af376cd3bc270db79ad2590b888bc89e))



# [0.12.0](https://github.com/SeeMusic/fn/compare/v0.11.0...v0.12.0) (2024-01-04)


### Features

* add createFaviconForSaaS ([bd00177](https://github.com/SeeMusic/fn/commit/bd001774ecf2f8f8af493c9d87f7534adec84370))



# [0.11.0](https://github.com/SeeMusic/fn/compare/v0.10.0...v0.11.0) (2023-12-04)


### Bug Fixes

* safeParseInt 字符串大小比较 ([e256504](https://github.com/SeeMusic/fn/commit/e256504df5b3cdff6256e5ef58639f5a8da2acfe))


### Features

* add checkoutAccount ([2c95d7b](https://github.com/SeeMusic/fn/commit/2c95d7bc21be6292b8c0d5b1ec8b06bf71eb1f2d))



# [0.10.0](https://github.com/SeeMusic/fn/compare/v0.9.2...v0.10.0) (2023-10-16)


### Features

* add deepClone ([ca2fcf0](https://github.com/SeeMusic/fn/commit/ca2fcf060da7ba1db55aba48fa4a6fabf08e25b3))



## [0.9.2](https://github.com/SeeMusic/fn/compare/v0.8.0...v0.9.2) (2023-10-13)


### Bug Fixes

* filterEmptyParams 新增排除字段 ([53a5c1d](https://github.com/SeeMusic/fn/commit/53a5c1d4e67dec0fd3773302ba31ec589b3ae558))
* formatIsoDate参数为空，返回默认值 ([#23](https://github.com/SeeMusic/fn/issues/23)) ([cf2735e](https://github.com/SeeMusic/fn/commit/cf2735e2f762539aafac32bd059e3b1f71914885))


### Features

* 增加 deepEqual | deepEqualWithKeys | safeParseInt 方法 ([#24](https://github.com/SeeMusic/fn/issues/24)) ([247f54c](https://github.com/SeeMusic/fn/commit/247f54c9a60773a5ded9f150d4dd1b59f4ccc856))



# [0.9.0](https://github.com/SeeMusic/fn/compare/v0.8.0...v0.9.0) (2023-09-19)


### Bug Fixes

* formatIsoDate 参数类型定义 ([ba82f9f](https://github.com/SeeMusic/fn/commit/ba82f9f6817206aa5510f768f9443714829b8599))
* formatIsoDate 参数为空，返回默认值 ([#23](https://github.com/SeeMusic/fn/issues/23)) ([cf2735e](https://github.com/SeeMusic/fn/commit/cf2735e2f762539aafac32bd059e3b1f71914885))
* nl2br 方法添加空值判断 ([0c2ee13](https://github.com/SeeMusic/fn/commit/0c2ee13f7f92e7c961cdef9676b3635a22e19e86))


### Features

* 添加 safeParseInt 方法，将字符串转为数字类型 ([b1299c0](https://github.com/SeeMusic/fn/commit/b1299c0ba32d4f99ede64bec37612c03c68b4346))
* 增加 deepEqual 方法，判断两个变量的值是否相等 ([ad4e666](https://github.com/SeeMusic/fn/commit/ad4e6664713a0abb21b7c63db868b372e0c5e2aa))
* 增加 deepEqualWithKeys 方法，判断两个对象的指定字段值是否相等 ([4bac864](https://github.com/SeeMusic/fn/commit/4bac8646858cd116a511b42002eade4b6ea7b522))



## [0.8.1](https://github.com/SeeMusic/fn/compare/v0.8.0...v0.8.1) (2023-09-14)


### Bug Fixes

* formatIsoDate 参数为空，返回默认值 ([a6d5cb4](https://github.com/SeeMusic/fn/commit/a6d5cb416908804fecbaf8564d55fc685d41ae75))



# [0.8.0](https://github.com/SeeMusic/fn/compare/v0.7.1...v0.8.0) (2023-09-06)


### Features

* 新增 findPath, 根据指定树节点获取祖先节点, 返回祖先节点按层级组成的数组 ([b811f21](https://github.com/SeeMusic/fn/commit/b811f210cfaa3bd95590ed880a4e17b2f7696f23))



## 0.7.1 (2023-09-05)


### Bug Fixes

* 模版文件格式化 ([b61a746](https://github.com/SeeMusic/fn/commit/b61a7466412102446dd4029ada7e44d5f39938b1))
* 邮箱校验规则修改 ([d54d08a](https://github.com/SeeMusic/fn/commit/d54d08ab003578996d868a024eeb84b7316159b9))


### Features

* 0.1.0 ([#1](https://github.com/SeeMusic/fn/issues/1)) ([f488998](https://github.com/SeeMusic/fn/commit/f488998b27df6972628ea58a6b0e3d35fe412149))
* 添加 commaNumber ([#6](https://github.com/SeeMusic/fn/issues/6)) ([6eea0e7](https://github.com/SeeMusic/fn/commit/6eea0e764de93aeae26b333aa53726ade0279487))
* 新增格式化 ISO 8601 时间函数 ([b6f4654](https://github.com/SeeMusic/fn/commit/b6f4654eb1772c31bacd9fd9810a6858308a204a))
* 新增密码规则检测函数 ([#10](https://github.com/SeeMusic/fn/issues/10)) ([bc1c9e0](https://github.com/SeeMusic/fn/commit/bc1c9e0beb3a1bba1a04678b1646540042579631))
* eslint 配置 ([1430593](https://github.com/SeeMusic/fn/commit/1430593c10a4032b2216597d50f5cb0aa1ac024b))
* formatEmptyText ([#3](https://github.com/SeeMusic/fn/issues/3)) ([d5b27ac](https://github.com/SeeMusic/fn/commit/d5b27acd86d3f1f51ff4e273b90c49223faea3d1))
* markSensitiveWord 敏感词加密方法 ([#17](https://github.com/SeeMusic/fn/issues/17)) ([b0e08e7](https://github.com/SeeMusic/fn/commit/b0e08e761a0824bafa64aac6bb900b00a18b5ca9))



