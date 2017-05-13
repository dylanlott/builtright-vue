<template>
  <div>
    <div class="card__basic">
      <v-card>
        <v-card-text>
          <div>
            <h1>Home</h1>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>

</template>

<script>
import CreateBuildForm from '../components/CreateBuildForm.vue'
import { mapState } from 'vuex'

export default {
  name: 'dashboard',
  computed: mapState({
    user: state => state.user,
    builds: state => state.builds,
    posts: state => state.posts
  }),
  created: function() {
    this.$store.dispatch('getBuildsForUser', this.user.user_id)
  },
  data () {
    return {
      items: [{ href: '/dashboard', text: 'Home' }]
    }
  },
  components: { CreateBuildForm },
  methods: {
    toggleForm: function () {
      console.log('toggleForm');
    }
  }
}

</script>

<style media="screen" lang="stylus">
  .secondary__nav
    background-color: #eee
    margin: -14px 0px
    padding: 15px 30px
    width: 100%
    height: 50px
    text-align: left

  .card__basic
    margin: 40px 0px

  .dropdown__floating
    width: 200px
</style>

<style scoped>
  .card__title
    margin: 20px 20px
</style>
