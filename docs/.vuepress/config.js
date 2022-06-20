const {
  defaultTheme
} = require('vuepress');
const {
  front
} = require("./router");

module.exports = {
  lang: 'zh-CN',
  title: 'oDen7的个人博客',
  description: '个人学习记录,成长日记',
  base: "/blog-md/",
  theme: defaultTheme({
    logo: 'https://raw.githubusercontent.com/oDen7/blog-imgUrl/main/40536961.jpg',
    sidebar: [{
        text: "前端",
        collapsible: true,
        children: [...front]
      },
      {
        text: "个人项目",
        collapsible: true,
        children: [{
          text: '算法图解',
          children: ['/project/algorithm-diagram-javascript.md']
        }, ]
      },
      {
        text: "杂货铺",
        collapsible: true,
        children: [

        ]
      },
    ]
  })
}