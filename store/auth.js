import Auth from '@aws-amplify/auth'

Auth.configure({
  // REQUIRED - Amazon Cognito Identity Pool ID
  identityPoolId: 'ap-southeast-1:a86e9dd5-3517-489f-a39b-a908ca0a1ea3',
  // REQUIRED - Amazon Cognito Region
  region: 'ap-southeast-1',
  // OPTIONAL - Amazon Cognito User Pool ID
  userPoolId: 'ap-southeast-1_h8QMALq3B',
  // OPTIONAL - Amazon Cognito Web Client ID
  userPoolWebClientId: '79d74c4kru8cdnvg955psden6v'
})

const state = () => ({
  sample: ''
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
    Auth.signUp(payload)
      .then(data => console.log(data))
      .catch(err => console.log(err))
  },
  signInUser(state, payload) {
    return Auth.signIn(payload.username, payload.password)
  }
}
