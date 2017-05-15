<template lang="html">
  <div>
    <div class="secondary__nav">
      Dashboard / Forum
    </div>
    <router-link :to="{ name: 'addPost' }">
      <v-btn name="addPost" raised success floating>
        <v-icon>create</v-icon>
      </v-btn>
    </router-link>
    <div class="posts">
      <div v-if="!posts.data">
        <p style="color: #fff">There are no posts to show here.</p>
      </div>
      <div class="post-list">
        <v-list two-line>
          <template v-for="item in posts.data">
            <v-list-item>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title" />
                  <v-list-tile-sub-title v-html="item.subtitle" />
                </v-list-tile-content>
              </v-list-tile>
            </v-list-item>
          </template>
        </v-list>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'forum',
  computed: mapState({
    posts: state => state.posts
  }),
  created () {
    this.$store.dispatch('getPosts')
  }
}
</script>

<style lang="stylus">
@import '../css/theme.styl'

.forum
  margin: 20px

.posts
  margin: 20px

</style>
