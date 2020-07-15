<template>
  <b-container>
    <NavMenu />
    <b-row>
      <b-col md="4"></b-col>
      <b-col md="3" class="img-left animated fadeInLeft delay-05s">
        <img src="@/assets/img/img_users.svg" />
      </b-col>
      <b-col class="text-white py-4 my-4 animated fadeInDown">
        <div class="d-flex justify-content-between">
          <ul class="pagination">
            <router-link
              :to="`/usuarios/${pag}`"
              v-for="pag in totalPages"
              :key="pag"
              tag="li"
            >{{pag}}</router-link>
          </ul>
        </div>

        <router-view></router-view>

        <div class="d-flex justify-content-between mt-3">
          <ul class="pagination">
            <router-link
              :to="`/usuarios/${pag}`"
              v-for="pag in totalPages"
              :key="pag"
              tag="li"
            >{{pag}}</router-link>
          </ul>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Contas from "@/services/contas";
import store from "@/store";
import NavMenu from "@/components/NavMenu.vue";

export default {
  name: "Usuarios",
  components: { NavMenu },
  data() {
    return {
      totalPages: null
    };
  },

  methods: {
    buscarDados() {
      Contas.paginacao(1, this.itensPorPagina).then(r => {
        this.totalPages = r.data.totalPages;
      });
    }
  },

  created() {
    this.buscarDados();
  },

  computed: {
    itensPorPagina() {
      return store.state.itensPorPagina;
    }
  }
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;

  li {
    padding: 10px;
    cursor: pointer;

    &:hover:not(.router-link-active) {
      color: #009688;
    }
  }
}
.router-link-active {
  background-color: #009688;
}
</style>