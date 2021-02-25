<template lang="pug">
v-container
  h1 Deck Properties
  v-divider.mb-10

  v-text-field(label="Title" :rules="rules.common" outlined)
  v-textarea(label="Description" :rules="rules.common" outlined)
  v-text-field(label="Watermark" counter="5" :rules="rules.watermark" outlined)

  v-btn.mr-1(color="white") Edit White Cards
  v-btn(color="black" dark) Edit Black Cards
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    rules: {
      watermark: [
        (w: string) =>
          w.match(/^[A-Z0-9]{5}$/i) ||
          'Watermark must contain 5 letters and digits',
      ],
      common: [(s: string) => !!s || 'Required'],
    },
  }),
})
</script>
