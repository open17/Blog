---
tags:
    - SEO
    - sitemap
    - google
---

# google加快收录

我们可以在[search console](https://search.google.com/search-console/)里通过手动提交sitemap来加快google的收录速度。



## 验证网站所有权

在此之前我们先要对网站进行验证,google支持多种验证方法

vuepress站点可以使用tag验证,比如
```js
module.exports = {
    head: [
        ['meta', { name: 'baidu-site-verification', content: 'codeva-x3tdSgw9mt' }],
        ['meta', { name: 'google-site-verification', content: 'MapY2SW-iYvQIGVm_zwOjO4nrecsyTRxEBGtMypwJQA' }]
    ],
}
```
可以就可以完成百度验证和谷歌验证网站所有权

## 提交sitemap
之后我们便可以在百度搜索资源平台或者谷歌搜索控制台里提交sitemap了

填入对应的sitemap地址即可,vuepress-theme-qbook主题默认生成的sitemap地址便是'/sitemp.xml'




