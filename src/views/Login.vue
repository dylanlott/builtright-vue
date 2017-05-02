<template>
  <div>
    <h1>Login to BuiltRight</h1>
    <div class="container">
      <LoginForm></LoginForm>
    </div>
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
