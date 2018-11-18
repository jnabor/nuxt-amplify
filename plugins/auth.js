import Vue from 'vue'
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

Object.defineProperty(Vue.prototype, '$auth', { value: Auth })
