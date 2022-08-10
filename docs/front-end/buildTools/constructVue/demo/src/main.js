import Vue from "vue";
import App from "./app.vue";
import less from "less";
Vue.use(less);

new Vue({
    render: (h) => h(App)
}).$mount("#app");