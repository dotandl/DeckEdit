<template lang="pug">
v-app
  v-dialog(v-model="uploadDialog" max-width="600px")
    v-card
      v-card-title
        p.headline Upload Deck

      v-card-text
        v-container
          v-row
            v-col
              v-radio-group(v-model="uploadMode")
                v-radio(label="Merge Cards (add Cards to the current Deck)" :value="0")
                v-radio(label="Merge Cards & Replace Properties (add Cards to the current Deck and overwrite Deck's properties)" :value="1")
                v-radio(label="Replace Everything (overwrite the current Deck)" :value="2")
          v-row
            v-col
              v-file-input(@change="changeFile($event)" accept=".json" label="Import JSON file")

      v-card-actions
        v-spacer
        v-btn(color="green" text @click="upload")
          | #[v-icon(left) mdi-upload] Upload

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

      v-list-item(@click="uploadDialog = true")
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
import upload, { UploadMode } from './utils/upload'

export default Vue.extend({
  name: 'App',
  data: () => ({
    drawer: null,
    uploadDialog: false,
    uploadMode: UploadMode.Merge,
    importedFile: '',
  }),
  mounted() {
    window.addEventListener('beforeunload', e => {
      e.preventDefault()
      e.returnValue = ''
    })
  },
  methods: {
    changeFile(e: File) {
      const reader = new FileReader()

      reader.onload = (fileContents: ProgressEvent<FileReader>) => {
        const json = fileContents.target?.result
        this.importedFile = json as string
      }

      reader.readAsText(e)
    },
    upload() {
      if (this.importedFile === '') {
        alert('You need to specify a Deck file to upload')
        this.uploadDialog = false
        return
      }

      upload(this.$store, this.importedFile, this.uploadMode)
      this.uploadDialog = false
    },
    async download() {
      const json = await this.$store.dispatch('exportJSON')
      download(json, `${this.$store.getters.getWatermark}.json`)
    },
  },
})
</script>
