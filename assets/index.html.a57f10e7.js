import{_ as o,o as l,c as e,d as i}from"./app.37ca5be3.js";var t="/blog-md/assets/node.82c0d876.png";const p={},c=i('<h1 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h1><blockquote><p>\u6587\u6863\u5BF9\u8C61\u6A21\u578B\uFF08DOM\uFF0CDocument Object Model\uFF09 \u662F HTML \u548C XML \u6587\u6863\u7684\u7F16\u7A0B\u63A5\u53E3\u3002 DOM \u8868 \u793A\u7531\u591A\u5C42\u8282\u70B9\u6784\u6210\u7684\u6587\u6863\uFF0C\u901A\u8FC7\u5B83\u5F00\u53D1\u8005\u53EF\u4EE5\u6DFB\u52A0\u3001\u5220\u9664\u548C\u4FEE\u6539\u9875\u9762\u7684\u5404\u4E2A\u90E8\u5206\u3002 \u8131\u80CE\u4E8E\u7F51\u666F\u548C\u5FAE\u8F6F\u65E9\u671F\u7684\u52A8\u6001 HTML\uFF08DHTML\uFF0CDynamic HTML\uFF09\uFF0CDOM \u73B0\u5728\u662F\u771F\u6B63\u8DE8\u5E73\u53F0\u3001\u8BED\u8A00\u65E0\u5173\u7684\u8868\u793A\u548C\u64CD\u4F5C\u7F51\u9875\u7684\u65B9\u5F0F\u3002</p></blockquote><ul><li><p>\u8282\u70B9\u5C42\u7EA7</p><blockquote><p>\u4EFB\u4F55 HTML \u6216 XML \u6587\u6863\u90FD\u53EF\u4EE5\u7528 DOM \u8868\u793A\u4E3A\u4E00\u4E2A\u7531\u8282\u70B9\u6784\u6210\u7684\u5C42\u7EA7\u7ED3\u6784\u3002 \u8282\u70B9\u5206\u5F88\u591A\u7C7B\u578B\uFF0C\u6BCF\u79CD\u7C7B\u578B\u5BF9\u5E94\u7740\u6587\u6863\u4E2D\u4E0D\u540C\u7684\u4FE1\u606F\u548C\uFF08\u6216\uFF09\u6807\u8BB0\uFF0C\u4E5F\u90FD\u6709\u81EA\u5DF1\u4E0D\u540C\u7684\u7279\u6027\u3001\u6570\u636E\u548C\u65B9\u6CD5\uFF0C\u800C\u4E14\u4E0E\u5176\u4ED6\u7C7B\u578B\u6709\u67D0\u79CD\u5173\u7CFB\u3002 \u8FD9\u4E9B\u5173\u7CFB\u6784\u6210\u4E86\u5C42\u7EA7\uFF0C\u8BA9\u6807\u8BB0\u53EF\u4EE5\u8868\u793A\u4E3A\u4E00\u4E2A\u4EE5\u7279\u5B9A\u8282\u70B9\u4E3A\u6839\u7684\u6811\u5F62\u7ED3\u6784\u3002</p></blockquote><ul><li><p>document \u8282\u70B9\u8868\u793A\u6BCF\u4E2A\u6587\u6863\u7684\u6839\u8282\u70B9\u3002</p></li><li><p>\u6839\u8282\u70B9\u7684\u552F\u4E00\u5B50\u8282\u70B9\u662F<code>&lt;html&gt;</code>\u5143\u7D20,\u6211\u4EEC\u79F0\u4E4B\u4E3A\u6587\u6863\u5143\u7D20\uFF08documentElement\uFF09\u3002</p><blockquote><p>\u6587\u6863\u5143\u7D20\u662F\u6587\u6863\u6700\u5916\u5C42\u7684\u5143\u7D20\uFF0C\u6240\u6709\u5176\u4ED6\u5143\u7D20\u90FD\u5B58\u5728\u4E8E\u8FD9\u4E2A\u5143\u7D20\u4E4B\u5185\u3002 \u6BCF\u4E2A\u6587\u6863\u53EA\u80FD\u6709\u4E00\u4E2A\u6587\u6863\u5143\u7D20\u3002 \u5728 HTML \u9875\u9762\u4E2D\uFF0C\u6587\u6863\u5143\u7D20\u59CB\u7EC8\u662F<code>&lt;html&gt;</code>\u5143\u7D20\u3002 \u5728 XML \u6587\u6863\u4E2D\uFF0C\u5219\u6CA1\u6709\u8FD9\u6837\u9884\u5B9A\u4E49\u7684\u5143\u7D20\uFF0C\u4EFB\u4F55\u5143\u7D20\u90FD\u53EF\u80FD\u6210\u4E3A\u6587\u6863\u5143\u7D20\u3002</p></blockquote></li><li><p>HTML \u4E2D\u7684\u6BCF\u6BB5\u6807\u8BB0\u90FD\u53EF\u4EE5\u8868\u793A\u4E3A\u8FD9\u4E2A\u6811\u5F62\u7ED3\u6784\u4E2D\u7684\u4E00\u4E2A\u8282\u70B9\u3002</p><ol><li>\u5143\u7D20\u8282\u70B9\u8868\u793A HTML \u5143\u7D20\uFF0C</li><li>\u5C5E\u6027\u8282\u70B9\u8868\u793A\u5C5E\u6027</li><li>\u6587\u6863\u7C7B\u578B\u8282\u70B9\u8868\u793A\u6587\u6863\u7C7B\u578B</li><li>\u6CE8\u91CA\u8282\u70B9\u8868\u793A\u6CE8\u91CA\u3002</li></ol></li><li><p>Node \u7C7B\u578B</p><blockquote><p>Node \u63A5\u53E3\u5728 JavaScript \u4E2D\u88AB\u5B9E\u73B0\u4E3A Node \u7C7B\u578B\uFF0C\u5728\u9664 IE \u4E4B\u5916\u7684\u6240\u6709\u6D4F\u89C8\u5668\u4E2D\u90FD\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE\u8FD9\u4E2A\u7C7B\u578B \u6240\u6709\u8282\u70B9\u7C7B\u578B\u90FD\u7EE7\u627F Node \u7C7B\u578B\uFF0C\u56E0\u6B64\u6240\u6709\u7C7B\u578B\u90FD\u5171\u4EAB\u76F8\u540C\u7684\u57FA\u672C\u5C5E\u6027\u548C\u65B9\u6CD5</p></blockquote><ul><li>\u8282\u70B9\u7C7B\u578B\u7531\u5B9A\u4E49\u5728 Node \u7C7B\u578B\u4E0A\u7684 12 \u4E2A\u6570\u503C\u5E38\u91CF\u8868\u793A <ol><li>Node.ELEMENT_NODE</li><li>Node.ATTRIBUTE_NODE</li><li>Node.TEXT_NODE</li><li>Node.CDATA_SECTION_NODE</li><li>Node.ENTITY_REFERENCE_NODE</li><li>Node.ENTITY_NODE</li><li>Node.PROCESSING_INSTRUCTION_NODE</li><li>Node.COMMENT_NODE</li><li>Node.DOCUMENT_NODE</li><li>Node.DOCUMENT_TYPE_NODE</li><li>Node.DOCUMENT_FRAGMENT_NODE</li><li>Node.NOTATION_NODE</li></ol></li></ul><ol><li><p>nodeName \u4E0E nodeValue</p><blockquote><p>nodeName \u4E0E nodeValue \u4FDD\u5B58\u7740\u6709\u5173\u8282\u70B9\u7684\u4FE1\u606F\u3002\u8FD9\u4E24\u4E2A\u5C5E\u6027\u7684\u503C\u5B8C\u5168\u53D6\u51B3\u4E8E\u8282\u70B9\u7C7B\u578B\u3002 nodeName \u59CB\u7EC8\u7B49\u4E8E\u5143\u7D20\u7684\u6807\u7B7E\u540D\uFF0C\u800C nodeValue \u5219\u59CB\u7EC8\u4E3A null\u3002</p></blockquote></li><li><p>\u8282\u70B9\u5173\u7CFB</p><ul><li><p>\u6587\u6863\u4E2D\u7684\u6240\u6709\u8282\u70B9\u90FD\u4E0E\u5176\u4ED6\u8282\u70B9\u6709\u5173\u7CFB\u3002</p><blockquote><p>\u8FD9\u4E9B\u5173\u7CFB\u53EF\u4EE5\u5F62\u5BB9\u4E3A\u5BB6\u65CF\u5173\u7CFB\uFF0C\u76F8\u5F53\u4E8E\u628A\u6587\u6863\u6811\u6BD4\u4F5C\u5BB6\u8C31\u3002</p></blockquote></li><li><p>\u6BCF\u4E2A\u8282\u70B9\u90FD\u6709\u4E00\u4E2A childNodes \u5C5E\u6027\uFF0C\u5176\u4E2D\u5305\u542B\u4E00\u4E2A NodeList \u7684\u5B9E\u4F8B\u3002</p><blockquote><p>NodeList \u662F\u4E00\u4E2A\u7C7B\u6570\u7EC4 \u5BF9\u8C61\uFF0C\u7528\u4E8E\u5B58\u50A8\u53EF\u4EE5\u6309\u4F4D\u7F6E\u5B58\u53D6\u7684\u6709\u5E8F\u8282\u70B9\u3002 \u5BF9 DOM \u7ED3\u6784\u7684\u67E5\u8BE2\uFF0C\u56E0\u6B64 DOM \u7ED3\u6784\u7684\u53D8\u5316\u4F1A\u81EA\u52A8\u5730\u5728 NodeList \u4E2D\u53CD\u6620\u51FA\u6765 \u4F7F\u7528 item() \u8BBF\u95EE NodeList \u4E2D\u7684\u5143\u7D20 \u4F7F\u7528 Array.prototype.slice()\u628A NodeList \u5BF9\u8C61\u8F6C\u6362\u4E3A\u6570\u7EC4</p></blockquote></li><li><p>\u6BCF\u4E2A\u8282\u70B9\u90FD\u6709\u4E00\u4E2A parentNode \u5C5E\u6027\uFF0C\u6307\u5411\u5176 DOM \u6811\u4E2D\u7684\u7236\u5143\u7D20\u3002</p><blockquote><p>childNodes \u4E2D\u7684\u6240\u6709\u8282\u70B9\u90FD\u6709\u540C\u4E00\u4E2A\u7236\u5143\u7D20\uFF0C\u56E0\u6B64\u5B83\u4EEC\u7684 parentNode \u5C5E\u6027\u90FD\u6307\u5411\u540C\u4E00\u4E2A\u8282\u70B9 childNodes \u5217\u8868\u4E2D\u7684\u6BCF\u4E2A\u8282\u70B9\u90FD\u662F\u540C\u4E00\u5217\u8868\u4E2D\u5176\u4ED6\u8282\u70B9\u7684\u540C\u80DE\u8282\u70B9</p></blockquote></li><li><p>\u4F7F\u7528 previousSibling \u548C nextSibling \u53EF\u4EE5\u5728\u8FD9\u4E2A\u5217\u8868\u7684\u8282\u70B9\u95F4\u5BFC\u822A</p><blockquote><p>\u7B2C\u4E00\u4E2A\u8282\u70B9\u7684 previousSibling \u5C5E \u6027 \u662F null\uFF0C\u6700\u540E\u4E00\u4E2A\u8282\u70B9\u7684 nextSibling \u5C5E\u6027\u4E5F\u662F null</p></blockquote></li><li><p>\u7236\u8282\u70B9\u548C\u5B83\u7684\u7B2C\u4E00\u4E2A\u53CA\u6700\u540E\u4E00\u4E2A\u5B50\u8282\u70B9\u4E5F\u6709\u4E13\u95E8\u5C5E\u6027</p><blockquote><p>firstChild \u548C lastChild \u5206\u522B\u6307\u5411 childNodes \u4E2D\u7684\u7B2C\u4E00\u4E2A\u548C\u6700\u540E\u4E00\u4E2A\u5B50\u8282\u70B9 someNode.firstChild \u7684\u503C\u59CB\u7EC8\u7B49\u4E8E someNode.childNodes[0]\uFF0C \u800C someNode.lastChild \u7684\u503C\u59CB\u7EC8\u7B49\u4E8E someNode.childNodes[someNode.childNodes.length-1]\u3002 \u5982\u679C\u53EA\u6709\u4E00\u4E2A\u5B50\u8282\u70B9\uFF0C\u5219 firstChild \u548C lastChild \u6307\u5411\u540C\u4E00\u4E2A\u8282\u70B9\u3002 \u5982\u679C\u6CA1\u6709\u5B50\u8282\u70B9\uFF0C\u5219 firstChild \u548C lastChild \u90FD\u662F null\u3002</p></blockquote></li><li><p>\u5224\u65AD\u8282\u70B9\u6709\u4E00\u4E2A\u6216\u591A\u4E2A\u5B50\u8282\u70B9</p><blockquote><p>hasChildNodes() \u6709\u4E00\u4E2A\u6216\u591A\u4E2A\u8FD4\u56DE true</p></blockquote></li><li><p>\u6307\u5411\u4EE3\u8868\u6574\u4E2A\u6587\u6863\u7684\u6587\u6863\u8282\u70B9\u7684\u6307\u9488</p><blockquote><p>ownerDocument \u6240\u6709\u8282\u70B9\u90FD\u88AB\u521B\u5EFA\u5B83\u4EEC\uFF08\u6216\u81EA\u5DF1\u6240\u5728\uFF09\u7684\u6587\u6863\u6240\u62E5\u6709\uFF0C\u56E0\u4E3A\u4E00\u4E2A\u8282\u70B9\u4E0D\u53EF\u80FD\u540C\u65F6\u5B58\u5728\u4E8E\u4E24\u4E2A\u6216\u8005\u591A\u4E2A\u6587\u6863\u4E2D\u3002\u8FD9\u4E2A\u5C5E\u6027\u4E3A\u8FC5\u901F\u8BBF\u95EE\u6587\u6863\u8282\u70B9\u63D0\u4F9B\u4E86\u4FBF\u5229\uFF0C\u56E0\u4E3A\u65E0\u9700\u5728\u6587\u6863\u7ED3\u6784\u4E2D\u9010\u5C42\u4E0A\u6EAF\u4E86\u3002</p></blockquote></li></ul><p><img src="'+t+'" alt=""></p></li><li><p>\u64CD\u4F5C\u8282\u70B9</p><blockquote><p>\u56E0\u4E3A\u6240\u6709\u5173\u7CFB\u6307\u9488\u90FD\u662F\u53EA\u8BFB\u7684\uFF0C\u6240\u4EE5 DOM \u53C8\u63D0\u4F9B\u4E86\u4E00\u4E9B\u64CD\u7EB5\u8282\u70B9\u7684\u65B9\u6CD5\u3002</p></blockquote><ul><li><p>\u5728 childNodes \u5217\u8868\u672B\u5C3E\u6DFB\u52A0\u8282\u70B9</p><blockquote><p>appendChild()</p></blockquote></li><li><p>\u5C06\u8282\u70B9\u653E\u5230 childNodes \u4E2D\u7684\u7279\u5B9A\u4F4D\u7F6E</p><blockquote><p>insertBefore() \u63A5\u53D7\u4E24\u4E2A\u53C2\u6570 \u8981\u63D2\u5165\u7684\u8282\u70B9\u548C\u53C2\u7167\u8282\u70B9 \u8981\u63D2\u5165\u7684\u8282\u70B9\u4F1A\u53D8\u6210\u53C2\u7167\u8282\u70B9\u7684\u524D\u4E00\u4E2A\u540C\u80DE\u8282\u70B9\uFF0C\u5E76\u88AB\u8FD4\u56DE\u3002 \u5982\u679C\u53C2\u7167\u8282\u70B9\u662F null\uFF0C\u5219 insertBefore() \u4E0E appendChild()\u6548\u679C\u76F8\u540C</p></blockquote></li></ul><blockquote><p>appendChild() \u548C insertBefore() \u5728\u63D2\u5165\u8282\u70B9\u65F6\u4E0D\u4F1A\u5220\u9664\u4EFB\u4F55\u5DF2\u6709\u8282\u70B9</p></blockquote><ul><li><p>\u8981\u63D2\u5165\u7684\u8282\u70B9\u548C\u8981\u66FF\u6362\u7684\u8282\u70B9</p><blockquote><p>replaceChild() \u4E24\u4E2A\u53C2\u6570: \u8981\u63D2\u5165\u7684\u8282\u70B9 \u8981\u66FF\u6362\u7684\u8282\u70B9 \u4F7F\u7528 replaceChild()\u63D2\u5165\u4E00\u4E2A\u8282\u70B9\u540E\uFF0C\u6240\u6709\u5173\u7CFB\u6307\u9488\u90FD\u4F1A\u4ECE\u88AB\u66FF\u6362\u7684\u8282\u70B9\u590D\u5236\u8FC7\u6765\u3002 \u867D\u7136\u88AB\u66FF\u6362\u7684\u8282\u70B9\u4ECE\u6280\u672F\u4E0A\u8BF4\u4ECD\u7136\u88AB\u540C\u4E00\u4E2A\u6587\u6863\u6240\u62E5\u6709\uFF0C\u4F46\u6587\u6863\u4E2D\u5DF2\u7ECF\u6CA1\u6709\u5B83\u7684\u4F4D\u7F6E\u3002</p></blockquote></li><li><p>\u79FB\u9664\u8282\u70B9</p><blockquote><p>removeChild() \u4E00\u4E2A\u53C2\u6570 \u8981\u79FB\u9664\u7684\u8282\u70B9</p></blockquote></li><li><p>\u8FD4\u56DE\u4E0E\u8C03\u7528\u5B83\u7684\u8282\u70B9\u4E00\u6A21\u4E00\u6837\u7684\u8282\u70B9</p><blockquote><p>cloneNode() \u63A5\u6536\u4E00\u4E2A\u5E03\u5C14\u503C\u53C2\u6570\uFF0C\u8868\u793A\u662F\u5426\u6DF1\u590D\u5236 \u53C2\u6570\u4E3A true \u65F6\uFF0C\u4F1A\u8FDB\u884C\u6DF1\u590D\u5236\uFF0C\u5373\u590D\u5236\u8282\u70B9\u53CA\u5176\u6574\u4E2A\u5B50 DOM \u6811\u3002 \u53C2\u6570\u4E3A false \u65F6,\u53EA\u4F1A\u590D\u5236\u8C03\u7528\u8BE5\u65B9\u6CD5\u7684\u8282\u70B9 \u590D\u5236\u8FD4\u56DE\u7684\u8282\u70B9\u5C5E\u4E8E\u6587\u6863\u6240\u6709\uFF0C\u4F46\u5C1A\u672A\u6307\u5B9A\u7236\u8282\u70B9\uFF0C\u6240\u4EE5\u53EF\u79F0\u4E3A\u5B64\u513F\u8282\u70B9\uFF08orphan\uFF09\u3002 \u53EF\u4EE5\u901A\u8FC7 appendChild()\u3001insertBefore()\u6216 replaceChild()\u65B9\u6CD5\u628A\u5B64\u513F\u8282\u70B9\u6DFB\u52A0\u5230\u6587\u6863\u4E2D</p></blockquote></li><li><p>\u5904\u7406\u6587\u6863\u5B50\u6811\u4E2D\u7684\u6587\u672C\u8282\u70B9\u3002</p><blockquote><p>normalize()</p></blockquote><ul><li>\u7531\u4E8E\u89E3\u6790\u5668\u5B9E\u73B0\u7684\u5DEE\u5F02\u6216 DOM \u64CD\u4F5C\u7B49\u539F\u56E0 <ol><li>\u4F1A\u51FA\u73B0\u5E76\u4E0D\u5305\u542B\u6587\u672C\u7684\u6587\u672C\u8282\u70B9</li><li>\u6587\u672C\u8282\u70B9\u4E4B\u95F4\u4E92\u4E3A\u540C\u80DE\u5173\u7CFB</li></ol></li></ul><blockquote><p>\u4F1A\u68C0\u6D4B\u8FD9\u4E2A\u8282\u70B9\u7684\u6240\u6709\u540E\u4EE3\uFF0C\u4ECE\u4E2D\u641C\u7D22\u4E0A\u8FF0\u4E24\u79CD\u60C5\u5F62\u3002\u5982\u679C\u53D1\u73B0\u7A7A\u6587\u672C\u8282\u70B9\uFF0C\u5219\u5C06\u5176\u5220\u9664\uFF1B\u5982\u679C\u4E24\u4E2A\u540C\u80DE\u8282\u70B9\u662F\u76F8\u90BB\u7684\uFF0C\u5219\u5C06\u5176\u5408\u5E76\u4E3A\u4E00\u4E2A\u6587\u672C\u8282\u70B9\u3002</p></blockquote></li></ul></li></ol></li></ul></li><li><p>Document \u7C7B\u578B</p><blockquote><p>JavaScript \u4E2D\u8868\u793A\u6587\u6863\u8282\u70B9\u7684\u7C7B\u578B \u5728\u6D4F\u89C8\u5668\u4E2D\uFF0C\u6587\u6863\u5BF9\u8C61 document \u662F HTMLDocument \u7684\u5B9E\u4F8B\uFF08HTMLDocument \u7EE7\u627F Document\uFF09\uFF0C\u8868\u793A\u6574\u4E2A HTML \u9875\u9762\u3002 document \u662F window \u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u56E0\u6B64\u662F\u4E00\u4E2A\u5168\u5C40\u5BF9\u8C61\u3002 Document \u7C7B\u578B\u53EF\u4EE5\u8868\u793A HTML \u9875\u9762\u6216\u5176\u4ED6 XML \u6587\u6863\uFF0C\u4F46\u6700\u5E38\u7528\u7684\u8FD8\u662F\u901A\u8FC7 HTMLDocument \u7684\u5B9E\u4F8B\u53D6\u5F97 document \u5BF9\u8C61\u3002 document \u5BF9\u8C61\u53EF\u7528\u4E8E\u83B7\u53D6\u5173\u4E8E\u9875\u9762\u7684\u4FE1\u606F\u4EE5\u53CA\u64CD\u7EB5\u5176\u5916\u89C2\u548C\u5E95\u5C42\u7ED3\u6784\u3002</p></blockquote><ul><li>Document \u7C7B\u578B\u7684\u7279\u5F81: <ol><li>nodeType \u7B49\u4E8E 9</li><li>nodeName \u503C\u4E3A&quot;#document&quot;</li><li>nodeValue \u503C\u4E3A null</li><li>parentNode \u503C\u4E3A null</li><li>ownerDocument \u503C\u4E3A null</li><li>\u5B50\u8282\u70B9\u53EF\u4EE5\u662F DocumentType\uFF08\u6700\u591A\u4E00\u4E2A\uFF09\u3001Element\uFF08\u6700\u591A\u4E00\u4E2A\uFF09\u3001ProcessingInstruction \u6216 Comment \u7C7B\u578B</li></ol></li></ul><ol><li><p>\u6587\u6863\u5B50\u8282\u70B9</p><blockquote><p>\u53EF\u4EE5\u662F DocumentType\u3001Element\u3001Processing-Instruction \u6216 Comment</p></blockquote><ol><li>documentElement \u5C5E\u6027\uFF0C\u59CB\u7EC8\u6307\u5411 HTML \u9875\u9762\u4E2D\u7684<code>&lt;html&gt;</code>\u5143\u7D20\u3002 <blockquote><p>\u867D\u7136 document.childNodes \u4E2D\u59CB\u7EC8\u6709<code>&lt;html&gt;</code>\u5143\u7D20\uFF0C\u4F46\u4F7F\u7528 documentElement \u5C5E\u6027\u53EF\u4EE5\u66F4\u5FEB\u66F4\u76F4\u63A5\u5730\u8BBF\u95EE\u8BE5\u5143\u7D20\u3002 \u6240\u6709\u4E3B\u6D41\u6D4F\u89C8\u5668\u90FD\u652F\u6301 document.documentElement \u548C document.body</p></blockquote></li><li>DocumentType <blockquote><p>&lt;!doctype&gt;\u6807\u7B7E\u662F\u6587\u6863\u4E2D\u72EC\u7ACB\u7684\u90E8\u5206\uFF0C\u5176\u4FE1\u606F\u53EF\u4EE5\u901A\u8FC7 doctype \u5C5E\u6027\uFF08\u5728\u6D4F\u89C8\u5668\u4E2D\u662F document.doctype\uFF09\u6765\u8BBF\u95EE</p></blockquote></li></ol></li><li><p>\u6587\u6863\u4FE1\u606F</p><blockquote><p>document \u4F5C\u4E3A HTMLDocument \u7684\u5B9E\u4F8B\uFF0C\u8FD8\u6709\u4E00\u4E9B\u6807\u51C6 Document \u5BF9\u8C61\u4E0A\u6240\u6CA1\u6709\u7684\u5C5E\u6027\u3002\u8FD9\u4E9B\u5C5E\u6027\u63D0\u4F9B\u6D4F\u89C8\u5668\u6240\u52A0\u8F7D\u7F51\u9875\u7684\u4FE1\u606F\u3002</p></blockquote><ol><li><p>title</p><blockquote><p>\u4FEE\u6539\u6D4F\u89C8\u5668\u6807\u9898\u680F document.title = &quot;New page title&quot;;</p></blockquote></li><li><p>url</p><blockquote><p>\u83B7\u53D6\u5B8C\u6574 URL</p></blockquote></li><li><p>domain</p><blockquote><p>\u83B7\u53D6\u57DF\u540D</p></blockquote><ul><li>\u51FA\u4E8E\u5B89\u5168\u8003\u8651\uFF0C\u7ED9 domain \u5C5E\u6027\u8BBE\u7F6E\u7684\u503C\u662F\u6709\u9650\u5236, <blockquote><p>\u5982\u679C URL \u5305\u542B\u5B50\u57DF\u540D\u5982 p2p.wrox.com\uFF0C\u5219\u53EF\u4EE5\u5C06 domain \u8BBE\u7F6E\u4E3A&quot;wrox.com&quot;,\u4E0D\u80FD\u7ED9\u8FD9\u4E2A\u5C5E\u6027\u8BBE\u7F6E URL \u4E2D\u4E0D\u5305\u542B\u7684\u503C // \u9875\u9762\u6765\u81EA p2p.wrox.com document.domain = &quot;wrox.com&quot;; // \u6210\u529F document.domain = &quot;nczonline.net&quot;; // \u51FA\u9519\uFF01</p></blockquote></li><li>\u8BBE\u7F6E document.domain \u662F\u6709\u7528\u7684 <blockquote><p>\u56E0\u4E3A\u8DE8\u6E90\u901A\u4FE1\u5B58\u5728\u5B89\u5168\u9690\u60A3\uFF0C\u6240\u4EE5\u4E0D\u540C\u5B50\u57DF\u7684\u9875\u9762\u95F4\u65E0\u6CD5\u901A\u8FC7 JavaScript \u901A\u4FE1\u3002 \u6BCF\u4E2A\u9875\u9762\u4E0A\u628A document.domain \u8BBE\u7F6E\u4E3A\u76F8\u540C\u7684\u503C\uFF0C\u8FD9\u4E9B\u9875\u9762\u5C31\u53EF\u4EE5\u8BBF\u95EE\u5BF9\u65B9\u7684 JavaScript \u5BF9\u8C61\u4E86</p></blockquote></li><li>\u4E00\u65E6\u653E\u677E\u5C31\u4E0D\u80FD\u518D\u6536\u7D27 <blockquote><p>\u628A document.domain \u8BBE\u7F6E\u4E3A&quot;wrox.com&quot;\u4E4B\u540E\uFF0C\u5C31\u4E0D\u80FD\u518D\u5C06\u5176\u8BBE\u7F6E\u56DE&quot;p2p.wrox.com&quot;\uFF0C\u540E\u8005\u4F1A\u5BFC\u81F4\u9519\u8BEF\uFF0C \u9875\u9762\u6765\u81EA p2p.wrox.com document.domain = &quot;wrox.com&quot;; // \u653E\u677E\uFF0C\u6210\u529F document.domain = &quot;p2p.wrox.com&quot;; // \u6536\u7D27\uFF0C\u9519\u8BEF\uFF01</p></blockquote></li></ul></li><li><p>referrer</p><blockquote><p>\u83B7\u53D6\u6765\u6E90</p></blockquote></li></ol></li><li><p>\u5B9A\u4F4D\u5143\u7D20</p><blockquote><p>\u83B7\u53D6\u67D0\u4E2A\u6216\u67D0\u7EC4\u5143\u7D20\u7684\u5F15\u7528\uFF0C\u7136\u540E\u5BF9\u5B83\u4EEC\u6267\u884C\u67D0\u4E9B\u64CD\u4F5C</p></blockquote><ol><li>getElementById() <blockquote><p>\u63A5\u6536\u4E00\u4E2A\u53C2\u6570\uFF0C\u5373\u8981\u83B7\u53D6\u5143\u7D20\u7684 ID\uFF0C\u5982\u679C\u627E\u5230\u4E86\u5219\u8FD4\u56DE\u8FD9\u4E2A\u5143\u7D20\uFF0C\u5982\u679C\u6CA1\u627E\u5230\u5219\u8FD4\u56DE null</p></blockquote></li><li>getElementsByTagName() <blockquote><p>\u8FD9\u4E2A\u65B9\u6CD5\u63A5\u6536\u4E00\u4E2A\u53C2\u6570\uFF0C\u5373\u8981\u83B7\u53D6\u5143\u7D20\u7684\u6807\u7B7E\u540D\uFF0C\u8FD4\u56DE\u5305\u542B\u96F6\u4E2A\u6216\u591A\u4E2A\u5143\u7D20\u7684 NodeList</p></blockquote></li></ol></li><li><p>\u7279\u6B8A\u96C6\u5408</p></li><li><p>DOM \u517C\u5BB9\u6027\u68C0\u6D4B</p></li><li><p>\u6587\u6863\u5199\u5165</p></li></ol></li></ul>',3),u=[c];function d(n,m){return l(),e("div",null,u)}var b=o(p,[["render",d],["__file","index.html.vue"]]);export{b as default};