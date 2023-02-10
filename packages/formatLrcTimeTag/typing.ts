// 时间标签类型，行 或者 词，对应不同的各式
export type LrcTimeTagType = 'line' | 'word';

export interface LrcTimeTagOption {
  type?: LrcTimeTagType;
  // 保留小数位数
  digits?: number;
}
