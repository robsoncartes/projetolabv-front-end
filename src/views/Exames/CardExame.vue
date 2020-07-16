<template>
  <div class="tela-main">
    <div class="tela animated fadeInLeft" v-if="exame">
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
    <div v-else class="animated fadeIn">
      <b-icon icon="circle-fill" animation="throb" font-scale="4"></b-icon>
    </div>

    <b-modal id="modal-respondido" size="sm">
      <template v-slot:modal-header="{}">
        <h5 class="text-success">Suas respostas foram computadas.</h5>
      </template>
      <template>
        <p class="text-muted">Você acertou: {{ resultado.acertos }}, Média: {{ resultado.nota }}</p>
      </template>

      <template v-slot:modal-footer>
        <b-button size="sm" variant="success" to="/resolvidos">OK</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import Exams from "@/services/exams";
import { mapMutations } from "vuex";
import { mapState } from "vuex";

export default {
  props: ["id"],

  data() {
    return {
      exams: "",
      exame: "",
      respostasTeste: [],
      respostasCertas: [],
      acertos: 0,
      media: 0,
      resultado: {
        nome: "",
        questoes: 0,
        acertos: 0,
        nota: "",
        usuario: ""
      }
    };
  },

  methods: {
    ...mapMutations(["adicionarResultado"]),

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
      app.resultado.nome = app.exame.examTitle;
      app.resultado.questoes = app.respostasCertas.length;

      app.resultado.acertos = 0;
      app.respostasTeste.forEach((r, index) => {
        if (r == app.respostasCertas[index]) {
          app.resultado.acertos++;
        }
      });
      app.resultado.nota = `${(app.resultado.acertos / app.resultado.questoes) *
        100}%`;
      this.$bvModal.show("modal-respondido");
      app.adicionarResultado(app.resultado);
    }
  },

  created() {
    this.resultado.usuario = this.usuario;
    console.log(this.respostasCertas);
    this.buscaTeste();
  },

  computed: {
    ...mapState(["usuario"])
  }
};
</script>

<style lang="scss">
.tela {
  background-color: #fff;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
}

.tela-main {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>