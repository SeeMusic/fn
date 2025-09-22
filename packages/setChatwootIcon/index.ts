const iconBaseUrl = 'https://pics.kanjian.com/kanjiancom';

const replaceIconWithImg = (locale: 'zh-CN' | 'en-US' | 'ja-JP') => {
  const icon = document.getElementById('woot-widget-bubble-icon');
  const bubble = icon?.closest('.woot-widget-bubble');
  if (!icon || !bubble) return;

  /* 1. 清空自带 SVG 内容 */
  icon.innerHTML = '';

  /* 2. 替换原本的 SVG 为图片 （保留原 ID，事件不丢） */
  const img = document.createElement('img');
  img.id = 'woot-widget-bubble-icon';     // 继承 ID，SDK 事件继续有效
  img.src = `${iconBaseUrl}/chatwoot-icon-${locale}.png`;
  img.style.cssText = `
    width: 64px;
    height: 64px;
    display: block;
    border: none;
  `;

  /* 3. 替换节点 */
  icon.parentNode!.replaceChild(img, icon);
};

/**
 * 强行覆写 Chatwoot 自带的触发聊天窗口的 icon
 *
 * @param locale - 语言
 */
const setChatwootIcon = (locale: 'zh-CN' | 'en-US' | 'ja-JP') => {
  if (typeof window === 'undefined') return;

  window.addEventListener(
    'chatwoot:ready',
    () => replaceIconWithImg(locale),
    {
      once: true
    }
  );
};

export default setChatwootIcon;
