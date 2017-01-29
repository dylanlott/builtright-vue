<template>
  <div>
    <div class="secondary__nav">
      Dashboard
    </div>

     <v-btn floating large error v-dropdown:dropdown4 class="secondary white--text action__button">
       <v-icon>priority_high</v-icon>
     </v-btn>
     <v-dropdown id="dropdown4" hover class="dropdown__floating">
       <li>
         <a href="#!" class="dropdown__item">Add Build
           <!-- <v-chip label small class="teal white--text right">new</v-chip> -->
         </a>
       </li>
       <li>
         <a href="#!" class="dropdown__item">Write A Post</a>
       </li>
       <li>
         <a href="#!" class="dropdown__item">Shop For Parts
           <v-icon class="secondary--text right">shop</v-icon>
         </a>
       </li>
     </v-dropdown>

    <div class="card__basic">
      <v-card>
        <v-card-text>
          <div>
            <h3 class="card__title display-4">My Builds</h3>

            <div>

              <!-- Builds List -->
              <v-card>
                <v-card-row class="grey darken">
                  <v-card-title>
                    <span class="white--text">Title</span>
                    <v-spacer></v-spacer>
                    <div>
                      <v-btn icon="icon" v-dropdown:buildOptions class="white--text">
                        <v-icon>more_vert</v-icon>
                      </v-btn>
                      <v-dropdown id="buildOptions" top right origin="top right">
                        <v-dropdown-item v-bind:item="{ href: 'javascript:;', text: 'Never show rewards' }"></v-dropdown-item>
                        <v-dropdown-item v-bind:item="{ href: 'javascript:;', text: 'Remove Card' }"></v-dropdown-item>
                        <v-dropdown-item v-bind:item="{ href: 'javascript:;', text: 'Send Feedback' }"></v-dropdown-item>
                      </v-dropdown>
                    </div>
                  </v-card-title>
                </v-card-row>
                <v-card-text>
                  <v-card-row height="75px">
                    <v-icon class="mr-5">build</v-icon>
                    <div>
                      <div>Make</div> <strong>Subaru</strong>
                    </div>
                  </v-card-row>
                </v-card-text>
                <v-card-row actions>
                  <v-btn flat class="blue--text darken-1">View Build</v-btn>
                </v-card-row>
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
export default {
  computed: mapState({
    user: state => state.user
  }),
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
