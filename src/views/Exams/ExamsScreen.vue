<template>
  <b-container>
    <NavMenu />
    <transition appear>
      <b-row>
        <b-col md="4"></b-col>
        <b-col md="3" class="img-left">
          <img src="@/assets/img/exam.svg" />
        </b-col>
        <b-col class="text-white py-4 my-4">
          <div v-for="exam in exams" :key="exam.id" class="exam my-3 p-3">
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
            <b-button>Responder</b-button>
          </div>
        </b-col>
      </b-row>
    </transition>
  </b-container>
</template>

<script>
import Exams from "@/services/exams";
import NavMenu from "@/components/NavMenu";

export default {
  name: "ExamsScreen",

  components: {
    NavMenu
  },

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

  border-left: #009688 solid 10px;
  background-color: #222;
}
</style>
