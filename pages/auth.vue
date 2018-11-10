<!-- this is a wrapper for all auth pages -->
<template>
  <v-container fluid class="pa-2">
    <v-layout justify-center align-center fill-height>
      <v-flex>
        <v-layout row justify-center>

          <v-flex xl3 lg4 md6 sm8 xs12>
            <v-card raised class="pa-0 mt-0 elevation-1">
              <nuxt-child></nuxt-child>
            </v-card>
          </v-flex>

        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
