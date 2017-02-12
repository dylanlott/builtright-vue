<template>
  <div>
    <div class="secondary__nav">
      Dashboard / Builds
    </div>
    <v-content>

      <router-link class="routerlink" to="/builds/create">
        <v-btn router><v-icon>add</v-icon> Add A Build</v-btn>
      </router-link>
      <BuildsList></BuildsList>
    </v-content>

  </div>
</template>

<script>
import BuildsList from '../components/BuildsList.vue'

export default {
  data () {
    return {}
  },
  created () {
    return console.log('Builds loaded.')
  },
  components: { BuildsList }
}
</script>

<style media="screen" lang="stylus">
  .secondary__nav
    margin-bottom: 20px

  .routerlink
    text-decoration: none
</style>
