<template>
  <div>
    <h1>Register</h1>
    <div>
      <input type="email" name="email" placeholder="email" v-model="email">
      <br>
      <input type="password" name="password" placeholder="password" v-model="password">
      <br>
      <button @click="register">Register</button>
    </div>
  </div>
</template>

<script>
import Authentication from '@/services/Authentication.service'

export default {
  data() {
    return {
      email: 'a@a.com',
      password: '12345'
    }
  },
  methods: {
    async register() {
      const response = await Authentication.register({
        email: this.email,
        password: this.password
      })
      console.log('Result', response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
