<template>
  <v-app>
    <Navbar></Navbar>
    <div class="container-app">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import { router } from './router/index'
import Navbar from './components/Navbar.vue'

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
      { title: 'Profile', href: '/profile' },
      { title: 'Forum', href: '/forum' }
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
  components: {
    Navbar
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
    position: absolute
    bottom: 0
    left: 0
    width: 100%

  .container-app
    width: 85%
    margin: 0 auto
</style>
