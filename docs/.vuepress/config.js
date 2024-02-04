module.exports = {
    theme: 'vuepress-theme-qbook',
    title: '~',
    themeConfig: {
        avatar: "https://cdn.jsdelivr.net/gh/open17/Pic/img/202402031524062.webp",
        logo: "/logo.png",
        name: "我的博客",
        desc: "by open17 ",
        pics: [
            {
                img: 'default_bg.jpg',
                color: 'rgba(92, 101, 124, 0.1)'
            },
            {
                img: 'default_bg2.jpg',
                color: 'rgba(92, 101, 124, 0.1)'
            }
        ],
        nav: [
            {
                text: '主页',
                link: '/',
                icon: 'el-icon-cold-drink'
            },

            {
                text: '标签',
                link: '/tags/',
            },
            {
                text: '工具',
                link: '/tools/',
                icon: 'el-icon-bicycle'
            },
            {
                text: '链接',
                link: '/link/',
                icon: 'el-icon-link'
            },
        ],
        sideBar: [
            {
                title: "文档&工具",
                icon: "el-icon-chat-line-square",
                links: [
                    {
                        text: "说明",
                        link: "/tools/",
                    },
                ]
            },
            {
                title: "算法&模板",
                icon: "el-icon-camera",
                links: [
                ]
            },
        ],
        mdDefaultTheme: "light",
        mdCodeTheme: ["atom-one-dark"],
        comment: {
            // 设置 `platform` 而不是 `api`
            platform: 'github',
            // 存储 issue 和评论的库的所有者名称。
            owner: 'open17',
            // 用于存储 issue 和评论的存储库的名称。
            repo: 'Blog',
            // 从 OAuth2 规范中引入的 clientId 和 clientSecret。
            clientId: 'f1ba1cc9abc5b3844b05',
            clientSecret: 'ade32ddf8c5e1ff125fcfecde535d2d3c09f6f14',
        },
    }
}