interface TreeChild {
  [child: string]: TreeNode[] | undefined;
}

interface TreeNode {
  [key: string]: TreeChild | string | number;
}

interface IParams {
  key: string;
  value: string | number;
  childrenKey: string; 
  tree: TreeNode[];
}

const omitChildren = (value: TreeNode, keyOfChildren: keyof TreeNode) => {
  // const res: Omit<TreeNode, keyOfChildren> = {};
  const res: Partial<TreeNode> = {};
  Object.keys(value).forEach(key => {
    if (key !== keyOfChildren) {
      res[key] = value[key];
    }
  });
  return res;
};

/**
 * 根据指定树节点获取祖先节点
 * @param params 
 * @returns
 */
const getAncestorsByTreeItem = (params: IParams): TreeNode[] => {
  const walk = ({ key, value, childrenKey, tree }: IParams, original: boolean): TreeNode[] => {
    let res: TreeNode[] = [];
    for (let i = 0; i < tree?.length; i++) {
      const current = tree[i];
      res.push(omitChildren(current, childrenKey) as TreeNode);
      const _child = current[childrenKey] as unknown as TreeNode[] | undefined;
      if (current[key] === value) {
        res.push({ [key]: 'EOT' });
      } else if (_child?.length) {
        res = res.concat(walk({ key, value, childrenKey, tree: _child }, false));
      } else {
        res.pop();
      }
      if (res.length) {
        if (res[res.length - 1][key] === 'EOT') {
          if (original) {
            res.pop();
          }
          return res;
        } else {
          res.pop();
        }
      }
    }
    return res;
  };

  return walk(params, true);
};

export default getAncestorsByTreeItem;
