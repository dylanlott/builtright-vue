<template>
  <div>
    <v-container fluid style="margin: 20px 0px">
      <h1>User Profile</h1>
    </v-container>

    <v-card>
      <v-card-text>
        <v-list>
          <v-list-item>Username: <b></b></v-list-item>
          <v-list-item>Email: <b></b></v-list-item>
          <v-list-item>Builds: <b></b></v-list-item>
          <v-list-item>Member Since: <b></b></v-list-item>
          <v-list-item>Last Active: <b></b></v-list-item>
          <v-list-item>Total Comments: <b></b></v-list-item>
          <v-list-item>Total Builds: <b></b></v-list-item>
          <v-list-item>Total Posts: <b></b></v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-text>
        <h3>Settings and Account</h3>
        <v-btn class="orange">Change Password</v-btn>
      </v-card-text>
    </v-card>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        user: {
          username: '',
          email: '',
          builds: [],
          memberSince: '',
          lastActive: ''
        }
      }
    }
  }
</script>
