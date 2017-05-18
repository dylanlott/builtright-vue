<template>
  <v-container fluid="fluid">
    <v-row class="text-xs-center">
      <v-col xs12>
        <v-col xs12>
        </v-col>
        <v-col xs12 md6 offset-md3>
          <h1>Sign up for BuiltRight</h1>
          <h3>Join the #1 car modification community</h3>
          <SignUpForm></SignUpForm>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import SignUpForm from '../components/SignUpForm.vue'
  export default {
    name: 'signup',
    data () {
      return {
      }
    },
    components: { SignUpForm }
  }
</script>

<style lang="stylus">
.tagline
  color: #fff

.heading
  text-align: center
</style>
