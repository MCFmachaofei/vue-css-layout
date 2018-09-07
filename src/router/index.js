import Vue from "vue"
import Router from "vue-router"

import LayoutJueJin from "@/pages/LayoutJueJin";
import LayoutFlex from "@/pages/LayoutFlex";
import NotFind from "@/pages/404";

Vue.use(Router)

const router = new Router({
  mode: "hash",
  routes: [{
    name: "layoutJueJin",
    path: "/layoutJueJin",
    component: LayoutJueJin
  }, {
    name: "LayoutFlex",
    path: "/LayoutFlex",
    component: LayoutFlex
  }, {
    name: "404",
    path: "*",
    component: NotFind
  }]
})

router.beforeResolve((to, from, next) => {
  console.log(to);
  console.log(from);
  next()
})

export default router
