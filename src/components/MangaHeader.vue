<template lang="pug">
.manga-header
  .manga-title 陆地沉没记 ~ 少年S的记录 ~
  .manga-layer
  .manga-background(:style='styleObj')
  .manga-triangle
</template>
<script>
const Base = process.env.NODE_ENV === 'gh'
  ? './../manga-line/assets'
  : './../assets'
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
        background: `url(${Base}/${this.background})`
      }
    }
  }
}
</script>
<style lang="scss">
.manga-header {
  height: 200px;
  position: relative;
  .manga-background {
    width: 100%;
    top: 0;
    bottom: 0;
    background: url('./../assets/Senjougahara-huaji.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    z-index: -1;
    opacity: 0.2;
  }
  .manga-layer {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    opacity: 0.2;
    // background: #8b80f9;
  }
  .manga-triangle {
    z-index: 2;
    position: absolute;
    width: 0;
    height: 50;
    left: 0;
    top: 150px;
    border-style: solid;
    border-width: 0 100vw 50px 0 ;
    border-color: white transparent;
  }
  .manga-title {
    position: absolute;
    top: 45%;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 24px;
    color: #606c76;
  }
}
</style>
