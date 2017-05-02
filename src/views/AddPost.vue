<template lang="html">
  <div class="add-post">
    <h1>Add Post</h1>

    <div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'AddPostForm',
  data () {
    return {
      title: ''
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('createPost')
    }
  }
}
</script>

<style lang="stylus">
.form
  margin: 20px 20%
</style>
