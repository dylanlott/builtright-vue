<template>
  <v-container fluid="fluid">
    <v-row class="text-xs-center">
      <v-col xs12>
        <h3 class="tagline text-xs-center">{{message}}</h3>
        <v-col xs12 md4 offset-md4>
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
        message: 'The #1 way to showcase your modified cars'
      }
    },
    components: { SignUpForm }
  }
</script>

<style lang="stylus">
.tagline
  color: #fff
</style>
