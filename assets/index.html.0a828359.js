import{_ as l,o,c as e,e as i}from"./app.8b0ddd4e.js";const p={},a=i(`<h1 id="v8-\u7684\u5783\u573E\u56DE\u6536\u673A\u5236-\u4E0E-\u5185\u5B58\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#v8-\u7684\u5783\u573E\u56DE\u6536\u673A\u5236-\u4E0E-\u5185\u5B58\u9650\u5236" aria-hidden="true">#</a> V8 \u7684\u5783\u573E\u56DE\u6536\u673A\u5236 \u4E0E \u5185\u5B58\u9650\u5236</h1><ul><li><p>\u5185\u5B58\u9650\u5236</p><blockquote><p>Node \u4E2D\u901A\u8FC7 JavaScript \u4F7F\u7528\u5185\u5B58\u65F6\u5C31\u4F1A\u53D1\u73B0\u53EA\u80FD\u4F7F\u7528\u90E8\u5206\u5185\u5B58\uFF0864 \u4F4D\u7CFB\u7EDF\u4E0B\u7EA6\u4E3A 1.4 GB\uFF0C32 \u4F4D\u7CFB\u7EDF\u4E0B\u7EA6\u4E3A 0.7 GB\uFF09 Node \u4E2D\u4F7F\u7528\u7684 JavaScript \u5BF9\u8C61\u57FA\u672C\u4E0A\u90FD\u662F\u901A\u8FC7 V8 \u81EA\u5DF1\u7684\u65B9\u5F0F\u6765\u8FDB\u884C\u5206\u914D\u548C\u7BA1\u7406\u7684</p></blockquote><ul><li><p>V8 \u7684\u5BF9\u8C61\u5206\u914D</p></li><li><p>V8 \u4E2D\u5185\u5B58\u4F7F\u7528\u91CF\u7684\u67E5\u770B\u65B9\u5F0F</p><blockquote><p>memoryUsage()</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>process<span class="token punctuation">.</span><span class="token function">memoryUsage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">{</span>
<span class="token literal-property property">rss</span><span class="token operator">:</span> <span class="token number">25976832</span><span class="token punctuation">,</span>
<span class="token literal-property property">heapTotal</span><span class="token operator">:</span> <span class="token number">5959680</span><span class="token punctuation">,</span> <span class="token comment">// \u5DF2\u7533\u8BF7\u5230\u7684\u5806\u5185\u5B58</span>
<span class="token literal-property property">heapUsed</span><span class="token operator">:</span> <span class="token number">3740328</span><span class="token punctuation">,</span>  <span class="token comment">// \u5F53\u524D\u4F7F\u7528\u7684\u91CF</span>
<span class="token literal-property property">external</span><span class="token operator">:</span> <span class="token number">1390755</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>\u5F53\u6211\u4EEC\u5728\u4EE3\u7801\u4E2D\u58F0\u660E\u53D8\u91CF\u5E76\u8D4B\u503C\u65F6\uFF0C\u6240\u4F7F\u7528\u5BF9\u8C61\u7684\u5185\u5B58\u5C31\u5206\u914D\u5728\u5806\u4E2D\u3002</li><li>\u5982\u679C\u5DF2\u7533\u8BF7\u7684\u5806\u7A7A\u95F2\u5185\u5B58\u4E0D\u591F\u5206\u914D\u65B0\u7684\u5BF9\u8C61\uFF0C\u5C06\u7EE7\u7EED\u7533\u8BF7\u5806\u5185\u5B58\uFF0C\u76F4\u5230\u5806\u7684\u5927\u5C0F\u8D85\u8FC7 V8 \u7684\u9650\u5236\u4E3A\u6B62\u3002</li></ol><ul><li>V8 \u4E3A\u4F55\u9650\u5236\u5806\u7684\u5927\u5C0F <blockquote><p>\u6309\u5B98\u65B9\u7684\u8BF4\u6CD5\uFF0C\u4EE5 1.5 GB \u7684\u5783\u573E\u56DE\u6536\u5806\u5185\u5B58\u4E3A\u4F8B\uFF0CV8 \u505A\u4E00\u6B21\u5C0F\u7684\u5783\u573E\u56DE\u6536\u9700\u8981 50 \u6BEB\u79D2\u4EE5\u4E0A\uFF0C\u505A\u4E00\u6B21\u975E\u589E\u91CF\u5F0F\u7684\u5783\u573E\u56DE\u6536\u751A\u81F3\u8981 1 \u79D2\u4EE5\u4E0A\u3002 \u5783\u573E\u56DE\u6536\u5BFC\u81F4 JavaScript \u7EBF\u7A0B\u6682\u505C \u5728\u8FD9\u6837\u7684\u65F6\u95F4\u82B1\u9500\u4E0B\uFF0C\u5E94\u7528\u7684\u6027\u80FD\u548C\u54CD\u5E94\u80FD\u529B\u90FD\u4F1A\u76F4\u7EBF\u4E0B\u964D</p></blockquote></li></ul></li></ul></li><li><p>\u5783\u573E\u56DE\u6536\u673A\u5236</p><blockquote><p>V8 \u7684\u5783\u573E\u56DE\u6536\u7B56\u7565\u4E3B\u8981\u57FA\u4E8E\u5206\u4EE3\u5F0F\u5783\u573E\u56DE\u6536\u673A\u5236 \u7EDF\u8BA1\u5B66\u5728\u5783\u573E\u56DE\u6536\u7B97\u6CD5\u7684\u53D1\u5C55\u4E2D\u4EA7\u751F\u8F83\u5927\u4F5C\u7528\uFF0C\u73B0\u4EE3\u7684\u5783\u573E\u56DE\u6536\u7B97\u6CD5\u4E2D\u6309\u5BF9\u8C61\u7684\u5B58\u6D3B\u65F6\u95F4\u5C06\u5185\u5B58\u7684\u5783\u573E\u56DE\u6536\u8FDB\u884C\u4E0D\u540C\u7684\u5206\u4EE3\uFF0C\u5BF9\u4E0D\u540C\u5206\u4EE3\u7684\u5185\u5B58\u65BD\u4EE5\u66F4\u9AD8\u6548\u7684\u7B97\u6CD5\u3002</p></blockquote><ul><li><p>V8 \u5185\u5B58\u5206\u4EE3</p><ol><li><p>\u65B0\u751F\u4EE3</p><blockquote><p>\u65B0\u751F\u4EE3\u4E2D\u7684\u5BF9\u8C61\u4E3A\u5B58\u6D3B\u65F6\u95F4\u8F83\u77ED\u7684\u5BF9\u8C61 --max-old-space-size \u8BBE\u7F6E\u8001\u751F\u4EE3\u5185\u5B58\u7A7A\u95F4\u7684\u6700\u5927\u503C</p></blockquote></li><li><p>\u8001\u751F\u4EE3</p><blockquote><p>\u5BF9\u8C61\u4E3A\u5B58\u6D3B\u65F6\u95F4\u8F83\u957F\u6216\u5E38\u9A7B\u5185\u5B58\u7684\u5BF9\u8C61 --max-new-space-size \u8BBE\u7F6E\u65B0\u751F\u4EE3\u5185\u5B58\u7A7A\u95F4\u7684\u6700\u5927\u503C</p></blockquote></li></ol><blockquote><p>\u8BBE\u7F6E \u65B0\u751F\u4EE3 \u6216 \u8001\u751F\u4EE3 \u5185\u5B58\u9700\u8981\u5728\u542F\u52A8\u65F6\u6307\u5B9A,V8 \u4E0D\u80FD\u81EA\u5DF1\u81EA\u52A8\u6269\u5145,\u5F53\u5185\u5B58\u5206\u914D\u8FC7\u7A0B\u4E2D\u8D85\u8FC7\u6781\u9650\u503C\u65F6\uFF0C\u5C31\u4F1A\u5F15\u8D77\u8FDB\u7A0B\u51FA\u9519</p></blockquote></li><li><p>Scavenge \u7B97\u6CD5</p><blockquote><p>\u4E3B\u8981\u91C7\u7528\u4E86 Cheney \u7B97\u6CD5,\u8BE5\u7B97\u6CD5\u7531 C. J. Cheney \u4E8E 1970 \u5E74\u9996\u6B21\u53D1\u8868\u5728 ACM \u8BBA\u6587\u4E0A \u7F3A\u70B9:\u53EA\u80FD\u4F7F\u7528\u5806\u5185\u5B58\u4E2D\u7684\u4E00\u534A\uFF0C\u8FD9\u662F\u7531\u5212\u5206\u7A7A\u95F4\u548C\u590D\u5236\u673A\u5236\u6240\u51B3\u5B9A\u7684</p></blockquote><ul><li><p>Cheney \u7B97\u6CD5</p><blockquote><p>\u662F\u4E00\u79CD\u91C7\u7528\u590D\u5236\u7684\u65B9\u5F0F\u5B9E\u73B0\u7684\u5783\u573E\u56DE\u6536\u7B97\u6CD5 \u901A\u8FC7\u5C06\u5B58\u6D3B\u5BF9\u8C61\u5728\u4E24\u4E2A semispace \u7A7A\u95F4\u4E4B\u95F4\u8FDB\u884C\u590D\u5236 \u7A7A\u95F4\u6362\u53D6\u65F6\u95F4\u7684\u7B97\u6CD5</p></blockquote><ol><li>\u5806\u5185\u5B58\u4E00\u5206\u4E3A\u4E8C,\u6BCF\u4E00\u90E8\u5206\u7A7A\u95F4\u79F0\u4E3A semispace</li><li>\u5728\u8FD9\u4E24\u4E2A semispace \u7A7A\u95F4\u4E2D\uFF0C\u53EA\u6709\u4E00\u4E2A\u5904\u4E8E\u4F7F\u7528\u4E2D\uFF0C\u53E6\u4E00\u4E2A\u5904\u4E8E\u95F2\u7F6E\u72B6\u6001</li><li>\u5904\u4E8E\u4F7F\u7528\u72B6\u6001\u7684 semispace \u7A7A\u95F4\u79F0\u4E3A From \u7A7A\u95F4\uFF0C\u5904\u4E8E\u95F2\u7F6E\u72B6\u6001\u7684\u7A7A\u95F4\u79F0\u4E3A To \u7A7A\u95F4\u3002</li><li>\u5F53\u6211\u4EEC\u5206\u914D\u5BF9\u8C61\u65F6\uFF0C\u5148\u662F\u5728 From \u7A7A\u95F4\u4E2D\u8FDB\u884C\u5206\u914D</li><li>\u5F53\u5F00\u59CB\u8FDB\u884C\u5783\u573E\u56DE\u6536\u65F6\uFF0C\u4F1A\u68C0\u67E5 From \u7A7A\u95F4\u4E2D\u7684\u5B58\u6D3B\u5BF9\u8C61\uFF0C\u8FD9\u4E9B\u5B58\u6D3B\u5BF9\u8C61\u5C06\u88AB\u590D\u5236\u5230 To \u7A7A\u95F4\u4E2D\uFF0C\u800C\u975E\u5B58\u6D3B\u5BF9\u8C61\u5360\u7528\u7684\u7A7A\u95F4\u5C06\u4F1A\u88AB\u91CA\u653E\u3002</li><li>\u5B8C\u6210\u590D\u5236\u540E\uFF0CFrom \u7A7A\u95F4\u548C To \u7A7A\u95F4\u7684\u89D2\u8272\u53D1\u751F\u5BF9\u6362</li></ol></li><li><p>\u573A\u666F</p><blockquote><p>\u53EA\u590D\u5236\u5B58\u6D3B\u7684\u5BF9\u8C61\uFF0C\u5E76\u4E14\u5BF9\u4E8E\u751F\u547D\u5468\u671F\u77ED\u7684\u573A\u666F\u5B58\u6D3B\u5BF9\u8C61\u53EA\u5360\u5C11\u90E8\u5206\uFF0C\u6240\u4EE5\u5B83\u5728\u65F6\u95F4\u6548\u7387\u4E0A\u6709\u4F18\u5F02\u7684\u8868\u73B0 \u65B0\u751F\u4EE3\u4E2D\u5BF9\u8C61\u7684\u751F\u547D\u5468\u671F\u8F83\u77ED,\u6070\u6070\u9002\u5408\u8FD9\u4E2A\u7B97\u6CD5</p></blockquote></li></ul></li><li><p>\u664B\u5347</p><ol><li>\u5F53\u4E00\u4E2A\u5BF9\u8C61\u7ECF\u8FC7\u591A\u6B21\u590D\u5236\u4F9D\u7136\u5B58\u6D3B\u65F6\uFF0C\u5B83\u5C06\u4F1A\u88AB\u8BA4\u4E3A\u662F\u751F\u547D\u5468\u671F\u8F83\u957F\u7684\u5BF9\u8C61\u3002</li><li>\u8F83\u957F\u751F\u547D\u5468\u671F\u7684\u5BF9\u8C61\u968F\u540E\u4F1A\u88AB\u79FB\u52A8\u5230\u8001\u751F\u4EE3\u4E2D\uFF0C\u91C7\u7528\u65B0\u7684\u7B97\u6CD5\u8FDB\u884C\u7BA1\u7406</li><li>\u5BF9\u8C61\u4ECE\u65B0\u751F\u4EE3\u4E2D\u79FB\u52A8\u5230\u8001\u751F\u4EE3\u4E2D\u7684\u8FC7\u7A0B</li></ol><ul><li><p>\u664B\u5347\u6761\u4EF6</p><ul><li><p>\u5BF9\u8C61\u662F\u5426\u7ECF\u5386\u8FC7 Scavenge \u56DE\u6536</p><ol><li>\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CV8 \u7684\u5BF9\u8C61\u5206\u914D\u4E3B\u8981\u96C6\u4E2D\u5728 From \u7A7A\u95F4\u4E2D</li><li>\u5BF9\u8C61\u4ECE From \u7A7A\u95F4\u4E2D\u590D\u5236\u5230 To \u7A7A\u95F4\u65F6\uFF0C\u4F1A\u68C0\u67E5\u5B83\u7684\u5185\u5B58\u5730\u5740\u6765\u5224\u65AD\u8FD9\u4E2A\u5BF9\u8C61\u662F\u5426\u5DF2\u7ECF\u7ECF\u5386\u8FC7\u4E00\u6B21 Scavenge \u56DE\u6536\u3002</li><li>\u5982\u679C\u5DF2\u7ECF\u7ECF\u5386\u8FC7\u4E86\uFF0C\u4F1A\u5C06\u8BE5\u5BF9\u8C61\u4ECE From \u7A7A\u95F4\u590D\u5236\u5230\u8001\u751F\u4EE3\u7A7A\u95F4\u4E2D</li><li>\u5982\u679C\u6CA1\u6709\uFF0C\u5219\u590D\u5236\u5230 To \u7A7A\u95F4\u4E2D\u3002</li></ol><blockquote><p>semi space(from) -&gt; \u7ECF\u5386\u8FC7 Scavenge \u56DE\u6536 -&gt; \u8001\u751F\u4EE3\u7A7A\u95F4 semi space(from) -&gt; \u6CA1\u6709\u7ECF\u5386\u8FC7 Scavenge \u56DE\u6536 -&gt; semi space(to)</p></blockquote></li><li><p>To \u7A7A\u95F4\u7684\u5185\u5B58\u5360\u7528\u6BD4\u8D85\u8FC7\u9650\u5236</p><blockquote><p>\u5F53\u8981\u4ECE From \u7A7A\u95F4\u590D\u5236\u4E00\u4E2A\u5BF9\u8C61\u5230 To \u7A7A\u95F4\u65F6\uFF0C\u5982\u679C To \u7A7A\u95F4\u5DF2\u7ECF\u4F7F\u7528\u4E86\u8D85\u8FC7 25%\uFF0C\u5219\u8FD9\u4E2A\u5BF9\u8C61\u76F4\u63A5\u664B\u5347\u5230\u8001\u751F\u4EE3\u7A7A\u95F4\u4E2D</p></blockquote><blockquote><p>semi space(from) -&gt; semi space(from)\u5DF2\u7ECF\u4F7F\u7528\u8D85\u8FC7 25% -&gt; \u8001\u751F\u4EE3\u7A7A\u95F4 semi space(from) -&gt; semi space(from)\u6CA1\u6709\u4F7F\u7528\u8D85\u8FC7 25% -&gt; semi space(To)</p></blockquote><ul><li>\u8BBE\u7F6E 25%\u7684\u9600\u503C <blockquote><p>\u5F53\u8FD9\u6B21 Scavenge \u56DE\u6536\u5B8C\u6210\u540E\uFF0C\u8FD9\u4E2A To \u7A7A\u95F4\u5C06\u53D8\u6210 From \u7A7A\u95F4\uFF0C\u63A5\u4E0B\u6765\u7684\u5185\u5B58\u5206\u914D\u5C06\u5728\u8FD9\u4E2A\u7A7A\u95F4\u4E2D\u8FDB\u884C\u3002 \u5982\u679C\u5360\u6BD4\u8FC7\u9AD8\uFF0C\u4F1A\u5F71\u54CD\u540E\u7EED\u7684\u5185\u5B58\u5206\u914D\u3002</p></blockquote></li></ul></li></ul></li></ul><blockquote><p>\u664B\u5347\u5230\u8001\u751F\u4EE3\u7A7A\u95F4\u5B58\u6D3B\u5468\u671F\u8F83\u957F\u7684\u5BF9\u8C61\u6765\u5BF9\u5F85\uFF0C\u63A5\u53D7\u65B0\u7684\u56DE\u6536\u7B97\u6CD5\u5904\u7406</p></blockquote></li><li><p>Mark-Sweep(\u6807\u8BB0\u6E05\u9664) &amp; Mark-Compact(\u6807\u8BB0\u6574\u7406)</p><ul><li><p>\u5BF9\u4E8E\u8001\u751F\u4EE3\u4E2D\u7684\u5BF9\u8C61\uFF0C\u7531\u4E8E\u5B58\u6D3B\u5BF9\u8C61\u5360\u8F83\u5927\u6BD4\u91CD\uFF0C\u518D\u91C7\u7528 Scavenge \u7684\u65B9\u5F0F\u4F1A\u6709\u4E24\u4E2A\u95EE\u9898</p><ol><li>\u5B58\u6D3B\u5BF9\u8C61\u8F83\u591A\uFF0C\u590D\u5236\u5B58\u6D3B\u5BF9\u8C61\u7684\u6548\u7387\u4F4E</li><li>\u6D6A\u8D39\u4E00\u534A\u7A7A\u95F4\u7684\u95EE\u9898</li></ol></li><li><p>Mark-Sweep(\u6807\u8BB0\u6E05\u9664)</p><ol><li>\u6807\u8BB0</li><li>\u6E05\u9664</li></ol><blockquote><p>Mark-Sweep \u5E76\u4E0D\u5C06\u5185\u5B58\u7A7A\u95F4\u5212\u5206\u4E3A\u4E24\u534A\uFF0C\u6240\u4EE5\u4E0D\u5B58\u5728\u6D6A\u8D39\u4E00\u534A\u7A7A\u95F4\u7684\u884C\u4E3A\u3002</p></blockquote><ul><li><p>\u6D41\u7A0B</p><ul><li>\u6807\u8BB0\u9636\u6BB5 <blockquote><p>\u904D\u5386\u5806\u4E2D\u7684\u6240\u6709\u5BF9\u8C61\uFF0C\u5E76\u6807\u8BB0\u6D3B\u7740\u7684\u5BF9\u8C61</p></blockquote></li><li>\u6E05\u9664\u9636\u6BB5 <blockquote><p>\u53EA\u6E05\u9664\u6CA1\u6709\u88AB\u6807\u8BB0\u7684\u5BF9\u8C61</p></blockquote></li></ul></li><li><p>\u8FDB\u884C\u4E00\u6B21\u6807\u8BB0\u6E05\u9664\u56DE\u6536\u540E\uFF0C\u5185\u5B58\u7A7A\u95F4\u4F1A\u51FA\u73B0\u4E0D\u8FDE\u7EED\u7684\u72B6\u6001</p><blockquote><p>\u5185\u5B58\u788E\u7247\u4F1A\u5BF9\u540E\u7EED\u7684\u5185\u5B58\u5206\u914D\u9020\u6210\u95EE\u9898\uFF0C\u5F53\u9700\u8981\u5206\u914D\u4E00\u4E2A\u5927\u5BF9\u8C61\u7684\u60C5\u51B5\uFF0C\u8FD9\u65F6\u788E\u7247\u7A7A\u95F4\u90FD\u65E0\u6CD5\u5B8C\u6210\u6B64\u6B21\u5206\u914D\uFF0C\u5C31\u4F1A\u63D0\u524D\u89E6\u53D1\u5783\u573E\u56DE\u6536\uFF0C\u800C\u8FD9\u6B21\u56DE\u6536\u662F\u4E0D\u5FC5\u8981\u7684</p></blockquote></li></ul></li><li><p>Scavenge \u4E0E Mark-Sweep \u56DE\u6536\u65B9\u5F0F\u80FD\u9AD8\u6548\u5904\u7406\u7684\u539F\u56E0</p><ol><li>Scavenge \u4E2D\u53EA\u590D\u5236\u6D3B\u7740\u7684\u5BF9\u8C61</li><li>Mark-Sweep \u53EA\u6E05\u7406\u6B7B\u4EA1\u5BF9\u8C61 <blockquote><p>\u6D3B\u5BF9\u8C61\u5728\u65B0\u751F\u4EE3\u4E2D\u53EA\u5360\u8F83\u5C0F\u90E8\u5206\uFF0C\u6B7B\u5BF9\u8C61\u5728\u8001\u751F\u4EE3\u4E2D\u53EA\u5360\u8F83\u5C0F\u90E8\u5206</p></blockquote></li></ol></li><li><p>Mark-Compact(\u6807\u8BB0\u6574\u7406)</p><blockquote><p>\u89E3\u51B3 Mark-Sweep \u7684\u5185\u5B58\u788E\u7247\u95EE\u9898</p></blockquote><ul><li>\u6D41\u7A0B <ul><li>\u6807\u8BB0\u9636\u6BB5 <blockquote><p>\u904D\u5386\u5806\u4E2D\u7684\u6240\u6709\u5BF9\u8C61\uFF0C\u5E76\u6807\u8BB0\u6D3B\u7740\u7684\u5BF9\u8C61</p></blockquote></li><li>\u6574\u7406\u9636\u6BB5 <blockquote><p>\u6D3B\u7740\u7684\u5BF9\u8C61\u5F80\u4E00\u7AEF\u79FB\u52A8\uFF0C\u79FB\u52A8\u5B8C\u6210\u540E\uFF0C\u76F4\u63A5\u6E05\u7406\u6389\u8FB9\u754C\u5916\u7684\u5185\u5B58</p></blockquote></li></ul></li></ul></li></ul></li><li><p>\u6027\u80FD\u5BF9\u6BD4</p><ol><li>Mark-Sweep(\u6807\u8BB0\u6E05\u7406) \u901F\u5EA6\u4E2D\u7B49 \u7A7A\u95F4\u5F00\u9500\u5C11(\u6709\u788E\u7247) \u4E0D\u79FB\u52A8\u5BF9\u8C61</li><li>Mark-Compact(\u6807\u8BB0\u6574\u7406) \u901F\u5EA6\u6700\u6162 \u7A7A\u95F4\u5F00\u9500\u5C11(\u65E0\u788E\u7247) \u79FB\u52A8\u5BF9\u8C61</li><li>Scavenge \u901F\u5EA6\u6700\u5FEB \u53CC\u500D\u7A7A\u95F4(\u65E0\u788E\u7247) \u79FB\u52A8\u5BF9\u8C61</li></ol></li><li><p>V8 \u5783\u573E\u56DE\u6536\u7B56\u7565\u4F18\u5148\u7EA7:</p><ol><li>V8 \u4E3B\u8981\u4F7F\u7528 Mark-Sweep</li><li>\u5728\u7A7A\u95F4\u4E0D\u8DB3\u65F6,\u4ECE\u65B0\u751F\u4EE3\u4E2D\u664B\u5347\u8FC7\u6765\u7684\u5BF9\u8C61\u8FDB\u884C\u5206\u914D\u65F6\u624D\u4F7F\u7528 Mark-Compact</li></ol></li><li><p>Incremental Marking(\u589E\u91CF\u6807\u8BB0)</p><ul><li><p>\u5168\u505C\u987F</p><blockquote><p>\u907F\u514D JavaScript \u4E0E \u5783\u573E\u56DE\u6536\u5668 \u6570\u636E\u4E0D\u4E00\u81F4\u7684\u60C5\u51B5,\u4E0A\u9762\u4E09\u79CD\u90FD\u9700\u8981\u5C06\u903B\u8F91\u5E94\u7528\u6682\u505C,\u5B8C\u5168\u6267\u884C\u56DE\u6536\u5668\u540E\u5728\u6062\u590D\u5E94\u7528\u903B\u8F91</p></blockquote></li><li><p>\u5F71\u54CD</p><ol><li>\u65B0\u751F\u4EE3 <blockquote><p>\u7531\u4E8E\u65B0\u751F\u4EE3\u9ED8\u8BA4\u914D\u7F6E\u5F97\u8F83\u5C0F\uFF0C\u4E14\u5176\u4E2D\u5B58\u6D3B\u5BF9\u8C61\u901A\u5E38\u8F83\u5C11\uFF0C\u6240\u4EE5\u5373\u4FBF\u5B83\u662F\u5168\u505C\u987F\u7684\u5F71\u54CD\u4E5F\u4E0D\u5927</p></blockquote></li><li>\u8001\u751F\u4EE3 <blockquote><p>\u914D\u7F6E\u5F97\u8F83\u5927\uFF0C\u4E14\u5B58\u6D3B\u5BF9\u8C61\u8F83\u591A\uFF0C\u5168\u5806\u5783\u573E\u56DE\u6536\uFF08full \u5783\u573E\u56DE\u6536\uFF09\u7684\u6807\u8BB0\u3001\u6E05\u7406\u3001\u6574\u7406\u7B49\u52A8\u4F5C\u9020\u6210\u7684\u8FC7\u591A\u505C\u987F</p></blockquote></li></ol></li><li><p>\u907F\u514D\u5783\u573E\u56DE\u6536\u5E26\u6765\u7684\u505C\u987F\u65F6\u95F4</p><ol><li>V8 \u5148\u4ECE\u6807\u8BB0\u9636\u6BB5\u5165\u624B\uFF0C\u5C06\u539F\u672C\u8981\u4E00\u53E3\u6C14\u505C\u987F\u5B8C\u6210\u7684\u52A8\u4F5C\u6539\u4E3A\u589E\u91CF\u6807\u8BB0\uFF08incremental marking\uFF09</li><li>\u62C6\u5206\u4E3A\u8BB8\u591A\u5C0F\u201C\u6B65\u8FDB\u201D\uFF0C\u6BCF\u505A\u5B8C\u4E00\u201C\u6B65\u8FDB\u201D\u5C31\u8BA9 JavaScript \u5E94\u7528\u903B\u8F91\u6267\u884C\u4E00\u5C0F\u4F1A\u513F\uFF0C</li><li>\u5783\u573E\u56DE\u6536\u4E0E\u5E94\u7528\u903B\u8F91\u4EA4\u66FF\u6267\u884C\u76F4\u5230\u6807\u8BB0\u9636\u6BB5\u5B8C\u6210</li></ol><blockquote><p>javascript:|-&gt;|-----------------------------|-&gt;|--|-&gt;|--|---------------|-&gt;| \u5783\u573E\u56DE\u6536:----|--|--\u521D\u59CB\u5316\u6807\u8BB0(\u505C\u987F)---&gt;(\u589E\u91CF\u6807\u8BB0)|--|-&gt;|--|-&gt;|---\u6E05\u7406/\u6574\u7406----&gt;|--|</p></blockquote><ul><li>\u6700\u5927\u505C\u987F\u65F6\u95F4\u51CF\u5C11\u539F\u672C\u7684 1/6 \u5DE6\u53F3</li></ul></li><li><p>\u5EF6\u8FDF\u6E05\u7406\uFF08lazy sweeping\uFF09</p></li><li><p>\u589E\u91CF\u5F0F\u6574\u7406\uFF08incremental compaction\uFF09</p></li><li><p>\u5E76\u884C\u6807\u8BB0</p></li><li><p>\u5E76\u884C\u6E05\u7406</p></li></ul><blockquote><p>\u8FDB\u4E00\u6B65\u51CF\u5C11\u505C\u987F\u65F6\u95F4</p></blockquote></li></ul></li><li><p>JavaScript \u4E2D\u65E0\u6CD5\u7ACB\u5373\u56DE\u6536\u7684\u5185\u5B58</p><ol><li>\u95ED\u5305</li><li>\u5168\u5C40\u53D8\u91CF\u5F15\u7528</li></ol><blockquote><p>\u5FC3\u6B64\u7C7B\u53D8\u91CF\u662F\u5426\u65E0\u9650\u5236\u5730\u589E\u52A0\uFF0C\u56E0\u4E3A\u5B83\u4F1A\u5BFC\u81F4\u8001\u751F\u4EE3\u4E2D\u7684\u5BF9\u8C61\u589E\u591A</p></blockquote></li><li><p>\u5185\u5B58\u6CC4\u6F0F</p><ul><li>\u9020\u6210\u5185\u5B58\u6CC4\u6F0F\u7684\u539F\u56E0 <ol><li>\u7F13\u5B58 <ol><li>\u4E00\u4E2A\u5BF9\u8C61\u88AB\u5F53\u505A\u7F13\u5B58\u6765\u4F7F\u7528,\u90A3\u5C31\u610F\u5473\u7740\u5B83\u5C06\u4F1A\u5E38\u9A7B\u5728\u8001\u751F\u4EE3\u4E2D</li><li>\u7528\u5BF9\u8C61\u7684\u952E\u503C\u5BF9\u6765\u7F13\u5B58\u4E1C\u897F,\u8FD9\u4E0E\u4E25\u683C\u610F\u4E49\u4E0A\u7684\u7F13\u5B58\u53C8\u6709\u7740\u533A\u522B\uFF0C\u4E25\u683C\u610F\u4E49\u7684\u7F13\u5B58\u6709\u7740\u5B8C\u5584\u7684\u8FC7\u671F\u7B56\u7565\uFF0C\u800C\u666E\u901A\u5BF9\u8C61\u7684\u952E\u503C\u5BF9\u5E76\u6CA1\u6709 <blockquote><p>\u5728 Node \u4E2D\uFF0C\u4EFB\u4F55\u8BD5\u56FE\u62FF\u5185\u5B58\u5F53\u7F13\u5B58\u7684\u884C\u4E3A\u90FD\u5E94\u5F53\u88AB\u9650\u5236\u3002</p></blockquote></li></ol><ul><li>\u89E3\u51B3\u65B9\u6848:</li></ul><ol><li>\u7F13\u5B58\u9650\u5236\u7B56\u7565(\u9650\u5B9A\u7F13\u5B58\u5BF9\u8C61\u7684\u5927\u5C0F)</li><li>\u91C7\u7528\u8FDB\u7A0B\u5916\u7684\u7F13\u5B58\uFF0C\u8FDB\u7A0B\u81EA\u8EAB\u4E0D\u5B58\u50A8\u72B6\u6001 <ul><li>\u5C06\u7F13\u5B58\u8F6C\u79FB\u5230\u5916\u90E8\uFF0C\u51CF\u5C11\u5E38\u9A7B\u5185\u5B58\u7684\u5BF9\u8C61\u7684\u6570\u91CF\uFF0C\u8BA9\u5783\u573E\u56DE\u6536\u66F4\u9AD8\u6548</li><li>\u8FDB\u7A0B\u4E4B\u95F4\u53EF\u4EE5\u5171\u4EAB\u7F13\u5B58</li></ul></li></ol></li><li>\u961F\u5217\u6D88\u8D39\u4E0D\u53CA\u65F6</li><li>\u4F5C\u7528\u57DF\u672A\u91CA\u653E</li></ol></li></ul></li></ul>`,2),t=[a];function s(c,n){return o(),e("div",null,t)}var r=l(p,[["render",s],["__file","index.html.vue"]]);export{r as default};
