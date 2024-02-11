---
tags: 
    - 日记
    - 博客
    - 建站
desc: vuepress+vuepress-theme-qbook+vercel+cloudflare白嫖搭建静态个人博客
---

# 博客搭建日记
::: tip 目录
[[toc]]
:::

## 前言
市面上其实有挺多的博客建站相关的选择,从静态到动态博客都有,因为不想购买服务器和承担被攻击的风险,同时发挥白嫖精神[^1],自然选择了静态博客

[^1]: 静态博客较多免费的托管服务


静态博客市面上的选择其实也挺多的,从hexo,hugo到vuepress,vitepress等,最早的时候我用过一段时间的hugo和它的stack主题,挺符合我的审美的

但是后来我发现stack主题用的人其实挺多的,总是与别人"撞衫"
同时我其实是一个很喜欢魔改主题的人,我希望博客能有更强的自定义性和可扩展性

因此我转向了vuepress,支持在markdown中使用vue组件和语法,对我来说这无疑大大增强了扩展性且使用方便

在此之后我发现vuepress也支持自己写一个主题,同时还有一个看起来挺方便的博客插件

所以处于练习和个人爱折腾的原因,我又基于vuepress写了本站使用的这款符合我个人审美的博客主题vuepress-theme-qbook,虽然目前还有很多功能不够完善,但是已经能满足我的基本需求了,接下来也会支持更新和维护

这里再打一个广告哈哈哈:

<LinkCard title="本站博客主题" link="https://qbook.open17.vip/" desc="本博客基于vuepress-theme-qbook搭建" />

<div style="clear:both"></div>

## vercel
在主题开发完毕后,接下来的事情就是部署啦,vuepress原本文档[部署](https://vuepress.vuejs.org/guide/deploy.html)就提供了很多部署方案

最开始我使用的是github-page的静态托管,好处自然是免费且方便,复制一个github action就行

但是缺点主要是

1. 国内访问速度慢
2. 域名只能用github的二级域名
3. 如果不是部署在xxx.github.io仓库下(xxx为你的用户名),博客不部署在根目录下,不方便输入网址
4. github page感觉部署的有点慢

因此我转向vercel部署,vercel的白嫖版本足够使用了,vercel本身便支持vuepress部署,甚至不用写部署脚本,直接在vercel导入仓库会自动识别vuepress

部署之后vercel会自动分配一个二级域名,并且支持自定义域名,并且vercel的部署速度也很快

vercel的域名一般是仓库名并且可以自己设置,而且最重要的是它在根目录下,这点比github-page好很多

如果你自己有一个域名的话,你还可以自定义更改域名,非常的方便(不过这点github-page也支持)

## cloudflare

在完成以上步骤之后,我们可以使用cloudflare进一步优化vervel的访问[^2]

[^2]: 尽管很多人认为cf在国内是减速器,但是至少在我这里速度还是不错的

cloudflare可以提供域名解析服务,并且提供免费的CDN加速服务

这里我们的域名DNS先转到cloundflare提供的域名名下,然后就可以加入cname解析,然后再在vervel中绑定一下解析的域名

现在就可以使用cloudflare提供的域名解析服务和cdn加速服务啦

