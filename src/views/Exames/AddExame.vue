<template>
  <b-container>
    <NavMenu />
    <div class="text-white">
      <h2>Adicionando novo Exame</h2>
      <b-form>
        <b-form-group label="Título:">
          <b-form-input v-model="form.examTitle" required placeholder="Título do Exame"></b-form-input>
        </b-form-group>

        <b-form-group label="Tipo:">
          <b-form-input v-model="form.type" required placeholder="Tipo do Exame"></b-form-input>
        </b-form-group>

        <b-form-group label="Descrição:">
          <b-form-textarea v-model="form.description" required placeholder="Descrição"></b-form-textarea>
        </b-form-group>

        <b-form-group label="Autor:">
          <b-form-input v-model="form.author" required placeholder="Autor" disabled></b-form-input>
        </b-form-group>
      </b-form>
      <b-button @click="adicionarExame()">Adicionar Questões</b-button>
    </div>
  </b-container>
</template>

<script>
import Exams from "@/services/exams";
import NavMenu from "@/components/NavMenu";

export default {
  components: {
    NavMenu
  },

  data() {
    return {
      tituloExame: "",
      form: {
        examTitle: "",
        type: "",
        description: "",
        author: "admin1"
      }
    };
  },

  methods: {
    async adicionarExame() {
      const app = this;
      await Exams.adicionar(app.form)
        .then(() => {
          app.$router.push(`add_question/${app.form.examTitle}`);
        })
        .catch(() => {
          alert("Apenas usuários Administradores podem criar novos exames!");
        });
    }
  }
};
</script>

<style>
</style>