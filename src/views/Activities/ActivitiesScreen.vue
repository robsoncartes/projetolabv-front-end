<template>
  <b-container>
    <transition appear>
      <b-row class="mt-4 principal-container">
        <b-col md="4" class="p-2" v-for="atividade in atividades" :key="atividade.id">
          <div class="test-block p-4">
            <div>
              <h3>{{atividade.examTitle}}</h3>
              <p>
                <strong>Username:</strong>
                {{atividade.username}}
              </p>
              <p>
                <strong>ID:</strong>
                {{atividade.id}}
              </p>
              <hr />
            </div>
          </div>
        </b-col>
      </b-row>
    </transition>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
import Atividades from "../../services/activities";

export default {
  name: "contas",
  data() {
    return {
      atividades: ""
    };
  },

  computed: {
    ...mapState(["usuario"])
  },

  methods: {
    listar() {
      Atividades.listar()
        .then(res => {
          this.atividades = res.data;
        })
        .catch(error => console.log(error));
    }
  },
  created() {
    this.listar();
  }
};
</script>

<style>
</style>