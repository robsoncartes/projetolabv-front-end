<template>
  <!-- <p class="text-white">{{examesConcluidos}}</p> -->
  <b-container>
    <NavMenu />
    <b-row>
      <b-col md="4"></b-col>
      <b-col md="3" class="img-left animated fadeInLeft delay-05s">
        <div>
          <img src="@/assets/img/img_resolvidos.svg" />
        </div>
      </b-col>
      <b-col class="text-white py-4 my-4">
        <div
          v-for="exam in examesConcluidos"
          :key="exam.nome"
          class="exam my-3 p-3 animated fadeInDown delay-05s"
        >
          <h2>{{exam.nome}}</h2>
          <p>
            <strong>Nº de Questões:</strong>
            {{exam.questoes}}
          </p>
          <p>
            <strong>Nº Acertos:</strong>
            {{ exam.acertos }}
          </p>
          <p>
            <strong>Nota Final:</strong>
            {{ exam.nota }}
          </p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import NavMenu from "@/components/NavMenu";

export default {
  name: "Exames",

  components: {
    NavMenu
  },

  computed: {
    ...mapGetters(["examesConcluidos"])
  }
};
</script>

<style>
</style>