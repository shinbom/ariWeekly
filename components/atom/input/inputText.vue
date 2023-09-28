<template>
  <div class="txt">
    <label :for="labelId">{{ labelText }}</label>
    <input :type=inputType :id="labelId" v-model="inputValue" spellcheck="false" @keyup="inputHandler($event)">
  </div>
</template>

<script setup lang="ts">
  import {ref, defineEmits} from 'vue'

  interface inputTextInterface {
    inputType : string,
    labelId ?: string,
    labelText ?: string
  }

  const inputValue = ref('') 

  const props = defineProps<inputTextInterface>()

  const emit = defineEmits()
  const inputHandler = (e : Event) => {
    emit('inputHandler', inputValue.value)
  }
</script>

<style lang="scss" scoped>
.txt{
  label{
    display:block;
    margin-bottom:5px;
  }
  input{
    width:100%;
    height:40px;
    padding:4px 8px;
    border-radius:4px;
    border:1px solid #bebebe;
    box-sizing:border-box;
  }
}
</style>