import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueRouter from "vue-router";
import logIn from "./components/logIn.vue";
import SignUp from "./components/SignUp.vue";
import Home from "./components/Home.vue";
import Notas from "./components/Notas.vue"
import Nota from "./components/Nota.vue"
Vue.use(require('vue-cookies'))
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
   
    {
      path: "/",
      component: logIn,
    },
    {
      path: "/signUp",
      component: SignUp,
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/notas",
      component: Notas
    },
    {
      path: "/nota",
      component: Nota
    }
  ],
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
