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
        ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-XRDTL6KVXZ' }],
        ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-XRDTL6KVXZ');
    `],
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
                type: "qbook",
                link: "https://qbook.open17.vip/",
                svg: `<svg t="1707409272024" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4718" width="200" height="200"><path d="M463.736 2.13C290.65 28.76 144.193 111.973 47.666 288.387S-45.535 1020.67 513.663 1024c0 0 169.757-15.578 9.986-160.97 0 0-51.127-97.593 62.044-115.301 0 0 159.772 4.394 179.743 0s264.155-51.127 259.628-312.885S730.021-22.368 463.735 2.13zM194.122 518.058a89.871 89.871 0 0 1-89.871-89.871 89.871 89.871 0 0 1 89.871-89.872 89.871 89.871 0 0 1 89.871 89.872 90.004 90.004 0 0 1-89.871 89.871z m196.652-226.342a90.004 90.004 0 0 1-110.376-63.11 90.004 90.004 0 0 1 63.11-110.375 90.004 90.004 0 0 1 110.375 63.11 90.004 90.004 0 0 1-63.376 110.508z m282.928 0a90.004 90.004 0 0 1-110.11-62.977 90.004 90.004 0 0 1 63.11-110.375 90.004 90.004 0 0 1 109.976 63.11 90.004 90.004 0 0 1-62.976 110.375z m169.49 223.147a90.004 90.004 0 0 1-110.375-63.11 90.004 90.004 0 0 1 63.11-110.375 90.004 90.004 0 0 1 110.375 63.11 90.004 90.004 0 0 1-63.11 110.375z" p-id="4719"></path></svg>`,
                color: "#c13584"
            },
            {
                type:"gpt",
                svg:`<svg t="1709186652028" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4520" width="200" height="200"><path d="M956.408445 419.226665a250.670939 250.670939 0 0 0-22.425219-209.609236A263.163526 263.163526 0 0 0 652.490412 85.715535 259.784384 259.784384 0 0 0 457.728923 0.008192a261.422756 261.422756 0 0 0-249.44216 178.582564 258.453206 258.453206 0 0 0-172.848261 123.901894c-57.03583 96.868753-44.031251 219.132275 32.153053 302.279661a250.670939 250.670939 0 0 0 22.32282 209.609237 263.163526 263.163526 0 0 0 281.595213 123.901893A259.067596 259.067596 0 0 0 566.271077 1023.990784a260.60357 260.60357 0 0 0 249.339762-178.889759 258.453206 258.453206 0 0 0 172.848261-123.901893c57.445423-96.868753 44.13365-218.82508-32.050655-302.074865zM566.578272 957.124721c-45.362429 0-89.496079-15.666934-124.516283-44.543243 1.638372-0.921584 4.198329-2.150363 6.143895-3.481541l206.537289-117.757998a32.35785 32.35785 0 0 0 16.895713-29.081105V474.82892l87.243317 49.97035c1.023983 0.307195 1.638372 1.228779 1.638372 2.252762v238.075953c0 105.8798-86.936122 191.689541-193.942303 191.996736zM148.588578 781.102113a189.846373 189.846373 0 0 1-23.346803-128.612213c1.535974 1.023983 4.09593 2.559956 6.143895 3.48154L337.922959 773.729439c10.444622 6.143896 23.346803 6.143896 34.098621 0l252.30931-143.664758v99.531108c0 1.023983-0.307195 1.945567-1.331177 2.559956l-208.892449 118.986778a196.297463 196.297463 0 0 1-265.518686-70.04041zM94.112704 335.97688c22.630015-39.013737 58.367008-68.81163 101.16948-84.171369V494.591784c0 11.7758 6.45109 22.93721 16.793315 28.978707l252.30931 143.767156L377.141493 716.796006a3.174346 3.174346 0 0 1-2.867152 0.307195l-208.892448-118.986777A190.870355 190.870355 0 0 1 94.215102 335.874482z m717.607001 164.861198L559.410394 357.070922 646.653711 307.20297a3.174346 3.174346 0 0 1 2.969549-0.307195l208.892449 118.986777a190.358364 190.358364 0 0 1 70.961994 262.139544 194.556693 194.556693 0 0 1-101.16948 84.171369V529.407192a31.538664 31.538664 0 0 0-16.588518-28.671513z m87.03852-129.329002c-1.74077-1.023983-4.300727-2.559956-6.246294-3.48154l-206.639687-117.757999a34.09862 34.09862 0 0 0-33.996222 0L399.566711 393.934295v-99.531108c0-1.023983 0.307195-1.945567 1.331178-2.559956l208.892449-119.089176a195.990268 195.990268 0 0 1 265.518686 70.450003c22.732414 38.706542 31.129071 84.171369 23.346803 128.305018zM352.258716 548.862861l-87.243317-49.560757a2.457558 2.457558 0 0 1-1.638372-2.252762V258.870991c0-105.8798 87.243317-191.996736 194.556692-191.689541a194.556693 194.556693 0 0 1 124.209089 44.543243c-1.638372 0.921584-4.198329 2.252762-6.143896 3.48154l-206.639687 117.757999a31.948257 31.948257 0 0 0-16.793315 29.081105l-0.307194 286.715126z m47.307995-100.759887L512 384.001664l112.535687 63.998912v127.997824l-112.228492 63.998912-112.535687-63.998912-0.307195-127.997824z" p-id="4521"></path></svg>`,
                link:"https://gpt.open17.vip",
                color:"green"
            },
            {
                type: "custom",
                svg: `<svg t="1709186690979" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5529" width="200" height="200"><path d="M926.47619 355.644952V780.190476a73.142857 73.142857 0 0 1-73.142857 73.142857H170.666667a73.142857 73.142857 0 0 1-73.142857-73.142857V355.644952l304.103619 257.828572a170.666667 170.666667 0 0 0 220.745142 0L926.47619 355.644952zM853.333333 170.666667a74.044952 74.044952 0 0 1 26.087619 4.778666 72.704 72.704 0 0 1 30.622477 22.186667 73.508571 73.508571 0 0 1 10.678857 17.67619c3.169524 7.509333 5.12 15.652571 5.607619 24.210286L926.47619 243.809524v24.380952L559.469714 581.241905a73.142857 73.142857 0 0 1-91.306666 2.901333l-3.632762-2.925714L97.52381 268.190476v-24.380952a72.899048 72.899048 0 0 1 40.155428-65.292191A72.97219 72.97219 0 0 1 170.666667 170.666667h682.666666z" p-id="5530"></path></svg>`,
                link: "links/contact",
                color: "#F89F1B"
            },
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
            // {
            //     text:'学术',
            //     link:"https://gpt.open17.vip",
            //     icon:'el-icon-cpu'
            // },
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
                text: '   ',
                icon: 'el-icon-more',
                sub: [
                    {
                        text: "友链",
                        link: "/links/friends",
                    },
                    {
                        text: "联系",
                        link: "/links/contact",
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
                title: "更多",
                icon: "el-icon-map-location",
                links: [
                    {
                        text: "友链",
                        link: "/links/friends",
                    },
                    {
                        text: "联系",
                        link: "/links/contact",
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