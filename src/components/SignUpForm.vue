<template lang="html">
  <div>
    <div class="form__signup well">
      <div class="inputs">
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
      </div>
      <v-btn primary class="button__signup" @click.native="submit()">
        Sign Up
      </v-btn>
      <p>
        Already a member? <a href="/login">Login</a>.
      </p>
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
    submit () {
      var user = {
        username: this.user.username,
        password: this.user.password,
        grant_type: 'password'
      }

      this.$store.dispatch('signupUser', user)
      this.user.username = ''
      this.user.password = ''
    }
  }
}
</script>

<style lang="stylus">
  .form__signup
    width: 400px
    text-align: center
    margin: 0px auto
    margin-top: 40px
  .inputs
  .button__signup
    margin: 20px

</style>
