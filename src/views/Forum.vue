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
      <div v-for="item in posts">
        <router-link :to="{ name: 'postDetail', params: { id: item._id }}">
          <div class="post-list">
            <v-list two-line>
              <template>
                <v-list-item>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title v-html="item.title" />
                      <v-list-tile-sub-title v-html="item.text" />
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list-item>
              </template>
            </v-list>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'forum',
  computed: mapState({
    posts: state => state.posts.posts
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
