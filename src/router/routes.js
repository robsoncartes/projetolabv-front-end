import {
  routes as login
} from '../modules/auth/Login'

import {
  routes as register
} from '../modules/auth/Register'

import {
  routes as home
} from '../views/Home'


export default [
  ...login,
  ...register,
  ...home
]