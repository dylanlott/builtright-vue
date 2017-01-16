<template>
  <v-app top-navbar>
    <header>
      <v-navbar>
        <v-navbar-logo>BuiltRight</v-navbar-logo>
        <v-navbar-items>
          <v-navbar-item :item="{href: '/login'}" v-if="!user.token">Login</v-navbar-item>
          <v-navbar-item :item="{href: '/signup'}" v-if="!user.token">Sign Up</v-navbar-item>

          <v-navbar-item v-if="user.token" @click.native="logout">Logout</v-navbar-item>
        </v-navbar-items>
      </v-navbar>
    </header>
    <main>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

  export default {
    computed: mapState({
      user: state => state.user,
      admin: state => state.admin
    }),
    data () {
      return {}
    },
    methods: {
      logout () {
        this.$store.dispatch('logoutUser')
      }
    },
    mounted () {
      this.$vuetify.init()
    }
  }
</script>

<style lang="stylus">
  @import '../node_modules/vuetify/src/stylus/main'
  @import './css/main.css'
</style>
