<template lang="html">
  <b-navbar toggleable type="inverse" variant="success" class="navbar">

   <b-link class="navbar-brand" :to="{ name: 'dashboard' }">
     <span>BuiltRight</span>
   </b-link>

   <b-link class="nav navbar__link">Builds</b-link>
   <b-link class="nav navbar__link">Forum</b-link>
   <b-link class="nav navbar__link">Profile</b-link>

 </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    toggleNav () {

    }
  }
}
</script>

<style lang="stylus">
.navbar__link
  margin-left: 15px
  color: #fff
  cursor: pointer

.navbar-collapse
  width: auto !important

.nav-link
  margin-left: 10px

.navbar-secondary
  background-color: #5CB85C

.collapse-leave-active
  background-color: #5CB85C

.collapse-enter-active
  background-color: #5CB85C

.navbar-brand
  font-size: 30px
  cursor: pointer
</style>
