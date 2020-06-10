import {
  http
} from './config'

export default {
  registrar: (registro) => {
    return http.post('accounts', registro)
  }
}