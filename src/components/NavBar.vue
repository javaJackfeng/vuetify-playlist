<template>
  <nav>
    <v-app-bar app flat>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>TODO</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" :color="color" app dark>
      <v-list nav>
        <v-avatar size="112" class="d-flex mt-12 mx-auto">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <p style="text-align:center; margin-top:5px">FENG PHIL</p>
        <v-btn color="#48d2c3" class="d-flex mx-auto my-6">
           ADD NEW PROJECTS
        </v-btn>
        <v-divider></v-divider>

        <v-list-item v-for="item in items" :key="item.title" router :to="lowerCaseRoute(item.title)">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "MyProjects", icon: "mdi-folder-open" },
        { title: "Teams", icon: "mdi-account" }
      ],
      color: "primary"
    };
  },
  methods: {
    lowerCaseRoute(val){
      return val.toString().toLowerCase();
    }
  },
};
</script>

<style>
</style>
