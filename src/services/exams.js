import {
  http
} from './config'

export default {
  listar: () => {
    return http.get('exams')
  },

  unico: (id) => {
    return http.get(`exams/${id}`)
  },

  adicionar: (exame) => {
    return http.post(`exams`, exame)
  }
}