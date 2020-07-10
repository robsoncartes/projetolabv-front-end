<template>
  <div class="text-white">
    <div v-for="user in dados" :key="user.id" :class="`exam my-3 p-3 animated fadeIn`">
      <h3 class="text-upper">{{ user.username }}</h3>
      <p class="text-muted">{{ user.email }}</p>
      <div>
        <span v-for="auth in user.authorityNames" :key="auth" class="pr-2">{{auth}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Contas from "@/services/contas";
import store from "@/store";

export default {
  name: "UsuariosPage",
  props: ["pagina"],
  data() {
    return {
      dados: null
    };
  },

  methods: {
    buscarDados() {
      Contas.listar().then(r => {
        this.dados = r.data;
      });
    },

    buscarDadosPagina(pagina) {
      Contas.paginacao(pagina - 1, this.itensPorPagina).then(r => {
        this.dados = r.data.content;
      });
    }
  },

  created() {
    this.buscarDadosPagina(this.pagina);
  },

  beforeRouteUpdate(to, from, next) {
    this.buscarDadosPagina(to.params.pagina);
    next();
  },

  computed: {
    itensPorPagina() {
      return store.state.itensPorPagina;
    }
  }
};
</script>

<style>
</style>