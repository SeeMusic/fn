/**
 * 获取目录下的所有文件的相对路径
 * 解决路由名称枚举问题
 */

const fs = require('fs');
const path = require('path');

const getDocPath = () => {
  const absolutePath = path.join(__dirname, '../');
  const files = fs.readdirSync(absolutePath);
  const components: {
    text: string,
    link: string,
  }[] = [];
  // 排除检查的文件
  var excludes = ['index', 'README']

  const arr = files.map(item => item.split('.')[0]).sort(function(a, b) {
    // 截取'.'之前的数字进行排序 例如 1.md 2.md 3.md
    return a - b;
  });

  arr.forEach((item: string) => {
    if (item && !excludes.includes(item)) {
      let stat = fs.lstatSync(absolutePath + item + '.md');

      if (!stat.isDirectory()) {
        components.push({
          text: item,
          link: `/${item}`,
        });
      }
    }
  });

  return components;
}
export default getDocPath;
