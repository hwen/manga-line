<template lang="pug">
.manga-header(:style='styleObj')
</template>
<script>
export default {
  name: 'manga-header',
  props: {
    background: {
      type: String,
      default: 'Senjougahara-huaji.jpg'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    styleObj () {
      return {
        background: `url(./../assets/${this.background})`
      }
    }
  }
}
</script>
<style lang="scss">
.manga-header {
  height: 200px;
  width: 100%;
  background: url('./../assets/Senjougahara-huaji.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.5;
}
</style>
