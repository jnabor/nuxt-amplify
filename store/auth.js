export const state = () => ({
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
  signUpUser(state, text) {
    console.log('signing up..')

    return setTimeout(() => {
      console.log('sign up called in store...')
    }, 1000)
  },
  signInUser(state, text) {
    console.log('signing up..')
  }
}
