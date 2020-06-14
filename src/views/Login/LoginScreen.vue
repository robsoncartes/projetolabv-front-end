<template>
  <b-container class="login-screen">
    <transition appear>
      <b-form @submit.prevent="auth" @reset="onReset" v-if="show" class="login-container">
        <h1 class="mb-4 text-muted">Fatequiz</h1>
        <hr />
        <b-form-group label="Usuário" label-for="inputUsuario" description>
          <b-form-input
            id="inputUsuario"
            v-model="form.email"
            type="text"
            required
            placeholder="Entre com seu usuario"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Senha:" label-for="inputSenha" description>
          <b-form-input
            id="inputSenha"
            v-model="form.password"
            type="password"
            required
            placeholder="Entre com a Senha"
          ></b-form-input>
        </b-form-group>
        <div class="mb-3">
          <router-link to="/register">Ainda não é registrado? Registre-se</router-link>
        </div>

        <div>
          <b-button type="submit" variant="success" class="mr-2">Login</b-button>
          <b-button type="reset" variant="danger">Limpar Campos</b-button>
        </div>
      </b-form>
    </transition>
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
    auth() {
      this.login({ usuario: this.form.email, senha: this.form.password });
    },

    onReset(evt) {
      evt.preventDefault();
      this.form.email = "";
      this.form.password = "";

      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style scoped>
</style>