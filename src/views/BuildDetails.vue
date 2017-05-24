<template lang="html">
  <div class="content__bg">
    <div class="secondary__nav">
      Dashboard / Builds / Info
    </div>

    <v-card class="details__card">
       <v-card-text>

         <code>{{ details }}</code>
         <h1>{{details.title}}</h1>
         <h3>
          {{ details.description }}
        </h3>

       </v-card-text>
       <v-card-row actions>
         <router-link class="routerlink" to="">
           <v-btn class="actions__btn red" dark><v-icon>edit</v-icon>  Delete Build</v-btn>
         </router-link>
         <router-link class="routerlink" :to="{name: 'addPart', params: { id: details.id }}">
           <v-btn class="actions__btn orange" dark><v-icon>settings</v-icon>  Add A Part</v-btn>
         </router-link>
         <router-link class="router-link" to="">
           <v-btn class="actions__btn blue" dark spaced><v-icon>edit</v-icon>  Edit Build</v-btn>
         </router-link>
       </v-card-row>
     </v-card>

     <v-btn default @click.native="addPart()">

     </v-btn>
  </div>
</template>

<script>
import { router } from '../router/index'
import { mapState } from 'vuex'

const part = {
	"name": "turbo wastegate",
	"description": "wastegate",
	"price": "123.22",
	"url": "asdf.com",
	"user": "lott.dylan@gmail.com"
}

export default {
  name: 'buildDetails',
  data () {
    return {
      id: this.$route.params.id
    }
  },
  computed: mapState({
    details: state => state.builds.details,
    parts: state => state.builds.parts
  }),
  created () {
    this.$store.dispatch('getBuildDetails', this.$route.params.id)
    this.$store.dispatch('getPartsForBuild', this.$route.params.id)
  },
  methods: {
    addPart: function () {
      this.$store.dispatch('addPart', this.part, this.details, this.details.id)
    }
  }
}
</script>

<style lang="stylus">
@import '../css/theme.styl'

.content__bg
  background-color: blue

.details__card
  margin: 20px 20px

.actions__btn
  margin: 10px 10px
</style>
