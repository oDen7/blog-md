<!--
 * @File Name: 
 * @Description: 
 * @Author: oDen7
 * @LastEditors: oDen7
 * @LastEditTime: 2021-07-18 20:23:35
-->
<template>
  <div>
    <h1>样式绑定</h1>
    <div v-bind:class="{ fontSize: isActive, fontColor: true }">
      用对象的方式绑定class
    </div>
    <div v-bind:class="fontStyle">用对象的方式绑定class</div>
    <div v-bind:class="[fontSize1, fontColor2]">用数组方式绑定class</div>
    <div v-bind:class="[isFalse ? fontColor1 : fontColor2]">
      用数组方式通过三目运算符绑定class
    </div>
    <bindStyleComponent v-bind:class="[fontSize, fontColor]" />
    <div v-bind:style="{ color: fontColor1, fontSize: fontSizeStyle }">
      用对象方式绑定style
    </div>
    <div v-bind:style="[baseStyle]">用数组方式绑定style</div>
  </div>
</template>

<script>
let bindStyleComponent = {
  template: `<div>使用局部注册的方式绑定class</div>`,
};
export default {
  name: "BindClassOrStyle",
  components: {
    bindStyleComponent,
  },
  data() {
    return {
      isActive: true,
      fontStyle: {
        fontSize: true,
        fontColor1: true,
      },
      fontSize: "fontSize",
      fontColor: "fontColor",
      fontSize1: "fontSize1",
      fontColor2: "fontColor2",
      isFalse: false,
      fontSizeStyle: 40,
      fontColor1: "orange",
      baseStyle: {
        border: "1px solid #ccc",
        backgroundColor: "#ccc",
      },
    };
  },
};
</script>

<style>
.fontSize {
  font-size: 24px;
}
.fontColor {
  color: red;
}
.fontColor1 {
  color: green;
}

.fontSize1 {
  font-size: 30px;
}
.fontColor2 {
  color: blue;
}
</style>