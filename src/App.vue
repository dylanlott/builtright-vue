<template>
  <v-app id="builtright-app">
    <v-navigation-drawer temporary v-model="drawer" light>
      <v-list class="pa-0">
        <v-list-item>
          <v-list-tile avatar tag="div">
            <v-list-tile-avatar>
              <v-icon>account_circle</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-if="user.token">{{ user.user_id }}</v-list-tile-title>
              <v-list-tile-title v-if="!user.token">
                <router-link class="menu-link" to="login">Login</router-link>
              </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon dark @click.native.stop="drawer = !drawer">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-item>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <router-link :to="{ name: 'builds' }" class="menu-link">
          <v-list-item >
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>build</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Builds</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
        </router-link>

        <router-link class="menu-link" :to="{ name: 'forum' }">
          <v-list-item >
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>list</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Forum</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
        </router-link>


        <router-link class="menu-link" :to="{ name: 'profile'}">
          <v-list-item >
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>account_circle</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Profile</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
        </router-link>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed class="deep-orange">
      <v-toolbar-side-icon light @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link :to="{ name: 'dashboard' }">
          <img src="./img/logo-horizontal.png" alt="" height="35" class="app-logo">
        </router-link>
      </v-toolbar-title>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
import {mapState} from 'vuex'
import {router} from './router/index'

export default {
  name: 'builtright',
  computed: mapState({
    user: state => state.user,
    admin: state => state.admin
  }),
  data() {
    return {
      drawer: null,
      mini: false,
      right: null,
      show: false,
      loggedIn: false,
      sidebar: false,
      authed: [{
          title: 'Dashboard',
          avatar: 'dashboard',
          link: 'dashboard'
        },
        {
          title: 'Forums',
          avatar: 'list',
          link: 'forum'
        },
        {
          title: 'Builds',
          avatar: 'build',
          link: 'builds'
        },
        {
          title: 'User Profile',
          avatar: 'account_box',
          link: 'profile'
        }
      ],
      unauthed: [{
          title: 'Login',
          avatar: 'account_box',
          link: 'login'
        },
        {
          title: 'Sign Up',
          avatar: 'create',
          link: 'signup'
        }
      ]
    }
  },
  methods: {
    goToDashboard() {
      if (state.token) {
        router.push('dashboard')
      }
    },
    logout () {
      this.$store.dispatch('logoutUser')
      this.$swal('You\'ve been logged out!')
    }
  },
  watch: {
    '$route': function () {
      this.$store.dispatch('getUserInfo')
    }
  }
}

</script>

<style lang="stylus">
  @import '../node_modules/vuetify/src/stylus/main'
  @import './css/main.styl'
  @import './css/theme.styl'

  body
    font-size: 16px

  #builtright-app
    padding-bottom: 60px
    color: charcoal

  .content
    margin-top: 0px
    background-color: white

  .sidebar-main
    color: #fff

  .menu-link
    text-decoration: none

  #app-logo
    margin-top: 5px

</style>
