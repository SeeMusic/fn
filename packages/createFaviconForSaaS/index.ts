/**
 * SaaS站点设置favicon, title
 *
 * @example
 */

enum TYPE {
  SHORTCUT='shortcut icon',
  BOOKMARK='bookmark'
}

const createFaviconForSaaS = (url: string | undefined, title: string | undefined) => {
  const generate = (key: TYPE) => {
    let link = document.querySelector(`link[rel*="${key}"]`) as HTMLLinkElement;
    if (link) {
      link.href = url as string;
    } else {
      link = document.createElement('link') as HTMLLinkElement;
      link.type = 'image/x-icon';
      link.rel = key;
      link.href = url as string;
      document.getElementsByTagName('head')[0].appendChild(link);
    }
  };
  if (url) {
    generate(TYPE.SHORTCUT);
    generate(TYPE.BOOKMARK);
  }
  if (title) {
    document.title = title;
  }
};

export default createFaviconForSaaS;
