<!--
 * @File Name: 
 * @Description: 
 * @Author: oDen7
 * @LastEditors: oDen7
 * @LastEditTime: 2021-07-18 21:36:03
-->
<template>
  <div>
    <h1>Vue指令语法</h1>
    <TemplateLang />
    <ForComponent />
    <p v-on:click="reverseMsg">{{ detailInput }}</p>
    <p>{{ modelText }}</p>
    <input type="text" v-model="modelText" />
  </div>
</template>

<script>
let base = {
  data() {
    return {
      msg: "通过v-bind绑定msg",
      title: "通过v-bind绑定title",
      showP: true,
    };
  },
  template: `<div><p v-bind:title="msg">{{ title }}</p>
    <p v-html="'<p style=color:red>这是用v-html渲染的节点</p>'"></p>
    <p>{{ true ? "这是用JavaScript表达式渲染的几点" : "" }}</p>
    <p v-if="!showP">在页面上看不到这段字....</p>
    <p v-else>v-else控制渲染</p>
    <p v-show="true">使用v-show控制渲染</p></div>`,
};

let liComponent = {
  props: ["todo"],
  template: `<li >{{ todo.text }}</li>`,
};

let forComponent = {
  components: {
    LiComponent: liComponent,
  },
  data() {
    return {
      todos: [{ text: "使用" }, { text: "v-for" }, { text: "遍历渲染" }],
      todoObj: {
        type: "对象",
        aciton: "遍历",
        todo: "测试",
      },
      sets: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ],
      numbers: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0;
      });
    },
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0;
      });
    },
  },
  template: `<div><h3>数组遍历</h3>
    <ul>
      <LiComponent v-for="(todo, index) in todos" :key="index" :todo="todo"/>
      <li>======使用is关键字========</li>
      <li is="LiComponent" v-for="(todo, index) in todos" :key="todo.id" :todo="todo"></li>
    </ul>
    <h3>对象遍历</h3>
    <ul>
      <li v-for="(value, key, index) in todoObj" :key="index">
        {{ index }}.{{ key }}-{{ value }}
      </li>
    </ul>
    <h3>利用计算属性for循环并进行条件筛选</h3>
    <ul>
      <li v-for="n in evenNumbers">{{ n }}</li>
    </ul>
    <h3>多层级数组不能使用for循环</h3>
    <ul v-for="set in sets">
      <li v-for="n in even(set)">{{ n }}</li>
    </ul>
  </div>`,
};

export default {
  name: "Base",
  components: {
    TemplateLang: base,
    ForComponent: forComponent,
  },
  data() {
    return {
      detailInput: "使使用{{}}绑定值",
      modelText: "双向数据绑定",
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
</style>
