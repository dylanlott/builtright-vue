<template>
  <div>
    <template>
      <v-parallax src="https://drivenlocal.com/wp-content/uploads/2015/10/Material-design.jpg">
      </v-parallax>
      <h1>Explore our community now</h1>
      <v-row>
        <v-col md4 xs12>

        </v-col>
        <v-col md4 xs12>
          2
        </v-col>
        <v-col md4 xs12>
          3
        </v-col>
      </v-row>
    </template>
  </div>
</template>

<script>

export default {
  name: 'landing',
  components: { }
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
