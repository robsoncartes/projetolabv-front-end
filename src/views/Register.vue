<template>
  <transition mode="out-in" appear>
    <b-container class="bloco_conteudo">
      <div id="form_login" class="form_login">
        <h1 class="text-white animated fadeInDown">Registrar</h1>
        <p
          class="text-muted animated fadeInUp"
        >Você precisa de um Registro para poder acessar a aplicação</p>
        <form id="register-form" @submit="onSubmit" @reset="onReset" v-if="show">
          <div class="form-group d-flex align-items-end animated fadeInLeft delay-05s">
            <img src="@/assets/img/icons/user.svg" class="icon mr-2" />
            <input
              class="input-login form-control"
              id="inputUsuario"
              v-model="form.username"
              type="text"
              required
              placeholder="Digite o nome de usuário"
            />
          </div>
          <div class="form-group d-flex align-items-end animated fadeInLeft delay-05s">
            <img src="@/assets/img/icons/user.svg" class="icon mr-2" />
            <input
              class="input-login form-control"
              id="inputEmail"
              v-model="form.email"
              type="text"
              required
              placeholder="Entre com um e-mail válido"
            />
          </div>
          <div class="form-group d-flex animated fadeInLeft delay-07s">
            <img src="@/assets/img/icons/key.svg" class="icon mr-2" />
            <input
              class="input-login form-control"
              id="inputSenha"
              v-model="form.password"
              type="password"
              required
              placeholder="Entre com a Senha"
            />
          </div>
          <div class="my-4 d-flex justify-content-between align-items-start">
            <router-link
              to="/login"
              class="text-muted text-decoration animated fadeInUp delay-07s"
            >Já sou registrado, entrar</router-link>
            <b-button
              type="submit"
              class="btn btn-large btn-color2 animated fadeInDown delay-05s"
              id="btn-login"
            >Registrar</b-button>
          </div>
        </form>
      </div>

      <img src="@/assets/img/img_register.svg" alt class="img-fundo animated fadeIn delay-1s" />

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
          <b-button size="sm" variant="success" @click="redirectLogin()">OK</b-button>
        </template>
      </b-modal>

      <b-modal id="modal-erro-cadastro" size="sm">
        <template v-slot:modal-header="{}">
          <h5 class="text-danger">Falha ao registrar</h5>
        </template>
        <template>
          <p class="text-muted">E-mail já está cadastrado! Tente novamente.</p>
        </template>

        <template v-slot:modal-footer="{ ok }">
          <b-button size="sm" variant="danger" @click="ok()">OK</b-button>
        </template>
      </b-modal>
    </b-container>
  </transition>
</template>

<script>
import Registrar from "@/services/registrar";

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
      Registrar.registrar(this.form)
        .then(() => {
          app.$bvModal.show("modal-usuario-cadastrado");
        })
        .catch(() => {
          app.$bvModal.show("modal-erro-cadastro");
        });
    },

    onReset(evt) {
      evt.preventDefault();
      this.form.email = "";
      this.form.username = "";
      this.form.password = "";
    },

    redirectLogin() {
      this.$router.push("login");
    }
  }
};
</script>

<style lang="stylus" scoped></style>