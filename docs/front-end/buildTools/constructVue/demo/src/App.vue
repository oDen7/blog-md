<template>
    <div id="main">{{text}}</div>
</template>
<script>
    export default {
        data() {
            return {
                text: "welcome to vue.js!!!!"
            }
        }
    }
</script>
<style lang="less">
    #main {
        font-size: 26px;
        color: red;
    }
</style>