<!--
 * @File Name: 
 * @Description: 
 * @Author: oDen7
 * @LastEditors: oDen7
 * @LastEditTime: 2021-07-18 20:23:49
-->
<template>
  <div>
    <h1>模板语法测试</h1>
    <TestComponent />
    <GlobalTestComponent />
    <ul>
      <todoItem :todo="{ id: 0, text: '蔬菜' }"></todoItem>
      <todoItem
        v-for="(grocery, index) in groceryList"
        v-bind:todo="grocery"
        v-bind:key="index"
      ></todoItem>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
let TestComponent = {
  template: `<div>这是一个局部注册</div>`,
};
Vue.component("GlobalTestComponent", {
  template: `<div>这是一个全局注册组件</div>`,
});
let todoItem = {
  props: ["todo"],
  template: "<li>{{todo.id}}.{{todo.text}}</li>",
};
export default {
  name: "ComponentTemplate",
  components: {
    TestComponent,
    todoItem,
  },
  data() {
    return {
      groceryList: [
        { id: 1, text: "水果" },
        { id: 2, text: "奶酪" },
        { id: 3, text: "随便其它什么人吃的东西" },
      ],
    };
  },
};
</script>


<style>
</style>
