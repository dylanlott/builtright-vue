<template>
  <v-app>
    <!-- <header>
      <v-navbar>
        <v-navbar-logo><a href="/dashboard" class="navbar__link">BuiltRight</a></v-navbar-logo>
        <v-navbar-items>
          <v-navbar-item :item="{href: '/login'}" v-if="!user.token">Login</v-navbar-item>
          <v-navbar-item :item="{href: '/signup'}" v-if="!user.token">Sign Up</v-navbar-item>
          <v-navbar-item :item="{href: '/profile'}" v-if="user.token">Profile</v-navbar-item>
          <v-navbar-item v-if="user.token" @click.native="logout">Logout</v-navbar-item>
        </v-navbar-items>
      </v-navbar>
    </header> -->

    <v-toolbar class="toolbar__main orange" @click.native.stop="sidebar = false">
      <v-toolbar-side-icon @click.native.stop="sidebar = !sidebar"/>
      <v-toolbar-title>BuiltRight</v-toolbar-title>
      <v-toolbar-items>
        <!-- <v-btn dark icon>
          <v-icon>list</v-icon>
        </v-btn> -->
        <v-menu bottom origin="top right" transition="v-scale-transition">
          <v-btn dark icon slot="activator">
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-item>
              <v-list-tile>
                <v-list-tile-title
                class="navbar__item">
                  <router-link :to="{ path: 'profile' }" class="navbar__link">
                    Profile
                  </router-link></v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title class="navbar__item" @click.native="logout">
                  <router-link to="logout" class="navbar__link">Log Out</router-link>
                </v-list-tile-title>
              </v-list-tile>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-sidebar class="blue darken-3" drawer v-model="sidebar">
       <v-btn @click.native.stop="sidebar = false">Close Menu</v-btn>
       <v-list dense>
         <v-list-item v-for="item in items">
           <v-list-tile>
             <router-link :to="item.href" class="sidebar__link">
               <v-list-tile-title v-text="item.title" />
             </router-link>
           </v-list-tile>
         </v-list-item>
       </v-list>
     </v-sidebar>

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
import { router } from './router/index'

  export default {
    computed: mapState({
      user: state => state.user,
      admin: state => state.admin
    }),
    data () {
      return {
        sidebar: false,
        items: [
        { title: 'Home', href: '/' },
        { title: 'Builds', href: '/builds' },
        { title: 'Profile', href: '/profile' }
      ]
      }
    },
    methods: {
      logout () {
        this.$store.dispatch('logoutUser')
      },
      goToDashboard () {
        if (state.user) {
          router.push('dashboard')
        }
      }
    },
    mounted () {
    }
  }
</script>

<style lang="stylus">
  @import '../node_modules/vuetify/src/stylus/main'
  @import './css/main.css'
  .toolbar__main
    margin-bottom: 12px
  .navbar__item
    width: 100%
  .navbar__link
    text-decoration: none
    &:hover
      color #eee

  .sidebar__link
    color: #fff
    text-decoration: none
    font-size: 20px
</style>
