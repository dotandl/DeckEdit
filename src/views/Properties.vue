<template lang="pug">
v-container.mx-1
  v-row
    v-col
      h1.my-4 Deck Properties

  v-row
    v-col(:cols="mobile ? 12 : 6")
      v-text-field(
        :value="getTitle"
        @input="setTitle"
        label="Title"
        :rules="rules.common"
        outlined)

    v-col(:cols="mobile ? 12 : 6")
      v-text-field(
        :value="getWatermark"
        @input="setWatermark"
        label="Watermark"
        counter="5"
        :rules="rules.watermark"
        outlined)

    v-col(:cols="12")
      v-textarea(
        :value="getDescription"
        @input="setDescription"
        label="Description"
        :rules="rules.common"
        outlined)

  v-row
    v-col
      v-btn.mr-1(color="white" light to="/white-cards")
        | #[v-icon(left) mdi-file] Edit White Cards
      v-btn(color="black" dark to="/black-cards")
        | #[v-icon(left) mdi-file] Edit Black Cards
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'

export default Vue.extend({
  data: () => ({
    rules: {
      watermark: [
        (w: string) =>
          !!w.match(/^[A-Z0-9]{5}$/i) ||
          'Watermark must contain 5 letters and digits',
      ],
      common: [(s: string) => !!s || 'Required'],
    },
    mobile: false,
  }),
  computed: {
    ...mapGetters(['getTitle', 'getWatermark', 'getDescription']),
  },
  methods: {
    ...mapMutations(['setTitle', 'setWatermark', 'setDescription']),
  },
  beforeMount() {
    document.title = 'Properties | DeckEdit'
  },
  mounted() {
    const media = window.matchMedia('(max-width: 991px)')
    this.mobile = media.matches
    media.addEventListener('change', m => (this.mobile = m.matches))
  },
})
</script>
