<template lang="pug">
v-container.mx-1
  v-row
    v-col
      h1.my-4 Deck Properties

  v-row
    v-col(:cols="6")
      v-text-field(label="Title" :rules="rules.common" outlined)

    v-col(:cols="6")
      v-text-field(label="Watermark" counter="5" :rules="rules.watermark" outlined)

    v-col(:cols="12")
      v-textarea(label="Description" :rules="rules.common" outlined)

  v-row
    v-col
      v-btn.mr-1(color="white" to="/white-cards")
        | #[v-icon(left) mdi-file] Edit White Cards
      v-btn(color="black" dark to="/black-cards")
        | #[v-icon(left) mdi-file] Edit Black Cards
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    rules: {
      watermark: [
        (w: string) =>
          (!!w && w.match(/^[A-Z0-9]{5}$/i)) ||
          'Watermark must contain 5 letters and digits',
      ],
      common: [(s: string) => !!s || 'Required'],
    },
  }),
})
</script>
