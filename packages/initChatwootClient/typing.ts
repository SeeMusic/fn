/**
 * chatwoot 自定义设置
 */
export type ChatwootSettings = Record<string, unknown>;

/**
 * chatwoot 初始化配置
 */
export interface ChatwootClientConfig {
  /**
   * chatwoot 基础地址，不包含末端 `/`
   */
  baseUrl: string;
  /**
   * chatwoot 网站 token
   */
  websiteToken: string;
}

/**
 * chatwoot 当前工具函数封装的内容
 */
export interface ChatwootInitOptions extends ChatwootClientConfig {
  settings?: ChatwootSettings;
}

/**
 * chatwoot 用户
 */
export interface ChatwootUser {
  name?: string;
  email?: string;
  avatar_url?: string;
  [key: string]: unknown;
}

// 全局类型声明
declare global {
  interface Window {
    chatwootSDK?: {
      run: (options: ChatwootClientConfig) => void;
    };
    chatwootSettings?: ChatwootSettings;
    $chatwoot?: {
      setUser: (id: string | number, user: ChatwootUser) => void;
    };
  }
}

// 确保这个文件被视为一个模块
export {};
