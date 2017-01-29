<template>
  <div>
    <div class="secondary__nav">
      Dashboard / Builds
    </div>
    <v-content>
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
</style>
