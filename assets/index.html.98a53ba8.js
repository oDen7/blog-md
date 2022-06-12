import{_ as s,o as n,c as t,e as a}from"./app.8b0ddd4e.js";const e={},i=a(`<h1 id="typescript-\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#typescript-\u7F16\u8BD1" aria-hidden="true">#</a> typescript \u7F16\u8BD1</h1><h3 id="\u5982\u4F55\u8FD0\u884Cts\u6587\u4EF6\u5462" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u8FD0\u884Cts\u6587\u4EF6\u5462" aria-hidden="true">#</a> \u5982\u4F55\u8FD0\u884Cts\u6587\u4EF6\u5462\uFF1F</h3><blockquote><ul><li>\u7F16\u5199ts\u6587\u4EF6\u9700\u8981\u7528\u5230typescript,\u65E0\u6CD5\u76F4\u63A5\u8FD0\u884C,\u9700\u8981\u4F7F\u7528tsc\u5C06ts\u6587\u4EF6\u7F16\u8BD1\u6210js\u6587\u4EF6 <ul><li>\u4F7F\u7528 tsc -init \u521B\u5EFA\u4E00\u4E2Atsconfig.json,\u5728\u91CC\u9762\u66F4\u6539\u76F8\u5173\u914D\u7F6E</li><li>\u8FD0\u884C tsc</li><li>node index.js</li><li>tsconfig.json\u76F8\u5173\u8D44\u6599:https://www.typescriptlang.org/tsconfig</li></ul></li><li>\u76F4\u63A5\u8FD0\u884Cts\u6587\u4EF6,\u4F7F\u7528npm\u5168\u5C40\u5B89\u88C5 ts-node \u6267\u884C <ul><li>\u901A\u8FC7 npm init \u521D\u59CB\u5316 package.json</li><li>\u5728package.json \u6DFB\u52A0 script\u547D\u4EE4</li></ul></li><li>\u6CE8\u610F: ts\u6587\u4EF6\u8C03\u7528nodejs api\u9700\u901A\u8FC7npm\u5B89\u88C5 @types/node</li></ul></blockquote><h3 id="\u7F16\u5199package-json-script" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199package-json-script" aria-hidden="true">#</a> \u7F16\u5199package.json script</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tsc&quot;</span><span class="token punctuation">,</span>
   <span class="token string-property property">&quot;start:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node ./dist/index.js&quot;</span><span class="token punctuation">,</span>
   <span class="token string-property property">&quot;start:prod&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ts-node index.ts&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[i];function p(r,c){return n(),t("div",null,o)}var d=s(e,[["render",p],["__file","index.html.vue"]]);export{d as default};
