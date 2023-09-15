import { EmptyTextOriginValueType } from '@packages/formatEmptyText/typing';
import { formatEmptyText } from '..';

/**
 * 转换文本中不可见的 '\n' 换行符 为 HTML 的 '<br>' 标签
 * @example
 * nl2br('abc') -> 'abc'
 * nl2br('abc\ndef') -> 'abc<br>def'
 */
const nl2br = (content: EmptyTextOriginValueType, placeholder = '-') => content ? content.replace(/\n/g, '<br>'): formatEmptyText(content, placeholder);

export default nl2br;
