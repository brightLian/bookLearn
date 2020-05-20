module.exports = {
    title: 'SQL',  // 设置网站标题
    description : 'SQL必知必会',
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
                title: '第1课 了解 SQL',   // 标题：必要的
                path: '/chapterFirst/first',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 展开侧边栏： 可选的, 默认值是 true,
                sidebarDepth: 2,    // 侧边栏深度：可选的, 默认值是 1
                children: [
                    '/chapterFirst/first.md',
                    '/chapterFirst/second.md',
                    '/chapterFirst/third.md',
                    '/chapterFirst/fourth.md'
                ]
            },
            {
                title: '第2课 检索数据',
                path: '/chapterSecond/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterSecond/first.md',
                    '/chapterSecond/second.md',
                    '/chapterSecond/third.md',
                    '/chapterSecond/fourth.md',
                    '/chapterSecond/fifth.md',
                    '/chapterSecond/sixth.md',
                    '/chapterSecond/seventh.md',
                    '/chapterSecond/eighth.md'
                ]
            },
            {
                title: '第3课 排序检索数据',
                path: '/chapterThird/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterThird/first.md',
                    '/chapterThird/second.md',
                    '/chapterThird/third.md',
                    '/chapterThird/fourth.md',
                    '/chapterThird/fifth.md'
                ]
            },
            {
                title: '第4课 过滤数据',
                path: '/chapterFourth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterFourth/first.md',
                    '/chapterFourth/second.md',
                    '/chapterFourth/third.md',
                ]
            },
            {
                title: '第5课 高级数据过滤',
                path: '/chapterFifth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterFifth/first.md',
                    '/chapterFifth/second.md',
                    '/chapterFifth/third.md',
                    '/chapterFifth/fourth.md'
                ]
            },
            {
                title: '第6课 用通配符进行过滤',
                path: '/chapterSixth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterSixth/first.md',
                    '/chapterSixth/second.md',
                    '/chapterSixth/third.md'
                ]
            },
            {
                title: '第7课 创建计算字段',
                path: '/chapterSeventh/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterSeventh/first.md',
                    '/chapterSeventh/second.md',
                    '/chapterSeventh/third.md',
                    '/chapterSeventh/fourth.md'
                ]
            },
            {
                title: '第8课 使用函数处理数据',
                path: '/chapterEighth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterEighth/first.md',
                    '/chapterEighth/second.md',
                    '/chapterEighth/third.md'
                ]
            },
            {
                title: '第9课 汇总数据',
                path: '/chapterNinth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterNinth/first.md',
                    '/chapterNinth/second.md',
                    '/chapterNinth/third.md',
                    '/chapterNinth/fourth.md'
                ]
            },
            {
                title: '第10课 分组数据',
                path: '/chapterTenth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterTenth/first.md',
                    '/chapterTenth/second.md',
                    '/chapterTenth/third.md',
                    '/chapterTenth/fourth.md'
                ]
            },
            {
                title: '第11课 使用子查询',
                path: '/chapterEleventh/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterEleventh/first.md',
                    '/chapterEleventh/second.md',
                    '/chapterEleventh/third.md',
                    '/chapterEleventh/fourth.md'
                ]
            },
            {
                title: '第12课 联结表',
                path: '/chapterEleventh/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterTwelfth/first.md',
                    '/chapterTwelfth/second.md',
                    '/chapterTwelfth/third.md'
                ]
            },
            {
                title: '第13课 创建高级联结',
                path: '/chapterThirteenth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterThirteenth/first.md',
                    '/chapterThirteenth/second.md',
                    '/chapterThirteenth/third.md',
                    '/chapterThirteenth/fourth.md',
                    '/chapterThirteenth/fifth.md'
                ]
            },
            {
                title: '第14课 组合查询',
                path: '/chapterFourteenth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterFourteenth/first.md',
                    '/chapterFourteenth/second.md',
                    '/chapterFourteenth/third.md'
                ]
            },
            {
                title: '第15课 插入数据',
                path: '/chapterFifteenth/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterFifteenth/first.md',
                    '/chapterFifteenth/second.md',
                    '/chapterFifteenth/third.md'
                ]
            },
            {
                title: '第16课 更新和删除数据',
                path: '/chapterSixteen/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterSixteen/first.md',
                    '/chapterSixteen/second.md',
                    '/chapterSixteen/third.md',
                    '/chapterThirteenth/fourth.md'
                ]
            },
            {
                title: '第17课 创建和操纵表',
                path: '/chapterSeventeen/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterSeventeen/first.md',
                    '/chapterSeventeen/second.md',
                    '/chapterSeventeen/third.md',
                    '/chapterSeventeen/fourth.md',
                    '/chapterSeventeen/fifth.md'
                ]
            },
            {
                title: '第18课 使用视图',
                path: '/chapterEighteen/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterEighteen/first.md',
                    '/chapterEighteen/second.md',
                    '/chapterEighteen/third.md'
                ]
            },
            {
                title: '第19课 使用存储过程',
                path: '/chapterNineteen/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterNineteen/first.md',
                    '/chapterNineteen/second.md',
                    '/chapterNineteen/third.md',
                    '/chapterNineteen/fourth.md',
                    '/chapterNineteen/fifth.md'
                ]
            },
            {
                title: '第20课 管理事务处理',
                path: '/chapterTwenty/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterTwenty/first.md',
                    '/chapterTwenty/second.md',
                    '/chapterTwenty/third.md'
                ]
            },
            {
                title: '第21课 使用游标',
                path: '/chapterTwentyOne/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterTwentyOne/first.md',
                    '/chapterTwentyOne/second.md',
                    '/chapterTwentyOne/third.md'
                ]
            },
            {
                title: '第22课 高级SQL特性',
                path: '/chapterTwentyTwo/first',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/chapterTwentyTwo/first.md',
                    '/chapterTwentyTwo/second.md',
                    '/chapterTwentyTwo/third.md',
                    '/chapterTwentyTwo/fourth.md',
                    '/chapterTwentyTwo/fifth.md'
                ]
            }
        ]
    }
};
