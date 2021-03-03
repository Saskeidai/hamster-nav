// 主页侧边导航栏
var indexSideList = [{
            title: "工具栏",
            list: [{
                    name: "百度翻译",
                    url: "https://fanyi.baidu.com/?aldtype=16047#auto/zh"
                },
                {
                    name: "阿里矢量图库",
                    url: "https://www.iconfont.cn/"
                },
                {
                    name: "snipaste(截图)",
                    url: "https://www.snipaste.com/"
                },
                {
                    name: "filezilla(上传服务器)",
                    url: "https://www.filezilla.cn/"
                }
            ]
        },
        {
            title: "博客",
            list: [{
                    name: "博客园",
                    url: "https://www.cnblogs.com/"
                },
                {
                    name: "掘金",
                    url: "https://juejin.cn/"
                }
            ]
        },
        {
            title: "编程",
            list: [{
                    name: "菜鸟教程",
                    url: "https://www.runoob.com/"
                },
                {
                    name: "MDN",
                    url: "https://developer.mozilla.org/zh-CN/"
                },
                {
                    name: "w3school",
                    url: "https://www.w3school.com.cn/"
                }
            ]
        },
        {
            title: "新媒体运营",
            list: [{
                    name: "微信公众号",
                    url: "https://mp.weixin.qq.com/"
                },
                {
                    name: "96编辑器",
                    url: "https://bj.96weixin.com/"
                },
                {
                    name: "135编辑器",
                    url: "https://www.135editor.com/"
                },
                {
                    name: "创客贴",
                    url: "https://www.chuangkit.com/designtools/designindex"
                },
                {
                    name: "图片格式转换",
                    url: "https://www.easyicon.net/covert/"
                }
            ]
        },
        {
            title: "多媒体",
            list: [{
                    name: "bilibili",
                    url: "https://www.bilibili.com/"
                },
                {
                    name: "网易云音乐",
                    url: "https://music.163.com/"
                }
            ]
        },
        {
            title: "办公素材",
            list: [{
                name: "PPT宝藏",
                url: "http://www.pptbz.com/"
            }]
        }
    ]
    // 资源下载导航栏
var resourceSideList = [{
        title: "工具栏",
        list: [{
                name: "PPT宝藏",
                url: "http://www.pptbz.com/"
            },
            {
                name: "PPT宝藏",
                url: "http://www.pptbz.com/"
            },
            {
                name: "PPT宝藏",
                url: "http://www.pptbz.com/"
            },
            {
                name: "PPT宝藏",
                url: "http://www.pptbz.com/"
            }, {
                name: "PPT宝藏",
                url: "http://www.pptbz.com/"
            }, {
                name: "PPT宝藏",
                url: "http://www.pptbz.com/"
            }, {
                name: "PPT宝藏",
                url: "http://www.pptbz.com/"
            }, {
                name: "PPT宝藏",
                url: "http://www.pptbz.com/"
            }, {
                name: "PPT宝藏",
                url: "http://www.pptbz.com/"
            }, {
                name: "PPT宝藏",
                url: "http://www.pptbz.com/"
            }, {
                name: "PPT宝藏",
                url: "http://www.pptbz.com/"
            }, {
                name: "PPT宝藏",
                url: "http://www.pptbz.com/"
            }, {
                name: "PPT宝藏",
                url: "http://www.pptbz.com/"
            }, {
                name: "PPT宝藏",
                url: "http://www.pptbz.com/"
            }, {
                name: "PPT宝藏",
                url: "http://www.pptbz.com/"
            }, {
                name: "PPT宝藏",
                url: "http://www.pptbz.com/"
            }, {
                name: "PPT宝藏",
                url: "http://www.pptbz.com/"
            }, {
                name: "PPT宝藏",
                url: "http://www.pptbz.com/"
            }, {
                name: "PPT宝藏",
                url: "http://www.pptbz.com/"
            }
        ]
    }]
    //资源下载内容数据
var resourceContent = [{
        title: "资源大全"
    },
    {
        title: "前端天地",
        items: [{
            ico: "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1612270364770-apple-touch-icon-144-precomposed.png",
            name: "BootCDN",
            introduce: "稳定、快速、免费的前端开源项目 CDN 加速服务 ",
            url: "https://www.bootcdn.cn/"
        }, {
            ico: "https://developer.mozilla.org/favicon.ico",
            name: "MDN",
            introduce: "mozilla 专业前端开发文档",
            url: "https://developer.mozilla.org/zh-CN/"
        }, {
            ico: "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1611546016949-auc2z-1pay4-003.png",
            name: "jQuery API 中文文档",
            introduce: "jQuery API 3.5.1 速查表，快速查询 jQ 语法",
            url: "https://jquery.cuishifeng.cn/"
        }, {
            ico: "http://www.ruanyifeng.com/blog/favicon.ico",
            name: "Fetch API 教程",
            introduce: "阮一峰的Fetch API 教程",
            url: "http://www.ruanyifeng.com/blog/"
        }, {
            ico: "http://flexboxfroggy.com/favicon.ico",
            name: "Flexbox Froggy",
            introduce: "帮助你学习 Flex 布局的小游戏，难度不高，趣味性强",
            url: "http://flexboxfroggy.com/"
        }, {
            ico: "https://ziyuan.baidu.com/favicon.ico",
            name: "百度搜索资源平台",
            introduce: "百度官方的搜索引擎优化平台，让网站更具价值",
            url: "https://ziyuan.baidu.com/"
        }, {
            ico: "http://www.bshare.cn/favicon.ico",
            name: "bShare",
            introduce: "强大的社会化图文分享工具，轻松生成分享组件代码",
            url: "http://www.bshare.cn/"
        }, {
            ico: "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/cloudbase-cms/upload/2021-02-05/wpd5cu8cpudb38hjy3rckjaxwg3c4ixj_.png",
            name: "前端学习路线",
            introduce: "一个帮助新手、初级、中级前端开发者不断精进学习的网站，前端学习路上，不再迷茫~",
            url: "https://objtube.github.io/front-end-roadmap/"
        }, {
            ico: "https://www.tslang.cn/favicon.ico",
            name: "TypeScript中文网",
            introduce: "TypeScript 是 JavaScript 的一个超集，支持 ECMAScript 6 标准。",
            url: "https://www.tslang.cn/index.html"
        }, {
            ico: "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1611148904143-1610274081627-鱼皮.jpg",
            name: "程序员鱼皮",
            introduce: "公众号 '程序员鱼皮'，分享实用编程技术，帮助更多人学习编程",
            url: "https://mp.weixin.qq.com/s/jx3bH_OAE6hRDrqoxi8F_Q"
        }]
    },
    {
        title: "装机系统123",
        items: [{
            ico: "https://www.baidu.com/favicon.ico",
            name: "百度网",
            introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
            url: "https://wwww.baidu.com"
        }, {
            ico: "https://www.baidu.com/favicon.ico",
            name: "百度网",
            introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
            url: "https://wwww.baidu.com"
        }, {
            ico: "https://www.baidu.com/favicon.ico",
            name: "百度网",
            introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
            url: "https://wwww.baidu.com"
        }, {
            ico: "https://www.baidu.com/favicon.ico",
            name: "百度网",
            introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
            url: "https://wwww.baidu.com"
        }, {
            ico: "https://www.baidu.com/favicon.ico",
            name: "百度网",
            introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
            url: "https://wwww.baidu.com"
        }, {
            ico: "https://www.baidu.com/favicon.ico",
            name: "百度网",
            introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
            url: "https://wwww.baidu.com"
        }, {
            ico: "https://www.baidu.com/favicon.ico",
            name: "百度网",
            introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
            url: "https://wwww.baidu.com"
        }, {
            ico: "https://www.baidu.com/favicon.ico",
            name: "百度网",
            introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
            url: "https://wwww.baidu.com"
        }, {
            ico: "https://www.baidu.com/favicon.ico",
            name: "百度网",
            introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
            url: "https://wwww.baidu.com"
        }, {
            ico: "https://www.baidu.com/favicon.ico",
            name: "百度网",
            introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
            url: "https://wwww.baidu.com"
        }]
    }, {
        title: "装机系统",
        items: [{
            ico: "https://www.baidu.com/favicon.ico",
            name: "百度网",
            introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
            url: "https://wwww.baidu.com"
        }, {
            ico: "https://www.baidu.com/favicon.ico",
            name: "百度网",
            introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
            url: "https://wwww.baidu.com"
        }, {
            ico: "https://www.baidu.com/favicon.ico",
            name: "百度网",
            introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
            url: "https://wwww.baidu.com"
        }, {
            ico: "https://www.baidu.com/favicon.ico",
            name: "百度网",
            introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
            url: "https://wwww.baidu.com"
        }, {
            ico: "https://www.baidu.com/favicon.ico",
            name: "百度网",
            introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
            url: "https://wwww.baidu.com"
        }, {
            ico: "https://www.baidu.com/favicon.ico",
            name: "百度网",
            introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
            url: "https://wwww.baidu.com"
        }, {
            ico: "https://www.baidu.com/favicon.ico",
            name: "百度网",
            introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
            url: "https://wwww.baidu.com"
        }, {
            ico: "https://www.baidu.com/favicon.ico",
            name: "百度网",
            introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
            url: "https://wwww.baidu.com"
        }, {
            ico: "https://www.baidu.com/favicon.ico",
            name: "百度网",
            introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
            url: "https://wwww.baidu.com"
        }, {
            ico: "https://www.baidu.com/favicon.ico",
            name: "百度网",
            introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
            url: "https://wwww.baidu.com"
        }]
    }
]

var itemsq = [{
    ico: "https://www.baidu.com/favicon.ico",
    name: "百度网",
    introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
    url: "https://wwww.baidu.com"
}, {
    ico: "https://www.baidu.com/favicon.ico",
    name: "百度网",
    introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
    url: "https://wwww.baidu.com"
}, {
    ico: "https://www.baidu.com/favicon.ico",
    name: "百度网",
    introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
    url: "https://wwww.baidu.com"
}, {
    ico: "https://www.baidu.com/favicon.ico",
    name: "百度网",
    introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
    url: "https://wwww.baidu.com"
}, {
    ico: "https://www.baidu.com/favicon.ico",
    name: "百度网",
    introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
    url: "https://wwww.baidu.com"
}, {
    ico: "https://www.baidu.com/favicon.ico",
    name: "百度网",
    introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
    url: "https://wwww.baidu.com"
}, {
    ico: "https://www.baidu.com/favicon.ico",
    name: "百度网",
    introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
    url: "https://wwww.baidu.com"
}, {
    ico: "https://www.baidu.com/favicon.ico",
    name: "百度网",
    introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
    url: "https://wwww.baidu.com"
}, {
    ico: "https://www.baidu.com/favicon.ico",
    name: "百度网",
    introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
    url: "https://wwww.baidu.com"
}, {
    ico: "https://www.baidu.com/favicon.ico",
    name: "百度网",
    introduce: "精选各个语言经典案例，每道题目配解题思路、详细代码、运行结果，细化编程每一步，关注嗨客实战，编程不迷茫。",
    url: "https://wwww.baidu.com"
}]