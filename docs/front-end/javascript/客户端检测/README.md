# 概述

- 能力检测

  > 测试浏览器是否支持某种特性

  - 原则

    1. 应该先检测最常用的方式
    2. 必须检测切实需要的特性

  - 安全能力检测

    > 检测能力是否存在的同时，验证其是否能够展现出预期的行为

  - 基于能力检测进行浏览器分析
    1. 检测特性
       > 可以按照能力将浏览器归类。如果你的应用程序需要使用特定的浏览器能力，那么最好集中检测所有能力，而不是等到用的时候再重复检测。
    2. 检测浏览器
    3. 能力检测的局限
       > 通过检测一种或一组能力，并不总能确定使用的是哪种浏览器

- 用户代理检测

  > 通过浏览器的用户代理字符串确定使用的是什么浏览器

  - 用户代理的历史 > HTTP 规范（1.0 和 1.1）要求浏览器应该向服务器发送包含浏览器名称和版本信息的简短字符串 - RFC 2616（HTTP 1.1）描述 用户代理 字符串 模板 > 产品标记用于通过软件名称和版本来标识通信产品的身份。多数使用产品标记的字段也允许列出属于应用主要部分的子产品，以空格分隔。按照约定，产品按照标识应用重要程度的先后顺序列出。

        1. 早期浏览器
            1. Mosaic
                > 美国国家超级计算应用中心（NCSA，National Center for Supercomputing Applications）发布于 1993年的 Mosaic 是早期 Web 浏览器的代表，其用户代理字符串相当简单
                > Mosaic/0.9
            2. Mozilla
                > 在网景公司准备开发浏览器时，代号确定为“Mozilla”（Mosaic Killer 的简写）
                - 第一个公开发行版Netscape Navigator 2 的用户代理字符串:
                    > Mozilla/Version [Language] (Platform; Encryption)
                    > Mozilla/2.02 [fr] (WinNT; I)
                    - Language：语言代码，表示浏览器的目标使用语言。
                    - Platform：表示浏览器所在的操作系统和/或平台。
                    - Encryption：包含的安全加密类型，可能的值是 U（128 位加密）、I（40 位加密）和 N（无加密）

        2. Netscape Navigator 3 和 IE3
            > 用户代理字符串也发生了一些小变化，删除了语言信息，并将操作系统或系统 CPU 信息（OS-or-CPU description）等列为可选信息
            > Mozilla/Version (Platform; Encryption [; OS-or-CPU description])
            > Mozilla/3.0 (Win95; U)

            - ie3
                > 因为当时 Netscape Navigator 是市场占有率最高的浏览器，很多服务器在返回网页之前都会特意检测其用户代理字符串。
                > 如果 IE 因此打不开网页，那么这个当时初出茅庐的浏览器就会遭受重创
                > IE 就在用户代理字符串中添加了兼容 Netscape 用户代理字符串的内容
                > Mozilla/2.0 (compatible; MSIE Version; Operating System)

        3. Netscape Communicator 4 和 IE4~8
            - Netscape Communicator 4
                > Mozilla/Version (Platform; Encryption [; OS-or-CPU description])
            - IE4
                > Mozilla/4.0 (compatible; MSIE Version; Operating System)

                - 在 IE4.5（只针对 Mac）面世时，Mozilla 的版本号还是 4，IE 的版本号却变了
                    > Mozilla/4.0 (compatible; MSIE 4.5; Mac_PowerPC)
                    - IE8 在用户代理字符串中添加了额外的标识“Trident”，就是浏览器渲染引擎的代号。
                        > Mozilla/4.0 (compatible; MSIE Version; Operating System; Trident/TridentVersion)
                        > 这个新增的“Trident”是为了让开发者知道什么时候 IE8 运行兼容模式。
                        > 在兼容模式下，MSIE 的版本会变成 7，但 Trident 的版本不变

        4. IE9
            > Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)
            > 如果 IE9 运行兼容模式，则会恢复旧版的 Mozilla 和 MSIE 版本号，但 Trident 的版本号还是 5.0。
            > Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; Trident/5.0)

        5. Gecko
            > Gecko 渲染引擎是 Firefox 的核心。
            > Mozilla/MozillaVersion (Platform; Encryption; OS-or-CPU; Language;PrereleaseVersion)Gecko/GeckoVersionApplicationProduct/ApplicationProductVersion
            - MozillaVersion: Mozilla 版本
            - Platform : 浏览器所在的平台。可能的值包括 Windows、Mac 和 X11（UNIX X-Windows）
            - Encryption : 加密能力：U 表示 128 位，I 表示 40 位，N 表示无加密
            - OS-or-CPU : 浏览器所在的操作系统或计算机处理器类型。如果是 Windows 平台，则这里是 Windows 的版本（如 WinNT、Win95）。如果是 Mac 平台，则这里是 CPU 类型（如 68k、PPC for PowerPC 或 MacIntel）。如果是 X11平台，则这里是通过 uname -sm 命名得到的 UNIX 操作系统名
            - Language : 浏览器的目标使用语言
            - Prerelease Version : 最初的设想是 Mozilla预发布版的版本号，现在表示 Gecko 引擎的版本号
            - GeckoVersion : 以 yyyymmdd 格式的日期表示的 Gecko 渲染引擎的版本
            - ApplicationProduct : 使用 Gecko 的产品名称。可能是 Netscape、Firefox 等
            - ApplicationProductVersion : ApplicationProduct 的版本，区别于 MozillaVersion 和 GeckoVersion
            > 所有这些字符串都表示使用的是基于 Gecko 的浏览器（只是版本不同）。有时候，相比于知道特定的浏览器，知道是不是基于 Gecko 才更重要。从第一个基于 Gecko 的浏览器发布开始，Mozilla 版本就是 5.0，一直没有变过。以后也不太可能会变
            - 主要的改变
                1. 去掉了语言标记（即前面例子中的"en-US"）。
                2. 在浏览器使用强加密时去掉加密标记（因为是默认了）。这意味着 I 和 N 还可能出现，但 U 不可能出现了
                3. 去掉了 Windows 平台上的平台标记，这是因为跟 OS-or-CPU 部分重复了，否则两个地方都会有Windows
                4. GeckoVersion 固定为"Gecko/20100101"

        6. webkit
            > Mozilla/5.0 (Platform; Encryption; OS-or-CPU; Language)AppleWebKit/AppleWebKitVersion (KHTML, like Gecko) Safari/SafariVersion
            > 所有基于 WebKit 的浏览器都将自己标识为 Mozilla 5.0，与所有基于 Gecko 的浏览器一样。
            > Safari 与 Mozilla 兼容，不能让网站以为用户使用了不受支持的浏览器而把 Safari 排斥在外。
            - Safari 的用户代理字符串在第 3 版时有所改进。下面的版本标记现在用来表示 Safari 实际的版本号
                > Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/522.15.5(KHTML, like Gecko) Version/3.0.3 Safari/522.15.5

        7. Konqueror
            - Konqueror是与 KDE Linux桌面环境打包发布的浏览器，基于开源渲染引擎 KHTML
            - Konqueror 决定采用 Internet Explore 的用户代理字符串格式,并做了一些修改
                > Mozilla/5.0 (compatible; Konqueror/Version; OS-or-CPU) KHTML/KHTMLVersion(like Gecko)

        8. Chrome
            - 谷歌的 Chrome 浏览器使用 Blink 作为渲染引擎，使用 V8 作为 JavaScript 引擎。
            - Chrome 的用户代理字符串包含所有 WebKit 的信息，另外又加上了 Chrome 及其版本的信息
            > Mozilla/5.0 (Platform; Encryption; OS-or-CPU; Language)AppleWebKit/AppleWebKitVersion (KHTML, like Gecko) Chrome/ChromeVersion Safari/SafariVersion
        9. Opera
            - Opera 默认的用户代理字符串是所有现代浏览器中最符合逻辑的，因为它正确标识了自己和版本
            - Opera8
                > Opera/Version (OS-or-CPU; Encryption) [Language]
            - Opera 9
                1. 把自己标识为别的浏览器，如Firefox 或 IE。这时候的字符串跟 Firefox 和 IE 的一样，只不过末尾会多一个"Opera"及其版本号。
                    > Mozilla/5.0 (Windows NT 5.1; U; en; rv:1.8.1) Gecko/20061208 Firefox/2.0.0 Opera 9.50
                2. 伪装成 Firefox 或 IE
                    > 这种情况下的用户代理字符串与 Firefox 和 IE 返回的一样，末尾也没有"Opera"及其版本信息
            - Opera 10
                > Opera/9.80 (OS-or-CPU; Encryption; Language) Presto/PrestoVersion Version/Version
            - 最近
                > Opera 最近的版本已经改为在更标准的字符串末尾追加"OPR"标识符和版本号。这样，除了末尾的"OPR"标识符和版本号，字符串的其他部分与 WebKit 浏览器是类似的。
                > Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)Chrome/65.0.3325.181 Safari/537.36 OPR/52.0.2871.64

        10.  iOS 与 Android
            - iOS 和 Android 移动操作系统上默认的浏览器都是基于 WebKit 的，因此具有与相应桌面浏览器一样的用户代理字符串。
            - ios
                > Mozilla/5.0 (Platform; Encryption; OS-or-CPU like Mac OS X; Language)AppleWebKit/AppleWebKitVersion (KHTML, like Gecko) Version/BrowserVersionMobile/MobileVersion Safari/SafariVersion
                > 用于辅助判断 Mac 操作系统的"like Mac OS X"和"Mobile"相关的标识
            - Android
                > Mozilla/5.0 (Linux; U; Android 2.2; en-us; Nexus One Build/FRF91)AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1
            - 区别
                1. 没有Mobile 后面的版本号（"Mobile"标识还有）

- 浏览器分析

  > 想要知道自己代码运行在什么浏览器上，大部分开发者会分析 window.navigator.userAgent 返回的字符串值。
  > 所有浏览器都会提供这个值，如果相信这些返回值并基于给定的一组浏览器检测这个字符串，最终会得到关于浏览器和操作系统的比较精确的结果

  1. 伪造用户代理
     > 通过浏览器提供伪私有的**defineGetter**方法，利用它可以篡改用户代理字符串
  2. 分析浏览器
     - 通过解析浏览器返回的用户代理字符串
       - 浏览器
       - 浏览器版本
       - 浏览器渲染引擎
       - 设备类型（桌面/移动）
       - 设备生产商
       - 设备型号
       - 操作系统
       - 操作系统版本
     - 第三方用户代理解析程序
       - Bowser
       - UAParser.js
       - Platform.js
       - CURRENT-DEVICE
       - Google Closure
       - Mootools

- 软件与硬件检测

  - 识别浏览器与操作系统

    1. navigator.oscpu
       > 通常对应用户代理字符串中操作系统/系统架构相关信息
    2. navigator.vendor
       > 通常包含浏览器开发商信息
    3. navigator.platform
       > 通常表示浏览器所在的操作系统
    4. screen.colorDepth 和 screen.pixelDepth
       > 显示器每像素颜色的位深
    5. screen.orientation
       > 其中包含 Screen Orientation API 定义的屏幕信息

  - 浏览器元数据

    1. Geolocation API

       > 让浏览器脚本感知当前设备的地理位置
       > 这个 API 只在安全执行环境（通过 HTTPS 获取的脚本）中可用

       - 规范

         > 主要来源是 GPS 和 IP 地址、射频识别（RFID）、Wi-Fi 及蓝牙 Mac 地址、GSM/CDMA 蜂窝 ID 以及用户输入等信息

       - 要获取浏览器当前的位置

         > getCurrentPosition()
         > 返回一个包含 时间戳 和 Coordinates 的 对象

         - Coordinates 对象

           - 失败时

             > 接收失败回调函数作为第二个参数，这个函数会收到一个 PositionError 对象

             - PositionError 对象

               - code

               1. PERMISSION_DENIED

                  > 浏览器未被允许访问设备位置。

                  - 页面第一次尝试访问 Geolocation API 时，浏览器会弹出确认对话框取得用户授权（每个域分别获取）。
                  - 如果返回了这个错误码

                  1. 用户不同意授权，
                  2. 在不安全的环境下访问了 Geolocation API。message 属性还会提供额外信息。

               2. POSITION_UNAVAILABLE

                  > 系统无法返回任何位置信息
                  > 这个错误码可能代表各种失败原因，但相对来说并不常见，因为只要设备能上网，就至少可以根据 IP 地址返回一个低精度的坐标

               3. TIMEOUT
                  > 系统不能在超时时间内返回位置信息

               - message

           - PositionOptions
             1. enableHighAccuracy
                > 布尔值，true 表示返回的值应该尽量精确，默认值为 false。
                > 默认情况下，设备通常会选择最快、最省电的方式返回坐标。这通常意味着返回的是不够精确的坐标。
                > 比如，在移动设备上，默认位置查询通常只会采用 Wi-Fi 和蜂窝网络的定位信息。而在 enableHighAccuracy 为 true 的情况下，则会使用设备的 GPS 确定设备位置，并返回这些值的混合结果。使用 GPS 会更耗时、耗电，因此在使用 enableHighAccuracy 配置时要仔细权衡一下。
             2. timeout
                > 毫秒，表示在以 TIMEOUT 状态调用错误回调函数之前等待的最长时间。
                > 默认值是 0xFFFFFFFF（232 – 1）
                > 0 表示完全跳过系统调用而立即以 TIMEOUT 调用错误回调函数
             3. maximumAge
                > 毫秒，表示返回坐标的最长有效期，默认值为 0。
                > 因为查询设备位置会消耗资源，所以系统通常会缓存坐标并在下次返回缓存的值（遵从位置缓存失效策略）。
                > 系统会计算缓存期，如果 Geolocation API 请求的配置要求比缓存的结果更新，则系统会重新查询并返回值。
                > 0 表示强制系统忽略缓存的值，每次都重新查询。
                > 而 Infinity 会阻止系统重新查询，只会返回缓存的值。
                > JavaScript 可以通过检查 Position 对象的 timestamp 属性值是否重复来判断返回的是不是缓存值。

    2. Connection State 和 NetworkInformation API

       > 浏览器会跟踪网络连接状态并以两种方式暴露这些信息：连接事件和 navigator.onLine 属性

       - Connection State

         - 链接时
           > window 对象上触发 online 事件
         - 断开时
           > window 对象上触发 offline 事件

       - NetworkInformation API

         - downlink
           > 整数，表示当前设备的带宽（以 Mbit/s 为单位），舍入到最接近的 25kbit/s。
           > 这个值可能会根据历史网络吞吐量计算，也可能根据连接技术的能力来计算
         - downlinkMax
           > 整数，表示当前设备最大的下行带宽（以 Mbit/s 为单位），根据网络的第一跳来确定。
           > 因为第一跳不一定反映端到端的网络速度，所以这个值只能用作粗略的上限值。
         - effectiveType
           > 字符串枚举值，表示连接速度和质量。
           - slow-2g
             > 往返时间 ＞ 2000ms
             > 下行带宽 ＜ 50kbit/s
           - 2g
             > 2000ms ＞ 往返时间 ≥ 1400ms
             > 70kbit/s ＞ 下行带宽 ≥ 50kbit/s
           - 3g
             > 1400ms ＞ 往返时间 ≥ 270ms
             > 700kbit/s ＞ 下行带宽 ≥ 70kbit/s
           - 4g
             > 270ms ＞ 往返时间 ≥ 0ms
             > 下行带宽 ≥ 700kbit/s
         - rtt

           > 毫秒，表示当前网络实际的往返时间，舍入为最接近的 25 毫秒。
           > 这个值可能根据历史网络吞吐量计算，也可能根据连接技术的能力来计算。

         - type

           > 字符串枚举值，表示网络连接技术

           - bluetooth：蓝牙。
           - cellular：蜂窝。
           - ethernet：以太网。
           - none：无网络连接。相当于 navigator.onLine === false。
           - mixed：多种网络混合。
           - other：其他。
           - unknown：不确定。
           - wifi：Wi-Fi。
           - wimax：WiMAX。

         - saveDatas
           > 布尔值，表示用户设备是否启用了“节流”（reduced data）模式
         - onchange
           > 事件处理程序，会在任何连接状态变化时激发一个 change 事件
           > 通过 navigator.connection.addEventListener('change',changeHandler)或 navigator.connection. onchange = changeHandler 等方式使用
           - onchargingchange
             > 添加充电状态变化时的处理程序
           - onchargingtimechange
             > 添加充电时间变化时的处理程序
           - ondischargingtimechange
             > 添加放电时间变化时的处理程序
           - onlevelchange
             > 添加电量百分比变化时的处理程序

    3. Battery Status API

       > 浏览器可以访问设备电池及充电状态的信息

       - BatteryManager

         - charging：布尔值，表示设备当前是否正接入电源充电。如果设备没有电池，则返回 true。
         - chargingTime：整数，表示预计离电池充满还有多少秒。如果电池已充满或设备没有电池，则返回 0。
         - dischargingTime：整数，表示预计离电量耗尽还有多少秒。如果设备没有电池，则返回 Infinity。
         - level：浮点数，表示电量百分比。电量完全耗尽返回 0.0，电池充满返回 1.0。如果设备没有电池，则返回 1.0。

       -

  - 硬件
    1. navigator.hardwareConcurrency
       > 返回浏览器支持的逻辑处理器核心数量，包含表示核心数的一个整数值（如果核心数无法确定，这个值就是 1）
    2. navigator.deviceMemory
       > 返回设备大致的系统内存大小，包含单位为 GB 的浮点数（舍入为最接近的 2 的幂：512MB 返回 0.5，4GB 返回 4）
    3. navigator.maxTouchPoints
       > 返回触摸屏支持的最大关联触点数量，包含一个整数值
