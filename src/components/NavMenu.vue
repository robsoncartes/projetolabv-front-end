<template>
  <div class="animated">
    <b-button v-b-toggle.sidebar-right class="btn-toggle">
      <b-icon-arrow-left></b-icon-arrow-left>
    </b-button>
    <b-sidebar id="sidebar-right" title="Fatec Quiz" right shadow>
      <div class="px-3 py-2">
        <p>
          <strong>{{ usuario }}</strong>
          <br />
          <span class="text-muted">{{ nivel }}</span>
        </p>
        <hr />
        <p class="animated fadeInUp">
          <b-button size="md w-100 mb-2" variant="primary" to="/exames">Exames</b-button>
          <template v-if="nivel == 'ADMIN'">
            <b-button size="md w-100 mb-2" variant="primary" to="/usuarios/1">Usuários</b-button>
          </template>
          <b-button size="md w-100 mb-2" variant="primary" to="/resolvidos">Exames Resolvidos</b-button>
          <b-button size="md w-100 mb-2" variant="danger" @click="sair">Sair</b-button>
        </p>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "@/store";
import router from "@/router";

export default {
  data() {
    return {};
  },

  methods: {
    sair() {
      store.commit("logout");
      router.push("/login");
    }
  },

  computed: {
    ...mapState(["usuario", "nivel"])
  }
};
</script>

<style lang="scss">
.btn-toggle {
  position: fixed;
  right: 0;
  top: 0;

  height: 100vh;
  background-color: #009688 !important;

  &:hover {
    background: darken(#009688, 5%) !important;
  }
}
</style>