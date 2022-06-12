<!--
 * @File Name: 
 * @Description: 
 * @Author: oDen7
 * @LastEditors: oDen7
 * @LastEditTime: 2021-07-18 20:24:32
-->
<template>
  <div>
    <h1>计算属性,监听器,方法</h1>
    <input type="text" v-model="msg" @blur="setNewMsg()" />
    <div>input state:{{ state }}</div>
    <div>msg:{{ msg }}</div>
    <div>computed:{{ returnReverse }}</div>
    <div>computed get/set:{{ newMsg }}</div>
  </div>
</template>
<script>
export default {
  name: "computedAndWatch",
  data() {
    return {
      msg: "Hello",
      state: "",
    };
  },
  computed: {
    returnReverse() {
      return this.msg.split("").reverse().join("");
    },
    newMsg: {
      get: function () {
        return `${this.msg}get`;
      },
      set: function (newVal) {
        this.msg = `${newVal}set`;
        setTimeout(() => {
          this.state = "finish";
        }, 0);
      },
    },
  },
  watch: {
    msg: function () {
      this.state = "input......";
    },
  },
  methods: {
    setNewMsg() {
      this.newMsg = this.msg;
    },
  },
};
</script>
<style></style>
