<template>
  <v-app>
    <v-toolbar class="toolbar__main" @click.native.stop="sidebar = false">
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
      <v-sidebar class="sidebar" drawer v-model="sidebar">
       <div class="sidebar__close" @click.native.stop="sidebar = false">
         <v-icon @click.native="sidebar = false" class="sidebar__icon">close</v-icon>
       </div>

       <div class="sidebar__img"></div>

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
    <v-footer class="footer">
      <span>Copyright 2017 Hivemind Print and Design</span>
      <span>Reddit</span>
      <span>Facebook</span>
      <span>Report a Bug</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import { router } from './router/index'

export default {
  name: 'builtright',
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
  }
}
</script>

<style lang="stylus">
  @import '../node_modules/vuetify/src/stylus/main'
  @import './css/main.css'
  @import './css/theme.styl'

  #app
    background-color: blue

  .content
    margin-top: 0px

  .toolbar__main
    margin-bottom: 12px
    background-color: orange
  .navbar__item
    width: 100%
    font-size: 26px

  .navbar__link
    text-decoration: none
    color: blue
    font-size: 16px
    &:hover
      color: darker-gray

  .sidebar
    background-color: blue

  .sidebar__link
    color: #fff
    text-decoration: none
    font-size: 26px

  .sidebar__img
    height: 100px
    width: auto

  .sidebar__close
    float: right
    height: 30px
    width: 30px
    text-align: center
    padding-top: 3px
    border-radius: 20px
    background-color: lighten(blue, 10)
    &:hover
      background-color: lighten(blue, 2)
      cursor: pointer

  .sidebar__icon
    color: gray

  .footer
    background-color: darken(blue, 7.5)
    color: darken(gray, 20)

</style>
