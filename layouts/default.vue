<template>
  <v-app>
    <div>
      <v-toolbar
        color="primary"
        class="elevation-0 ma-0 pa-0"
      >
        <v-toolbar-side-icon
          class="grey--text darken-3"
          @click.stop="drawer = !drawer"
        />
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
        <v-spacer></v-spacer>
        <v-toolbar-items >
          <v-btn
            v-if="!isAuthenticated"
            :to="'/auth/signin'"
            class="grey--text test--darken-3" nuxt
            flat
          >
            Sign In
          </v-btn>
          <v-btn
            v-else
            class="grey--text test--darken-3"
            flat
            @click="onSignOut"
          >
            Sign Out
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-divider></v-divider>
    </div>

    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.mdAndUp"
      v-model="drawer"
      fixed
      app
    >
      <v-toolbar flat class="transparent">
        <v-toolbar-side-icon
          class="grey--text darken-3"
          @click.stop="drawer = !drawer">
        </v-toolbar-side-icon>
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
      <v-divider></v-divider>

      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar size="30">
              <img src="https://randomuser.me/api/portraits/men/4.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Juan Rodriguez</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
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
      <v-container fluid fill-height class="pa-2">
        <v-layout justify-center align-start>

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
    drawer: false,
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
      { icon: 'settings', text: 'Settings' }
    ]
  }),
  computed: {
    isAuthenticated: function() {
      console.log('computed', this.$store.getters.isAuthenticated)
      return this.$store.getters.isAuthenticated || false
    }
  },
  beforeCreated: async function() {
    try {
      console.log('try sign in...')
      let user = await this.$auth.currentAuthenticatedUser()
      console.log('signed in...')
      this.$store.dispatch('setUser', user)
    } catch (err) {
      console.log('not signed in...')
    }
  },
  methods: {
    async onSignOut() {
      console.log('signing out...')
      try {
        let data = await this.$auth.signOut({ global: true })
        this.$store.dispatch('logOut', false)
        this.$router.push('/')
      } catch {
        console.log('sign out error...')
      }
    }
  }
}
</script>
