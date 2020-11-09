<template>
  <v-app>
    <Menu/>
    <v-main>
      
        <v-content>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-main>
  </v-app>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Menu from './components/Menu'

export default {
  name: 'App',

  components: {
    Menu,
  },

  data: () => ({
    //
  }),
};
</script>