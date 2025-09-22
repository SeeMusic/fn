import type { ChatwootUser } from '../initChatwootClient/typing';

/**
 * 传递当前登录用户信息给 chatwoot 客户端
 *
 * @param id - 用户 ID
 * @param user - 用户信息
 */
const setChatwootUser = (id: string | number, user: ChatwootUser) => {
  if (typeof window === 'undefined') return;

  window.addEventListener('chatwoot:ready', function() {
    window.$chatwoot?.setUser(id, user);
  }, { once: true });

  if (window.$chatwoot) {
    window.$chatwoot.setUser(id, user);
  }
};

export default setChatwootUser;
