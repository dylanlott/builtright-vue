<template>
<v-app id="builtright-app" class="elevation-1" name="builtright-app" top-toolbar left-fixed-sidebar>
  <header>
    <v-toolbar class="v-navbar">
      <v-toolbar-side-icon class="hidden-lg-and-up" @click.native.stop="sidebar = !sidebar" />
      <v-toolbar-logo class="logo">
        <img src="./img/logo-horizontal.png" alt="" height="50" class="app-logo">
      </v-toolbar-logo>
    </v-toolbar>
  </header>
  <main>
    <v-sidebar v-model="sidebar" fixed id="sidebar-main" name="sidebarmenu" class="sidebar-main">

      <v-list subheader name="menuList">
        <v-subheader name="menuTitle">Menu</v-subheader>
        <v-list-item name="sidebarMenuList" v-for="item in items" v-bind:key="item.title">
          <router-link class="menu-link" :to="{ name: item.link }">
            <v-list-tile avatar>
              <v-list-tile-avatar name="itemAvatar">
                <v-icon name="itemAvatarIcon">{{ item.avatar }}</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content name="itemContent">
                <v-list-tile-title name="itemTitle" v-html="item.title" />
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
        </v-list-item>
      </v-list>

    </v-sidebar>
    <v-content>
      <v-container fluid>
        <Navbar></Navbar>
        <router-view></router-view>
      </v-container>
    </v-content>
  </main>
</v-app>
</template>

<script>
import {
  mapState
} from 'vuex'
import {
  router
} from './router/index'
import Navbar from './components/Navbar.vue'

export default {
  name: 'builtright',
  computed: mapState({
    user: state => state.user,
    admin: state => state.admin
  }),
  data() {
    return {
      sidebar: false,
      items: [{
          title: 'Dashboard',
          avatar: 'dashboard',
          auth: true,
          link: 'dashboard'
        },
        {
          title: 'Forum',
          avatar: '',
          auth: false,
          link: 'forum'
        },
        {
          title: 'Builds',
          avatar: '',
          auth: true,
          link: 'builds'
        },
        {
          title: 'Login',
          avatar: 'user',
          auth: false,
          link: 'login'
        },
        {
          title: 'Sign Up',
          avatar: '',
          auth: false,
          link: 'signup'
        }
      ]
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logoutUser')
    },
    goToDashboard() {
      if (state.user) {
        router.push('dashboard')
      }
    }
  },
  components: {
    Navbar,

  }
}
</script>

<style lang="stylus">
  @import '../node_modules/vuetify/src/stylus/main'
  @import './css/main.styl'
  @import './css/theme.styl'

  body
    font-size: 16px

  #app
    background-color: blue
    padding-bottom: 60px

  .content
    margin-top: 0px
    background-color: blue

  .sidebar-main
    color: #fff

  .menu-link
    text-decoration: none
    
</style>
