export default function(context) {
  if (process.client) {
    console.log('noauth middleware', context.store.getters.isAuthenticated)
    if (context.store.getters.isAuthenticated) {
      // context.redirect('/')
    }
  }
}
