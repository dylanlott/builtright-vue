<template lang="html">
<v-container flex>
  <div class="post-details">
    <v-card>
    <v-card-row class="grey darken-1">
      <v-card-title>
        <span class="white--text">{{ details.title }}</span>
        <v-spacer></v-spacer>
        <div>
          <v-menu id="post-menu" bottom left origin="top right">
            <v-btn icon="icon" slot="activator" class="white--text">
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-item>
                <v-list-tile>
                  <v-list-tile-title>Report this post</v-list-tile-title>
                </v-list-tile>
              </v-list-item>
              <v-list-item>
                <v-list-tile>
                  <v-list-tile-title>Delete this post</v-list-tile-title>
                </v-list-tile>
              </v-list-item>
              <v-list-item>
                <v-list-tile>
                  <v-list-tile-title>Save this post</v-list-tile-title>
                </v-list-tile>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-card-title>
    </v-card-row>
    <v-card-text>
      <v-card-row>
        <div>
          <div>{{ details.text }}</div>
        </div>
      </v-card-row>
    </v-card-text>
    <!-- <v-card-row actions>
      <v-btn raised @click.native="" class="darken-2">Add Comment</v-btn>
    </v-card-row> -->
    <v-card v-if="details.comments !== []">
      <v-card-text>No comments on this post. :( </v-card-text>
    </v-card>
    <v-card v-for="comment in details.comments">
      <v-card-text class="grey lighten-3">
        {{ comment }}
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-title style="font-size: 16px;">Add to the discussion</v-card-title>
      <v-card-text class="grey lighten-3">
        <v-layout row padded>
           <v-text-field
             name="comment"
             label="Add a comment"
             v-model="comment.text"
             multi-line
           ></v-text-field>
         </v-layout>
         <v-layout>
           <v-btn primary dark @click.native="submitComment(comment)" class="white--text">Submit</v-btn>
         </v-layout>
      </v-card-text>
    </v-card>

  </v-card>
  </div>
</v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      comment: {
        text: ''
      },
    }
  },
  computed: mapState({
    user: state => state.user,
    details: state => state.posts.postDetails
  }),
  created () {
    this.$store.dispatch('getPostDetails', this.$route.params.id)
    this.$store.dispatch('getComments', this.$route.params.id)
    console.log('this.$route.params.id', this.$route.params.id);
  },
  components: {},
  methods: {
    submitComment: function (comment) {
      if (!comment.text) {
        this.$swal('Comment must contain text.')
      }
      const _comment = {
        text: comment.text,
        user: this.user.user_id,
        source: this.$route.params.id
      }
      console.log('_comment: ', _comment)
      this.$store.dispatch('addComment', _comment)
    }
  }
}
</script>

<style lang="stylus">
</style>
