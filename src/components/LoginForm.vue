<template>
  <div>
    <div class="well">
      <v-text-input
        id="Username"
        name="Username"
        label="Username"
        v-model="user.username"
        required
      ></v-text-input>

      <v-text-input
        id="Password"
        name="Password"
        type="password"
        label="Password"
        v-model="user.password"
        required
      ></v-text-input>

      <div>
        <v-btn raised primary class="button__login" @click.native='submit()'>Login</v-btn>
        <p>Not a member yet? <a href="/signup">Sign up here</a>.</p>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        user: {
          username: '',
          password: ''
        },
        isValid: false
      }
    },
    methods: {
      submit: function () {
        var user = {
          username: this.user.username,
          password: this.user.password,
          grant_type: 'password'
        }
        this.$store.dispatch('loginUser', user)
      }
    }
  }
</script>

<style lang="stylus">
  .well {
    background: #eee
    padding: 40px
  }
  .button__login {
    margin: 20px
  }
</style>
