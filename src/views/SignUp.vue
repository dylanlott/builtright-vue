<template>
  <div>
    <h1>Sign Up for BuiltRight</h1>
    <h3>{{message}}</h3>


    <div>
       <SignUpForm></SignUpForm>
    </div>
  </div>

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
