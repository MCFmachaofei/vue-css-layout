<template>
  <div class="container text-primary">
    <header class="bg-primary">
      <div class="header-main">
        header
      </div>
    </header>
    <main>
      <div class="radius-box main-content">
        123
      </div>
      <!-- <div class="radius-box main-side">side</div> -->
    </main>
  </div>
</template>

<script>
export default {
  name: "LayoutJueJin"
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
header {
  width: 100%;
  height: 4rem;
  position: fixed;
  top: 0;
}
.header-main {
  max-width: 60rem;
  margin: 0 auto;
}
main {
  max-width: 60rem;
  margin: 7rem auto 0;
}
.main-content {
  width: 45rem;
  height: 50rem;
  float: left;
}
.main-side {
  float: right;
  width: 10rem;
  height: 10rem;
}

@media (max-width: 45rem) {
  .main-content {
    width: 100%;
  }
  .main-side {
    display: none;
  }
}
</style>


