import {
  http
} from './config'

export default {
  listar: () => {
    return http.get('accounts')
  },

  paginacao: (pagina, itens) => {
    return http.get(`accounts/page?page=${pagina}&linesPerPage=${itens}&orderBy=username&direction=ASC`)
  }
}