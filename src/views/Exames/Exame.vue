<template>
  <b-container class="screen">
    <NavMenu />
    <router-view :key="id"></router-view>
  </b-container>
</template>

<script>
import NavMenu from "@/components/NavMenu";

export default {
  name: "Exames",

  components: {
    NavMenu
  }
};
</script>

<style scoped>
.screen {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>