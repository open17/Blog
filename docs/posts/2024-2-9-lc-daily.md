---
tags:
    - leetcode
    - 每日一题
    - 算法
    - LCA
    - 倍增
desc: leetcode 每日一题
---

# 236. 二叉树的最近公共祖先
[题目链接](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/description/?envType=daily-question&envId=2024-02-09)
开心,写一个倍增lca奖励一下自己
```py
class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        # 预处理
        fa = defaultdict(lambda: defaultdict(lambda: TreeNode()))
        h = defaultdict(int)
        def dfs(node, f):
            if not node:
                return
            h[node.val] = h[f.val] + 1
            fa[node.val][0] = f
            for i in range(1, int(log2(h[node.val]))+1):
                # 小心,这里一开始写成fa[fa[node.val][i-1]][i-1],因为是default_dict没报错,de了一会
                fa[node.val][i] = fa[fa[node.val][i-1].val][i-1]
            dfs(node.left, node)
            dfs(node.right, node)
        dfs(root.left,root)
        dfs(root.right,root)
        if h[p.val] < h[q.val]:
            p, q = q, p
        # 跳到同一高度
        while h[p.val] > h[q.val]:
            p = fa[p.val][int(log2(h[p.val]-h[q.val]))] 
        if p == q:
            return p
        for j in range(int(log2(h[p.val])), -1, -1):
            if fa[p.val][j] == fa[q.val][j]:
                continue
            p = fa[p.val][j]
            q = fa[q.val][j]
        return fa[q.val][0]
```
