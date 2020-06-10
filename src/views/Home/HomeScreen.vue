<template>
  <div>
    <nav-menu></nav-menu>
    <b-container>
      <b-row class="mt-4 exams-container">
        <b-col md="4" class="p-2" v-for="exam in exams" :key="exam.id">
          <div class="test-block p-4">
            <div>
              <h3>{{exam.title}}</h3>
              <p>{{exam.description}}</p>
              <hr />
            </div>
            <div class="text-muted">
              <p>
                <strong>Autor:</strong>
                {{exam.author}}
              </p>
              <p>
                <strong>Nº Questões:</strong>
                {{ exam.questions.length }}
              </p>
              <b-button>Responder</b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavMenu from "../../components/NavMenu.vue";
import Exams from "../../services/exams";

export default {
  name: "HomeScreen",

  components: {
    NavMenu
  },

  data() {
    return {
      exams: ""
    };
  },

  methods: {},

  mounted() {
    Exams.listar().then(resposta => {
      this.exams = resposta.data;
      console.log(this.exams);
    });
  }
};
</script>

<style src="./HomeScreen.scss" lang="scss">
