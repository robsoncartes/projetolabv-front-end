import Vue from "vue"
import Router from "vue-router"
import Login from "./views/Login/LoginScreen.vue"
import Register from "./views/Register/RegisterScreen.vue"
import Contas from "./views/Contas/ContasScreen.vue"
import Atividades from "./views/Activities/ActivitiesScreen.vue"
import Exams from "./views/Exams/ExamsScreen.vue"
import Questions from "./views/Questions/QuestionsScreen.vue"
import Choices from "./views/Choices/ChoicesScreen.vue"

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
      component: Exams
    },

    {
      path: "/contas",
      component: Contas
    },

    {
      path: "/atividades",
      component: Atividades
    },

    {
      path: "/questoes",
      component: Questions
    },

    {
      path: "/escolhas",
      component: Choices
    },

  ]
})