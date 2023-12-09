import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "indeks",
      component: () => import("./components/HelloWorld.vue")
    },
    {
      path: "/lisa",
      name: "lisa",
      component: () => import("./components/UploadFile.vue")
    }
  ]
});