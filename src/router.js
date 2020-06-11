import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home/HomeScreen.vue"
import Login from "./views/Login/LoginScreen.vue"
import Register from "./views/Register/RegisterScreen.vue"
import Contas from "./views/Contas/ContasScreen.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  base: "",
  routes: [{
      path: "/",
      component: Home
    },

    {
      path: "/login",
      component: Login
    },

    {
      path: "/register",
      component: Register
    },


    {
      path: "/contas",
      component: Contas
    }
  ]
})