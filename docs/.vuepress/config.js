module.exports = {
    theme: 'vuepress-theme-qbook',
    title: 'OPEN17的个人小站',
    description: 'open17的个人博客~',
    head: [
        ['script', {}, `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?79ed11db88a25b0fa7b2bdd07ab6f855";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();`
        ],
        [
            "meta",
            {
                name: "keywords",
                content:
                    "open17, 博客, vuepress, vuepress-theme-qbook, vuepress-theme, 主题, IT",
            },
        ],
        ['meta', { name: 'baidu-site-verification', content: 'codeva-x3tdSgw9mt' }],
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
        ['link', { rel: 'manifest', href: '/site.webmanifest' }],
        ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
        ['meta', { name: 'msapplication-TileColor', content: '#603cba' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
         ['meta', { name: 'google-site-verification', content: 'MapY2SW-iYvQIGVm_zwOjO4nrecsyTRxEBGtMypwJQA' }]
    ],
    plugins: [
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                popupComponent: 'MySWUpdatePopup',
                updatePopup: {
                    message: "铛铛铛~博客已更新!",
                    buttonText: "立刻刷新!",
                }
            }
        ]
    ],
    themeConfig: {
        avatar: "https://cdn.jsdelivr.net/gh/open17/Pic/img/202402180055280.webp",
        logo: "android-chrome-512x512.png",
        name: "我的博客",
        defaultPostImg: "https://cdn.jsdelivr.net/gh/open17/Pic/img/202402082314316.jpg",
        defaultCardImg: "https://cdn.jsdelivr.net/gh/open17/Pic/img/202402082335721.jpg",
        homeWallpaper: "https://cdn.jsdelivr.net/gh/open17/Pic/img/202402100325389.webp",
        prevText: "前",
        nextText: "后",
        sns: [
            {
                type: "github",
                link: "https://github.com/open17"
            },
            {
                type: "zhihu",
                link: "https://www.zhihu.com/",
            },
            {
                type: "custom",
                link: "https://qbook.open17.vip/",
                svg: `<svg t="1707409272024" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4718" width="200" height="200"><path d="M463.736 2.13C290.65 28.76 144.193 111.973 47.666 288.387S-45.535 1020.67 513.663 1024c0 0 169.757-15.578 9.986-160.97 0 0-51.127-97.593 62.044-115.301 0 0 159.772 4.394 179.743 0s264.155-51.127 259.628-312.885S730.021-22.368 463.735 2.13zM194.122 518.058a89.871 89.871 0 0 1-89.871-89.871 89.871 89.871 0 0 1 89.871-89.872 89.871 89.871 0 0 1 89.871 89.872 90.004 90.004 0 0 1-89.871 89.871z m196.652-226.342a90.004 90.004 0 0 1-110.376-63.11 90.004 90.004 0 0 1 63.11-110.375 90.004 90.004 0 0 1 110.375 63.11 90.004 90.004 0 0 1-63.376 110.508z m282.928 0a90.004 90.004 0 0 1-110.11-62.977 90.004 90.004 0 0 1 63.11-110.375 90.004 90.004 0 0 1 109.976 63.11 90.004 90.004 0 0 1-62.976 110.375z m169.49 223.147a90.004 90.004 0 0 1-110.375-63.11 90.004 90.004 0 0 1 63.11-110.375 90.004 90.004 0 0 1 110.375 63.11 90.004 90.004 0 0 1-63.11 110.375z" p-id="4719"></path></svg>`,
                color: "#c13584"
            },
            {
                type: "custom",
                svg: `<svg t="1708010508593" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4584" width="200" height="200"><path d="M686.999439 765.01224L571.922545 876.249137c-19.872982 19.936982-47.393956 28.256974-77.799927 28.256974s-57.890946-8.319992-77.827928-28.256974l-184.836829-186.149827c-19.936982-19.936982-29.952972-49.057954-29.952972-79.491926s10.016991-57.890946 29.952972-77.827928l184.299829-186.888827c19.936982-19.936982 47.999955-27.520974 78.371928-27.520974s57.890946 8.319992 77.799927 28.256973l115.069894 111.203897c21.92098 21.98498 58.242946 21.21698 81.059924-1.631998 22.816979-22.880979 23.584978-59.170945 1.663999-81.123925L658.389465 262.588706a215.3778 215.3778 0 0 0-102.884904-56.770947l-1.439999-0.288L659.322464 98.741858c22.01698-21.92098 21.24898-58.274946-1.567998-81.123924s-59.170945-23.552978-81.155925-1.631999l-430.9636 430.9996C103.77198 488.871496 81.883 546.699443 81.883 610.605384s21.88898 123.525885 63.746941 165.351846l185.480828 186.088827c41.857961 41.760961 99.711907 61.952943 163.591848 61.952943s121.732887-21.85598 163.619848-63.745941l111.335897-112.516895c21.92098-21.92098 21.15298-58.242946-1.663999-81.059925s-59.138945-23.584978-81.027924-1.663999z m200.936813-209.929805H455.052654c-29.952972 0-54.17895 25.760976-54.17895 57.442947s24.224978 57.442947 54.17895 57.442946h432.883598c29.920972 0 54.17895-25.760976 54.17895-57.442946s-24.292977-57.442947-54.17895-57.442947z" fill="" p-id="4585"></path></svg>`,
                link: "https://leetcode.cn/u",
                color: "#F89F1B"
            }
        ],
        desc: "by open17 ",
        pics: [
            {
                img: 'https://cdn.jsdelivr.net/gh/open17/Pic/img/202402082335721.jpg',
                color: 'rgba(92, 101, 124, 0.2)'
            },
            {
                img: 'https://cdn.jsdelivr.net/gh/open17/Pic/img/202402082335237.jpg',
                color: 'rgba(92, 101, 124, 0.2)'
            },
            {
                img: 'https://cdn.jsdelivr.net/gh/open17/Pic/img/202402082314316.jpg',
                color: 'rgba(92, 101, 124, 0.1)'
            },
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
                text: '算法竞赛',
                link: '/template/',
                icon: 'el-icon-medal',
                sub: [
                    {
                        text: "概述",
                        link: "/template/",
                    },
                    {
                        text: "旅途的开始",
                        link: "/template/旅途的开始",
                    },
                    {
                        text: "数据结构",
                        link: "/template/数据结构",
                    },
                    {
                        text: "算法",
                        link: "/template/算法",
                    },
                    {
                        text: "图论",
                        link: "/template/图论",
                    },
                    {
                        text: "数学",
                        link: "/template/数学",
                    },
                    {
                        text: "动态规划",
                        link: "/template/动态规划",
                    },
                    {
                        text: "字符串",
                        link: "/template/字符串",
                    },
                    {
                        text: "搜索",
                        link: "/template/搜索",
                    },
                ]
            },
            {
                text: '链接',
                icon: 'el-icon-link',
                sub: [
                    {
                        text: "友链",
                        link: "/links/friends",
                    },
                    {
                        text: "娱乐",
                        link: "/links/entertainment",
                    },
                    {
                        text: "学习",
                        link: "/links/study",
                    },
                    {
                        text: "工具",
                        link: "/links/tools",
                    }
                ]
            }
        ],
        sideBar: [
            {
                title: "算法竞赛模板",
                icon: "el-icon-video-camera",
                links: [
                    {
                        text: "概述",
                        link: "/template/",
                    },
                    {
                        text: "旅途的开始",
                        link: "/template/旅途的开始",
                    },
                    {
                        text: "数据结构",
                        link: "/template/数据结构",
                    },
                    {
                        text: "算法",
                        link: "/template/算法",
                    },
                    {
                        text: "图论",
                        link: "/template/图论",
                    },
                    {
                        text: "数学",
                        link: "/template/数学",
                    },
                    {
                        text: "动态规划",
                        link: "/template/动态规划",
                    },
                    {
                        text: "字符串",
                        link: "/template/字符串",
                    },
                    {
                        text: "搜索",
                        link: "/template/搜索",
                    },
                ]
            },
            {
                title: "链接",
                icon: "el-icon-map-location",
                links: [
                    {
                        text: "友链",
                        link: "/links/friends",
                    },
                    {
                        text: "娱乐",
                        link: "/links/entertainment",
                    },
                    {
                        text: "学习",
                        link: "/links/study",
                    },
                    {
                        text: "工具",
                        link: "/links/tools",
                    }
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
            clientId: 'e262f99ff317b8f2d87d',
            clientSecret: 'e38cbbdb2693f7c2267d285ecf53ab88f0535cb0',
        },
        pageSize: 5,
        hostname: "https://blog.open17.vip"
    }
}