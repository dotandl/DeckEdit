import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'New Deck',
    watermark: '00000',
    description: 'My awesome Deck',
    whiteCards: [
      'Wpierdolizer.',
      'Dwa karły srające do wiaderka.',
      'Kamil.',
      'Barack Obama.',
      'Rzut karłem.',
      'Aleksander Kwaśniewski będący po raz pierwszy w swoim życiu trzeźwy.',
    ],
    blackCards: [
      'Raz w dupe to nie _.',
      'Czasem lubię udawać że jestem _.',
      'Jestem chory na _.',
      'Nie mogę się rozstać ze swoją kolekcją _.',
      'To wszystko przez _.',
      'Może jeszcze _ do tego.',
    ],
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
    getWhiteCards(state): string[] {
      return state.whiteCards
    },
    getBlackCards(state): string[] {
      return state.blackCards
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
    addWhiteCard(state) {
      state.whiteCards.push('')
    },
    removeWhiteCard(state, index: number) {
      state.whiteCards.splice(index, 1)
    },
    editWhiteCard(state, { index, value }) {
      state.whiteCards[index] = value
    },
    addBlackCard(state) {
      state.blackCards.push('')
    },
    removeBlackCard(state, index: number) {
      state.blackCards.splice(index, 1)
    },
    editBlackCard(state, { index, value }) {
      state.blackCards[index] = value
    },
  },
  actions: {},
  modules: {},
})
