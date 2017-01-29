<template>
  <div>
    <h1>Create A New Build</h1>

    <v-text-input
      id="Build Name"
      name="Build Name"
      label="Build Name"
      v-model="build.name"
      required
    ></v-text-input>

    <v-text-input
      id="Build make"
      name="Build make"
      label="Build make"
      v-model="build.make"
      required
    ></v-text-input>

    <v-text-input
      id="Build Model"
      name="Build Model"
      label="Build Model"
      v-model="build.model"
      required
    ></v-text-input>

    <v-text-input
      id="Build Year"
      name="Build Year"
      label="Build Year"
      v-model="build.year"
      required
    ></v-text-input>

    <v-text-input
      id="Build Trim"
      name="Build Trim"
      label="Build Trim"
      v-model="build.trim"
      required
    ></v-text-input>

    <div>

      <v-btn raised success @click.native='submit()'>Create Build</v-btn>
    </div>
</div>
</template>

<script>
import user from '../api/user'

  export default {
    data () {
      return {
        build: {
          name: '',
          make: '',
          model: '',
          year: '',
          trim: ''
        }
      }
    },
    methods: {
      submit: function () {
        const user = user.getUserId()
        console.log('USER: ', user)
        const build = {
          name: this.build.name,
          make: this.build.make,
          model: this.build.model,
          year: this.build.year,
          trim: this.build.trim
        }
        this.$store.dispatch('createNewBuild', build)
      }
    }
  }
</script>
