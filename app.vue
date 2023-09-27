<template>
  <div id="app" >
    <ariTest  />
    <NuxtPage />
  </div>
</template>

<script>
import ariTest from './components/ariTest.vue';
export default {
  components: {
    ariTest
  },
  methods: {
    test(e){
      e.preventDefault()
      console.log(e)
      console.log('width::' , window.outerWidth)
    }
  }
}
</script>

<style lang="scss" scoped>
  #app{
    height:400px;
    padding-top:50px;
    box-sizing: border-box;
  }
</style>