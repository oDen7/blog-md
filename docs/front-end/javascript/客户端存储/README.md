# 概述

## Cookie
> 用于客户端存储会话信息
> 
> 在响应http请求时,通过Http头部Set-Cookie包含客户信息
> 
> http响应设置name,值为value的cookie。
> 
> 浏览器会存储会话信息,并在之后每个请求都会通过http头部cookie发回服务器
> 
> 用于唯一标识发送请求的客户端。

### cookie的限制
- cookie 原则 
  1. 不超过 300 个 cookie；
  2. 每个 cookie 不超过 4096 字节；
  3. 每个域不超过 20 个 cookie；
  4. 每个域不超过 81 920 字节。
   
- cookie的数量限制
  每个域能设置的 cookie 总数也是受限的，但不同浏览器的限制不同。例如：
  1. 最新版 IE 和 Edge 限制每个域不超过 50 个 cookie；
  2. 最新版 Firefox 限制每个域不超过 150 个 cookie；
  3. 最新版 Opera 限制每个域不超过 180 个 cookie；
  4. Safari 和 Chrome 对每个域的 cookie 数没有硬性限制。
  
> cookie 总数超过了单个域的上限，浏览器就会删除之前设置的 cookie。
> 
> IE 和 Opera 会按照最近最少使用（LRU，Least Recently Used）原则删除之前的 cookie
> 
> Firefox好像会随机删除之前的 cookie

- cookie的大小限制
> 大多数浏览器对 cookie 的限制是不超过 4096 字节，上下可以有一
个字节的误差。
> 
> 为保证兼容性,cookie 的大小不超过 4095 字节
> 
> 大小限制适用于一个域的所有 cookie，而不是单个 cookie
> 
> cookie 超过最大限制，则该 cookie 会被静默删除
>
> 使用多字节字符（如 UTF-8 Unicode 字符），则每个字符最多可能占 4 字节

### cookie的构成
- 名称
> 唯一标识cookie的名称。不区分大小写,但服务端可能区分。通过url编码
- 值
> 存储在cookie的字符串值。通过url编码
- 域
> cookie有效的域
> 发送到这个域的所有请求都包含这个cookie
> 如果不设置,则设置为cookie的域
- 路径
> 通过url路径把cookie发送指定服务器路径,即使是同域.
- 过期时间
> 删除cookie的时间戳.
>
> 默认在会话结束后删除所有cookie
> 
> 指定删除的具体时间使用GMT 格式（Wdy, DD-Mon-YYYY HH:MM:SS GMT）
> 
> 设置过去时间会立即删除 cookie
- 安全标志
> 使用ssl才会发送cookie到服务器
- HTTP-only
> 用来防御XSS攻击
>
> 服务器对cookie设置的一个附加的属性，在生成cookie时使用HttpOnly标志有助于减轻客户端脚本访问受保护cookie的风险
>
> 可以在客户端,服务端写入,但是只能在服务端读取

### JavaScript中使用cookie
> 处理比较麻烦，因为接口过于简单，只有 BOM 的 document.cookie 属性
>
> 所有名和值都是 URL 编码的，因此必须使用 decodeURIComponent()解码。
>
> document.cookie 属性设置新的 cookie 字符串不会覆盖之前存在的任何 cookie，除非设置了已有的cookie
>
> 设置 cookie 的格式如下，与 Set-Cookie 头部的格式一样
>
> JavaScript 中读写 cookie 不是很直观，所以可以通过辅助函数来简化相应的操作

```javascript
class CookieUtil {
    static get(name) {
        let cookieName = `${encodeURIComponent(name)}=`,
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;
        if (cookieStart > -1) {
            let cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart +
                cookieName.length, cookieEnd));
        }
        return cookieValue;
    }
    static set(name, value, expires, path, domain, secure) {
        let cookieText =
            `${encodeURIComponent(name)}=${encodeURIComponent(value)}`
        if (expires instanceof Date) {
            cookieText += `; expires=${expires.toGMTString()}`;
        }
        if (path) {
            cookieText += `; path=${path}`;
        }
        if (domain) {
            cookieText += `; domain=${domain}`;
        }
        if (secure) {
            cookieText += "; secure";
        }
        document.cookie = cookieText;
    }
    static unset(name, path, domain, secure) {
        CookieUtil.set(name, "", new Date(0), path, domain, secure);
    }
};
```

### 子Cookie
> 绕过浏览器对每个域的限制
>
> 子 cookie 是在单个cookie 存储的小块数据，本质上是使用 cookie 的值在单个 cookie 中存储多个名/值对
>
> 类似于查询字符串。这些值可以存储为单个 cookie，而不用单独存储为自己的名/
值对。结果就是网站或 Web 应用程序能够在单域 cookie 数限制下存储更多的结构化数据

```javascript
class SubCookieUtil {
    static get(name, subName) {
        let subCookies = SubCookieUtil.getAll(name);
        return subCookies ? subCookies[subName] : null;
    }
    static getAll(name) {
        let cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null,
            cookieEnd,
            subCookies,
            parts,
            result = {};
        if (cookieStart > -1) {
            cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = document.cookie.substring(cookieStart +
                cookieName.length, cookieEnd);
            if (cookieValue.length > 0) {
                subCookies = cookieValue.split("&");
                for (let i = 0, len = subCookies.length; i < len; i++) {
                    parts = subCookies[i].split("=");
                    result[decodeURIComponent(parts[0])] =
                        decodeURIComponent(parts[1]);
                }
                return result;
            }
        }
        return null;
    }
    // 省略其他代码
};
```

### cookie的注意事项
1. 所有 cookie 都会作为请求头部由浏览器发送给服务器，所以在 cookie 中保存大量信息可能会影响特定域浏览器请求的性能。
2. 保存的 cookie 越大，请求完成的时间就越长。即使浏览器对 cookie 大小有
限制，最好还是尽可能只通过 cookie 保存必要信息，以避免性能问题。

### 场景
> 判断用户是否登陆过网站、一般存储用户名密码相关信息

### 小结
> cookie在数量,大小,操作方式上有很大限制
>
> 会影响请求性能,cookie越大请求时间越长
>
> 可以把数据传递给服务器,也可以从服务器传给客户端

## web Stroage
> 解决通过客户端存储不需要频繁发送回服务器的数据时使用 cookie 的问题
### 主要目标
1. 提供在 cookie 之外的存储会话数据的途径
2. 提供跨会话持久化存储大量数据的机制

### stroge类型
> Storage 类型用于保存名/值对数据，直至存储空间上限（由浏览器决定）
- 方法
    1. clear()：删除所有值；不在 Firefox 中实现。
    2. getItem(name)：取得给定 name 的值。
    3. key(index)：取得给定数值位置的名称。
    4. removeItem(name)：删除给定 name 的名/值对。
    5. setItem(name, value)：设置给定 name 的值。
    6. length: 确定对象中保存了多少名/值对

### seesionStorage
> 主要用于存储只在客户端会话期间有效的小块数据
>
> 只存储会话数据，这意味着数据只会存储到浏览器关闭
>
> sessionStorage 中的数据不受页面刷新影响，可以在浏览器崩溃并重启后恢复。(IE不支持)
>
> 存储在sessionStorage 对象中的数据不能跨页面使用

#### 场景
> 统计当前页面元素的点击次数

### localStroage
> 在客户端持久存储数据的机制
> 
> 访问同一个 localStorage 对象,必须同源(同域,同端口,同协议)
> 
> 会保留到通过 JavaScript 删除或者用户清除浏览器缓存
> 
> 不受页面刷新影响，也不会因关闭窗口、标签页或重新启动浏览器而丢失

#### 场景
> 统计页面访问次数

### 限制
> 客户端数据的大小限制是按照每个源（协议、域和端口）来设置的，因此每个源有固定大小的数据存储空间
> 
> 不同浏览器给 localStorage 和 sessionStorage 设置了不同的空间限制，但大多数会限制为每个源 5MB。

### 存储事件
> 每当 Storage 对象发生变化时，都会在文档上触发 storage 事件。
> 
> getItem(),setItem(),delete(),removeItem(),clear()都会触发这个事件

- 属性
  1. domain：存储变化对应的域
  2. key：被设置或删除的键
  3. newValue：键被设置的新值，若键被删除则为 null
  4. oldValue：键变化之前的值

### 总结
- 存储大小
> cookie存储4k以下,sessionStorage和localStroage 存储 5m

- 存储时间
1. sessionStorage是会话存储，也就是一次客户端与服务器通信的时间，当浏览器或窗口关闭，就会消失。
2. localStorage是本地存储，存储在浏览器中，不主动清除就会存在。
3. cookie可以被设置有效时间，在有效期间内都会存在。

- 作用方式
1. cookie用于把数据传回服务器，也可以从服务器传到客户端
2. localStorage和sessionStorage只作用于客户端