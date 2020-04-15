<template>
  <v-app>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">Register</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Email Id"
            v-model="email"
            prepend-icon="mdi-account-circle"
          />
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            v-model="password1"
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            v-model="password2"
            label="Re Enter Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn @click.prevent="register" color="success">Register</v-btn>
        <v-spacer></v-spacer>
        <v-btn :to="{ name: 'login' }" color="info">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      showPassword: false,
      email: '',
      password1: '',
      password2: ''
    }
  },
  methods: {
    register () {
      console.log('calling')
      const credentials = {
        email: this.email,
        password1: this.password1,
        password2: this.password2
      }
      axios
        .post('http://127.0.0.1:8000/api/signup/', credentials)
        .then(data => {
          console.log(data)
          this.$router.push({ name: 'login' })
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
