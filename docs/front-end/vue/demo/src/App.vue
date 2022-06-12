<!--
 * @File Name: 
 * @Description: 
 * @Author: oDen7
 * @LastEditors: oDen7
 * @LastEditTime: 2021-07-18 21:46:57
-->
<template>
  <div id="app">
    <component
      :is="value"
      v-for="(value, key, index) in componentLists"
      :key="index"
    />
  </div>
</template>

<script>
import Base from "@/components/base";
import ComputedAndWatch from "@/components/computedAndWatch.vue";
import ComponentTemplate from "@/components/componentTemplate";
import BindClassOrStyle from "@/components/bindClassOrStyle.vue";
import EventDetail from "@/components/eventDetail.vue";

export default {
  name: "App",
  data() {
    return {
      title: "vue的声明式渲染",
      msg: "通过v-bind绑定msg",
      showP: true,
      detailInput: "点击翻转这个字符串",
      todos: [{ text: "使用" }, { text: "v-for" }, { text: "遍历渲染" }],
      modelText: "双向数据绑定",
      componentLists: {
        Base,
        ComputedAndWatch,
        ComponentTemplate,
        BindClassOrStyle,
        EventDetail,
      },
    };
  },
  methods: {
    reverseMsg() {
      this.detailInput = this.detailInput.split("").reverse().join("");
    },
  },
};
</script>

<style>
*,
body {
  margin: 0;
  padding: 0;
}
</style>
