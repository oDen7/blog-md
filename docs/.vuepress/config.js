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
    logo: 'https://vuejs.org/images/logo.png',
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
    ]
  })
}