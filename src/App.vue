<template>
  <v-app>
    <NavBar/>
    <v-content fluid>
      <!-- <v-container fluid> -->
        <router-view />
      <!-- </v-container> -->
    </v-content>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  name: "App",
  data: () => ({
    //
  }),
  components: {
    NavBar
  }
};
</script>
