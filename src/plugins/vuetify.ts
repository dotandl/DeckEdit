import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

import { checkDarkMode } from '@/utils/darkMode'

Vue.use(Vuetify)

export default new Vuetify({ theme: { dark: checkDarkMode() } })
