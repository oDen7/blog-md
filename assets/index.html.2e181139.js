import{_ as n,o as s,c as a,e as o}from"./app.8b0ddd4e.js";const e={},t=o(`<h1 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h1><h2 id="\u5305" tabindex="-1"><a class="header-anchor" href="#\u5305" aria-hidden="true">#</a> \u5305</h2><blockquote><p>\u5728\u6A21\u5757\u4E4B\u5916\uFF0C\u5305\u548C NPM \u5219\u662F\u5C06\u6A21\u5757\u8054\u7CFB\u8D77\u6765\u7684\u4E00\u79CD\u673A\u5236 \u6A21\u5757 &lt;- require() &lt;- \u5305:\u51FA\u53E3\u6A21\u5757 &lt;- require() &lt;- \u6A21\u5757</p></blockquote><ul><li><p>\u5305\u7ED3\u6784</p><ol><li>package.json\uFF1A\u5305\u63CF\u8FF0\u6587\u4EF6 <ul><li>\u5305\u89C4\u8303 <ul><li>\u5FC5\u586B <ul><li>name <blockquote><p>\u5305\u540D</p></blockquote></li><li>description <blockquote><p>\u5305\u7B80\u4ECB</p></blockquote></li><li>version <blockquote><p>\u7248\u672C\u53F7</p></blockquote></li><li>keywords <blockquote><p>\u5173\u952E\u5B57</p></blockquote></li><li>maintainers <blockquote><p>\u5305\u7EF4\u62A4\u8005\u5217\u8868</p></blockquote></li><li>contributors <blockquote><p>\u8D21\u732E\u8005\u5217\u8868</p></blockquote></li><li>bugs <blockquote><p>\u4E00\u4E2A\u53EF\u4EE5\u53CD\u9988 bug \u7684\u7F51\u9875\u5730\u5740\u6216\u90AE\u4EF6\u5730\u5740</p></blockquote></li><li>licenses <blockquote><p>\u8BB8\u53EF\u8BC1\u5217\u8868</p></blockquote></li><li>repositories <blockquote><p>\u6258\u7BA1\u6E90\u4EE3\u7801\u7684\u4F4D\u7F6E\u5217\u8868</p></blockquote></li><li>dependencies <blockquote><p>\u4F7F\u7528\u5F53\u524D\u5305\u6240\u9700\u8981\u4F9D\u8D56\u7684\u5305\u5217\u8868</p></blockquote></li><li>author <blockquote><p>\u5305\u4F5C\u8005</p></blockquote></li><li>bin <blockquote><p>\u4E00\u4E9B\u5305\u4F5C\u8005\u5E0C\u671B\u5305\u53EF\u4EE5\u4F5C\u4E3A\u547D\u4EE4\u884C\u5DE5\u5177\u4F7F\u7528 \u914D\u7F6E\u597D bin \u5B57\u6BB5\u540E\uFF0C\u901A\u8FC7 npm install package_name -g \u547D\u4EE4\u53EF\u4EE5\u5C06\u811A\u672C\u6DFB\u52A0\u5230\u6267\u884C\u8DEF\u5F84\u4E2D\uFF0C\u4E4B\u540E\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u4E2D\u76F4\u63A5\u6267\u884C\u3002\u524D\u9762\u7684 node-gyp \u5373\u662F\u8FD9\u6837\u5B89\u88C5\u7684\u3002\u901A\u8FC7-g \u547D\u4EE4\u5B89\u88C5\u7684\u6A21\u5757\u5305\u79F0\u4E3A\u5168\u5C40\u6A21\u5F0F</p></blockquote></li><li>main <blockquote><p>\u6A21\u5757\u5F15\u5165\u65B9\u6CD5 require()\u5728\u5F15\u5165\u5305\u65F6\uFF0C\u4F1A\u4F18\u5148\u68C0\u67E5\u8FD9\u4E2A\u5B57\u6BB5\uFF0C\u5E76\u5C06\u5176\u4F5C\u4E3A\u5305\u4E2D\u5176\u4F59\u6A21\u5757\u7684\u5165\u53E3\u3002 \u5982\u679C\u4E0D\u5B58\u5728\u8FD9\u4E2A\u5B57\u6BB5\uFF0Crequire()\u65B9\u6CD5\u4F1A\u67E5\u627E\u5305\u76EE\u5F55\u4E0B\u7684 index.js\u3001index.node\u3001index.json \u6587\u4EF6\u4F5C\u4E3A\u9ED8\u8BA4\u5165\u53E3\u3002</p></blockquote></li><li>devDependencies <blockquote><p>\u4E00\u4E9B\u6A21\u5757\u53EA\u5728\u5F00\u53D1\u65F6\u9700\u8981\u4F9D\u8D56\u3002</p></blockquote></li></ul></li><li>\u975E\u5FC5\u586B <ul><li>homepage <blockquote><p>\u5F53\u524D\u5305\u7684\u7F51\u7AD9\u5730\u5740</p></blockquote></li><li>os <blockquote><p>\u64CD\u4F5C\u7CFB\u7EDF\u652F\u6301\u5217\u8868</p></blockquote></li><li>cpu <blockquote><p>CPU \u67B6\u6784\u7684\u652F\u6301\u5217\u8868</p></blockquote></li><li>engine <blockquote><p>\u652F\u6301\u7684 JavaScript \u5F15\u64CE\u5217\u8868</p></blockquote></li><li>builtin <blockquote><p>\u5F53\u524D\u5305\u662F\u5426\u662F\u5185\u5EFA\u5728\u5E95\u5C42\u7CFB\u7EDF\u7684\u6807\u51C6\u7EC4\u4EF6</p></blockquote></li><li>directories <blockquote><p>\u5305\u76EE\u5F55\u63CF\u8FF0</p></blockquote></li><li>implements <blockquote><p>\u5B9E\u73B0\u89C4\u8303\u7684\u5217\u8868</p></blockquote></li><li>scripts <blockquote><p>\u811A\u672C\u8BF4\u660E\u5BF9\u8C61.\u7528\u6765\u5B89\u88C5\u3001\u7F16\u8BD1\u3001\u6D4B\u8BD5\u548C\u5378\u8F7D\u5305</p></blockquote></li></ul></li></ul></li></ul></li><li>bin\uFF1A\u7528\u4E8E\u5B58\u653E\u53EF\u6267\u884C\u4E8C\u8FDB\u5236\u6587\u4EF6\u7684\u76EE\u5F55\u3002</li><li>lib\uFF1A\u7528\u4E8E\u5B58\u653E JavaScript \u4EE3\u7801\u7684\u76EE\u5F55\u3002</li><li>doc\uFF1A\u7528\u4E8E\u5B58\u653E\u6587\u6863\u7684\u76EE\u5F55\u3002</li><li>test\uFF1A\u7528\u4E8E\u5B58\u653E\u5355\u5143\u6D4B\u8BD5\u7528\u4F8B\u7684\u4EE3\u7801\u3002</li></ol></li><li><p>\u524D\u540E\u7AEF\u5171\u7528\u6A21\u5757</p><ul><li><p>\u6A21\u5757\u4FA7\u91CD\u70B9</p><ol><li>\u5BA2\u6237\u7AEF <blockquote><p>\u74F6\u9888\u5728\u4E8E\u5E26\u5BBD \u9700\u8981\u901A\u8FC7\u7F51\u7EDC\u52A0\u8F7D\u4EE3\u7801</p></blockquote></li><li>\u670D\u52A1\u5668 <blockquote><p>\u74F6\u9888\u5219\u5728\u4E8E CPU \u548C\u5185\u5B58\u7B49\u8D44\u6E90 \u4ECE\u78C1\u76D8\u4E2D\u52A0\u8F7D</p></blockquote></li></ol></li><li><p>\u517C\u5BB9\u591A\u79CD\u6A21\u5757\u89C4\u8303</p><pre><code>&gt; \u5B83\u80FD\u591F\u517C\u5BB9 Node,AMD,CMD \u4EE5\u53CA\u5E38\u89C1\u7684\u6D4F\u89C8\u5668\u73AF\u5883
</code></pre></li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> definition</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u68C0\u6D4B\u4E0A\u4E0B\u6587\u73AF\u5883\u662F\u5426\u4E3AAMD\u6216CMD</span>
  <span class="token keyword">var</span> hasDefine <span class="token operator">=</span> <span class="token keyword">typeof</span> define <span class="token operator">===</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u68C0\u67E5\u4E0A\u4E0B\u6587\u73AF\u5883\u662F\u5426\u4E3ANode</span>
    hasExports <span class="token operator">=</span> <span class="token keyword">typeof</span> module <span class="token operator">!==</span> <span class="token string">&quot;undefined&quot;</span> <span class="token operator">&amp;&amp;</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>hasDefine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// AMD\u73AF\u5883\u6216CMD\u73AF\u5883</span>
    <span class="token function">define</span><span class="token punctuation">(</span>definition<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>hasExports<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B9A\u4E49\u4E3A\u666E\u901ANode\u6A21\u5757</span>
    module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">definition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5C06\u6A21\u5757\u7684\u6267\u884C\u7ED3\u679C\u6302\u5728window\u53D8\u91CF\u4E2D\uFF0C\u5728\u6D4F\u89C8\u5668\u4E2Dthis\u6307\u5411window\u5BF9\u8C61</span>
    <span class="token keyword">this</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">definition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> <span class="token function-variable function">hello</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> hello<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),p=[t];function l(i,c){return s(),a("div",null,p)}var k=n(e,[["render",l],["__file","index.html.vue"]]);export{k as default};
