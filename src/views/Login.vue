<template>
  <div>

    <v-container fluid="fluid">
      <v-row class="text-xs-center">
        <v-col xs12>
          <h1 class="text-xs-center">Login</h1>
          <h3>{{message}}</h3>
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
        message: 'Login to BuiltRight'
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
</style>
