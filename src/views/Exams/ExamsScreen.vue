<template>
  <b-container>
    <transition appear>
      <b-row class="mt-4 principal-container">
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
    </transition>
  </b-container>
</template>

<script>
import Exams from "../../services/exams";

export default {
  name: "ExamsScreen",

  components: {},

  data() {
    return {
      exams: ""
    };
  },

  created() {
    Exams.listar().then(resposta => {
      this.exams = resposta.data;
    });
  }
};
</script>

<style>
</style>
