<template>
  <div id="main">
    <transition mode="out-in">
      <router-view></router-view>
    </transition>

    <transition>
      <div class="page-menu">
        <ul>
          <router-link v-for="(item, index) in pageMenu" :key="index" tag="li" :to="item.to" exact>
            <a>{{ item.label }}</a>
          </router-link>
        </ul>
      </div>
    </transition>
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
html {
  font-size: 16px;
}
body {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
}
#main {
  width: 100%;
  height: 100%;
}
.page-menu {
  position: fixed;
  padding: 1rem;
  bottom: 1rem;
  right: 1rem;
  background-color: coral;
}
.bg-primary {
  background-color: #2196f3;
}
.text-primary {
  color: black;
}
.radius-box {
  background-color: white;
  border-radius: 0.2rem;
  box-shadow: 0.2rem 0.2rem #eee;
}
</style>

