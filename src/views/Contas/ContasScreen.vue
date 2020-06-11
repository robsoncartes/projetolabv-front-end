<template>
  <div>
    <h1>Contas</h1>

    <p>{{ resultado }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Contas from "../../services/contas";

export default {
  name: "contas",
  data() {
    return {
      resultado: ""
    };
  },

  computed: {
    ...mapState(["usuario"])
  },

  methods: {
    listar() {
      Contas.listar()
        .then(res => {
          this.resultado = res;
          console.log(res);
        })
        .catch(error => console.log(error));
    }
  },
  created() {
    this.listar();
  }
};
</script>

<style>
</style>