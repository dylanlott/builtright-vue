<template>
    <v-card>
      <v-card-text>
        <CreateBuildForm></CreateBuildForm>
      </v-card-text>
    </v-card>
</template>
<script>
import CreateBuildForm from '../components/CreateBuildForm.vue'
export default {
  name: 'addBuild',
  data () {
    return {}
  },
  components: { CreateBuildForm }
}
</script>
<style lange="stylus">

</style>
