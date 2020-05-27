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
            }
        ]
    }
};