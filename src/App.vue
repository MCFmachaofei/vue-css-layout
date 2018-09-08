<template>
  <div id="main">
    <transition mode="out-in">
      <router-view></router-view>
    </transition>

    <div class="animated bounce radius-box page-menu bg-primary--4">
      <ul>
        <router-link v-for="(item, index) in pageMenu" :key="index" tag="li" :to="item.to" exact>
          <a>{{ item.label }}</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      pageMenu: [
        {
          to: "LayoutFlex",
          label: "Flex 布局"
        },
        {
          to: "LayoutJueJin",
          label: "掘金文章布局"
        },
        {
          to: "layoutThree",
          label: "三栏布局"
        }
      ]
    };
  }
};
</script>

<style>
@import "../static/css/normalize.css";
@import "../static/css/reset.css";
@import "animate.css";

html {
  font-size: 14px;
  color: white;
}
.page-menu {
  position: fixed;
  padding: 1rem;
  bottom: 1rem;
  right: 1rem;
}
.page-menu li {
  padding: 0.3rem;
}
</style>

<style>
.bg-primary--1 {
  background-color: #1e88e5;
}
.bg-primary--2 {
  background-color: #1976d2;
}
.bg-primary--3 {
  background-color: #1565c0;
}
.bg-primary--4 {
  background-color: #e3f2fd;
}

.radius-box {
  border-radius: 0.2rem;
  box-shadow: 0.2rem 0.2rem 0.2rem #eee;
}
</style>

