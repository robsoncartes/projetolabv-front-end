<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import store from "./store";
import router from "./router";

export default {
  methods: {
    sair() {
      store.commit("logout");
      router.push("/login");
    }
  }
};
</script>

<style lang="scss">
</style>
