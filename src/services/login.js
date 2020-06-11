import {
  http
} from './config'

export default {
  login: (dados) => {
    return http.post('login', dados)
  }
}