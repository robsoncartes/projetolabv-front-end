import Vue from "vue"
import Router from "vue-router"
import Login from "./views/Login.vue"
import Register from "./views/Register.vue"
import Exames from "./views/Exames/Exames.vue"
import Exame from "./views/Exames/Exame.vue"
import CardExame from "./views/Exames/CardExame.vue"
import CardQuestion from "./views/Exames/CardQuestion.vue"
import Home from "./views/Home.vue"


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
  ]
})