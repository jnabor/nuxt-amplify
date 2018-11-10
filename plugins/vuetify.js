import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.shades.white,
    accent: colors.blue.lighten1,
    secondary: colors.blueGrey.lighten4,
    button: colors.blue.accent2,
    error: '#f44336',
    warning: '#FFCA28',
    info: '#2196f3',
    success: '#4caf50'
  }
})
