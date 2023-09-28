<template>
  <button type="button" class="btn" :class="buttonClass" @click="buttonEventHandler">{{ buttonText }}</button>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue'

  interface buttonInterface {
    buttonText : string,
    buttonClass ?: string 
  }

  const props = defineProps<buttonInterface>()
  const emit = defineEmits(['buttonEventHandler'])

  const buttonEventHandler = () => {
    emit('buttonEventHandler')
  }
</script>

<style lang="scss" scoped>
  button{
    width:100%;
    padding:0 4px;
    height:40px;
    line-height:40px;
    border-radius:4px;
    &.btn-type-primary{
      background:#0e0b0b;
      color:#fff;
    }
  }
</style>