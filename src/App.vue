<template lang="pug">
v-app
  v-navigation-drawer(app color="green" dark v-model="drawer")
    v-list(nav)
      v-list-item-group
        v-subheader Upload/Download

        v-list-item
          v-list-item-icon
            v-icon mdi-upload
          v-list-item-content
            v-list-item-title Upload Deck

        v-list-item
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
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  data: () => ({
    drawer: false,
  }),
})
</script>
