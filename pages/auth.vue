<!-- this is a wrapper for all auth pages -->
<template>
  <v-flex>
    <v-layout row justify-center>

      <v-flex xl3 lg4 md6 sm8 xs12>
        <v-card raised class="pa-0 ma-2 elevation-1">
          <nuxt-child></nuxt-child>
        </v-card>
      </v-flex>

    </v-layout>
  </v-flex>
</template>
