<template>
  <b-container class="login-screen">
    <transition appear>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="login-container">
        <h1 class="mb-4 text-muted">Registrar-se</h1>
        <hr />
        <b-form-group label="Nome de Usuário" label-for="inputUsuario" description>
          <b-form-input
            id="inputUsuario"
            v-model="form.username"
            type="text"
            required
            placeholder="Digite o nome de usuário"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="E-mail" label-for="inputEmail" description>
          <b-form-input
            id="inputEmail"
            v-model="form.email"
            type="text"
            required
            placeholder="Entre com um e-mail válido"
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
          <router-link to="/login">Já sou registrado. Entrar</router-link>
        </div>
        <div>
          <b-button type="submit" variant="success" class="mr-2">Registrar</b-button>
          <b-button type="reset" variant="danger">Limpar Campos</b-button>
        </div>
      </b-form>
    </transition>
  </b-container>
</template>

<script>
import Registrar from "../../../services/registrar";

export default {
  data() {
    return {
      form: {
        email: "",
        username: "",
        password: ""
      },

      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      let app = this;
      evt.preventDefault();
      Registrar.registrar(this.form).then(resposta => {
        alert("Usuário registrado com sucesso!");
        console.log(resposta);
        app.$router.push("login");
      });
    },

    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.username = "";
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

<style src="./RegisterScreen.scss" lang="scss">