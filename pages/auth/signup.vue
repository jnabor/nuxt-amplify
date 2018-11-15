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
      <v-alert
        v-model="showerr"
        transition="fade-transition"
        outline type="error" class="mb-4 mt-0">
        {{ errmsg }}
      </v-alert>

      <v-form
        v-if="step !== 2"
        ref="form0"
        v-model="valid0"
      >
        <v-text-field
          v-model="email.value"
          :rules="email.rules"
          :disabled="email.disabled"
          color="grey"
          label="E-mail"
          required>
        </v-text-field>
        <v-text-field
          v-model="password.value"
          :rules="password.rules"
          :disabled="password.disabled"
          :append-icon="password.hidden? 'visibility' : 'visibility_off'"
          :type="password.hidden? 'password' : 'text'"
          color="grey"
          label="Password"
          autocomplete="new-password"
          required
          @click:append="() => (password.hidden = !password.hidden)">
        </v-text-field>
      </v-form>

      <v-btn
        v-if="step === 0"
        :loading="loading"
        :disabled="!valid0"
        block
        large
        class="white--text"
        color="button"
        @click.native="onSubmit()">
        Sign Up
        <span slot="loader">Connecting...</span>
      </v-btn>

      <v-form v-if="step === 1" ref="form1" v-model="valid1">
        <h4 class="subheading mb-0 accent--text">Enter Confirmation Code</h4>
        <h6 class="caption mb-2">A confirmation code was sent to your email</h6>
        <v-text-field
          v-model="code.value"
          :rules="code.rules"
          label="Confirmation Code"
          color="grey"
          required>
        </v-text-field>
      </v-form>
      <v-btn
        v-if="step === 1"
        :loading="loading"
        :disabled="!valid1"
        block
        large
        class="mt-3 mb-3 white--text"
        color="button"
        @click.native="onConfirm()">
        Confirm
        <span slot="loader">Connecting...</span>
      </v-btn>

      <div v-if="step === 2">
        <v-img
          :src="'/fingerprint.png'"
          :lazy-src="'/fingerprint.png'"
          contain
          height="180"
          widtch="180"
          aspect-ratio="1.5"
        >
        </v-img>
        <p class="body-1 green--text text-xs-center">You have successfully signed up!</p>
        <v-layout justify-center row>
          <v-btn
            :to="'/auth/signin'"
            outline
            nuxt
            class="mb-3"
            color="amber"
            large
          >
            Sign In
          </v-btn>
        </v-layout>
      </div>

    </v-card-text>

    <v-card-actions v-if="step === 0" class="pb-2 px-4">
      <v-spacer></v-spacer>
      <v-btn :to="'/auth/signin'" nuxt flat small>Sign In</v-btn>
      <v-btn :to="'/auth/resetpw'" nuxt flat small class="amber--text">Reset Password</v-btn>
    </v-card-actions>

  </div>
</template>

<script>
import getErrcode from '@/plugins/error-codes'

export default {
  data: () => ({
    step: 0,
    showerr: false,
    errmsg: '',
    valid0: false,
    valid1: false,
    loader: false,
    loading: false,
    email: {
      value: '',
      disabled: false,
      rules: [
        v => !!v || 'E-mail is required',
        v => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(v) || 'E-mail must be valid'
        }
      ]
    },
    password: {
      value: '',
      hidden: true,
      disabed: false,
      rules: [
        v => !!v || 'Password is required',
        v => !v || v.length >= 8 || 'Password must be 8-20 characters',
        v =>
          /^(?=.*[0-9])/.test(v) || 'Password must contain at least 1 number',
        v =>
          /^(?=.*[a-z])/.test(v) ||
          'Password must contain at least 1 lower case letter',
        v =>
          /^(?=.*[A-Z])/.test(v) ||
          'Password must contain at least 1 upper case letter',
        v =>
          /^(?=.*[!@#$%^&*"])/.test(v) ||
          'Password must contain at least 1 special character (!@#$%^&*")'
      ]
    },
    code: {
      value: '',
      rules: [v => !!v || 'Code is required']
    }
  }),
  methods: {
    onSubmit() {
      this.loader = 'loading'
      const l = this.loader
      this[l] = !this[l]

      let payload = {
        username: this.email.value,
        password: this.password.value
      }
      this.$store
        .dispatch('auth/signUpUser', payload)
        .then(user => {
          this.email.disabled = true
          this.password.disabled = true
          this.step++
        })
        .catch(err => {
          this.errmsg = getErrcode(err.message)
          this.showerr = true
          setTimeout(() => {
            this.showerr = false
          }, 2000)
        })
        .finally(() => {
          this[l] = false
          this.loader = null
        })
    },
    onConfirm() {
      let payload = {
        username: this.email.value,
        code: this.code.value
      }
      this.$store
        .dispatch('auth/confirmSignUp', payload)
        .then(data => {
          this.step++
        })
        .catch(err => {
          this.errmsg = getErrcode(err.message)
          this.showerr = true
          setTimeout(() => {
            this.showerr = false
          }, 2000)
        })
        .finally(() => {
          this[l] = false
          this.loader = null
        })
    }
  },
  layout: 'auth',
  head: {
    title: 'Sign Up'
  }
}
</script>
