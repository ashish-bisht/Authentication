<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      app
      absolute
      color="#fcb69f"
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      scroll-target="#scrolling-techniques-2"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title class="text-center">
        Ashish Bisht Full Stack Developer</v-toolbar-title
      >
      <p>Welcome {{ username() }}</p>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon color="black darken-2">mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon to="/" color="black darken-2 ">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn icon to="/login" color="black darken-2">
        <v-icon class="dark">mdi-account</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon @click="toggleTheme" color="black darken-2"
          >mdi-invert-colors</v-icon
        >
      </v-btn>

      <v-btn icon to="/users" color="black darken-2 ">
        <v-icon>mdi-account-group</v-icon>
      </v-btn>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-2"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 120px;"></v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  computed: {
    username1 () {
      return this.$store.getters.user
    }
  },
  methods: {
    toggleTheme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
    username () {
      return this.$store.getters.user
    }
  }
}
</script>
