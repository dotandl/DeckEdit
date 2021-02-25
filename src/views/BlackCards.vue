<template lang="pug">
div.mx-1
  v-btn(fab fixed bottom right color="green" dark @click="addCard")
    v-icon mdi-plus

  v-dialog(v-model="dialog" max-width="600px")
    v-card
      v-card-title
        p.headline Edit Card

      v-card-text
        v-container
          v-row
            v-col
              v-text-field(
                v-model="cards[editedCardIndex]"
                label="Card name"
                @keyup.enter="closeCardEditor")

      v-card-actions
        v-spacer
        v-btn(color="green" text @click="closeCardEditor")
          | #[v-icon(left) mdi-content-save] Save

  v-container
    v-row
      v-col
        h1.my-4 White Cards

    v-row
      v-col(v-for="card, i in cards" :key="i" :cols="3")
        v-card
          v-card-title {{ card }}
          v-card-actions
            v-btn(icon color="primary" @click="editCard(i)")
              v-icon mdi-pencil
            v-btn(icon color="red" @click="deleteCard(i)")
              v-icon mdi-delete

    v-row
      v-col
        v-btn.mr-1(color="primary" to="/")
          | #[v-icon(left) mdi-cog] Edit Deck Properties

        v-btn(color="white" to="/white-cards")
          | #[v-icon(left) mdi-file] Edit White Cards
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    cards: [
      'Wpierdolizer.',
      'Dwa karły srające do wiaderka.',
      'Kamil.',
      'Barack Obama.',
      'Rzut karłem.',
      'Aleksander Kwaśniewski będący po raz pierwszy w swoim życiu trzeźwy.',
    ],
    dialog: false,
    editedCardIndex: -1,
  }),
  methods: {
    addCard() {
      const index = this.cards.push()
      this.editCard(index)
    },
    deleteCard(index: number) {
      this.cards.splice(index, 1)
    },
    editCard(index: number) {
      this.editedCardIndex = index
      this.dialog = true
    },
    closeCardEditor() {
      this.dialog = false
    },
  },
})
</script>
