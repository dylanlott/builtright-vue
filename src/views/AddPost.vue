<template lang="html">
    <v-card class="addpart__card">
      <v-card-text>
        <h2 class="title">Add a post to the forums</h2>
      </v-card-text>
      <v-card-text class="subheading grey--text">
        Post a question, a discussion topic, whatever is on your mind, share it!
      </v-card-text>
      <div class="addpart__form">
        <form>
          <v-card-row>
              <v-text-input
                id="postTitle"
                name="postTitle"
                label="Post Title"
                v-model="post.title"
                prepend-icon="star"
              ></v-text-input>
              <v-text-field
                id="postBody"
                name="postBody"
                label="Post Body"
                multi-line
                v-model="post.body"
              ></v-text-field>
          </v-card-row>
        </form>
      </div>
      <v-card-row actions>
        <v-btn flat :to="{name: 'forum'}" class="primary--text">Cancel</v-btn>
        <v-btn flat v-on:click.native="modal = false" class="primary--text">Submit</v-btn>
      </v-card-row>
    </v-card>
</template>

<script>
import { router } from '../router/index'
import { mapDispatch } from 'vuex'

export default {
  name: 'AddPost',
  data () {
    return {
      modal: false,
      post: {
        title: ''
      }
    }
  },
  methods: {
    addPart: function () {
      console.log('ADD PART')
    },
    closeModal: function () {
      this.modal = false
    }
  },
  components: {
  }
}
</script>

<style lang="stylus">
@import '../css/theme.styl'

</style>
