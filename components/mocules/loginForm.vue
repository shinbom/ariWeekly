<template>
  <div>
    <inputText 
      :inputType="'text'"
      :labelId="'userId'"
      :labelText="'아이디'"
    />
    <inputText 
      :inputType="'password'"
      :labelId="'userPassword'"
      :labelText="'암호'"
    />
    <basicButton/>
  </div>
</template>

<script>
import inputText from '@/components/atom/input/inputText.vue'
import basicButton from '@/components/atom/button/basicButton.vue'

export default {
  name: 'AriWeeklyLoginForm',
  components:{
    inputText,
    basicButton
  },
  setup (){
    
  }

};
</script>

<style lang="scss" scoped>

</style>