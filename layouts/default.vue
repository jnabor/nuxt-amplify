<template>
  <v-app>
    <div>
      <v-toolbar
        :clipped-left="$vuetify.breakpoint.mdAndUp"
        color="primary"
        class="elevation-0 ma-0 pa-0"
        app
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
        <v-spacer></v-spacer>
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

    </div>

    <v-navigation-drawer
      v-if="!this.$route.path.includes('auth')"
      :clipped="$vuetify.breakpoint.mdAndUp"
      v-model="drawer"
      fixed
      app
    >
      <v-divider></v-divider>
      <v-list >
        <template v-for="item in items">
          <v-layout
            v-if="item.heading"
            :key="item.heading"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click=""
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" @click="">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>


    <v-content>
      <v-divider></v-divider>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>

          <nuxt></nuxt>
        </v-layout>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { icon: 'contacts', text: 'Members' },
      { icon: 'history', text: 'Events ' },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Groups',
        model: true,
        children: [{ icon: 'add', text: 'Create group' }]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'More',
        model: false,
        children: [
          { text: 'Import' },
          { text: 'Export' },
          { text: 'Print' },
          { text: 'Undo changes' },
          { text: 'Other contacts' }
        ]
      },
      { icon: 'settings', text: 'Settings' },
    ]
  }),
  methods: {
    onNavigate(link) {
      console.log(this.$route.path)
      this.$router.push(link)
    }
  }
}
</script>

<style>
html {
  font-family: 'Ubuntu', sans-serif;
}
body {
  margin: 0;
  padding: 0;
}
</style>
