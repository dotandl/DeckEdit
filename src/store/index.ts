import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'New Deck',
    watermark: '00000',
    description: 'My awesome Deck',
    whiteCards: [],
    blackCards: [],
  },
  getters: {
    getTitle(state): string {
      return state.title
    },
    getWatermark(state): string {
      return state.watermark
    },
    getDescription(state): string {
      return state.description
    },
  },
  mutations: {
    setTitle(state, title: string) {
      state.title = title
    },
    setWatermark(state, watermark: string) {
      state.watermark = watermark
    },
    setDescription(state, description: string) {
      state.description = description
    },
  },
  actions: {},
  modules: {},
})
