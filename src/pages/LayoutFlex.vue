<template>
  <div class="cotainer">
    <div class="header bg-primary--2">
      header
    </div>
    <div class="side side-left bg-primary--3">
      side-left
    </div>
    <div class="content bg-primary--1">
      <div>
        <p>文章标题</p>
      </div>
    </div>
    <div class="side side-right bg-primary--3">
      side-right
    </div>
    <div class="footer bg-primary--2">
      footer
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutFlex"
};
</script>

<style scoped>
.cotainer {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
}

.header {
  width: 100%;
  height: 40px;
}

.content {
  order: 2;
  width: 80%;
}

.side-left {
  order: 1;
  width: 10%;
}

.side-right {
  order: 3;
  width: 10%;
}

.footer {
  order: 4;
  width: 100%;
  height: 40px;
}

@media (max-width: 960px) {
  .side {
    display: none;
  }
  .content {
    width: 100%;
  }
}
</style>


