export default function(context) {
  if (process.client) {
    console.log('auth middleware', context.store.getters.isAuthenticated)
    if (!context.store.getters.isAuthenticated) {
      // context.redirect('/auth/signin')
    }
  }
}
