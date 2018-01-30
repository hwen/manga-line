<template lang="pug">
.land-sunk
  MangaHeader(background='ludichenmoji.png')
  light-timeline(:items='items')
</template>
<script>
import items from '@/data/LandSunk'
import MangaHeader from '@/components/MangaHeader.vue'

export default {
  components: {
    MangaHeader
  },
  data () {
    return {
      items
    }
  },
  created () {
    logs('land sunk part')
  },
  methods: {

  }
}
</script>
<style lang="scss">
</style>

