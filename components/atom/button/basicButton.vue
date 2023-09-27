<template>
  <button type="button">{{ buttonText }}</button>
</template>

<script lang="ts">
export default {
  name: 'AriWeeklyBasicButton',
  props : {
    buttonText : String,
  }
};
</script>

<style lang="scss" scoped>

</style>