<template>
  <div>
    <div class="secondary__nav">
      User Profile
    </div>
    <div>
      <v-card>
        <v-card-title>

        </v-card-title>
        <v-card-text>
          <!-- <v-icon x-large class="grey--text text--darken-2">settings</v-icon> -->
          <v-list>
            <v-list-item>Username: {{user.user.username}}<b></b></v-list-item>
            <v-list-item>Email: {{user.user.email}}<b></b></v-list-item>
            <v-list-item>Member Since: {{user.user.created_at}}<b></b></v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'userProfile',
  computed: mapState({
    user: state => state.user
  }),
  created () {
    this.$store.dispatch('getUserInfo')
  }
}
</script>

<style lang="stylus">
.header
  color: charcoal

</style>
