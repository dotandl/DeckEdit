<template lang="pug">
div.mx-1
  v-btn(fab fixed bottom right color="green" dark @click="addCard")
    v-icon mdi-plus

  v-dialog(v-model="dialog" max-width="600px")
    v-card
      v-card-title
        p.headline Edit Card

      v-card-subtitle
        | Use #[i _] to indicate the place for the White Card.

      v-card-text
        v-container
          v-row
            v-col
              v-text-field(
                v-model="cards[editedCardIndex]"
                label="Card name"
                :rules="rules"
                @keyup.enter="closeCardEditor")

      v-card-actions
        v-spacer
        v-btn(color="green" text @click="closeCardEditor")
          | #[v-icon(left) mdi-content-save] Save

  v-container
    v-row
      v-col
        h1.my-4 Black Cards

    v-row
      v-col(v-for="card, i in cards" :key="i" :cols="3")
        v-card(color="black" dark)
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
      'Raz w dupe to nie _.',
      'Czasem lubię udawać że jestem _.',
      'Jestem chory na _.',
      'Nie mogę się rozstać ze swoją kolekcją _.',
      'To wszystko przez _.',
      'Może jeszcze _ do tego.',
    ],
    rules: [
      (s: string) =>
        s.includes('_') || "The Black Card's name must contain at least one _",
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
