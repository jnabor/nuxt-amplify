<template>
  <div>

    <v-toolbar dense
      class="pa-0 ma-0 elevation-0 grey--text text--darken-1"
      color="white"
    >
      <span class="subheading">Sign In</span>
      <v-spacer></v-spacer>
      <v-btn color="grey" flat icon nuxt :to="'/'">
        <v-icon>home</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>

    <v-card-text class="pt-4 px-4">
      <v-alert outline type="error" dismissible class="mb-4 mt-0" v-model="showerr">
        {{ errmsg }}
      </v-alert>

      <v-form v-model="valid" ref="form">

        <v-text-field
          color="grey"
          label="E-mail"
          v-model="email"
          :rules="[emailrules.required, emailrules.email]"
          required>
        </v-text-field>

        <v-text-field
          color="grey"
          label="Password"
          v-model="password"
          :rules="passRules"
          hint="At least 8 characters"
          :append-icon="hidepw ? 'visibility' : 'visibility_off'"
          @click:append="() => (hidepw = !hidepw)"
          :type="hidepw ? 'password' : 'text'"
          required>
        </v-text-field>

      </v-form>

      <v-btn
        block
        large
        :loading="loading"
        @click.native="onSubmit()"
        :disabled="!valid"
        class="white--text"
        color="button">
        Sign In
        <span slot="loader">Connecting...</span>
      </v-btn>
    </v-card-text>

    <v-card-actions class="pb-2 px-4">
      <v-spacer></v-spacer>
      <v-btn nuxt flat small :to="'/auth/signup'">Sign Up</v-btn>
      <v-btn nuxt flat small class="amber--text" :to="'/auth/resetpw'">Reset Password</v-btn>
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
    onSubmit() {}
  },
  layout: 'auth'
}
</script>
