import Vue from "vue"
import Router from "vue-router"

import LayoutJueJin from "@/pages/LayoutJueJin";

Vue.use(Router)

const router = new Router({
  mode: "hash",
  routes: [{
    name: "layoutJueJin",
    path: "/layoutJueJin",
    component: LayoutJueJin
  }]
})

router.beforeResolve((to, from, next) => {
  console.log(to);
  console.log(from);
  next()
})

export default router
