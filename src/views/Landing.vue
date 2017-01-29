<template>
  <div>
    <img class="header__img" src="https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/739D74EEB8.jpg">
    <div class="header__container">
      <h1>BuiltRight</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'landing',
    data () {
      return {}
    },
    components: {}
  }
</script>

<style lang="stylus">
.header__img
  margin-top: -14px
  margin-bottom: 30px
  width: 100%
  z-index: -999

.header__container
  z-index: 10
  width: 100%
  background-color: #eee
  position: absolute
</style>
