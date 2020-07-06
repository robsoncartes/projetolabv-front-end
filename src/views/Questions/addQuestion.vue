<template>
  <b-container class="screen">
    <NavMenu />
    <router-view :key="examTitle"></router-view>
  </b-container>
</template>

<script>
import NavMenu from "@/components/NavMenu";

export default {
  name: "Questions",

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