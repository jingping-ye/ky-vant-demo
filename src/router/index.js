import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "/guide",
    component: () => import("@/views/guide/guide.vue"),
  },
  {
    path: "/index",
    name: "Index",
    component: () => import("@/views/index/index.vue"),
  },
  {
    path: "/phone",
    name: "Phone",
    component: () => import("@/views/phone/phone.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
