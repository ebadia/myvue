import Api from '@/services/Api.service'

export default {
  register(credentials) {
    return Api()
      .post('register', credentials)
      .catch(err => {
        console.log(err)
      })
  }
}
