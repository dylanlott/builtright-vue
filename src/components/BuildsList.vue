<template>
  <div>
    <v-progress-linear v-if="builds.loading"
      v-bind:indeterminate="true">
    </v-progress-linear>

    <v-card
      class="build__cards grey darken-3 white--text"
      v-for="build in builds.builds">
        <v-card-row>
          <v-card-title>
            {{build.name}}
          </v-card-title>

        </v-card-row>
        <v-card-row>
          <v-card-text>
            {{build.make}} <br/>
            {{build.model}} <br />
            {{build.year}}
          </br/>
          </v-card-text>
        </v-card-row>
        <v-card-row actions>
          <router-link class="routerlink" :to="{name: 'buildDetails', params: { id: build.id }}">
            <v-btn flat class="white--text">View</v-btn>
          </router-link>
          <v-spacer></v-spacer>
          <v-btn icon dark>
            <v-icon>more</v-icon>
          </v-btn>
        </v-card-row>
      </v-card>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import { router } from '../router/index'

const storage = window.localStorage

export default {
  name: 'buildsList',
  computed: mapState({
    user: state => state.user,
    builds: state => state.builds
  }),
  created () {
    this.$store.dispatch('getBuildsForUser', storage.getItem('user_id'))
    this.$store.dispatch('getUserInfo')
  }
}
</script>

<style lang="stylus">
  .build__cards
    margin: 40px 20px
</style>
