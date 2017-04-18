<template>
  <div>
    <div class="well">
      <v-text-input
        id="Email"
        name="Email"
        label="Email"
        v-model="user.email"
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
          email: '',
          password: ''
        },
        isValid: false
      }
    },
    methods: {
      submit: function () {
        var user = {
          email: this.user.email,
          password: this.user.password
        }
        console.log('user', user);
        this.$store.dispatch('loginUser', user)
        this.user.email = ''
        this.user.password = ''
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
