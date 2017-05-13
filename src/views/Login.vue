<template>
  <div>

    <v-container fluid="fluid">
      <v-row class="text-xs-center">
        <v-col xs12>
          <h1 class="tagline text-xs-center">Login</h1>
          <v-col xs12 md4 offset-md4>
            <LoginForm></LoginForm>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<script>
import LoginForm from '../components/LoginForm.vue'
import user from '../api/user'
import {router} from '../router/index.js'

  export default {
    name: 'login',
    data () {
      return {
        message: 'Enter your information'
      }
    },
    created () {
      if (user.checkAuth()) {
        router.push('dashboard')
      }
    },
    components: { LoginForm }
  }
</script>

<style lang="stylus">
  @import '../css/theme.styl'

  h1 {
    color: white
  }
</style>
