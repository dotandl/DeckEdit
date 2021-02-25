<template lang="pug">
v-app
  v-navigation-drawer.pt-3(app color="green" dark v-model="drawer")
    v-list-item
      v-list-item-content
        v-list-item-title.title {{ $store.getters.getTitle }}

    v-list(nav)
      v-list-item(to="/")
        v-list-item-icon
          v-icon mdi-cog
        v-list-item-content
          v-list-item-title Deck Properties

      v-list-item(to="/white-cards")
        v-list-item-icon
          v-icon mdi-file
        v-list-item-content
          v-list-item-title White Cards

      v-list-item(to="/black-cards")
        v-list-item-icon
          v-icon mdi-file
        v-list-item-content
          v-list-item-title Black Cards

      v-divider

      v-list-item
        v-list-item-icon
          v-icon mdi-upload
        v-list-item-content
          v-list-item-title Upload Deck

      v-list-item(@click="download")
        v-list-item-icon
          v-icon mdi-download
        v-list-item-content
          v-list-item-title Download Deck

  v-app-bar(app color="green" dark)
    v-app-bar-nav-icon(@click="drawer = !drawer")
    v-toolbar-title DeckEdit

    v-spacer

    v-btn(href="https://github.com/dotandl/DeckEdit" target="_blank" text)
      span.mr-2 GitHub
      v-icon mdi-github

  v-main
    router-view
</template>

<script lang="ts">
import Vue from 'vue'
import download from './utils/download'

export default Vue.extend({
  name: 'App',
  data: () => ({
    drawer: null,
  }),
  methods: {
    async download() {
      const json = await this.$store.dispatch('exportJSON')
      download(json, `${this.$store.getters.getWatermark}.json`)
    },
  },
})
</script>
