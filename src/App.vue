<template>
<v-app id="builtright-app" class="elevation-1" name="builtright-app" top-toolbar left-fixed-sidebar>
  <header>
    <v-toolbar>
      <v-toolbar-side-icon class="hidden-lg-and-up" @click.native.stop="sidebar = !sidebar" />
      <v-toolbar-logo class="logo">
        <img src="./img/logo-horizontal.png" alt="" height="50" class="app-logo">
      </v-toolbar-logo>
    </v-toolbar>
  </header>
  <main>
    <v-sidebar v-model="sidebar" fixed id="sidebar-main" name="sidebarmenu" class="sidebar-main">
      <v-list subheader name="menuList">
        <v-subheader>
          <img src="./img/logo-horizontal.png" alt="builtright logo" height="25">
        </v-subheader>

        <v-list-item v-if="user.token" name="sidebarMenuList" v-for="item in authed" v-bind:key="item.title">
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

        <v-list-item v-if="user.token" :click="logout()">
          <v-list-tile avatar>
            <v-list-tile-avatar name="itemAvatar">
              <v-icon name="itemAvatarIcon">clear</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content name="itemContent">
              <v-list-tile-title name="itemTitle">Logout</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
        <v-list-item v-if="user.token">
          <router-link :to="{ name: 'profile' }">
            <v-list-tile avatar>
              <v-list-tile-avatar name="itemAvatar">
                <v-icon name="itemAvatarIcon">clear</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content name="itemContent">
                <v-list-tile-title name="itemTitle">User Profile</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
        </v-list-item>

        <v-list-item v-if="!user.token">
          <router-link class="menu-link" :to="{ name: 'forum' }">
            <v-list-tile avatar>
              <v-list-tile-avatar name="itemAvatar">
                <v-icon name="itemAvatarIcon">list</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content name="itemContent">
                <v-list-tile-title name="itemTitle">Forums</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
        </v-list-item>

        <v-divider class="white"></v-divider>
        <v-list-item v-if="!user.token">

          <router-link class="menu-link" :to="{ name: 'login' }">
            <v-list-tile avatar>
              <v-list-tile-avatar name="itemAvatar">
                <v-icon name="itemAvatarIcon">account_circle</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content name="itemContent">
                <v-list-tile-title name="itemTitle">Login</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
        </v-list-item>

        <v-list-item v-if="!user.token">
          <router-link class="menu-link" :to="{ name: 'signup' }">
            <v-list-tile avatar>
              <v-list-tile-avatar name="itemAvatar">
                <v-icon name="itemAvatarIcon">create</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content name="itemContent">
                <v-list-tile-title name="itemTitle">Sign Up</v-list-tile-title>
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

export default {
  name: 'builtright',
  computed: mapState({
    user: state => state.user,
    admin: state => state.admin
  }),
  data() {
    return {
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
          title: 'Settings',
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
    logout() {
      console.log('logout fired')
      this.$store.dispatch('logoutUser')
    },
    goToDashboard() {
      if (state.user) {
        router.push('dashboard')
      }
    }
  },
  components: {}
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
