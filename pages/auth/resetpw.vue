<template>
  <div>

    <v-toolbar dense
      class="pa-0 ma-0 elevation-0 grey--text text--darken-1"
      color="white"
    >
      <span class="subheading">Reset Password</span>
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

      <v-form v-model="validemail" ref="emailform">
        <v-text-field
          color="grey"
          label="E-mail"
          v-model="email"
          :rules="[emailrules.required, emailrules.email]"
          :hint="msg"
          persistent-hint
          :readonly='status === 1'
          required>
        </v-text-field>
      </v-form>

      <v-btn
        v-if="status === 0"
        :loading="loading"
        @click.native="onFind()"
        :disabled="!validemail"
        class="white--text mt-3 ml-0"
        color="button"
      >
        Find Account
        <span slot="loader">Connecting...</span>
      </v-btn>

      <v-form
        v-model="validcode" ref="form"
        v-if="status === 1"
      >
        <v-text-field
          color="grey"
          label="Confirmation Code"
          v-model="code"
          :rules="codeRules"
          class="mt-2"
          required>
        </v-text-field>
        <v-text-field
          color="grey"
          autocomplete="new-password"
          label="New Password"
          v-model="password"
          :rules="passRules"
          :append-icon="hidepw ? 'visibility' : 'visibility_off'"
          @click:append="() => (hidepw = !hidepw)"
          :type="hidepw ? 'password' : 'text'"
          required>
        </v-text-field>
      </v-form>

      <v-btn
        block
        large
        v-if="status === 1"
        :loading="loading"
        @click.native="onSubmit()"
        :disabled="!validcode"
        class="white--text"
        color="button"
      >
        Confirm
        <span slot="loader">Updating password...</span>
      </v-btn>
    </v-card-text>

    <v-card-actions class="pb-2 px-4">
      <v-spacer></v-spacer>
      <v-btn nuxt flat small :to="'/auth/signin'">Sign In</v-btn>
      <v-btn nuxt flat small :to="'/auth/signup'">Sign Up</v-btn>
    </v-card-actions>

  </div>
</template>

<script>
export default {
  data: () => ({
    status: 0,
    msg: 'A confirmation code will be sent to your email address',
    validemail: false,
    validcode: false,
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
    ],
    code: '',
    codeRules: [v => !!v || 'Code is required']
  }),
  methods: {
    onFind() {
      this.msg = 'A confirmation code was sent to your email address'
      this.status = 1
    },
    onSubmit() {}
  },
  layout: 'auth'
}
</script>
