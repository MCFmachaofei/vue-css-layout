<template>
  <div class="cotainer">
    <div class="header">
      <div>header</div>
    </div>
    <div class="side side-left">
      <div>side-left</div>
    </div>
    <div class="content">
      <div>content</div>
      <div>content</div>
    </div>
    <div class="side side-right">
      <div>side-right</div>
    </div>
    <div class="footer">
      <div>footer</div>
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  text-align: center;
}

.header {
  width: 100%;
  height: 10%;
  background-color: beige;
}

.content {
  background-color: darkgray;
  order: 2;
  width: 80%;
  min-height: 50%;
}

.side {
  background-color: aquamarine;
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
  height: 10%;
  background-color: darkmagenta;
}
</style>


