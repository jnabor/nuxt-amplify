<template>
  <div>

    <v-toolbar
      class="pa-0 ma-0 elevation-0 grey--text text--darken-1"
      color="white"
    >
      <span class="subheading">Sign Up</span>
      <v-spacer></v-spacer>
      <v-btn :to="'/'" color="grey" flat icon nuxt>
        <v-icon>home</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>

    <v-card-text class="pt-4 px-4">
      <v-alert v-model="showerr" outline type="error" dismissible class="mb-4 mt-0">
        {{ errmsg }}
      </v-alert>

      <v-form ref="form" v-model="valid">

        <v-text-field
          v-model="email"
          :rules="[emailrules.required, emailrules.email]"
          color="grey"
          label="E-mail"
          required>
        </v-text-field>

        <v-text-field
          v-model="password"
          :rules="passRules"
          :append-icon="hidepw ? 'visibility' : 'visibility_off'"
          :type="hidepw ? 'password' : 'text'"
          color="grey"
          label="Password"
          autocomplete="new-password"
          hint="At least 8 characters"
          required
          @click:append="() => (hidepw = !hidepw)">
        </v-text-field>

      </v-form>

      <v-btn
        :loading="loading"
        :disabled="!valid"
        block
        large
        class="white--text"
        color="button"
        @click.native="onSubmit()">
        Sign Up
        <span slot="loader">Connecting...</span>
      </v-btn>
    </v-card-text>

    <v-card-actions class="pb-2 px-4">
      <v-spacer></v-spacer>
      <v-btn :to="'/auth/signin'" nuxt flat small>Sign In</v-btn>
      <v-btn :to="'/auth/resetpw'" nuxt flat small class="amber--text">Reset Password</v-btn>
    </v-card-actions>

  </div>
</template>

<script>
export default {
  data: () => ({
    showerr: false,
    errmsg: '',
    valid: false,
    hidepw: true,
    loader: false,
    loading: false,
    email: '',
    emailrules: {
      required: value => !!value || 'E-mail is required',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'E-mail must be valid'
      }
    },
    password: '',
    passRules: [
      v => !!v || 'Password is required',
      v => !v || v.length >= 8 || 'Password must be at least 8 characters'
    ]
  }),
  methods: {
    onSubmit() {
      let payload = {
        username: this.email,
        password: this.password
      }
      this.$store.dispatch('auth/signUpUser', payload).then(() => {
        console.log('sign up then...')
      })
    }
  },
  layout: 'auth',
  head: {
    title: 'Sign Up'
  }
}
</script>
