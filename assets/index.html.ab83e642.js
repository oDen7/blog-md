import{_ as n,o as s,c as a,d as t}from"./app.37ca5be3.js";const p={},e=t(`<h1 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h1><ol><li>Date</li><li>RegExp</li><li>\u539F\u59CB\u503C\u5305\u88C5\u7C7B\u578B <ul><li>Boolean</li><li>Number</li><li>String</li></ul></li><li>\u5355\u4F8B\u5185\u7F6E\u5BF9\u8C61 <ul><li>Global</li><li>Math</li></ul></li></ol><h1 id="\u96C6\u5408\u5F15\u7528\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u96C6\u5408\u5F15\u7528\u7C7B\u578B" aria-hidden="true">#</a> \u96C6\u5408\u5F15\u7528\u7C7B\u578B</h1><ol><li>Object</li><li>Array</li><li>\u5B9A\u578B\u6570\u7EC4</li><li>Map <ul><li>\u952E\u503C\u5B58\u50A8\u673A\u5236 \u53EF\u4EE5\u7528\u4EFB\u4F55JavaScript\u6570\u636E\u7C7B\u578B\u4F5C\u4E3A\u952E</li><li>\u4F1A\u987A\u5E8F\u63D2\u5165\u952E\u503C,\u5E76\u6839\u636E\u63D2\u5165\u987A\u5E8F\u8FDB\u884C\u904D\u5386 \u53EF\u904D\u5386</li><li>\u5982\u679C \u952E\u503C \u4F20\u5165 \u5F15\u7528 \u5C31\u5B58 \u5F15\u7528(\u5373\u6307\u5411\u540C\u4E00\u4E2A\u5806\u7A7A\u95F4), \u5982\u679C\u662F \u5177\u4F53\u503C \u5C31\u5B58 \u5177\u4F53\u503C</li><li>Object \u548C Map \u7684\u533A\u522B <ol><li>\u5185\u5B58\u5360\u7528 - \u4E0D\u540C\u6D4F\u89C8\u5668\u4E0B\uFF0C\u4F46\u7ED9\u5B9A\u56FA\u5B9A\u5927\u5C0F\u7684\u5185\u5B58\uFF0CMap \u5927\u7EA6\u53EF\u4EE5\u6BD4 Object \u591A\u5B58\u50A8 50%\u7684\u952E/\u503C\u5BF9</li><li>\u63D2\u5165\u6027\u80FD - \u6D89\u53CA\u5230\u5927\u91CF\u63D2\u5165\u7528 map, Object \u548C Map \u4E2D\u63D2\u5165\u65B0\u952E/\u503C\u5BF9\u7684\u6D88\u8017\u5927\u81F4\u76F8\u5F53\uFF0C\u4E0D\u8FC7 Map \u5728\u6240\u6709\u6D4F\u89C8\u5668\u4E2D\u4E00\u822C\u4F1A\u7A0D\u5FAE\u5FEB\u4E00\u70B9\u513F</li><li>\u67E5\u627E\u901F\u5EA6 - \u6D89\u53CA\u5230\u5927\u91CF\u67E5\u627E\u7528 object , Object \u5F53\u6210\u6570\u7EC4\u4F7F\u7528\uFF08\u6BD4\u5982\u4F7F\u7528\u8FDE\u7EED\u6574\u6570\u4F5C\u4E3A\u5C5E\u6027\uFF09\uFF0C\u6D4F\u89C8\u5668\u5F15\u64CE\u53EF\u4EE5\u4F18\u5316\uFF0C\u5728\u5185\u5B58\u4E2D\u4F7F\u7528\u66F4\u9AD8\u6548</li><li>\u5220\u9664\u6027\u80FD - \u6D89\u53CA\u5230\u5927\u91CF\u5220\u9664\u7528 map,\u5220\u9664\u6BD4 \u63D2\u5165 \u548C \u67E5\u627E \u66F4\u5FEB</li></ol></li></ul></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
    obj<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
    map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>WeakMap <ul><li>\u952E\u503C\u5B58\u50A8</li><li>\u952E\u53EA\u80FD\u5B58\u653E\u5BF9\u8C61\u5F15\u7528,\u952E\u5BF9\u8C61\u7684\u5F15\u7528\u4E0D\u5B58\u5728\u65F6,\u4F1A\u88AB\u5783\u573E\u56DE\u6536</li><li>\u4E0D\u80FD\u904D\u5386 \u952E</li><li>\u4F7F\u7528\u573A\u666F <ol><li>\u79C1\u6709\u53D8\u91CF</li><li>DOM\u8282\u70B9\u5143\u6570\u636E</li></ol></li></ul></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">const</span> wm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> container <span class="token operator">=</span> <span class="token punctuation">{</span> 
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> 
    <span class="token punctuation">}</span><span class="token punctuation">;</span> 
    wm<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>container<span class="token punctuation">.</span>key<span class="token punctuation">,</span> <span class="token string">&quot;val&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

    wm<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>container<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">fun</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        container<span class="token punctuation">.</span>key <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// fun();</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>Set <ul><li>Set\u53EF\u4EE5\u7528\u4EFB\u4F55JavaScript\u6570\u636E\u7C7B\u578B\u4F5C\u4E3A\u503C \u4F7F\u7528\u5168\u7B49\u8FDB\u884C\u6BD4\u8F83</li><li>\u7528\u4F5C\u503C\u7684\u5BF9\u8C61\u548C\u5176\u4ED6&quot;\u96C6\u5408&quot;\u7C7B\u578B\u5728\u81EA\u5DF1\u7684\u5185\u5BB9\u6216\u5C5E\u6027\u88AB\u4FEE\u6539\u65F6\u4E5F\u4E0D\u4F1A\u6539\u53D8 --- \u53EA\u5B58\u5177\u4F53\u503C</li><li>\u987A\u5E8F\u63D2\u5165,\u987A\u5E8F\u8FED\u4EE3</li><li>\u6CE8\u610F\u4E8B\u9879: <ol><li>\u67D0\u4E9B Set \u64CD\u4F5C\u662F\u6709\u5173\u8054\u6027\u7684\uFF0C\u56E0\u6B64\u6700\u597D\u8BA9\u5B9E\u73B0\u7684\u65B9\u6CD5\u80FD\u652F\u6301\u5904\u7406\u4EFB\u610F\u591A\u4E2A\u96C6\u5408\u5B9E\u4F8B</li><li>Set \u4FDD\u7559\u63D2\u5165\u987A\u5E8F\uFF0C\u6240\u6709\u65B9\u6CD5\u8FD4\u56DE\u7684\u96C6\u5408\u5FC5\u987B\u4FDD\u8BC1\u987A\u5E8F</li><li>\u5C3D\u53EF\u80FD\u9AD8\u6548\u5730\u4F7F\u7528\u5185\u5B58\u3002\u6269\u5C55\u64CD\u4F5C\u7B26\u7684\u8BED\u6CD5\u5F88\u7B80\u6D01\uFF0C\u4F46\u5C3D\u53EF\u80FD\u907F\u514D\u96C6\u5408\u548C\u6570\u7EC4\u95F4\u7684\u76F8\u4E92\u8F6C\u6362\u80FD\u591F\u8282\u7701\u5BF9\u8C61\u521D\u59CB\u5316\u6210\u672C\u3002</li><li>\u4E0D\u8981\u4FEE\u6539\u5DF2\u6709\u7684\u96C6\u5408\u5B9E\u4F8B\u3002union(a, b)\u6216 a.union(b)\u5E94\u8BE5\u8FD4\u56DE\u5305\u542B\u7ED3\u679C\u7684\u65B0\u96C6\u5408\u5B9E\u4F8B\u3002</li></ol></li></ul></li><li>WeakSet <ul><li>\u7C7B\u4F3C\u4E8E weakMap , \u4F46\u4EC5\u5B58 \u5177\u4F53\u503C(value)</li></ul></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">const</span> wm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> container <span class="token operator">=</span> <span class="token punctuation">{</span> 
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> 
    <span class="token punctuation">}</span><span class="token punctuation">;</span> 
    wm<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>container<span class="token punctuation">.</span>key<span class="token punctuation">,</span> <span class="token string">&quot;val&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

    wm<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>container<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">fun</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        container<span class="token punctuation">.</span>key <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// fun();</span>
    <span class="token comment">// wm.has(container.key);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[e];function o(i,c){return s(),a("div",null,l)}var r=n(p,[["render",o],["__file","index.html.vue"]]);export{r as default};