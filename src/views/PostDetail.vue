<template lang="html">
  <div>
    {{ postDetails }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
  },
  computed: mapState({
    postDetails: state => state.postDetails
  }),
  created () {
    this.$store.dispatch('getPostDetails', this.$route.params.id)
    console.log('this.postDetails', this.postDetails)
  },
  components: {},
  methods: {}
}
</script>

<style lang="stylus">

</style>
