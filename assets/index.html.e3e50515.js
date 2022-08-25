import{_ as l,o as a,c as r,a as e,d,e as i,b as t,r as c}from"./app.bca61c05.js";const n={},s=i('<h1 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h1><h2 id="filereader\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#filereader\u7684\u4F5C\u7528" aria-hidden="true">#</a> FileReader\u7684\u4F5C\u7528</h2><blockquote><p>\u5141\u8BB8 Web \u5E94\u7528\u7A0B\u5E8F\u5F02\u6B65\u8BFB\u53D6\u5B58\u50A8\u5728\u7528\u6237\u8BA1\u7B97\u673A\u4E0A\u7684\u6587\u4EF6\uFF08\u6216\u539F\u59CB\u6570\u636E\u7F13\u51B2\u533A\uFF09\u7684\u5185\u5BB9</p></blockquote><h3 id="file\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#file\u5BF9\u8C61" aria-hidden="true">#</a> file\u5BF9\u8C61</h3><ul><li>\u53EF\u4EE5\u4E3A<code>input\u5143\u7D20</code>\u4E2D\u9009\u62E9\u6587\u4EF6\u540E\u8FD4\u56DE\u7684<code>FileList</code>\u5BF9\u8C61</li><li>\u53EF\u4EE5\u4E3A<code>\u62D6\u653E\u64CD\u4F5C</code>\u751F\u6210\u7684<code>DataTransfer</code>\u5BF9\u8C61</li></ul><h3 id="filereader\u5BF9\u8C61\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#filereader\u5BF9\u8C61\u5C5E\u6027" aria-hidden="true">#</a> FileReader\u5BF9\u8C61\u5C5E\u6027</h3><ol><li>FileReader.error</li></ol><blockquote><p>\u8868\u793A\u5728\u8BFB\u6587\u4EF6\u65F6\u53D1\u751F\u7684\u9519\u8BEF</p></blockquote><ol start="2"><li>FileReader.readyState <ol><li>Empty 0 \u8FD8\u6CA1\u6709\u52A0\u8F7D\u6570\u636E</li><li>Loading 1 \u6570\u636E\u6B63\u5728\u88AB\u52A0\u5728</li><li>Done 2 \u5DF2\u5B8C\u6210\u5168\u90E8\u7684\u8BFB\u53D6\u8BF7\u6C42</li></ol></li><li>fileReader.result</li></ol><blockquote><p>\u6587\u4EF6\u7684\u5185\u5BB9.\u5C5E\u6027\u4EC5\u5728\u8BFB\u53D6\u64CD\u4F5C\u5B8C\u6210\u540E\u624D\u6709\u6548,\u6570\u636E\u7684\u683C\u5F0F\u53D6\u51B3\u4E8E\u4F7F\u7528\u90A3\u4E2A\u65B9\u6CD5\u8BFB\u53D6\u64CD\u4F5C</p></blockquote><h3 id="filereader\u4E8B\u4EF6\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#filereader\u4E8B\u4EF6\u5904\u7406" aria-hidden="true">#</a> FileReader\u4E8B\u4EF6\u5904\u7406</h3><ol><li>FileReader.onabort <blockquote><p>\u5728\u8BFB\u53D6\u64CD\u4F5C\u88AB\u4E2D\u65AD\u65F6\u89E6\u53D1</p></blockquote></li><li>FileReader.onerror <blockquote><p>\u5728\u8BFB\u53D6\u64CD\u4F5C\u53D1\u751F\u9519\u8BEF\u65F6\u89E6\u53D1</p></blockquote></li><li>FileReader.onload <blockquote><p>\u5728\u8BFB\u53D6\u64CD\u4F5C\u5B8C\u6210\u65F6\u89E6\u53D1</p></blockquote></li><li>FileReader.onloadstart <blockquote><p>\u5728\u8BFB\u53D6\u64CD\u4F5C\u5F00\u59CB\u65F6\u89E6\u53D1</p></blockquote></li><li>FileReader.onloadend <blockquote><p>\u5728\u8BFB\u53D6\u64CD\u4F5C\u7ED3\u675F\u65F6\u89E6\u53D1</p></blockquote></li><li>FileReader.onprogress <blockquote><p>\u5728\u8BFB\u53D6Blob\u65F6\u89E6\u53D1</p></blockquote></li></ol><h3 id="filereader\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#filereader\u65B9\u6CD5" aria-hidden="true">#</a> FileReader\u65B9\u6CD5</h3><ol><li>FileReader.abort() <blockquote><p>\u4E2D\u6B62\u8BFB\u53D6\u64CD\u4F5C\u3002\u5728\u8FD4\u56DE\u65F6,<code>readyState</code>\u4E3A<code>Done</code></p></blockquote></li><li>FileReader.readAsArrayBuffer() <blockquote><p>\u5F00\u59CB\u8BFB\u53D6\u6307\u5B9A\u7684<code>Blob</code>\u4E2D\u7684\u5185\u5BB9,\u4E00\u65E6\u5B8C\u6210,result\u5C5E\u6027\u4E2D\u4FDD\u5B58\u7684\u5C06\u662F\u88AB\u8BFB\u53D6\u6587\u4EF6\u7684<code>ArrayBuffer\u6570\u636E\u5BF9\u8C61</code></p></blockquote></li><li>FileReader.readAsBinaryString() <blockquote><p>\u5F00\u59CB\u8BFB\u53D6\u6307\u5B9A\u7684<code>Blob</code>\u4E2D\u7684\u5185\u5BB9,\u4E00\u65E6\u5B8C\u6210,result\u5C5E\u6027\u4E2D\u4FDD\u5B58\u7684\u5C06\u662F\u88AB\u8BFB\u53D6\u6587\u4EF6\u7684<code>\u539F\u59CB\u4E8C\u8FDB\u5236\u6570\u636E</code></p></blockquote></li><li>FileReader.readAsDataURL() <blockquote><p>\u5F00\u59CB\u8BFB\u53D6\u6307\u5B9A\u7684<code>Blob</code>\u4E2D\u7684\u5185\u5BB9,\u4E00\u65E6\u5B8C\u6210,result\u5C5E\u6027\u4E2D\u5305\u542B\u4E00\u4E2A<code>data:</code>URL\u683C\u5F0F\u7684<code>Base64</code>\u5B57\u7B26\u4E32</p></blockquote></li><li>FileReader.readAsText() <blockquote><p>\u5F00\u59CB\u8BFB\u53D6\u6307\u5B9A\u7684<code>Blob</code>\u4E2D\u7684\u5185\u5BB9,\u4E00\u65E6\u5B8C\u6210,result\u5C5E\u6027\u4E2D\u5305\u542B\u4E00\u4E2A<code>\u5B57\u7B26\u4E32</code></p></blockquote></li></ol><h3 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> demo</h3>',15),u={href:"https://github.com/oDen7/blog-md-demo/tree/main/upload",target:"_blank",rel:"noopener noreferrer"},h=t("\u8FD9\u662F\u4E00\u4E2A\u5B9E\u4F8B");function b(p,f){const o=c("ExternalLinkIcon");return a(),r("div",null,[s,e("p",null,[e("a",u,[h,d(o)])])])}var q=l(n,[["render",b],["__file","index.html.vue"]]);export{q as default};