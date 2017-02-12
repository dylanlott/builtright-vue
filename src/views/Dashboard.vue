<template>
  <div>
    <div class="secondary__nav">
      Dashboard
    </div>

    <div class="card__basic">
      <v-card>
        <v-card-text>
          <div>
            <!-- <h3 class="card__title display-4">My Builds</h3> -->

            <div>
              <v-card horizontal>
               <v-card-column class="green white--text">
                 <v-card-row>
                   <v-spacer></v-spacer>
                   <v-card-text class="text-xs-right">
                     <strong>Start a new build</strong>
                     <div></div>
                   </v-card-text>
                 </v-card-row>
               </v-card-column>
               <!-- <v-card-row img="/public/doc-images/cards/store.jpg" height="125px"></v-card-row> -->
             </v-card>

             <v-card horizontal>
               <v-card-column class="orange white--text">
                 <v-card-row>
                   <v-spacer></v-spacer>
                   <v-card-text class="text-xs-right">
                     <strong>Browse other builds</strong>
                     <div></div>
                   </v-card-text>
                 </v-card-row>
               </v-card-column>
               <!-- <v-card-row img="/public/doc-images/cards/store.jpg" height="125px"></v-card-row> -->
             </v-card>

             <v-card horizontal>
                <v-card-column class="blue white--text">
                  <v-card-row>
                    <v-spacer></v-spacer>
                    <v-card-text class="text-xs-right">
                      <strong>Shop for parts</strong>
                      <div></div>
                    </v-card-text>
                  </v-card-row>
                </v-card-column>
                <!-- <v-card-row img="/public/doc-images/cards/store.jpg" height="125px"></v-card-row> -->
              </v-card>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>

</template>


<script>
import CreateBuildForm from '../components/CreateBuildForm.vue'
import { mapState } from 'vuex'

const storage = window.localStorage

export default {
  computed: mapState({
    user: state => state.user,
    builds: state => state.builds
  }),
  created: function() {
    this.$store.dispatch('getBuildsForUser', storage.getItem('user_id'))
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
