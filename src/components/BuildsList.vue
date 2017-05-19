<template>
  <div>

    <h1>Your Builds</h1>
    <v-progress-linear v-if="loading"
      v-bind:indeterminate="true">
    </v-progress-linear>

    <code>{{ builds }}</code>
    <v-card
      class="build__cards grey darken-3 white--text"
      v-for="build in builds">
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
    builds: state => state.builds.builds.data,
    success: state => state.builds.success,
    loading: state => state.builds.loading
  }),
  created () {
    console.log('this.user', this.user.user_id)
    this.$store.dispatch('getBuildsByUser', this.user.user_id, 0, 50)
  }
}
</script>

<style lang="stylus">
  .build__cards
    margin: 40px 20px
</style>
