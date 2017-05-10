<template lang="html">
  <header>
    <v-toolbar class="v-navbar">
      <v-toolbar-side-icon class="hidden-lg-and-up" @click.native.stop="sidebar = !sidebar" />
      <v-toolbar-logo class="logo">
        <img src="../img/logo-horizontal.png" alt="" height="50" class="app-logo">
      </v-toolbar-logo>
    </v-toolbar>
  </header>
</template>

<script>
export default {
  name: 'Navbar'
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

.app-logo
  margin: 10px
  
header
  height: 60px
  background-color: success
  color: #fff
</style>
