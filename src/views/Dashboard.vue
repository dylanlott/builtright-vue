<template>
  <div>

    <h1>Dashboard</h1>

  </div>

</template>


<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    user: state => state.user
  }),
  data () {
    return {}
  }
}

</script>
