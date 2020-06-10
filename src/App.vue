<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu.vue";
export default {
  data() {
    return {
      name: "NavMenu",
      components: {
        NavMenu
      }
    };
  }
};
</script>

<style lang="scss">
</style>
