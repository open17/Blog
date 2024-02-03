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
        mdCodeTheme: ["atom-one-dark"]
    }
}