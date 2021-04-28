<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <Btn></Btn>
  </div>
</template>
<script>
import Btn from "./components/btn.vue";

export default {
  components: { Btn },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
