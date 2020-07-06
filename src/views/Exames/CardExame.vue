<template>
  <div class="tela animated fadeInLeft">
    <div class="row justify-content-between m-auto">
      <h2>{{ exame.examTitle }}</h2>
      <router-link to="/exames">
        <b-icon-arrow-left></b-icon-arrow-left>Voltar para Exames
      </router-link>
    </div>
    <p class="text-muted">{{ exame.description }}</p>
    <div>
      <b-card no-body>
        <b-tabs card>
          <b-tab
            :title="`Questão ${index + 1}`"
            v-for="(question, index) in exame.questions"
            :key="index"
          >
            <b-card-text>
              <h5>{{question.questionTitle}}</h5>

              <p v-for="(resposta, index2) in question.answers" :key="index2">
                <input
                  type="radio"
                  :name="`questao${question.id}`"
                  :value="resposta.answer"
                  v-model="respostasTeste[index]"
                />
                {{resposta.answer}}
              </p>
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
    <b-button variant="success" @click="gerarResultado">Finalizar e Enviar Respostas</b-button>
  </div>
</template>

<script>
import Exams from "@/services/exams";

export default {
  props: ["id"],

  data() {
    return {
      exams: "",
      exame: "",
      respostasTeste: [],
      respostasCertas: [],
      acertos: 0,
      media: 0
    };
  },

  methods: {
    async buscaTeste() {
      const app = this;

      await Exams.unico(app.id).then(resposta => {
        this.exame = resposta.data;
      });

      // const result = app.exams.find(item => item.id == app.id);
      // this.exame = result;
      this.exame.questions.forEach(questao => {
        this.respostasCertas.push(questao.assertion);
      });
    },

    gerarResultado() {
      const app = this;
      app.acertos = 0;
      app.respostasTeste.forEach((r, index) => {
        if (r == app.respostasCertas[index]) {
          app.acertos++;
        }
      });
      app.media = app.acertos / app.respostasCertas.length;
      alert(`Você acertou: ${app.acertos}, Média: ${app.media * 100}%`);
    }
  },

  created() {
    this.buscaTeste();
  },

  watch: {}
};
</script>

<style lang="scss">
.tela {
  background-color: #fff;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
}
</style>