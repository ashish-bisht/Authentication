<template>
  <div>
    <template v-if="!isLoading">
      <v-card
        class="mx-auto"
        max-width="344"
        v-for="user in users"
        :key="user.id"
      >
        <v-card-text>
          <div>User {{ user.id }}</div>

          <div class="text--primary">email {{ user.email }}</div>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="deep-purple accent-4">
            Will add details
          </v-btn>
        </v-card-actions>
        <br />
      </v-card>
      <v-divider></v-divider>
    </template>
    <template v-else>
      <v-card class="mx-auto" max-width="344">
        <v-card-text>
          <h1>Loading</h1>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="deep-purple accent-4">
            Please wait
          </v-btn>
        </v-card-actions>
        <br />
      </v-card>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      isLoading: true,
      users: []
    }
  },
  created () {
    axios
      .get('http://127.0.0.1:8000/api/users/')
      .then(response => {
        console.log(response.data)
        this.users = response.data
        this.isLoading = false
      })
      .catch(er => {
        console.log(er)
      })
  },
  methods: {}
}
</script>
