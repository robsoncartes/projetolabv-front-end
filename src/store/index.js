import Vue from "vue";
import Vuex from "vuex";
import Logar from "@/services/login";
import router from '@/router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    usuario: null,
    itensPorPagina: 2,
  },
  mutations: {
    setUsuario(state, usuario) {
      state.usuario = usuario;
    },
    setToken(state, token) {
      state.token = token;
    },
    setItensPorPagina(state, numero) {
      state.itensPorPagina = numero;
    },
    logout(state) {
      state.token = null;
      state.usuario = null;
    }
  },
  actions: {
    login(context, {
      usuario,
      senha
    }) {
      Logar.login({
          email: usuario,
          password: senha
        })
        .then(res => {
          context.commit('setUsuario', usuario);
          context.commit('setToken', res.headers.authorization);
          router.push('/exames');
        })
        .catch(error => {
          console.log(error)
        });
    }
  },
  modules: {}
});