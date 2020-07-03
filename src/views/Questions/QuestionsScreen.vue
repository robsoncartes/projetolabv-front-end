<template>
  <b-container>
    <transition appear>
      <b-row class="mt-4 principal-container">
        <b-col md="12" class="p-2" v-for="questao in questoes" :key="questao.id">
          <div class="test-block p-4">
            <div>
              <h3>{{ questao.question}}</h3>
              <hr />

              <ul>
                <li v-for="resposta in questao.answers" :key="resposta.id">
                  <input type="radio" :name="questao.id" :id="resposta.id" />
                  <label :for="resposta.id">{{ resposta.answer }}</label>
                </li>
              </ul>
            </div>
          </div>
        </b-col>
      </b-row>
    </transition>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
import Questions from "../../services/questions";

export default {
  name: "questions",
  data() {
    return {
      questoes: ""
    };
  },

  computed: {
    ...mapState(["usuario"])
  },

  methods: {
    listar() {
      Questions.listar()
        .then(res => {
          this.questoes = res.data;
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