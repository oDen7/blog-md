# 概述

> window,location,navigator,screen,history

## window

  > 浏览器实例
  > ECMAScript 中的 Global 对象
  > 浏览器窗口的 JavaScript 接口

  - global 作用域

    > 全局作用域
    > global === self === window

  - 窗口位置

    1. moveTo()

       > 接收要移动到的新位置的绝对坐标 x 和 y

    2. moveBy()
       > 接收相对当前位置在两个方向上移动的像素数

  - 像素比

    > CSS 像素是 Web 开发中使用的统一像素单位
    > 单位的背后其实是一个角度：0.0213°
    > 如果屏幕距离人眼是一臂长，则以这个角度计算的 CSS 像素大小约为 1/96 英寸
    > 这样定义像素大小是为了在不同设备上统一标准

    - 举例 ??????????????????????????????????????
      > 手机屏幕的物理分辨率可能是 1920×1080，但因为其像素可能非常小，所以浏览器就需要将其分辨率降为较低的逻 辑分辨率，比如 640×320。
      > 物理像素与 CSS 像素之间的转换比率由 window.devicePixelRatio 属性提供
      > 对于分辨率从 1920×1080 转换为 640×320 的设备，window.devicePixelRatio 的值就是 3。这样一来，12 像素（CSS 像素）的文字实际上就会用 36 像素的物理像素来显示。
      > window.devicePixelRatio 实际上与每英寸像素数（DPI，dots per inch）是对应的。DPI 表示单位像素密度，而 window.devicePixelRatio 表示物理像素与逻辑像素之间的缩放系数。

  - 窗口大小

    1.  innerWidth,innerHeight
        > 返回浏览器窗口中页面视口的大小,在移动端返回屏幕上页面可视区域的大小
    2.  outerWidth,outerHeight
        > 返回浏览器窗口自身的大小（不管是在最外层 window 上使用，还是在窗格`<frame>`中使用）
    3.  clientWidth,clientHeigh
        > 返回页面视口的宽度和高度,即渲染页面的实际大小
    4.  resizeTo(),resizeBy()
        > 调整窗口大小
        > 前者 接收新的宽度和高度值 ,后者 接收宽度和高度各要缩放多少

  - 视口位置

    > 通过滚动在有限的视口中查看文档

    1. window.pageXoffset,window.pageYoffset
       > 所有浏览器都支持这个属性，除了 IE8 及其更低版本的 IE 浏览器
    2. window.scrollX,window.scrollY
       > Firefox, Chrome 和 Safari 都支持该属性
    3. scroll()、scrollTo()和 scrollBy()
       > 接受 x,y 参数 或者 ScrollToOptions 字典

  - 导航与打开新窗口

    - window.open()
      1. 弹出窗口
      2. 安全限制
         > 浏览器会在用户操作下才允许创建弹窗。在网页加载过程中调用 window.open()没有效果，而且还可能导致向用户显示错误
      3. 弹窗屏蔽程序
         > 浏览器内置的弹窗屏蔽程序阻止了弹窗，那么 window.open()很可能会返回 null。

  - 定时器
  - 系统对话框
    1. alert()
    2. confirm()
    3. prompt()

## location

  > 提供了当前窗口中加载文档的信息，以及通常的导航功能
  > window.location 和 document.location 指向同一个对象

  1. location.hash // URL 散列值（井号后跟零或多个字符），如果没有则为空字符串
  2. location.host // 服务器名及端口号
  3. location.hostname // 服务器名
  4. location.href // 当前加载页面的完整 URL。location 的 toString()方法返回这个值
  5. location.pathname // URL 中的路径和（或）文件名
  6. location.port // 请求的端口。如果 URL 中没有端口，则返回空字符串
  7. location.protocol // 页面使用的协议。通常是"http:"或"https:"
  8. location.search // URL 的查询字符串。这个字符串以问号开头
     > URLSearchParams 提供了一组标准 API 方法，通过它们可以检查和修改查询字符串
  9. location.username // 域名前指定的用户名
  10. location.password // 域名前指定的密码
  11. location.origin // URL 的源地址。只读

## navigator

  > 客户端标识浏览器的标准

  1. activeVrDisplays // 返回数组，包含 ispresenting 属性为 true 的 VRDisplay 实例
  2. appCodeName // 即使在非 Mozilla 浏览器中也会返回"Mozilla"
  3. appName // 浏览器全名
  4. appVersion // 浏览器版本。通常与实际的浏览器版本不一致
  5. battery // 返回暴露 Battery Status API 的 BatteryManager 对象
  6. buildId // 浏览器的构建编号
  7. connection // 返回暴露 Network Information API 的 NetworkInformation 对象
  8. cookieEnabled // 返回布尔值，表示是否启用了 cookie
  9. credentials // 返回暴露 Credentials Management API 的 CredentialsContainer 对象
  10. deviceMemory // 返回单位为 GB 的设备内存容量
  11. doNotTrack // 返回用户的“不跟踪”（do-not-track）设置
  12. geolocation // 返回暴露 Geolocation API 的 Geolocation 对象
  13. getVRDisplays() //返回数组，包含可用的每个 VRDisplay 实例
  14. getUserMedia() // 返回与可用媒体设备硬件关联的流
  15. hardwareConcurrency // 返回设备的处理器核心数量
  16. javaEnabled // 返回布尔值，表示浏览器是否启用了 Java
  17. language // 返回浏览器的主语言
  18. languages // 返回浏览器偏好的语言数组
  19. locks // 返回暴露 Web Locks API 的 LockManager 对象
  20. mediaCapabilities // 返回暴露 Media Capabilities API 的 MediaCapabilities 对象
  21. mediaDevices // 返回可用的媒体设备
  22. maxTouchPoints // 返回设备触摸屏支持的最大触点数
  23. mimeTypes // 返回浏览器中注册的 MIME 类型数组
  24. onLine // 返回布尔值，表示浏览器是否联网
  25. oscpu // 返回浏览器运行设备的操作系统和（或）CPU
  26. ermissions // 返回暴露 Permissions API 的 Permissions 对象
  27. platform // 返回浏览器运行的系统平台
  28. plugins // 返回浏览器安装的插件数组。在 IE 中，这个数组包含页面中所有`<embed>`元素

  - 插件检测

    > 检测浏览器是否安装了某个插件是开发中常见的需求。

    - 对象包含:
      1. name：插件名称。
      2. description：插件介绍。
      3. filename：插件的文件名。
      4. length：由当前插件处理的 MIME 类型数量。
    - IE10 及更低版本 通过 new ActiveXObject(name) 检测

  - 插件注册
    > registerProtocolHandler()
    > navigator.registerProtocolHandler("mailto","http://www.somemailclient.com?cmd=%s", "Some Mail Client");

  29. product // 返回产品名称（通常是"Gecko"）
  30. productSub // 返回产品的额外信息（通常是 Gecko 的版本）
  31. registerProtocolHandler() // 将一个网站注册为特定协议的处理程序
  32. requestMediaKeySystemAccess() // 返回一个期约，解决为 MediaKeySystemAccess 对象
  33. sendBeacon() // 异步传输一些小数据
  34. serviceWorker // 返回用来与 ServiceWorker 实例交互的 ServiceWorkerContainer
  35. share() // 返回当前平台的原生共享机制
  36. storage // 返回暴露 Storage API 的 StorageManager 对象
  37. userAgent // 返回浏览器的用户代理字符串
  38. vendor // 返回浏览器的厂商名称
  39. vendorSub // 返回浏览器厂商的更多信息
  40. vibrate() // 触发设备振动
  41. webdriver // 返回浏览器当前是否被自动化程序控制

## screen

  > 保存的纯粹是客户端能力信息，也就是浏览器窗口外面的客户端显示器的信息

  1. availHeight // 屏幕像素高度减去系统组件高度（只读）
  2. availLeft // 没有被系统组件占用的屏幕的最左侧像素（只读）
  3. availTop // 没有被系统组件占用的屏幕的最顶端像素（只读）
  4. availWidth // 屏幕像素宽度减去系统组件宽度（只读）
  5. colorDepth // 表示屏幕颜色的位数；多数系统是 32（只读）
  6. height // 屏幕像素高度
  7. left // 当前屏幕左边的像素距离
  8. pixelDepth // 屏幕的位深（只读）
  9. top // 当前屏幕顶端的像素距离
  10. width // 屏幕像素宽度
  11. orientation // 返回 Screen Orientation API 中屏幕的朝向

## history

  > 表示当前窗口首次使用以来用户的导航历史记录
  > 因为 history 是 window 的属性，所以每个 window 都有自己的 history 对象。
  > 出于安全考虑，这个对象不会暴露用户访问过的 URL，但可以通过它在不知道实际 URL 的情况下前进和后退。

  - 导航

    1. go()
       > 可以在用户历史记录中沿任何方向导航，可以前进也可以后退。
       - back()
         > 后退
       - forward()
         > 前进

  - 历史状态管理

        - hashchange() hash 路由 //红宝书 582 页
          > 监听浏览器地址hash值变化， 执行响应js切换网页
          > oldURL 和 newURL。这两个属性s分别保存变化前后的 URL，而且是包含散列值的完整 URL

          ```javascript
          window.addEventListener("hashchange", (event) => {
            console.log(`Old URL: ${event.oldURL}, New URL: ${event.newURL}`);
          });
          ```

        - 状态管理 API history 路由
          > 利用url地址改变， 网页内容改变
          - pushState()
            > 一个 state 对象、一个新状态的标题和一个（可选的）相对 URL
            > history.pushState(stateObject, "My title", "baz.html");
          - replaceState()
            > 更新状态不会创建新历史记录，只会覆盖当前状态
            > 一个 state 对象、一个新状态的标题
            > history.replaceState({newFoo: "newBar"}, "New title");
          > pushState()创建的每个“假”URL 背后都对应着服务器上一个真实的物理 URL。否则，单击“刷新”按钮会导致 404 错误。所有单页应用程序（SPA，Single Page Application）框架都必须通过服务器或客户端的某些配置解决这个问题。


        - 区别
            1. hash模式下，仅hash符号之前的内容会被包含在请求中,后端不需要全路由覆盖
            2. history模式下，前端的url必须和实际后端发起请求的url一致,后端需要做全路由覆盖
            3. hashchange 会在页面 URL 的散列变化时被触发
            4. history模式下,改变浏览器 URL 而不会加载新页面
