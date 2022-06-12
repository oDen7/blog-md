import{_ as l,o as i,c as o,d as e}from"./app.13f0a594.js";const t={},a=e(`<h1 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h1><blockquote><p>window,location,navigator,screen,history</p></blockquote><h2 id="window" tabindex="-1"><a class="header-anchor" href="#window" aria-hidden="true">#</a> window</h2><blockquote><p>\u6D4F\u89C8\u5668\u5B9E\u4F8B ECMAScript \u4E2D\u7684 Global \u5BF9\u8C61 \u6D4F\u89C8\u5668\u7A97\u53E3\u7684 JavaScript \u63A5\u53E3</p></blockquote><ul><li><p>global \u4F5C\u7528\u57DF</p><blockquote><p>\u5168\u5C40\u4F5C\u7528\u57DF global === self === window</p></blockquote></li><li><p>\u7A97\u53E3\u4F4D\u7F6E</p><ol><li><p>moveTo()</p><blockquote><p>\u63A5\u6536\u8981\u79FB\u52A8\u5230\u7684\u65B0\u4F4D\u7F6E\u7684\u7EDD\u5BF9\u5750\u6807 x \u548C y</p></blockquote></li><li><p>moveBy()</p><blockquote><p>\u63A5\u6536\u76F8\u5BF9\u5F53\u524D\u4F4D\u7F6E\u5728\u4E24\u4E2A\u65B9\u5411\u4E0A\u79FB\u52A8\u7684\u50CF\u7D20\u6570</p></blockquote></li></ol></li><li><p>\u50CF\u7D20\u6BD4</p><blockquote><p>CSS \u50CF\u7D20\u662F Web \u5F00\u53D1\u4E2D\u4F7F\u7528\u7684\u7EDF\u4E00\u50CF\u7D20\u5355\u4F4D \u5355\u4F4D\u7684\u80CC\u540E\u5176\u5B9E\u662F\u4E00\u4E2A\u89D2\u5EA6\uFF1A0.0213\xB0 \u5982\u679C\u5C4F\u5E55\u8DDD\u79BB\u4EBA\u773C\u662F\u4E00\u81C2\u957F\uFF0C\u5219\u4EE5\u8FD9\u4E2A\u89D2\u5EA6\u8BA1\u7B97\u7684 CSS \u50CF\u7D20\u5927\u5C0F\u7EA6\u4E3A 1/96 \u82F1\u5BF8 \u8FD9\u6837\u5B9A\u4E49\u50CF\u7D20\u5927\u5C0F\u662F\u4E3A\u4E86\u5728\u4E0D\u540C\u8BBE\u5907\u4E0A\u7EDF\u4E00\u6807\u51C6</p></blockquote><ul><li>\u4E3E\u4F8B ?????????????????????????????????????? <blockquote><p>\u624B\u673A\u5C4F\u5E55\u7684\u7269\u7406\u5206\u8FA8\u7387\u53EF\u80FD\u662F 1920\xD71080\uFF0C\u4F46\u56E0\u4E3A\u5176\u50CF\u7D20\u53EF\u80FD\u975E\u5E38\u5C0F\uFF0C\u6240\u4EE5\u6D4F\u89C8\u5668\u5C31\u9700\u8981\u5C06\u5176\u5206\u8FA8\u7387\u964D\u4E3A\u8F83\u4F4E\u7684\u903B \u8F91\u5206\u8FA8\u7387\uFF0C\u6BD4\u5982 640\xD7320\u3002 \u7269\u7406\u50CF\u7D20\u4E0E CSS \u50CF\u7D20\u4E4B\u95F4\u7684\u8F6C\u6362\u6BD4\u7387\u7531 window.devicePixelRatio \u5C5E\u6027\u63D0\u4F9B \u5BF9\u4E8E\u5206\u8FA8\u7387\u4ECE 1920\xD71080 \u8F6C\u6362\u4E3A 640\xD7320 \u7684\u8BBE\u5907\uFF0Cwindow.devicePixelRatio \u7684\u503C\u5C31\u662F 3\u3002\u8FD9\u6837\u4E00\u6765\uFF0C12 \u50CF\u7D20\uFF08CSS \u50CF\u7D20\uFF09\u7684\u6587\u5B57\u5B9E\u9645\u4E0A\u5C31\u4F1A\u7528 36 \u50CF\u7D20\u7684\u7269\u7406\u50CF\u7D20\u6765\u663E\u793A\u3002 window.devicePixelRatio \u5B9E\u9645\u4E0A\u4E0E\u6BCF\u82F1\u5BF8\u50CF\u7D20\u6570\uFF08DPI\uFF0Cdots per inch\uFF09\u662F\u5BF9\u5E94\u7684\u3002DPI \u8868\u793A\u5355\u4F4D\u50CF\u7D20\u5BC6\u5EA6\uFF0C\u800C window.devicePixelRatio \u8868\u793A\u7269\u7406\u50CF\u7D20\u4E0E\u903B\u8F91\u50CF\u7D20\u4E4B\u95F4\u7684\u7F29\u653E\u7CFB\u6570\u3002</p></blockquote></li></ul></li><li><p>\u7A97\u53E3\u5927\u5C0F</p><ol><li>innerWidth,innerHeight <blockquote><p>\u8FD4\u56DE\u6D4F\u89C8\u5668\u7A97\u53E3\u4E2D\u9875\u9762\u89C6\u53E3\u7684\u5927\u5C0F,\u5728\u79FB\u52A8\u7AEF\u8FD4\u56DE\u5C4F\u5E55\u4E0A\u9875\u9762\u53EF\u89C6\u533A\u57DF\u7684\u5927\u5C0F</p></blockquote></li><li>outerWidth,outerHeight <blockquote><p>\u8FD4\u56DE\u6D4F\u89C8\u5668\u7A97\u53E3\u81EA\u8EAB\u7684\u5927\u5C0F\uFF08\u4E0D\u7BA1\u662F\u5728\u6700\u5916\u5C42 window \u4E0A\u4F7F\u7528\uFF0C\u8FD8\u662F\u5728\u7A97\u683C<code>&lt;frame&gt;</code>\u4E2D\u4F7F\u7528\uFF09</p></blockquote></li><li>clientWidth,clientHeigh <blockquote><p>\u8FD4\u56DE\u9875\u9762\u89C6\u53E3\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6,\u5373\u6E32\u67D3\u9875\u9762\u7684\u5B9E\u9645\u5927\u5C0F</p></blockquote></li><li>resizeTo(),resizeBy() <blockquote><p>\u8C03\u6574\u7A97\u53E3\u5927\u5C0F \u524D\u8005 \u63A5\u6536\u65B0\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u503C ,\u540E\u8005 \u63A5\u6536\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u5404\u8981\u7F29\u653E\u591A\u5C11</p></blockquote></li></ol></li><li><p>\u89C6\u53E3\u4F4D\u7F6E</p><blockquote><p>\u901A\u8FC7\u6EDA\u52A8\u5728\u6709\u9650\u7684\u89C6\u53E3\u4E2D\u67E5\u770B\u6587\u6863</p></blockquote><ol><li>window.pageXoffset,window.pageYoffset <blockquote><p>\u6240\u6709\u6D4F\u89C8\u5668\u90FD\u652F\u6301\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u9664\u4E86 IE8 \u53CA\u5176\u66F4\u4F4E\u7248\u672C\u7684 IE \u6D4F\u89C8\u5668</p></blockquote></li><li>window.scrollX,window.scrollY <blockquote><p>Firefox, Chrome \u548C Safari \u90FD\u652F\u6301\u8BE5\u5C5E\u6027</p></blockquote></li><li>scroll()\u3001scrollTo()\u548C scrollBy() <blockquote><p>\u63A5\u53D7 x,y \u53C2\u6570 \u6216\u8005 ScrollToOptions \u5B57\u5178</p></blockquote></li></ol></li><li><p>\u5BFC\u822A\u4E0E\u6253\u5F00\u65B0\u7A97\u53E3</p><ul><li>window.open() <ol><li>\u5F39\u51FA\u7A97\u53E3</li><li>\u5B89\u5168\u9650\u5236 <blockquote><p>\u6D4F\u89C8\u5668\u4F1A\u5728\u7528\u6237\u64CD\u4F5C\u4E0B\u624D\u5141\u8BB8\u521B\u5EFA\u5F39\u7A97\u3002\u5728\u7F51\u9875\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u8C03\u7528 window.open()\u6CA1\u6709\u6548\u679C\uFF0C\u800C\u4E14\u8FD8\u53EF\u80FD\u5BFC\u81F4\u5411\u7528\u6237\u663E\u793A\u9519\u8BEF</p></blockquote></li><li>\u5F39\u7A97\u5C4F\u853D\u7A0B\u5E8F <blockquote><p>\u6D4F\u89C8\u5668\u5185\u7F6E\u7684\u5F39\u7A97\u5C4F\u853D\u7A0B\u5E8F\u963B\u6B62\u4E86\u5F39\u7A97\uFF0C\u90A3\u4E48 window.open()\u5F88\u53EF\u80FD\u4F1A\u8FD4\u56DE null\u3002</p></blockquote></li></ol></li></ul></li><li><p>\u5B9A\u65F6\u5668</p></li><li><p>\u7CFB\u7EDF\u5BF9\u8BDD\u6846</p><ol><li>alert()</li><li>confirm()</li><li>prompt()</li></ol></li></ul><h2 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> location</h2><blockquote><p>\u63D0\u4F9B\u4E86\u5F53\u524D\u7A97\u53E3\u4E2D\u52A0\u8F7D\u6587\u6863\u7684\u4FE1\u606F\uFF0C\u4EE5\u53CA\u901A\u5E38\u7684\u5BFC\u822A\u529F\u80FD window.location \u548C document.location \u6307\u5411\u540C\u4E00\u4E2A\u5BF9\u8C61</p></blockquote><ol><li>location.hash // URL \u6563\u5217\u503C\uFF08\u4E95\u53F7\u540E\u8DDF\u96F6\u6216\u591A\u4E2A\u5B57\u7B26\uFF09\uFF0C\u5982\u679C\u6CA1\u6709\u5219\u4E3A\u7A7A\u5B57\u7B26\u4E32</li><li>location.host // \u670D\u52A1\u5668\u540D\u53CA\u7AEF\u53E3\u53F7</li><li>location.hostname // \u670D\u52A1\u5668\u540D</li><li>location.href // \u5F53\u524D\u52A0\u8F7D\u9875\u9762\u7684\u5B8C\u6574 URL\u3002location \u7684 toString()\u65B9\u6CD5\u8FD4\u56DE\u8FD9\u4E2A\u503C</li><li>location.pathname // URL \u4E2D\u7684\u8DEF\u5F84\u548C\uFF08\u6216\uFF09\u6587\u4EF6\u540D</li><li>location.port // \u8BF7\u6C42\u7684\u7AEF\u53E3\u3002\u5982\u679C URL \u4E2D\u6CA1\u6709\u7AEF\u53E3\uFF0C\u5219\u8FD4\u56DE\u7A7A\u5B57\u7B26\u4E32</li><li>location.protocol // \u9875\u9762\u4F7F\u7528\u7684\u534F\u8BAE\u3002\u901A\u5E38\u662F&quot;http:&quot;\u6216&quot;https:&quot;</li><li>location.search // URL \u7684\u67E5\u8BE2\u5B57\u7B26\u4E32\u3002\u8FD9\u4E2A\u5B57\u7B26\u4E32\u4EE5\u95EE\u53F7\u5F00\u5934 <blockquote><p>URLSearchParams \u63D0\u4F9B\u4E86\u4E00\u7EC4\u6807\u51C6 API \u65B9\u6CD5\uFF0C\u901A\u8FC7\u5B83\u4EEC\u53EF\u4EE5\u68C0\u67E5\u548C\u4FEE\u6539\u67E5\u8BE2\u5B57\u7B26\u4E32</p></blockquote></li><li>location.username // \u57DF\u540D\u524D\u6307\u5B9A\u7684\u7528\u6237\u540D</li><li>location.password // \u57DF\u540D\u524D\u6307\u5B9A\u7684\u5BC6\u7801</li><li>location.origin // URL \u7684\u6E90\u5730\u5740\u3002\u53EA\u8BFB</li></ol><h2 id="navigator" tabindex="-1"><a class="header-anchor" href="#navigator" aria-hidden="true">#</a> navigator</h2><blockquote><p>\u5BA2\u6237\u7AEF\u6807\u8BC6\u6D4F\u89C8\u5668\u7684\u6807\u51C6</p></blockquote><ol><li>activeVrDisplays // \u8FD4\u56DE\u6570\u7EC4\uFF0C\u5305\u542B ispresenting \u5C5E\u6027\u4E3A true \u7684 VRDisplay \u5B9E\u4F8B</li><li>appCodeName // \u5373\u4F7F\u5728\u975E Mozilla \u6D4F\u89C8\u5668\u4E2D\u4E5F\u4F1A\u8FD4\u56DE&quot;Mozilla&quot;</li><li>appName // \u6D4F\u89C8\u5668\u5168\u540D</li><li>appVersion // \u6D4F\u89C8\u5668\u7248\u672C\u3002\u901A\u5E38\u4E0E\u5B9E\u9645\u7684\u6D4F\u89C8\u5668\u7248\u672C\u4E0D\u4E00\u81F4</li><li>battery // \u8FD4\u56DE\u66B4\u9732 Battery Status API \u7684 BatteryManager \u5BF9\u8C61</li><li>buildId // \u6D4F\u89C8\u5668\u7684\u6784\u5EFA\u7F16\u53F7</li><li>connection // \u8FD4\u56DE\u66B4\u9732 Network Information API \u7684 NetworkInformation \u5BF9\u8C61</li><li>cookieEnabled // \u8FD4\u56DE\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u662F\u5426\u542F\u7528\u4E86 cookie</li><li>credentials // \u8FD4\u56DE\u66B4\u9732 Credentials Management API \u7684 CredentialsContainer \u5BF9\u8C61</li><li>deviceMemory // \u8FD4\u56DE\u5355\u4F4D\u4E3A GB \u7684\u8BBE\u5907\u5185\u5B58\u5BB9\u91CF</li><li>doNotTrack // \u8FD4\u56DE\u7528\u6237\u7684\u201C\u4E0D\u8DDF\u8E2A\u201D\uFF08do-not-track\uFF09\u8BBE\u7F6E</li><li>geolocation // \u8FD4\u56DE\u66B4\u9732 Geolocation API \u7684 Geolocation \u5BF9\u8C61</li><li>getVRDisplays() //\u8FD4\u56DE\u6570\u7EC4\uFF0C\u5305\u542B\u53EF\u7528\u7684\u6BCF\u4E2A VRDisplay \u5B9E\u4F8B</li><li>getUserMedia() // \u8FD4\u56DE\u4E0E\u53EF\u7528\u5A92\u4F53\u8BBE\u5907\u786C\u4EF6\u5173\u8054\u7684\u6D41</li><li>hardwareConcurrency // \u8FD4\u56DE\u8BBE\u5907\u7684\u5904\u7406\u5668\u6838\u5FC3\u6570\u91CF</li><li>javaEnabled // \u8FD4\u56DE\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u6D4F\u89C8\u5668\u662F\u5426\u542F\u7528\u4E86 Java</li><li>language // \u8FD4\u56DE\u6D4F\u89C8\u5668\u7684\u4E3B\u8BED\u8A00</li><li>languages // \u8FD4\u56DE\u6D4F\u89C8\u5668\u504F\u597D\u7684\u8BED\u8A00\u6570\u7EC4</li><li>locks // \u8FD4\u56DE\u66B4\u9732 Web Locks API \u7684 LockManager \u5BF9\u8C61</li><li>mediaCapabilities // \u8FD4\u56DE\u66B4\u9732 Media Capabilities API \u7684 MediaCapabilities \u5BF9\u8C61</li><li>mediaDevices // \u8FD4\u56DE\u53EF\u7528\u7684\u5A92\u4F53\u8BBE\u5907</li><li>maxTouchPoints // \u8FD4\u56DE\u8BBE\u5907\u89E6\u6478\u5C4F\u652F\u6301\u7684\u6700\u5927\u89E6\u70B9\u6570</li><li>mimeTypes // \u8FD4\u56DE\u6D4F\u89C8\u5668\u4E2D\u6CE8\u518C\u7684 MIME \u7C7B\u578B\u6570\u7EC4</li><li>onLine // \u8FD4\u56DE\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u6D4F\u89C8\u5668\u662F\u5426\u8054\u7F51</li><li>oscpu // \u8FD4\u56DE\u6D4F\u89C8\u5668\u8FD0\u884C\u8BBE\u5907\u7684\u64CD\u4F5C\u7CFB\u7EDF\u548C\uFF08\u6216\uFF09CPU</li><li>ermissions // \u8FD4\u56DE\u66B4\u9732 Permissions API \u7684 Permissions \u5BF9\u8C61</li><li>platform // \u8FD4\u56DE\u6D4F\u89C8\u5668\u8FD0\u884C\u7684\u7CFB\u7EDF\u5E73\u53F0</li><li>plugins // \u8FD4\u56DE\u6D4F\u89C8\u5668\u5B89\u88C5\u7684\u63D2\u4EF6\u6570\u7EC4\u3002\u5728 IE \u4E2D\uFF0C\u8FD9\u4E2A\u6570\u7EC4\u5305\u542B\u9875\u9762\u4E2D\u6240\u6709<code>&lt;embed&gt;</code>\u5143\u7D20</li></ol><ul><li><p>\u63D2\u4EF6\u68C0\u6D4B</p><blockquote><p>\u68C0\u6D4B\u6D4F\u89C8\u5668\u662F\u5426\u5B89\u88C5\u4E86\u67D0\u4E2A\u63D2\u4EF6\u662F\u5F00\u53D1\u4E2D\u5E38\u89C1\u7684\u9700\u6C42\u3002</p></blockquote><ul><li>\u5BF9\u8C61\u5305\u542B: <ol><li>name\uFF1A\u63D2\u4EF6\u540D\u79F0\u3002</li><li>description\uFF1A\u63D2\u4EF6\u4ECB\u7ECD\u3002</li><li>filename\uFF1A\u63D2\u4EF6\u7684\u6587\u4EF6\u540D\u3002</li><li>length\uFF1A\u7531\u5F53\u524D\u63D2\u4EF6\u5904\u7406\u7684 MIME \u7C7B\u578B\u6570\u91CF\u3002</li></ol></li><li>IE10 \u53CA\u66F4\u4F4E\u7248\u672C \u901A\u8FC7 new ActiveXObject(name) \u68C0\u6D4B</li></ul></li><li><p>\u63D2\u4EF6\u6CE8\u518C</p><blockquote><p>registerProtocolHandler() navigator.registerProtocolHandler(&quot;mailto&quot;,&quot;http://www.somemailclient.com?cmd=%s&quot;, &quot;Some Mail Client&quot;);</p></blockquote></li></ul><ol start="29"><li>product // \u8FD4\u56DE\u4EA7\u54C1\u540D\u79F0\uFF08\u901A\u5E38\u662F&quot;Gecko&quot;\uFF09</li><li>productSub // \u8FD4\u56DE\u4EA7\u54C1\u7684\u989D\u5916\u4FE1\u606F\uFF08\u901A\u5E38\u662F Gecko \u7684\u7248\u672C\uFF09</li><li>registerProtocolHandler() // \u5C06\u4E00\u4E2A\u7F51\u7AD9\u6CE8\u518C\u4E3A\u7279\u5B9A\u534F\u8BAE\u7684\u5904\u7406\u7A0B\u5E8F</li><li>requestMediaKeySystemAccess() // \u8FD4\u56DE\u4E00\u4E2A\u671F\u7EA6\uFF0C\u89E3\u51B3\u4E3A MediaKeySystemAccess \u5BF9\u8C61</li><li>sendBeacon() // \u5F02\u6B65\u4F20\u8F93\u4E00\u4E9B\u5C0F\u6570\u636E</li><li>serviceWorker // \u8FD4\u56DE\u7528\u6765\u4E0E ServiceWorker \u5B9E\u4F8B\u4EA4\u4E92\u7684 ServiceWorkerContainer</li><li>share() // \u8FD4\u56DE\u5F53\u524D\u5E73\u53F0\u7684\u539F\u751F\u5171\u4EAB\u673A\u5236</li><li>storage // \u8FD4\u56DE\u66B4\u9732 Storage API \u7684 StorageManager \u5BF9\u8C61</li><li>userAgent // \u8FD4\u56DE\u6D4F\u89C8\u5668\u7684\u7528\u6237\u4EE3\u7406\u5B57\u7B26\u4E32</li><li>vendor // \u8FD4\u56DE\u6D4F\u89C8\u5668\u7684\u5382\u5546\u540D\u79F0</li><li>vendorSub // \u8FD4\u56DE\u6D4F\u89C8\u5668\u5382\u5546\u7684\u66F4\u591A\u4FE1\u606F</li><li>vibrate() // \u89E6\u53D1\u8BBE\u5907\u632F\u52A8</li><li>webdriver // \u8FD4\u56DE\u6D4F\u89C8\u5668\u5F53\u524D\u662F\u5426\u88AB\u81EA\u52A8\u5316\u7A0B\u5E8F\u63A7\u5236</li></ol><h2 id="screen" tabindex="-1"><a class="header-anchor" href="#screen" aria-hidden="true">#</a> screen</h2><blockquote><p>\u4FDD\u5B58\u7684\u7EAF\u7CB9\u662F\u5BA2\u6237\u7AEF\u80FD\u529B\u4FE1\u606F\uFF0C\u4E5F\u5C31\u662F\u6D4F\u89C8\u5668\u7A97\u53E3\u5916\u9762\u7684\u5BA2\u6237\u7AEF\u663E\u793A\u5668\u7684\u4FE1\u606F</p></blockquote><ol><li>availHeight // \u5C4F\u5E55\u50CF\u7D20\u9AD8\u5EA6\u51CF\u53BB\u7CFB\u7EDF\u7EC4\u4EF6\u9AD8\u5EA6\uFF08\u53EA\u8BFB\uFF09</li><li>availLeft // \u6CA1\u6709\u88AB\u7CFB\u7EDF\u7EC4\u4EF6\u5360\u7528\u7684\u5C4F\u5E55\u7684\u6700\u5DE6\u4FA7\u50CF\u7D20\uFF08\u53EA\u8BFB\uFF09</li><li>availTop // \u6CA1\u6709\u88AB\u7CFB\u7EDF\u7EC4\u4EF6\u5360\u7528\u7684\u5C4F\u5E55\u7684\u6700\u9876\u7AEF\u50CF\u7D20\uFF08\u53EA\u8BFB\uFF09</li><li>availWidth // \u5C4F\u5E55\u50CF\u7D20\u5BBD\u5EA6\u51CF\u53BB\u7CFB\u7EDF\u7EC4\u4EF6\u5BBD\u5EA6\uFF08\u53EA\u8BFB\uFF09</li><li>colorDepth // \u8868\u793A\u5C4F\u5E55\u989C\u8272\u7684\u4F4D\u6570\uFF1B\u591A\u6570\u7CFB\u7EDF\u662F 32\uFF08\u53EA\u8BFB\uFF09</li><li>height // \u5C4F\u5E55\u50CF\u7D20\u9AD8\u5EA6</li><li>left // \u5F53\u524D\u5C4F\u5E55\u5DE6\u8FB9\u7684\u50CF\u7D20\u8DDD\u79BB</li><li>pixelDepth // \u5C4F\u5E55\u7684\u4F4D\u6DF1\uFF08\u53EA\u8BFB\uFF09</li><li>top // \u5F53\u524D\u5C4F\u5E55\u9876\u7AEF\u7684\u50CF\u7D20\u8DDD\u79BB</li><li>width // \u5C4F\u5E55\u50CF\u7D20\u5BBD\u5EA6</li><li>orientation // \u8FD4\u56DE Screen Orientation API \u4E2D\u5C4F\u5E55\u7684\u671D\u5411</li></ol><h2 id="history" tabindex="-1"><a class="header-anchor" href="#history" aria-hidden="true">#</a> history</h2><blockquote><p>\u8868\u793A\u5F53\u524D\u7A97\u53E3\u9996\u6B21\u4F7F\u7528\u4EE5\u6765\u7528\u6237\u7684\u5BFC\u822A\u5386\u53F2\u8BB0\u5F55 \u56E0\u4E3A history \u662F window \u7684\u5C5E\u6027\uFF0C\u6240\u4EE5\u6BCF\u4E2A window \u90FD\u6709\u81EA\u5DF1\u7684 history \u5BF9\u8C61\u3002 \u51FA\u4E8E\u5B89\u5168\u8003\u8651\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u4E0D\u4F1A\u66B4\u9732\u7528\u6237\u8BBF\u95EE\u8FC7\u7684 URL\uFF0C\u4F46\u53EF\u4EE5\u901A\u8FC7\u5B83\u5728\u4E0D\u77E5\u9053\u5B9E\u9645 URL \u7684\u60C5\u51B5\u4E0B\u524D\u8FDB\u548C\u540E\u9000\u3002</p></blockquote><ul><li><p>\u5BFC\u822A</p><ol><li>go() <blockquote><p>\u53EF\u4EE5\u5728\u7528\u6237\u5386\u53F2\u8BB0\u5F55\u4E2D\u6CBF\u4EFB\u4F55\u65B9\u5411\u5BFC\u822A\uFF0C\u53EF\u4EE5\u524D\u8FDB\u4E5F\u53EF\u4EE5\u540E\u9000\u3002</p></blockquote><ul><li>back() <blockquote><p>\u540E\u9000</p></blockquote></li><li>forward() <blockquote><p>\u524D\u8FDB</p></blockquote></li></ul></li></ol></li><li><p>\u5386\u53F2\u72B6\u6001\u7BA1\u7406</p><pre><code>- hashchange() hash \u8DEF\u7531 //\u7EA2\u5B9D\u4E66 582 \u9875
  &gt; \u76D1\u542C\u6D4F\u89C8\u5668\u5730\u5740hash\u503C\u53D8\u5316\uFF0C \u6267\u884C\u54CD\u5E94js\u5207\u6362\u7F51\u9875
  &gt; oldURL \u548C newURL\u3002\u8FD9\u4E24\u4E2A\u5C5E\u6027s\u5206\u522B\u4FDD\u5B58\u53D8\u5316\u524D\u540E\u7684 URL\uFF0C\u800C\u4E14\u662F\u5305\u542B\u6563\u5217\u503C\u7684\u5B8C\u6574 URL

  \`\`\`javascript
  window.addEventListener(&quot;hashchange&quot;, (event) =&gt; {
    console.log(\`Old URL: \${event.oldURL}, New URL: \${event.newURL}\`);
  });
  \`\`\`

- \u72B6\u6001\u7BA1\u7406 API history \u8DEF\u7531
  &gt; \u5229\u7528url\u5730\u5740\u6539\u53D8\uFF0C \u7F51\u9875\u5185\u5BB9\u6539\u53D8
  - pushState()
    &gt; \u4E00\u4E2A state \u5BF9\u8C61\u3001\u4E00\u4E2A\u65B0\u72B6\u6001\u7684\u6807\u9898\u548C\u4E00\u4E2A\uFF08\u53EF\u9009\u7684\uFF09\u76F8\u5BF9 URL
    &gt; history.pushState(stateObject, &quot;My title&quot;, &quot;baz.html&quot;);
  - replaceState()
    &gt; \u66F4\u65B0\u72B6\u6001\u4E0D\u4F1A\u521B\u5EFA\u65B0\u5386\u53F2\u8BB0\u5F55\uFF0C\u53EA\u4F1A\u8986\u76D6\u5F53\u524D\u72B6\u6001
    &gt; \u4E00\u4E2A state \u5BF9\u8C61\u3001\u4E00\u4E2A\u65B0\u72B6\u6001\u7684\u6807\u9898
    &gt; history.replaceState({newFoo: &quot;newBar&quot;}, &quot;New title&quot;);
  &gt; pushState()\u521B\u5EFA\u7684\u6BCF\u4E2A\u201C\u5047\u201DURL \u80CC\u540E\u90FD\u5BF9\u5E94\u7740\u670D\u52A1\u5668\u4E0A\u4E00\u4E2A\u771F\u5B9E\u7684\u7269\u7406 URL\u3002\u5426\u5219\uFF0C\u5355\u51FB\u201C\u5237\u65B0\u201D\u6309\u94AE\u4F1A\u5BFC\u81F4 404 \u9519\u8BEF\u3002\u6240\u6709\u5355\u9875\u5E94\u7528\u7A0B\u5E8F\uFF08SPA\uFF0CSingle Page Application\uFF09\u6846\u67B6\u90FD\u5FC5\u987B\u901A\u8FC7\u670D\u52A1\u5668\u6216\u5BA2\u6237\u7AEF\u7684\u67D0\u4E9B\u914D\u7F6E\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002


- \u533A\u522B
    1. hash\u6A21\u5F0F\u4E0B\uFF0C\u4EC5hash\u7B26\u53F7\u4E4B\u524D\u7684\u5185\u5BB9\u4F1A\u88AB\u5305\u542B\u5728\u8BF7\u6C42\u4E2D,\u540E\u7AEF\u4E0D\u9700\u8981\u5168\u8DEF\u7531\u8986\u76D6
    2. history\u6A21\u5F0F\u4E0B\uFF0C\u524D\u7AEF\u7684url\u5FC5\u987B\u548C\u5B9E\u9645\u540E\u7AEF\u53D1\u8D77\u8BF7\u6C42\u7684url\u4E00\u81F4,\u540E\u7AEF\u9700\u8981\u505A\u5168\u8DEF\u7531\u8986\u76D6
    3. hashchange \u4F1A\u5728\u9875\u9762 URL \u7684\u6563\u5217\u53D8\u5316\u65F6\u88AB\u89E6\u53D1
    4. history\u6A21\u5F0F\u4E0B,\u6539\u53D8\u6D4F\u89C8\u5668 URL \u800C\u4E0D\u4F1A\u52A0\u8F7D\u65B0\u9875\u9762
</code></pre></li></ul>`,19),n=[a];function c(r,p){return i(),o("div",null,n)}var u=l(t,[["render",c],["__file","index.html.vue"]]);export{u as default};
