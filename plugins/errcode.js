import Vue from 'vue'

Vue.prototype.$getErrorCode = message => {
  console.log('message: ' + message)
  let errorMessages = [
    'An account with the given email already exists.',
    'Invalid verification code provided, please try again.',
    'Incorrect username or password.',
    'User does not exist.'
  ]
  if (!errorMessages.includes(message)) {
    message = 'An internal error has occured'
  }
  return message
}
