/**
 * 初始化 chatwoot 客户端
 * @returns 清理函数（移除脚本）
 */
import type { ChatwootInitOptions } from './typing';

const initChatwootClient = (options: ChatwootInitOptions): () => void => {
  if (typeof window === 'undefined') {
    console.warn('[chatwoot] 仅限浏览器环境使用');
    return () => {};
  }

  // 设置可选的全局配置
  if (options.settings) {
    window.chatwootSettings = options.settings;
  }

  const script = document.createElement('script');
  script.src = `${options.baseUrl}/packs/js/sdk.js`;
  script.defer = true;
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    window.chatwootSDK?.run({
      websiteToken: options.websiteToken,
      baseUrl: options.baseUrl
    });
  };

  return () => script.remove();
};

export default initChatwootClient;
