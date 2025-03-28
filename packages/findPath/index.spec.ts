import { describe, it, expect } from 'vitest';

import findPath from './index';

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
                'name': 'name20',
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
        'name': 'name16',
        'children': [
            {
                'id': 65,
                'name': 'name65',
                'children': []
            },
            {
                'id': 66,
                'name': 'name66',
                'children': []
            }
        ]
    }
] as unknown as TreeNode[];

describe('findPath with exist node', () => {
  // first item
  it('1', () => {
    expect(findPath({ key: 'id', value: 1, childrenKey: 'children', tree: industries }).map(({ id }) => id)).toStrictEqual([1]);
  });
  it('17', () => {
    expect(findPath({ key: 'id', value: 17, childrenKey: 'children', tree: industries }).map(({ id }) => id)).toStrictEqual([1, 17]);
  });
  it('18', () => {
    expect(findPath({ key: 'id', value: 18, childrenKey: 'children', tree: industries }).map(({ id }) => id)).toStrictEqual([1, 18]);
  });
  it('19', () => {
    expect(findPath({ key: 'id', value: 19, childrenKey: 'children', tree: industries }).map(({ id }) => id)).toStrictEqual([1, 19]);
  });
  it('20', () => {
    expect(findPath({ key: 'id', value: 20, childrenKey: 'children', tree: industries }).map(({ id }) => id)).toStrictEqual([1, 20]);
  });

  // second item
  it('2', () => {
    expect(findPath({ key: 'id', value: 2, childrenKey: 'children', tree: industries }).map(({ id }) => id)).toStrictEqual([2]);
  });
  it('21', () => {
    expect(findPath({ key: 'id', value: 21, childrenKey: 'children', tree: industries }).map(({ id }) => id)).toStrictEqual([2, 21]);
  });
  it('211', () => {
    expect(findPath({ key: 'id', value: 211, childrenKey: 'children', tree: industries }).map(({ id }) => id)).toStrictEqual([2, 21, 211]);
  });
  it('212', () => {
    expect(findPath({ key: 'id', value: 212, childrenKey: 'children', tree: industries }).map(({ id }) => id)).toStrictEqual([2, 21, 212]);
  });

  // last item
  it('16', () => {
    expect(findPath({ key: 'id', value: 16, childrenKey: 'children', tree: industries }).map(({ id }) => id)).toStrictEqual([16]);
  });
  it('66', () => {
    expect(findPath({ key: 'id', value: 66, childrenKey: 'children', tree: industries }).map(({ id }) => id)).toStrictEqual([16, 66]);
  });
});

describe('findPath with not include current node', () => {
  it('212', () => {
    expect(findPath({ key: 'id', value: 212, childrenKey: 'children', tree: industries }, { includeCurrentNode: false }).map(({ id }) => id)).toStrictEqual([2, 21]);
  });
});

describe('findPath with not exist node', () => {
  it('666', () => {
    expect(findPath({ key: 'id', value: 666, childrenKey: 'children', tree: industries }).map(({ id }) => id)).toStrictEqual([]);
  });
});
