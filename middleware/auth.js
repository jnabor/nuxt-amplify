export default function(context) {
  if (context.store.getters['auth/isAuthenticated']) {
    console.log('mw:user is authenticated...')
  } else {
    console.log('mw: user is not authenticated...')
  }
}
