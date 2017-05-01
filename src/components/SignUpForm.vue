<template lang="html">
  <div>
    <div class="form__signup well">
      <div class="inputs">
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
        email: this.user.email,
        password: this.user.password
      }

      this.$store.dispatch('signup', user)
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
