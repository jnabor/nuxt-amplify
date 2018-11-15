export default function(message) {
  console.log('error message: ' + message)
  let errorMessages = [
    'An account with the given email already exists.',
    'Invalid verification code provided, please try again.'
  ]
  if (!errorMessages.includes(message)) {
    message = 'An internal error has occured'
  }
  return message
}
