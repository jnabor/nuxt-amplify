<template>
  <div>

    <v-toolbar
      class="pa-0 ma-0 elevation-0 grey--text text--darken-1"
      color="white"
    >
      <span class="subheading">Sign In</span>
      <v-spacer></v-spacer>
      <v-btn :to="'/'" color="grey" flat icon nuxt>
        <v-icon>home</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>

    <v-card-text class="pt-4 px-4">
      <appAlert :show="showerr" :type="'error'" :message="errmsg"/>

      <v-form
        v-if="step === 0"
        ref="form" v-model="valid">

        <v-text-field
          v-model="email.value"
          :rules="email.rules"
          color="grey"
          label="E-mail"
          required>
        </v-text-field>

        <v-text-field
          v-model="password.value"
          :rules="password.rules"
          :append-icon="password.hidden? 'visibility' : 'visibility_off'"
          :type="password.hidden ? 'password' : 'text'"
          color="grey"
          label="Password"
          hint="At least 8 characters"
          required
          @click:append="() => (password.hidden = !password.hidden)">
        </v-text-field>

      </v-form>
      <appMainBtn
        :loading="loading"
        :disabled="!(valid && !loading)"
        :label="'Sign In'"
        @submit="signInUser()">
      </appMainBtn>
    </v-card-text>

    <v-card-actions class="pb-2 px-4">
      <v-spacer></v-spacer>
      <v-btn :to="'/auth/signup'" nuxt flat small>Sign Up</v-btn>
      <v-btn :to="'/auth/resetpw'" nuxt flat small class="amber--text">Reset Password</v-btn>
    </v-card-actions>

  </div>
</template>

<script>
export default {
  data: () => ({
    step: 0,
    showerr: false,
    errmsg: '',
    valid: false,
    loading: false,
    email: {
      value: 'sonabstudios@gmail.com',
      rules: [
        v => !!v || 'E-mail is required',
        v => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(v) || 'E-mail must be valid'
        }
      ]
    },
    password: {
      value: 'Gr@ffiti22',
      hidden: true,
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
    }
  }),
  methods: {
    async signInUser() {
      this.loading = true

      this.$auth.configure({
        // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: 'ap-southeast-1:a86e9dd5-3517-489f-a39b-a908ca0a1ea3',
        // REQUIRED - Amazon Cognito Region
        region: 'ap-southeast-1',
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'ap-southeast-1_pg6I6G46d',
        // OPTIONAL - Amazon Cognito Web Client ID
        userPoolWebClientId: '1sk4imnbv6lpoj5do1bgk4k796'
      })
      try {
        let user = await this.$auth.signIn(
          this.email.value,
          this.password.value
        )
        console.log(user)
        this.$router.push('/')
      } catch (err) {
        console.log(err)
        this.errmsg = this.$getErrorCode(err.message)
        this.showerr = true
        setTimeout(() => {
          this.showerr = false
        }, 2000)
      }
      this.loading = false
    }
  },
  layout: 'auth',
  head: {
    title: 'Sign In'
  }
}
</script>
