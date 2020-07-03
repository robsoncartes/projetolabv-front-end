<template>
  <div>
    <div>
      <b-button v-b-toggle.sidebar-right class="btn-toggle">
        <b-icon-arrow-left></b-icon-arrow-left>
      </b-button>
      <b-sidebar id="sidebar-right" title="Fatec Quiz" right shadow>
        <div class="px-3 py-2">
          <p
            class="text-muted animated fadeInUp"
          >Projeto de LAB V - Desenvolvimento Java, Spring Boot, Sprint Security, JWT e vuejs.</p>
          <p class="text-muted animated fadeInUp">
            Disciplina: Laboratório de Desenvolvimento de Banco de Dados V
            <br />Professor: Emanuel Mineda Carneiro
          </p>
          <p class="text-muted animated fadeInUp">
            Membros do Grupo:
            <br />
            <a href="https://github.com/robsoncartes">Robson Sousa</a>,
            <a href="https://github.com/rodolfo-santos">Rodolfo Santos</a>
          </p>
          <p class="text-muted animated fadeInUp">FATEC SJC - Professor Jessen Vidal</p>
        </div>

        <p class="px-3 py-2 animated fadeInUp">
          <b-button size="lg" variant="danger" @click="sair">Sair</b-button>
        </p>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import router from "@/router";

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