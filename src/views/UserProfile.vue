<template>
  <div>
    <div class="secondary__nav">
      User Profile
    </div>
    <v-progress-linear v-if="user.user.loading"
      v-bind:indeterminate="true">
    </v-progress-linear>

      <v-icon x-large class="grey--text text--darken-2">settings</v-icon>

      <p>


      </p>
      <p>


      </p>
      <v-card>
        <v-card-text>
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
  name: 'userProfile',
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

<style lang="stylus">
</style>
