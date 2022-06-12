import{_ as n,o as s,c as a,e as t}from"./app.8b0ddd4e.js";const p={},e=t(`<h1 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h1><blockquote><p>Object.DefineProperty \u548C proxy \u5B9E\u73B0 \u53CC\u5411\u6570\u636E\u7ED1\u5B9A \u539F\u7406</p></blockquote><h3 id="object-defineproperty" tabindex="-1"><a class="header-anchor" href="#object-defineproperty" aria-hidden="true">#</a> Object.DefineProperty</h3><ul><li><p>\u901A\u8FC7 get() set() \u65B9\u6CD5\u5BF9 \u76D1\u542C\u5BF9\u8C61\u8FDB\u884C \u8BFB\u53D6/\u5199\u5165</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>listen_obj<span class="token punctuation">)</span><span class="token punctuation">,</span>key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Object.DefineProperty \u4E2D\u7684\u5C5E\u6027:</p><ul><li>Writable:true // \u5C5E\u6027\u53EF\u4FEE\u6539</li><li>Enumerable:true // \u5C5E\u6027\u53EF\u904D\u5386</li><li>Configurable:true // \u5C5E\u6027\u53EF\u5220\u9664</li></ul></li><li><p>\u81EA\u5B9A\u4E49 Getter/Setter</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">GetterSetter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> val <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> valLists <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&quot;val&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> val<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                val <span class="token operator">=</span> value<span class="token punctuation">;</span>
                valLists<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">getValLists</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> valLists<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">let</span> getterSetter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GetterSetter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>getterSetter<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    getterSetter<span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    getterSetter<span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>getterSetter<span class="token punctuation">.</span><span class="token function">getValLists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5C5E\u6027\u7EE7\u627F</p><ul><li>\u539F\u578B\u5BF9\u8C61\u4E0A\u7684\u5C5E\u6027\u4F1A\u88AB\u5171\u4EAB</li><li><blockquote><p>\u5982\u679C\u6BCF\u4E2A\u5B9E\u4F8B\u90FD\u6709\u81EA\u5DF1\u7684\u65B0\u65B9\u6CD5,\u4F1A\u5BFC\u81F4\u5927\u91CF\u5185\u5B58\u5360\u7528</p></blockquote></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_b<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_b <span class="token operator">=</span> val<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> test <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> test1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    test<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;test=========&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">.</span>a<span class="token punctuation">,</span> test<span class="token punctuation">.</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;test1=========&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test1<span class="token punctuation">.</span>a<span class="token punctuation">,</span> test1<span class="token punctuation">.</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul>`,4),o=[e];function c(l,i){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","index.html.vue"]]);export{k as default};
