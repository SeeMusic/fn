import { describe, it, expect } from 'vitest';

import getAncestorsByTreeItem from './index';

interface TreeChild {
    [child: string]: TreeNode[] | undefined;
  }
  
  interface TreeNode {
    [key: string]: TreeChild | string | number;
  }

const industries = [
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
            },
            {
                'id': 19,
                'name': 'name19',
                'children': []
            },
            {
                'id': 20,
                'name': '互联网FM/有声内容',
                '': 1,
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
    },
    {
        'id': 16,
        'name': '其他行业',
        '': 16,
        'children': [
            {
                'id': 65,
                'name': '运营商',
                '': 16,
                'children': []
            },
            {
                'id': 66,
                'name': 'OTT',
                '': 16,
                'children': []
            },
            {
                'id': 67,
                'name': '公播公司',
                '': 16,
                'children': []
            },
            {
                'id': 68,
                'name': '社交平台',
                '': 16,
                'children': []
            },
            {
                'id': 69,
                'name': '航空传媒',
                '': 16,
                'children': []
            },
            {
                'id': 70,
                'name': '其他',
                '': 16,
                'children': []
            }
        ]
    }
] as unknown as TreeNode[];

describe('getAncestorsByTreeItem with exist node', () => {
  // first item
  it('1', () => {
    expect(getAncestorsByTreeItem({ key: 'id', value: 1, childrenKey: 'children', tree: industries }).map(({ id }) => id)).toStrictEqual([1]);
  });
  it('17', () => {
    expect(getAncestorsByTreeItem({ key: 'id', value: 17, childrenKey: 'children', tree: industries }).map(({ id }) => id)).toStrictEqual([1, 17]);
  });
  it('18', () => {
    expect(getAncestorsByTreeItem({ key: 'id', value: 18, childrenKey: 'children', tree: industries }).map(({ id }) => id)).toStrictEqual([1, 18]);
  });
  it('19', () => {
    expect(getAncestorsByTreeItem({ key: 'id', value: 19, childrenKey: 'children', tree: industries }).map(({ id }) => id)).toStrictEqual([1, 19]);
  });
  it('20', () => {
    expect(getAncestorsByTreeItem({ key: 'id', value: 20, childrenKey: 'children', tree: industries }).map(({ id }) => id)).toStrictEqual([1, 20]);
  });

  // second item
  it('2', () => {
    expect(getAncestorsByTreeItem({ key: 'id', value: 2, childrenKey: 'children', tree: industries }).map(({ id }) => id)).toStrictEqual([2]);
  });
  it('21', () => {
    expect(getAncestorsByTreeItem({ key: 'id', value: 21, childrenKey: 'children', tree: industries }).map(({ id }) => id)).toStrictEqual([2, 21]);
  });
  it('211', () => {
    expect(getAncestorsByTreeItem({ key: 'id', value: 211, childrenKey: 'children', tree: industries }).map(({ id }) => id)).toStrictEqual([2, 21, 211]);
  });
  it('212', () => {
    expect(getAncestorsByTreeItem({ key: 'id', value: 212, childrenKey: 'children', tree: industries }).map(({ id }) => id)).toStrictEqual([2, 21, 212]);
  });

  // last item
  it('16', () => {
    expect(getAncestorsByTreeItem({ key: 'id', value: 16, childrenKey: 'children', tree: industries }).map(({ id }) => id)).toStrictEqual([16]);
  });
  it('66', () => {
    expect(getAncestorsByTreeItem({ key: 'id', value: 66, childrenKey: 'children', tree: industries }).map(({ id }) => id)).toStrictEqual([16, 66]);
  });
});

describe('etFamily with not exist node', () => {
  it('666', () => {
    expect(getAncestorsByTreeItem({ key: 'id', value: 666, childrenKey: 'children', tree: industries }).map(({ id }) => id)).toStrictEqual([]);
  });
});
