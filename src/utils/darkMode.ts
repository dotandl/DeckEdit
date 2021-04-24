import { Framework } from 'vuetify'

export function checkDarkMode() {
  const darkMode = localStorage.getItem('darkMode')

  switch (darkMode) {
    case 'light':
      return false

    case 'dark':
      return true

    default:
      return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
}

export function toggleDarkMode(vuetify: Framework) {
  const darkMode = checkDarkMode()

  vuetify.theme.dark = !darkMode
  localStorage.setItem('darkMode', !darkMode ? 'dark' : 'light')
}
