<template>
  <div class="txt">
    <label :for="labelId">{{ labelText }}</label>
    <input :type=inputType :id="labelId" v-model="inputValue" spellcheck="false">
  </div>
</template>

<script lang="ts">
import {ref} from 'vue'

// interface inputTextInterface {
//   inputType : String,
//   labelId ?: String,
//   labelText ?: String
// }


export default {
  name: 'AriWeeklyInputText',
  props : {
    inputType : String,
    labelId : String,
    labelText: String
  },
  setup : (props) =>{
    const inputValue = ref('') 
    return {inputValue}
  }
 
};
</script>

<style lang="scss" scoped>
.txt{
  input{
    width:100%;
    height:40px;
    padding:4px 8px;
    border-radius:4px;
    box-sizing:border-box;
  }
}
</style>