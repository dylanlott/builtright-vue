<template>
  <div>
    <v-progress-linear v-if="builds.loading"
      v-bind:indeterminate="true">
    </v-progress-linear>

    <div v-for="build in builds.builds">
      <v-card>
        <v-card-text>
          <div>{{ build.title }}</div>
        </v-card-text>
      </v-card>

      <v-card class="blue darken-1 white--text">
        <v-card-text>
          <div>{{ card_text }}</div>
        </v-card-text>
      </v-card>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
const storage = window.localStorage

export default {
  created () {
    this.$store.dispatch('getBuildsForUser', storage.getItem('user_id'))
    this.$store.dispatch('getUserInfo')
  },
  computed: mapState({
    user: state => state.user,
    builds: state => state.builds
  })
}
</script>

<style lang="stylus">

</style>
