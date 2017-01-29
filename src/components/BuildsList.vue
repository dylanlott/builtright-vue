<template>
  <div class="">
    <h3>My Builds</h3>

    <code>{{builds}}</code>

  </div>
</template>
<script>
import { mapState } from 'vuex'
const storage = window.localStorage

export default {
  created () {
    this.$store.dispatch('getBuildsForUser', storage.getItem('user_id'))
  },
  computed: mapState({
    user: state => state.user,
    builds: state => state.builds
  })
}
</script>
<style lang="stylus">

</style>
