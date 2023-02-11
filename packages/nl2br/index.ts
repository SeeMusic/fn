/**
 * 转换文本中不可见的 '\n' 换行符 为 HTML 的 '<br>' 标签
 * @example
 * nl2br('abc') -> 'abc'
 * nl2br('abc\ndef') -> 'abc<br>def'
 */
const nl2br = (content: string) => content.replace(/\n/g, '<br>');

export default nl2br;
