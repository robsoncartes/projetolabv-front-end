<template>
  <b-container>
    <NavMenu />
    <b-row>
      <b-col md="4"></b-col>
      <b-col md="3" class="img-left animated fadeInLeft delay-05s">
        <img src="@/assets/img/exam.svg" />
      </b-col>
      <b-col class="text-white py-4 my-4">
        <div
          v-for="exam in exams"
          :key="exam.id"
          class="exam my-3 p-3 animated fadeInDown delay-05s"
        >
          <h2>{{exam.title}}</h2>
          <p text-muted>{{exam.description}}</p>
          <p>
            <strong>Autor:</strong>
            {{exam.author}}
          </p>
          <p>
            <strong>Nº Questões:</strong>
            {{ exam.questions.length }}
          </p>
          <b-button @click="abrirExame(exam.id)">Responder</b-button>
        </div>
        <div class="text-right add-new-exam animated fadeInUp delay-1s">
          Adicionar novo
          <b-icon-plus-circle></b-icon-plus-circle>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Exams from "@/services/exams";
import NavMenu from "@/components/NavMenu";

export default {
  name: "Exames",

  components: {
    NavMenu
  },

  data() {
    return {
      exams: ""
    };
  },

  methods: {
    abrirExame(id) {
      const caminho = `/exame/${id}`;
      this.$router.push(caminho);
    }
  },

  created() {
    Exams.listar().then(resposta => {
      this.exams = resposta.data;
    });
  }
};
</script>

<style lang="scss">
.img-left {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  position: fixed !important;
  img {
    max-width: 100% !important;
  }
}

.exam {
  display: flex;
  flex-flow: column;
  align-items: ceil($number: 0);

  border-left: #009688 solid 5px;
  background-color: #222;
}

.add-new-exam {
  opacity: 0.7;
  transition: 0.2s;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
}
</style>
