# 概述

## 表单基础
> `<form>`元素,在 JavaScript 中则以 HTMLFormElement 类型表示
- HTMLFormElement
  1. acceptCharset：服务器可以接收的字符集，等价于 HTML 的 accept-charset 属性。
  2. action：请求的 URL，等价于 HTML 的 action 属性。
  3. elements：表单中所有控件的 HTMLCollection。
  4. enctype：请求的编码类型，等价于 HTML 的 enctype 属性。
  5. length：表单中控件的数量。
  6. method：HTTP 请求的方法类型，通常是"get"或"post"，等价于 HTML 的 method 属性。
  7. name：表单的名字，等价于 HTML 的 name 属性。
  8. reset()：把表单字段重置为各自的默认值。
  9. submit()：提交表单。
  10. target：用于发送请求和接收响应的窗口的名字，等价于 HTML 的 target 属性。

- 通过`id`获取表单 
> 将表单当作普通元素为它指定一个 id 属性,从而可以使用 `getElementById()` 来获取表单
- 通过`document.form`获取属性 
> `document.forms` 集合可以获取页面上所有的表单元素,可以进一步使用 数字索引 或 表单的名字（name） 来访问特定的表单

> 较早的浏览器，或者严格向后兼容的浏览器，也会把每个表单的 name 作为 document 对象的属性。
> 
> 例如，名为"form2"的表单可以通过 document.form2 来访问。
> 
> 不推荐使用这种方法，因为容易出错，而且这些属性将来可能会被浏览器删除。

### 提交表单
> 表单是通过用户点击提交按钮或图片按钮的方式提交的。

1. 通过按钮触发
> `提交按钮`可以使用`type`属性为`submit` 的 `<input>` 或 `<button>`
> 
> `图片按钮`可以使用`type`属性为`image`的`<input>`元素来定义

2. 通过事件触发
```javascript
let form = document.getElementById("myForm");
// 提交表单
form.submit(); 
```

3. 阻止表单触发
> 调用 preventDefault()方法可以阻止表单提交

```javascript
let form = document.getElementById("myForm");
form.addEventListener("submit", (event) => { 
 // 阻止表单提交
 event.preventDefault(); 
});
```

### 重置表单
> 用户单击重置按钮可以重置表单。

1. 通过按钮触发
> `重置按钮`可以使用`type`属性为`reset`的`<input>`或`<button>`

2. 通过事件触发
```javascript
let form = document.getElementById("myForm");
// 重置表单
form.reset(); 
```

### 表单字段
> 1. 表单元素可以像页面中的其他元素一样使用原生 DOM 方法来访问。
> 
> 2. 所有表单元素都是表单elements 属性（元素集合）中包含的一个值。
> 
> 3. 这个 elements 集合是一个有序列表，包含对表单中所有字段的引用，包括所有`<input>`、`<textarea>`、`<button>`、`<select>`和`<fieldset>`元素。
> 
> 4. elements集合中的每个字段都以它们在 HTML 标记中出现的次序保存，可以通过索引位置和 name 属性来访问。

```javascript
// 实例

let form = document.getElementById("form1");
// 取得表单中的第一个字段
let field1 = form.elements[0]; 
// 取得表单中名为"textbox1"的字段
let field2 = form.elements["textbox1"]; 
// 取得字段的数量
let fieldCount = form.elements.length; 
```

- 表单的公共属性 
  > 除`<fieldset>`元素以外，所有表单字段都有一组同样的属性。
  > 
  > 由于`<input>`类型可以表示多种表单字段，因此某些属性只适用于特定类型的字段。
  > 
  > 除此之外的属性可以在任何表单字段上使用。

  1. disabled：布尔值，表示表单字段是否禁用。
  2. form：指针，指向表单字段所属的表单。这个属性是只读的。
  3. name：字符串，这个字段的名字。
  4. readOnly：布尔值，表示这个字段是否只读。
  5. tabIndex：数值，表示这个字段在按 Tab 键时的切换顺序。
  6. type：字符串，表示字段类型，如"checkbox"、"radio"等。
  7. value：要提交给服务器的字段值。对文件输入字段来说，这个属性是只读的，仅包含计算机上某个文件的路径。

  ```javascript
  // 例子
  let form = document.getElementById("myForm");
  let field = form.elements[0]; 
  // 修改字段的值
  field.value = "Another value";
  // 检查字段所属的表单
  console.log(field.form === form); // true 
  // 给字段设置焦点
  field.focus(); 
  // 禁用字段
  field.disabled = true; 
  // 改变字段的类型（不推荐，但对<input>来说是可能的）
  field.type = "checkbox"; 

  // 避免按钮多次提交表单
  let form = document.getElementById("myForm");
  form.addEventListener("submit", (event) => { 
    let target = event.target; 
    // 取得提交按钮
    let btn = target.elements["submit-btn"]; 
    // 禁用提交按钮
    btn.disabled = true; 
  }); 
  ```

  > type 属性可以用于除`<fieldset>`之外的任何表单字段。
  > 
  > 对于`<input>`元素，这个值等于 HTML 的 `type` 属性值。对于其他元素，这个 `type` 属性的值按照下表设置。

- 表单字段的公共方法
  1. focus()：主要用来将焦点聚焦到指定元素
    ```javascript
    window.addEventListener("load", (event) => {
      document.forms[0].elements[0].focus(); 
    }); 
    // 如果表单中第一个字段是`type`为`hidden`的`<input>`元素，或者该字段被CSS属性`display`或`visibility`隐藏了，以上代码就会出错。
    ``` 

    - HTML5 为表单字段增加了 autofocus 属性，支持的浏览器会自动为带有该属性的元素设置焦点，而无须使用 JavaScript。
      ```javascript
      <input type="text" autofocus> 
      // 如果设置 autofocus 就不再调用focus()
      ```
    
    
  2. blur(): 主要用来将焦点从元素上移除了
    ```javascript
    document.forms[0].elements[0].blur();
    ```

- 表单字段的公共方法
  1. blur()
  2. focus()
  3. change():在`<input>`和`<textarea>`元素的 value 发生变化且失去焦点时触发，或者在`<select>`元素中选中项发生变化时触发。
  
  - 区别:
    1. blur 和 focus 事件会因为用户手动改变字段焦点或者调用 blur()或 focus()方法而触发。
    2. change 事件则不然，它会因控件不同而在不同时机触发
       1. 对于`<input>`和`<textarea>`元素,`change`事件会在字段失去焦点，同时`value`自控件获得焦点后发生变化时触发。
       2. 对于`<select>`元素，`change`事件会在用户改变了选中项时触发，不需要控件失去焦点。
    3. `focus`和`blur`事件通常用于以某种方式改变用户界面，以提供可见的提示或额外功能（例如在文本框下面显示下拉菜单）
    4. `change`事件通常用于验证用户在字段中输入的内容
       1. `focus`事件可以用来改变控件的背景颜色以便更清楚地表明当前字段获得了焦点
       2. `blur`事件可以用于去掉这个背景颜色
       3. `change`事件可以用于在用户输入了非数值时把背景改为红色

       ```javascript
       let textbox = document.forms[0].elements[0];
       textbox.addEventListener("focus", (event) => { 
          let target = event.target; 
          if (target.style.backgroundColor != "red") { 
            target.style.backgroundColor = "yellow"; 
          } 
       }); 

       textbox.addEventListener("blur", (event) => { 
          let target = event.target; 
          target.style.backgroundColor = /[^\d]/.test(target.value) ? "red" : ""; 
       }); 

       textbox.addEventListener("change", (event) => { 
          let target = event.target; 
          target.style.backgroundColor = /[^\d]/.test(target.value) ? "red" : ""; 
       }); 
       // 在某些浏览器中，blur 事件会先于change 事件触发
       // 在其他浏览器中，触发顺序则相反
       // 因此不能依赖这两个事件触发的顺序，必须区分时要多加注意。
       ```

## 文本框编程
1. 单行:`<input>`
   1. type:默认为text
   2. size:指定文本框宽度
   3. value:指定初始值,保存值
   4. maxLength:指定文本框允许的最多字符数
   
2. 多行:`<textarea>`
   1. rows:文本框高度,以字符数计量
   2. cols:文本框宽度,以字符数计量
   3. maxlength:不能在 HTML 中指定最大允许的字符数。
   4. value:指定初始值,保存值
  
> 应该使用`value`属性，而不是`标准DOM方法`读写文本框的值。
> 
> 比如，不要使用`setAttribute()`设置`<input>`元素`value`属性的值，也不要尝试修改`<textarea>`元素的第一个子节点。
> 
> 对`value`属性的修改也不会总体现在DOM中，因此在处理文本框值的时候最好不要使用DOM方法。

### 选择文本
> select()方法用于全部选择文本框中的文本
> 
> 大多数浏览器会在调用 select()方法后自动将焦点设置到文本框（Opera 例外）。
> 
> 这个方法不接收参数，可以在任何时候调用

```javascript
textbox.addEventListener("focus", (event) => {
 event.target.select(); 
}); 
```

1. select()事件
> 当选中文本框中的文本时，会触发 select 事件。
> 
> 这个事件确切的触发时机因浏览器而异。
> 在 IE9+、Opera、Firefox、Chrome 和 Safari 中，select 事件会在用户选择完文本后立即触发；
> 在 IE8 及更早版本中，则会在第一个字符被选中时触发。
> 
> 调用select()方法也会触发 select 事件

```javascript
let textbox = document.forms[0].elements["textbox1"]; 
textbox.addEventListener("select", (event) => { 
  console.log(`Text selected: ${textbox.value}`);
}); 
```

2. 取得选中的文本
> 虽然 select 事件能够表明有文本被选中，但不能提供选中了哪些文本的信息。
  1. selectionStart:文本选区的起点
  2. selectionEnd:文本选区的终点

```javascript
function getSelectedText(textbox){
 return textbox.value.substring(textbox.selectionStart, textbox.selectionEnd); 
} 
//这个扩展在 IE9+、Firefox、Safari、Chrome 和 Opera 中都可以使用。
//IE8 及更早版本不支持这两个属性，因此需要使用其他方式。

// 老IE
// 整个文档中文本选择信息的 document.selection 对象
// 在与 select 事件一起使用时，可以确定是触发这个事件文本框中选中的文本。为取得这些选中的文本，必须先创建一个范围，然后再从中提取文本
function getSelectedText(textbox){
  if (typeof textbox.selectionStart == "number"){ 
    return textbox.value.substring(textbox.selectionStart, textbox.selectionEnd); 
} else if (document.selection){ 
  return document.selection.createRange().text; 
 } 
} 
// 注意 document.selection 是根本不需要textbox 参数的。
```

3. 部分选中文本
> select()方法之外，Firefox最早实现的 setSelectionRange()方法也可以在所有文本框中使用。
> 
> 要选择的第一个字符的索引和停止选择的字符的索引（与字符串的 substring()方法一样）。

```javascript
textbox.value = "Hello world!"
// 选择所有文本
textbox.setSelectionRange(0, textbox.value.length); // "Hello world!" 
// 选择前 3 个字符
textbox.setSelectionRange(0, 3); // "Hel" 
// 选择第 4~6 个字符
textbox.setSelectionRange(4, 7); // "o w" 

// 如果想看到选择，则必须在调用 setSelectionRange()之前或之后给文本框设置焦点。
// 在 IE9、Firefox、Safari、Chrome 和 Opera 中都可以使用


// IE8 及更早版本支持通过范围部分选中文本。
// 1.必须先使用createTextRange()方法创建一个范围，并使用 moveStart()和 moveEnd()范围方法把这个范围放到正确的位置上。
// 2.在调用这两个方法前需要先调用 collapse()方法把范围折叠到文本框的开始。
// 3.接着，moveStart()可以把范围的起点和终点都移动到相同的位置，再给moveEnd()传入要选择的字符总数作为参数。
// 4.最后一步是使用范围的 select()方法选中文本，
textbox.value = "Hello world!";
var range = textbox.createTextRange(); 
// 选择所有文本
range.collapse(true); 
range.moveStart("character", 0); 
range.moveEnd("character", textbox.value.length); // "Hello world!" 
range.select(); 
// 选择前 3 个字符
range.collapse(true); 
range.moveStart("character", 0); 
range.moveEnd("character", 3); 
range.select(); // "Hel" 
// 选择第 4~6 个字符
range.collapse(true); 
range.moveStart("character", 4); 
range.moveEnd("character", 6); 
range.select(); // "o w" 
```

### 输入过滤

### 自动切换

### HTML5 约束验证 API

## 选择框编程

### 选项处理

### 添加选项

### 移除选项

### 移动和重排选项

## 表单序列化

## 富文本编程

### contenteditable

### 与富文本交互

### 富文件选择

### 通过表单提交富文本
