<template>
  <div class="tela animated fadeInLeft">
    <h2>Adicionar Questão ao Exame {{ examTitle }}</h2>
    <hr />
    <b-form>
      <b-form-group label="Título da Pergunta:">
        <b-form-input v-model="form.questionTitle" required placeholder="Digite uma questão"></b-form-input>
      </b-form-group>
      <hr />
      <div>
        <strong>Alternativas</strong>
        <div class="text-muted pb-2">Marque a alternativa verdadeira</div>
        <div
          v-for="(alt, index) in alternativas"
          :key="index"
          class="d-flex align-items-center pb-2 animated fadeInUp"
        >
          <input
            type="radio"
            name="alternativa"
            v-model="form.assertion"
            :value="alt.title"
            class="mr-3"
          />
          <b-form-input v-model="alt.title" required :placeholder="`Alternativa ${index + 1}`"></b-form-input>
          <b-icon-trash
            class="ml-2 text-danger"
            style="cursor: pointer"
            @click="removerAlternativa(index)"
          />
        </div>
        <div class="btn-adicionar-questao" @click="adicionarAlternativa">
          Adicionar Alternativa
          <b-icon-plus-circle />
        </div>
      </div>

      <b-button @click="adicionarQuestao">Adicionar Questão</b-button>
    </b-form>
  </div>
</template>

<script>
import Questions from "@/services/questions";

export default {
  props: ["examTitle"],

  data() {
    return {
      form: {
        questionTitle: "",
        assertion: "",
        exam: {
          examTitle: this.examTitle
        }
      },

      alternativas: [
        {
          title: ""
        }
      ]
    };
  },

  methods: {
    async adicionarQuestao() {
      await Questions.adicionar(this.form)
        .then(() => {
          alert("Alert Questão adicionada com sucesso!");
        })
        .catch(() => {
          alert("ERRO!");
        });
    },

    adicionarAlternativa() {
      this.alternativas.push({
        title: ""
      });
    },

    removerAlternativa(index) {
      console.log("chamou");
      this.alternativas.splice(index, 1);
    }
  }
};
</script>

<style lang="scss">
.btn-adicionar-questao {
  color: green;
  cursor: pointer;
  opacity: 0.5;
  padding-bottom: 25px;
  transition: opacity 0.25s;

  &:hover {
    opacity: 1;
  }
}
</style>