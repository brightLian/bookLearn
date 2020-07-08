module.exports = {
    title: 'JavaScript',  // 设置网站标题
    description : 'JavaScript 高级程序设计',
    themeConfig: {
        head: [
            ['link', { rel: 'icon', href: 'icon/favicon.svg' }]
        ],
        logo: '/image/banner.png',
        nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/chapterFirst/first' },
        ],
        sidebarDepth: 2,
        displayAllHeaders: true,
        editLinks: true,
        docsBranch: 'master',
        sidebar: [
            {
                title: '第1章 JavaScript简介',   // 标题：必要的
                path: '/chapterFirst/first',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 展开侧边栏： 可选的, 默认值是 true,
                sidebarDepth: 2,    // 侧边栏深度：可选的, 默认值是 1
                children: [
                    '/chapterFirst/first.md',
                    '/chapterFirst/second.md',
                    '/chapterFirst/third.md',
                    '/chapterFirst/fourth.md'
                ]
            },{
                title: '第2章 在HTML中使用JavaScript',   // 标题：必要的
                path: '/chapterSecond/first',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 展开侧边栏： 可选的, 默认值是 true,
                sidebarDepth: 2,    // 侧边栏深度：可选的, 默认值是 1
                children: [
                    '/chapterSecond/first.md',
                    '/chapterSecond/second.md',
                    '/chapterSecond/third.md',
                    '/chapterSecond/fourth.md',
                    '/chapterSecond/fifth.md'
                ]
            },{
                title: '第3章 基本概念',   // 标题：必要的
                path: '/chapterThird/first',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 展开侧边栏： 可选的, 默认值是 true,
                sidebarDepth: 2,    // 侧边栏深度：可选的, 默认值是 1
                children: [
                    '/chapterThird/first.md',
                    '/chapterThird/second.md',
                    '/chapterThird/third.md',
                    '/chapterThird/fourth.md',
                    '/chapterThird/fifth.md',
                    '/chapterThird/sixth.md',
                    '/chapterThird/seventh.md',
                    '/chapterThird/eighth.md',
                ]
            },{
                title: '第4章 变量、作用域和内存问题',   // 标题：必要的
                path: '/chapterFourth/first',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 展开侧边栏： 可选的, 默认值是 true,
                sidebarDepth: 2,    // 侧边栏深度：可选的, 默认值是 1
                children: [
                    '/chapterFourth/first.md',
                    '/chapterFourth/second.md',
                    '/chapterFourth/third.md',
                    '/chapterFourth/fourth.md',
                ]
            }, {
                title: '第5课 引用类型',
                path: '/chapterFifth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterFifth/first.md',
                    '/chapterFifth/second.md',
                    '/chapterFifth/third.md',
                    '/chapterFifth/fourth.md',
                    '/chapterFifth/fifth.md',
                    '/chapterFifth/sixth.md',
                    '/chapterFifth/seventh.md',
                    '/chapterFifth/eighth.md',
                ]
            }, {
                title: '第6课 面向对象程序涉及',
                path: '/chapterSixth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterSixth/first.md',
                    '/chapterSixth/second.md',
                    '/chapterSixth/third.md',
                    '/chapterSixth/fourth.md'
                ]
            },
        ]
    }
};
