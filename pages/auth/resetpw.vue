<template>
  <div>

    <v-toolbar
      class="pa-0 ma-0 elevation-0 grey--text text--darken-1"
      color="white"
    >
      <span class="subheading">Reset Password</span>
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

      <v-form ref="emailform" v-model="validemail">
        <v-text-field
          v-model="email"
          :rules="[emailrules.required, emailrules.email]"
          :hint="msg"
          :readonly="status === 1"
          color="grey"
          label="E-mail"
          persistent-hint
          required>
        </v-text-field>
      </v-form>

      <v-btn
        v-if="status === 0"
        :loading="loading"
        :disabled="!validemail"
        class="white--text mt-3 ml-0"
        color="button"
        @click.native="onFind()"
      >
        Find Account
        <span slot="loader">Connecting...</span>
      </v-btn>

      <v-form
        v-if="status === 1" ref="form"
        v-model="validcode"
      >
        <v-text-field
          v-model="code"
          :rules="codeRules"
          color="grey"
          label="Confirmation Code"
          class="mt-2"
          required>
        </v-text-field>
        <v-text-field
          v-model="password"
          :rules="passRules"
          :append-icon="hidepw ? 'visibility' : 'visibility_off'"
          :type="hidepw ? 'password' : 'text'"
          color="grey"
          autocomplete="new-password"
          label="New Password"
          required
          @click:append="() => (hidepw = !hidepw)">
        </v-text-field>
      </v-form>

      <v-btn
        v-if="status === 1"
        :loading="loading"
        :disabled="!validcode"
        block
        large
        class="white--text"
        color="button"
        @click.native="onSubmit()"
      >
        Confirm
        <span slot="loader">Updating password...</span>
      </v-btn>
    </v-card-text>

    <v-card-actions class="pb-2 px-4">
      <v-spacer></v-spacer>
      <v-btn :to="'/auth/signin'" nuxt flat small>Sign In</v-btn>
      <v-btn :to="'/auth/signup'" nuxt flat small>Sign Up</v-btn>
    </v-card-actions>

  </div>
</template>

<script>
export default {
  middleware: ['noauth'],
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
  layout: 'auth',
  head: {
    title: 'Reset Password'
  }
}
</script>
