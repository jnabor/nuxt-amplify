import Vue from 'vue'
import Auth from '@aws-amplify/auth'

Auth.configure({
  // REQUIRED - Amazon Cognito Identity Pool ID
  identityPoolId: 'ap-southeast-1:a86e9dd5-3517-489f-a39b-a908ca0a1ea3',
  // REQUIRED - Amazon Cognito Region
  region: 'ap-southeast-1',
  // OPTIONAL - Amazon Cognito User Pool ID
  userPoolId: 'ap-southeast-1_h8QMALq3B',
  // OPTIONAL - Amazon Cognito Web Client ID
  userPoolWebClientId: '4o9bsfndgt7dqj7kmmcl7k78pa'
})

Vue.use(Auth)
