---
tags: 
    - git
    - 笔记
desc: git commit -m "..."
---

# git commit规范
:::tip
遵循 [Angular Team Commit Specification](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)
:::

::: success 插件
相关的vscode插件: [git-commit-plugin](https://marketplace.visualstudio.com/items?itemName=redjue.git-commit-plugin)
:::

## 格式

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```



## 类型

|Type|	Description|
|--|--|
|feat|	A new feature|
|fix|	A bug fix|
|docs|	Documentation only changes|
|style:|	Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)|
|refactor|	A code change that neither fixes a bug nor adds a feature|
|perf|	A code change that improves performance|
|test|	Adding missing or correcting existing tests|
|chore|	Changes to the build process or auxiliary tools and libraries such as documentation generation|