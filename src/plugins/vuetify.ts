import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

function checkDarkMode() {
  const darkMode = localStorage.getItem('darkMode')

  switch (darkMode) {
    case 'light':
      return false

    case 'dark':
      return true

    case 'system':
    default:
      return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
}

export default new Vuetify({ theme: { dark: checkDarkMode() } })
