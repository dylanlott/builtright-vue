<template>
  <div>
    <v-progress-linear v-if="user.user.loading"
      v-bind:indeterminate="true">
    </v-progress-linear>

    <v-container fluid style="margin: 20px 0px">
      <h1>User Profile</h1>
    </v-container>

    <h1 v-if="user.user.loading">LOADING</h1>

    <v-card>
      <v-card-text>
        <!-- <code>{{user}}</code> -->
        <v-list>
          <v-list-item>Username: {{user.user.username}}<b></b></v-list-item>
          <v-list-item>Email: {{user.user.email}}<b></b></v-list-item>
          <v-list-item>Member Since: {{user.user.created_at}}<b></b></v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

  </div>
</template>

<script>
import { mapState } from 'vuex'
const storage = window.localStorage

export default {
  data () {
    return {
      user: {
        username: '',
        email: '',
        builds: [],
        memberSince: '',
        lastActive: ''
      }
    }
  },
  computed: mapState({
    user: state => state.user
  }),
  created () {
    this.$store.dispatch('getUserInfo')
  }
}
</script>
