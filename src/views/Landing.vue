<template>
  <div>
    <div class="header__container">
      <h1>BuiltRight</h1>
      <h3 class="tagline">The #1 car modification and project car community.</h3>
      <SignUpForm></SignUpForm>
    </div>
  </div>
</template>

<script>
import SignUpForm from '../components/SignUpForm.vue'

export default {
  name: 'landing',
  components: { SignUpForm }
}
</script>

<style lang="stylus">
.header__img
  margin-top: -14px
  margin-bottom: 30px
  width: 100%
  z-index: -999

.header__container
  width: 100%

.tagline
  color: #fff
</style>
