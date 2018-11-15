import Auth from '@aws-amplify/auth'

Auth.configure({
  // REQUIRED - Amazon Cognito Identity Pool ID
  identityPoolId: 'ap-southeast-1:a86e9dd5-3517-489f-a39b-a908ca0a1ea3',
  // REQUIRED - Amazon Cognito Region
  region: 'ap-southeast-1',
  // OPTIONAL - Amazon Cognito User Pool ID
  userPoolId: 'ap-southeast-1_pg6I6G46d',
  // OPTIONAL - Amazon Cognito Web Client ID
  userPoolWebClientId: '1sk4imnbv6lpoj5do1bgk4k796'
})

const state = () => ({
  username: '',
  userGroup: ''
})

export const getters = {
  isAuthenticated(state, text) {
    return false
  }
}

export const mutations = {
  sample(state, text) {
    console.log(state)
    console.log(text)
  }
}

export const actions = {
  signUpUser(state, payload) {
    let attributes = {
      username: payload.username,
      password: payload.password
    }
    return Auth.signUp(attributes)
  },
  confirmSignUp(state, payload) {
    return Auth.confirmSignUp(payload.username, payload.code, {
      forceAliasCreation: true
    })
  },
  signInUser(state, payload) {
    return Auth.signIn(payload.username, payload.password)
  }
}