<template>
  <div id="app">
    <div id="header"></div>
    <div>
      <infomation></infomation>
    </div>
  </div>
</template>

<script>
import Infomation from "./components/Information.vue"
export default {
  name: 'App',
  components:{
    Infomation
  }
}
</script>

<style lang="scss">
  @import './style/_scroll-bar.scss';
</style>
