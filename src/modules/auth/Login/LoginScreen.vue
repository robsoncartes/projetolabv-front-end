<template>
  <b-container class="login-screen">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="login-container">
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
      <div>
        <b-button type="submit" variant="success" class="mr-2">Login</b-button>
        <b-button type="reset" variant="danger">Limpar Campos</b-button>
      </div>
    </b-form>
  </b-container>
</template>

<script>
import Login from "../../../services/login";

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
    onSubmit(evt) {
      evt.preventDefault();
      Login.logar(this.form).then(resposta => {
        console.log(resposta);
        alert("Login efetuado com sucesso!");
      });
    },

    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
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

<style src="./LoginScreen.scss" lang="scss">