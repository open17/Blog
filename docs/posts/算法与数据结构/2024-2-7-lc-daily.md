---
tags: 
    - leetcode
    - 每日一题
    - 算法
desc: leetcode每日一题
img: blog.png
---
# 2641. 二叉树的堂兄弟节点 II
[题目链接](https://leetcode.cn/problems/cousins-in-binary-tree-ii/description/)
::: success 思路
BFS改改就行
记得python是没队列的,要用双端队列
:::
```py
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def replaceValueInTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        q=deque()
        q.append(root)
        while q:
            s=len(q)
            vals=[]
            nodes=[]
            for _ in range(s):
                node=q.popleft()
                nodes.append(node)
                val=0
                if node.left:
                    val+=node.left.val
                    q.append(node.left)
                if node.right:
                    val+=node.right.val
                    q.append(node.right)
                vals.append(val)
            tot=sum(vals)
            for node in nodes:
                lv=0
                if node.left:
                    lv+=node.left.val
                    node.left.val=tot-node.left.val
                if node.right:
                    if node.left: node.left.val-=node.right.val
                    node.right.val=tot-node.right.val-lv
        root.val=0
        return root
```
