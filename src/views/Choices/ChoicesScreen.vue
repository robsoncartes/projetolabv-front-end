<template>
  <b-container>
    <transition appear>
      <b-row class="mt-4 principal-container">
        <b-col md="12" class="p-2" v-for="escolha in escolhas" :key="escolha.id">
          <div class="test-block p-4">
            <div>
              <h3>Resposta: {{ escolha.answer}}</h3>
              <h3>Questão: {{ escolha.questionTitle}}</h3>
              <hr />
            </div>
          </div>
        </b-col>
      </b-row>
    </transition>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
import Choices from "../../services/choices";

export default {
  name: "Choices",
  data() {
    return {
      escolhas: ""
    };
  },

  computed: {
    ...mapState(["usuario"])
  },

  methods: {
    listar() {
      Choices.listar()
        .then(res => {
          this.escolhas = res.data;
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