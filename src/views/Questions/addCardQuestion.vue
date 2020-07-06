<template>
  <div class="text-white">
    <h2>Adicionando nova Questão</h2>
    <p>{{ examTitle }}</p>
    <b-form>
      <b-form-group label="Título da Pergunta:">
        <b-form-input v-model="form.questionTitle" required placeholder="Título da pergunta"></b-form-input>
      </b-form-group>

      <b-form-group label="Reposta Certa:">
        <b-form-input v-model="form.assertion" required placeholder="Reposta Certa"></b-form-input>
      </b-form-group>

      <b-form-group label="Exame:">
        <b-form-input v-model="form.exam.examTitle" required placeholder="Exame Título" disabled></b-form-input>
      </b-form-group>

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
      }
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
    }
  }
};
</script>

<style>
</style>