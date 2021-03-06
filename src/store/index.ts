import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'New Deck',
    watermark: '00000',
    description: 'My awesome Deck',
    whiteCards: ['The biggest, blackest dick.'],
    blackCards: ["What's that smell? _"],
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
    addWhiteCard(state, value = '') {
      state.whiteCards.push(value)
    },
    removeWhiteCard(state, index: number) {
      state.whiteCards.splice(index, 1)
    },
    editWhiteCard(state, { index, value }) {
      state.whiteCards[index] = value
    },
    addBlackCard(state, value = '') {
      state.blackCards.push(value)
    },
    removeBlackCard(state, index: number) {
      state.blackCards.splice(index, 1)
    },
    editBlackCard(state, { index, value }) {
      state.blackCards[index] = value
    },
    updateProperties(state, { title, description, watermark }) {
      state.title = title
      state.description = description
      state.watermark = watermark
    },
    importJSON(state, json) {
      state.title = json.name
      state.description = json.description
      state.watermark = json.watermark

      state.whiteCards = json.responses.map((c: { text: string[] }) =>
        c.text.join(' ')
      )

      state.blackCards = json.calls.map((c: { text: string[] }) =>
        c.text.join('_')
      )
    },
  },
  actions: {
    exportJSON({ state }): string {
      const blackCards = state.blackCards.map(c => c.split('_'))

      const json = {
        name: state.title,
        description: state.description,
        watermark: state.watermark.toUpperCase(),
        responses: state.whiteCards.map(c => ({ text: [c] })),
        calls: blackCards.map(c => ({ text: c })),
      }

      return JSON.stringify(json)
    },
  },
})
