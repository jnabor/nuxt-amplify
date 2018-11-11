<template>
  <v-app>
    <div>
      <v-toolbar
        :clipped-left="$vuetify.breakpoint.mdAndUp"
        color="primary"
        class="elevation-0 ma-0 pa-0"
        app
      >
        <nuxt-link :to="'/'">
          <v-icon
              large color="amber"
              class="ml-0 pl-3"
          >
            fingerprint
          </v-icon>
        </nuxt-link>

        <v-toolbar-title
          style="width: 300px"
          class="ml-0 pl-1"
        >
        <span class="grey--text test--darken-3 font-weight-medium">Demo</span>
        </v-toolbar-title>
      </v-toolbar>
    </div>

    <v-content>
      <v-divider></v-divider>
      <v-container fluid fill-height class="pa-2">
        <v-layout justify-center align-start>

          <v-flex>
            <v-layout row justify-center>

              <v-flex xl3 lg4 md6 sm8 xs12>
                <v-card raised class="pa-0 ma-2 elevation-1">
                  <nuxt></nuxt>
                </v-card>
              </v-flex>

            </v-layout>
          </v-flex>

        </v-layout>
      </v-container>
    </v-content>

  </v-app>
</template>
