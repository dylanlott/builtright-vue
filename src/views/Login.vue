<template>
  <div>
    <h1>Login to BuiltRight</h1>
    <LoginForm></LoginForm>
  </div>

</template>

<script>
import LoginForm from '../components/LoginForm.vue'
  export default {
    name: 'login',
    data () {
      return {
        message: 'Enter your information'
      }
    },
    components: { LoginForm }
  }
</script>
