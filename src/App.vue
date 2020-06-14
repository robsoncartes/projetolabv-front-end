<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">FateQuiz</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/">Exams</router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link to="/contas">Contas</router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link to="/atividades">Atividades</router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link to="/questoes">Questões</router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link to="/escolhas">Escolhas</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Usuário</em>
            </template>
            <b-dropdown-item href="#">Perfil</b-dropdown-item>
            <b-dropdown-item @click="sair">Sair</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import store from "./store";
import router from "./router";

export default {
  data() {
    return {
      name: "NavMenu",
      components: {}
    };
  },

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
