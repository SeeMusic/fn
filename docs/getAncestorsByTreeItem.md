# getAncestorsByTreeItem
根据指定树节点获取祖先节点, 返回祖先节点按层级组成的数组；
用于根据已选择节点回显整个路径，顶层节点选中数量统计等场景；

## 使用方法

```ts
import { getAncestorsByTreeItem } from '@kanjianmusic/fn';

const data = [
  {
      'id': 1,
      'name': 'name1',
      'children': [
          {
              'id': 17,
              'name': 'name17',
              'children': []
          },
          {
              'id': 18,
              'name': 'name18',
              'children': []
          }
      ]
  },
  {
      'id': 2,
      'name': 'name2',
      'children': [
          {
              'id': 21,
              'name': 'name21',
              'children': [
                  {
                      'id': 211,
                      'name': 'name211',
                      'children': []
                  },
                  {
                      'id': 212,
                      'name': 'name212',
                      'children': []
                  }
              ]
          },
          {
              'id': 22,
              'name': 'name22',
              'children': []
          }
      ]
  }
] 

getAncestorsByTreeItem({ key: 'id', value: 1, childrenKey: 'children', tree: industries }); // [ { id: 1, name: 'name1' } ]
getAncestorsByTreeItem({ key: 'id', value: 21, childrenKey: 'children', tree: industries }); // [ { id: 2, name: 'name2' }, { id: 21, name: 'name21' } ]
getAncestorsByTreeItem({ id: { key: 'id', value: 212 }, children: { key: 'children' }, tree: industries }); // [ { id: 2, name: 'name2' }, { id: 21, name: 'name21' }, { id: 212, name: 'name212' } ]
```
