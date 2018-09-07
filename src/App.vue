<template>
  <div>
    <transition>
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
          to: "LayoutJueJin",
          label: "掘金文章布局"
        },
        {
          to: "LayoutFlex",
          label: "Flex 布局"
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
body {
  width: 100vw;
  height: 100vh;
}
#app {
  width: 100%;
  height: 100%;
}
.page-menu {
  position: fixed;
  padding: 1em;
  bottom: 1em;
  right: 1em;
  background-color: coral;
}
</style>

