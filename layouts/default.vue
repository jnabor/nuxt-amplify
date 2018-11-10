<template>
  <v-app light>
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-if="!this.$route.path.includes('auth')"
      v-model="drawer"
      fixed
      app
    />

    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      class="elevation-0"
      color="primary"
    >
      <v-toolbar-side-icon
        class="grey--text darken-3"
        @click.stop="drawer = !drawer"
        v-if="!this.$route.path.includes('auth')"
      />

      <v-icon
        large color="amber"
        class="ml-0 pl-3"
        @click="onNavigate('/')"
      >
        fingerprint
      </v-icon>

      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-1"
      >
        <span class="grey--text test--darken-3 font-weight-medium">Demo</span>
      </v-toolbar-title>

      <v-spacer />
      <v-toolbar-items >
        <v-btn
          class="grey--text test--darken-3"
          @click="onNavigate('/auth/signin')"
          v-if="!this.$route.path.includes('auth')"
          flat
        >
          Sign In
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-divider />

    <nuxt />

  </v-app>
</template>

<script>
export default {
  props: {},
  data: () => ({
    dialog: false,
    drawer: null
  }),
  methods: {
    onNavigate(link) {
      console.log(this.$route.path)
      this.$router.push(link)
    }
  }
}
</script>
