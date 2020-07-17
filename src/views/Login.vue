<template>
  <b-container class="bloco_conteudo">
    <div id="form_login" class="form_login">
      <h1 class="text-white animated fadeInDown">
        Fatec
        <span class="text-color2">Quiz</span>
      </h1>
      <p
        class="text-muted animated fadeInUp"
      >Sistema para realização de testes online no modelo de quiz.</p>
      <form id="login-form" @submit.prevent="auth" @reset="onReset" v-if="show">
        <div class="form-group d-flex align-items-end animated fadeInLeft delay-05s">
          <img src="@/assets/img/icons/user.svg" class="icon mr-2" />
          <input
            id="inputUsuario"
            class="input-login form-control"
            v-model="form.email"
            type="text"
            required
            placeholder="Entre com seu usuario"
          />
        </div>
        <div class="form-group d-flex animated fadeInLeft delay-07s">
          <img src="@/assets/img/icons/key.svg" class="icon mr-2" />
          <input
            id="inputSenha"
            class="input-login form-control"
            v-model="form.password"
            type="password"
            required
            placeholder="Entre com a Senha"
          />
        </div>
        <div class="my-4 d-flex justify-content-between align-items-start">
          <router-link
            to="/register"
            class="text-muted text-decoration animated fadeInUp delay-07s"
          >Ainda não sou registrado</router-link>
          <b-button
            type="submit"
            class="btn btn-large btn-color2 animated fadeInDown delay-05s"
            id="btn-login"
          >Login</b-button>
        </div>
      </form>
    </div>

    <img src="@/assets/img/fundo01.svg" alt class="img-fundo animated fadeIn delay-1s" />

    <b-modal id="modal-usuario-cadastrado" size="sm">
      <template v-slot:modal-header="{}">
        <h5 class="text-success">Cadastrado com Sucesso!</h5>
      </template>
      <template>
        <p
          class="text-muted"
        >Obrigado por se cadastrar, você será redirecioanado para a tela de login.</p>
      </template>

      <template v-slot:modal-footer>
        <b-button size="sm" variant="danger">OK</b-button>
      </template>
    </b-modal>

    <b-modal id="modal-erro-login" size="sm">
      <template v-slot:modal-header="{}">
        <h5 class="text-danger">Falha ao realizar o Login</h5>
      </template>
      <template>
        <p class="text-muted">Usuário não está registrado</p>
      </template>

      <template v-slot:modal-footer="{ ok }">
        <b-button size="sm" variant="danger" @click="ok()">OK</b-button>
      </template>
    </b-modal>
  </b-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },

      show: true
    };
  },

  methods: {
    ...mapActions(["login"]),
    async auth() {
      await this.login({ usuario: this.form.email, senha: this.form.password });
    },

    onReset(evt) {
      evt.preventDefault();
      this.form.email = "";
      this.form.password = "";
    }
  }
};
</script>

<style scoped>
</style>