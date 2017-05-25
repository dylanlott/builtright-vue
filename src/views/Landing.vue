<template>
  <v-container fluid>
    <h1>Explore our community now</h1>
    <div>
      <v-layout row-sm column child-flex-sm>
        <v-card horizontal class="secondary ma-1">
          <v-card-row img="" height="130px"></v-card-row>
          <v-card-column>
            <v-card-row height="75px" class="deep-orange white--text">
              <v-card-text>
                <strong>Check out buids from the rest of the community.</strong>
              </v-card-text>
            </v-card-row>
            <v-card-row actions class="deep-orange darken-2">
              <v-btn flat class="white--text">
                <v-icon left light>star</v-icon>Explore
              </v-btn>
            </v-card-row>
          </v-card-column>
        </v-card>

        <v-card horizontal class="secondary ma-1">
          <v-card-row img="" height="130px"></v-card-row>
          <v-card-column>
            <v-card-row height="75px" class="deep-orange white--text">
              <v-card-text>
                <strong>Visit our tutorials section and learn more about your car</strong>
              </v-card-text>
            </v-card-row>
            <v-card-row actions class="deep-orange darken-2">
              <v-btn flat class="white--text">
                <v-icon left light>list</v-icon>Visit The Forum
              </v-btn>
            </v-card-row>
          </v-card-column>
        </v-card>
      </v-layout>

      <v-layout row-sm column child-flex-sm>
        <v-card horizontal class="secondary ma-1">
          <v-card-row img="" height="130px"></v-card-row>
          <v-card-column>
            <v-card-row height="75px" class="deep-orange white--text">
              <v-card-text>
                <strong>Check out buids from the rest of the community.</strong>
              </v-card-text>
            </v-card-row>
            <v-card-row actions class="deep-orange darken-2">
              <router-link :to="{name: 'builds'}">
                <v-btn flat class="white--text">
                  <v-icon left light>star</v-icon>Explore
                </v-btn>
              </router-link>
            </v-card-row>
          </v-card-column>
        </v-card>

        <v-card horizontal class="secondary ma-1">
          <v-card-row img="" height="130px"></v-card-row>
          <v-card-column>
            <v-card-row height="75px" class="deep-orange white--text">
              <v-card-text>
                <strong>Get answers to your questions and chat with the community.</strong>
              </v-card-text>
            </v-card-row>
            <v-card-row actions class="deep-orange darken-2">
              <router-link :to="{name: 'forum'}">
                <v-btn flat class="white--text">
                  <v-icon left light>list</v-icon>Visit The Forum
                </v-btn>
              </router-link>
            </v-card-row>
          </v-card-column>
        </v-card>
      </v-layout>
    </div>
  </v-container>
</template>

<script>

export default {
  name: 'landing',
  components: { }
}
</script>

<style lang="stylus">
.header__img
  margin-top: -14px
  margin-bottom: 30px
  width: 100%
  z-index: -999

.header__container
  width: 100%

.tagline
  color: #fff
</style>
