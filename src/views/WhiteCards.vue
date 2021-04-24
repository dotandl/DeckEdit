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
                v-model="editedCard.value"
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
        v-card(color="white")
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

        v-btn(color="black" dark to="/black-cards")
          | #[v-icon(left) mdi-file] Edit Black Cards
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  data: () => ({
    dialog: false,
    editedCard: {
      index: -1,
      value: '',
    },
  }),
  computed: {
    ...mapGetters({ cards: 'getWhiteCards' }),
  },
  methods: {
    addCard() {
      this.$store.commit('addWhiteCard')
      this.editCard(this.cards.length - 1)
    },
    deleteCard(index: number) {
      this.$store.commit('removeWhiteCard', index)
    },
    editCard(index: number) {
      this.editedCard = {
        index,
        value: this.cards[index],
      }

      this.dialog = true
    },
    closeCardEditor() {
      this.dialog = false
      this.$store.commit('editWhiteCard', this.editedCard)

      this.editedCard = {
        index: -1,
        value: '',
      }
    },
  },
  beforeMount() {
    document.title = 'White Cards | DeckEdit'
  },
})
</script>
