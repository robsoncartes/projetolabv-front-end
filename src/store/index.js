import Vue from "vue";
import Vuex from "vuex";
import Logar from "@/services/login";
import router from '@/router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    usuario: null,
    nivel: null,
    itensPorPagina: 5,
    examesResolvidos: [],
    respostas: [{
      questao: 1,
      alternativas: [{
          "id": 1,
          "answer": "ADD"
        },
        {
          "id": 2,
          "answer": "CREATE"
        }
      ]
    }]
  },
  mutations: {
    setUsuario(state, usuario) {
      state.usuario = usuario;
    },
    setToken(state, token) {
      state.token = token;
    },
    setNivel(state, nivel) {
      if (nivel.includes('ADMINISTRATOR')) {
        state.nivel = 'ADMIN'
      } else {
        state.nivel = 'USER'
      }
    },
    setItensPorPagina(state, numero) {
      state.itensPorPagina = numero;
    },
    logout(state) {
      state.token = null;
      state.usuario = null;
    },
    adicionarResultado(state, teste) {
      state.examesResolvidos.push(teste)
    },
  },

  getters: {
    examesConcluidos: state => state.examesResolvidos.filter(exame => exame.usuario === state.usuario)
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
          context.commit('setNivel', res.headers.auths);
          router.push('/exames');
        })
        .catch(() => {});
    }
  },
  modules: {}
});