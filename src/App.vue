<template>
  <v-app id="builtright-app">
    <div v-for="alert in alerts">
      <v-snackbar :timeout="alert.timeout"
        :success="alert.type === 'success'"
        :info="alert.type === 'info'"
        :warning="alert.type === 'warning'"
        :error="alert.type === 'error'">
        {{ alert.message }}
      </v-snackbar>
    </div>

    <v-navigation-drawer temporary v-model="drawer" light>
      <v-list class="pa-0">
        <v-list-item>
          <v-list-tile avatar tag="div">
            <!-- <v-list-tile-avatar>
              <v-icon>account_circle</v-icon>
            </v-list-tile-avatar> -->
            <v-list-tile-content>
              <v-list-tile-title v-show="user.token">{{ user.email || user.user_id }}</v-list-tile-title>
              <v-list-tile-title v-show="!user.token">
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

        <v-divider
         dark
         class="my-4"
       ></v-divider>

       <router-link v-if="user.token"
          :to="{ name: 'dashboard' }"
          class="menu-link">
         <v-list-item >
           <v-list-tile>
             <v-list-tile-action>
               <v-icon>dashboard</v-icon>
             </v-list-tile-action>
             <v-list-tile-content>
               <v-list-tile-title>Dashboard</v-list-tile-title>
             </v-list-tile-content>
           </v-list-tile>
         </v-list-item>
       </router-link>

        <router-link v-if="user.token"
            :to="{ name: 'builds' }"
            class="menu-link">
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


        <router-link v-if="user.token"
            class="menu-link"
            :to="{ name: 'profile'}">
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

        <v-divider
         dark
         class="my-4"
       ></v-divider>

        <v-list-item v-if="user.token" @click="logout()">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>clear</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>

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
      <BottomNav></BottomNav>
    </main>
  </v-app>
</template>

<script>
import {mapState} from 'vuex'
import {router} from './router/index'
import BottomNav from './components/BottomNav.vue'
export default {
  name: 'builtright',
  computed: mapState({
    user: state => state.user,
    alerts: state => state.user.alerts
  }),
  data() {
    return {
      drawer: null,
      show: false
    }
  },
  components: {
    BottomNav
  },
  methods: {
    goToDashboard () {
      if (user.token) {
        router.push('dashboard')
      }
    },
    logout () {
      this.loggedOut = true
      this.$store.dispatch('logoutUser')
    },
    created () {
      console.log('this.user._id', this.user._id)
    }
  },
  watch: {
    '$route': function () {
      console.log('this.user._id', this.user._id)
      this.$store.dispatch('getUserInfo', this.user._id)
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
