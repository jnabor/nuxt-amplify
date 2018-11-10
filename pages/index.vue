<template>
  <v-container fluid grid-list-md class="pa-1 ma-1">
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md4>
        <v-card color="purple lighten-2" dark>
          <v-card-title primary class="title">Demo</v-card-title>
          <v-card-text>Membership</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card color="amber lighten-2">
              <v-card-text>Events Attendance</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>

              <v-flex d-flex xs12 >
                <v-card
                  color="red lighten-2"
                  dark
                >
                  <v-card-text>Polls</v-card-text>
                </v-card>
              </v-flex>

              <v-flex d-flex xs12 >
                <v-card
                  color="light-green lighten-2"
                >
                  <v-card-text>Surveys</v-card-text>
                </v-card>
              </v-flex>

            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm6 md2 child-flex>
        <v-card color="green" dark>
          <v-card-text>User Groups</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-card color="blue lighten-2" dark>
          <v-card-text>User Management</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
