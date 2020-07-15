import Vue from "vue"
import Router from "vue-router"
import Login from "./views/Login.vue"
import Register from "./views/Register.vue"
import Exames from "./views/Exames/Exames.vue"
import Exame from "./views/Exames/Exame.vue"
import CardExame from "./views/Exames/CardExame.vue"
import AddExame from "./views/Exames/AddExame.vue"
import CardQuestion from "./views/Exames/CardQuestion.vue"
import Home from "./views/Home.vue"

import addQuestion from "./views/Questions/addQuestion.vue"
import addCardQuestion from "./views/Questions/addCardQuestion.vue"

import Usuarios from "./views/Usuarios/Usuarios.vue"
import Resolvidos from "./views/Resolvidos/Resolvidos.vue"
import UsuariosPage from "./views/Usuarios/UsuariosPage.vue"



Vue.use(Router)

export default new Router({
  mode: "history",
  base: "",
  routes: [{
      path: "/login",
      component: Login
    },

    {
      path: "/register",
      component: Register
    },

    {
      path: "/",
      component: Home
    },

    {
      path: "/exames",
      component: Exames,
    },

    {
      path: "/exame",
      component: Exame,
      props: true,
      children: [{
        name: "id",
        path: ":id",
        component: CardExame,
        props: true,
        children: [{
          name: "id",
          path: ":id",
          component: CardQuestion,
          props: true,
        }]
      }]
    },

    {
      path: "/adicionar_exame",
      component: AddExame
    },

    {
      path: "/add_question",
      component: addQuestion,
      props: true,
      children: [{
        name: "examTitle",
        path: ":examTitle",
        component: addCardQuestion,
        props: true,
      }]
    },

    {
      path: "/usuarios",
      component: Usuarios,
      props: true,
      children: [{
        name: "pagina",
        path: ":pagina",
        component: UsuariosPage,
        props: true
      }]
    },

    {
      name: "resolvidos",
      path: "/resolvidos",
      component: Resolvidos,
    },

  ]
})