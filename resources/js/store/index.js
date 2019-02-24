import Vuex from 'vuex'
import auth from './auth/authStore'
import system from './systemStore'
import myProfile from './auth/myProfile'
import menu from './menu'

const store = () => {
  return new Vuex.Store({
    modules: {
      auth,
      myProfile,
      menu,
      system,
    },
    strict: true,
  })
}

export default store