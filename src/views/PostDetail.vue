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
                  <v-list-tile-title>Never show rewards</v-list-tile-title>
                </v-list-tile>
              </v-list-item>
              <v-list-item>
                <v-list-tile>
                  <v-list-tile-title>Remove Card</v-list-tile-title>
                </v-list-tile>
              </v-list-item>
              <v-list-item>
                <v-list-tile>
                  <v-list-tile-title>Send Feedback</v-list-tile-title>
                </v-list-tile>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-card-title>
    </v-card-row>
    <v-card-text>
      <v-card-row>
      </v-card-row>

      <v-card-row>
        <div>
          <div>{{ details.text }}</div>
        </div>
      </v-card-row>

    </v-card-text>
    <v-card-row actions>
      <v-btn flat @click.native="" class="blue--text darken-1">Add Comment</v-btn>
    </v-card-row>
    <v-expansion-panel expand>
      <v-expansion-panel-content expand>
        <div slot="header">Comments</div>
        <v-card>
          <v-card-text>No comments on this post. </v-card-text>
        </v-card>
        <v-card v-for="comment in details.comments">
          <v-card-text class="grey lighten-3">
            {{ comment }}
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-content>
        <div slot="header">Comment on this post</div>
        <v-card style="margin-top: 0px;">
          <v-card-text class="grey lighten-3">
            <v-row row padded>
               <v-text-field
                 name="comment"
                 label="Add a comment"
                 v-model="comment.body"
                 multi-line
               ></v-text-field>
             </v-row>
             <v-row>
               <v-btn primary dark @click.native="submitComment()">Submit</v-btn>
             </v-row>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

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
        body: ''
      }
    }
  },
  computed: mapState({
    user: state => state.user,
    details: state => state.posts.postDetails
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
