<template lang="html">
  <div>
    <div class="secondary__nav">
      Dashboard / Forum
    </div>

    <div class="posts">
      <div v-if="!posts">
        <p style="color: #fff">There are no posts to show here.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'forum',
  data () {
    return {}
  },
  components: {},
  computed: mapState({
    posts: state => state.posts
  }),
  created () {
    this.$store.dispatch('getPosts')
  }
}
</script>

<style lang="stylus">
.forum
  margin: 20px

.posts
  margin: 20px
</style>
