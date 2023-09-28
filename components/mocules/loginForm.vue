<template>
  <div class="login-form">
    <inputText 
      :inputType="'text'"
      :labelId="'userId'"
      :labelText="'아이디'"
      @inputHandler="setFoucsId"
    />
    <inputText 
      :inputType="'password'"
      :labelId="'userPassword'"
      :labelText="'암호'"
      @inputHandler="setFoucsPw"
    />
    <basicButton :buttonText="'LOGIN'" :buttonClass="'btn-type-primary'" @buttonEventHandler="sendLogin"/>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive,defineEmits  } from 'vue'
import userService from '~/services/userService';

import inputText from '@/components/atom/input/inputText.vue';
import basicButton from '@/components/atom/button/basicButton.vue'

const userInfo = reactive({
  email : '',
  password : ''
})

const emit = defineEmits(['getFocusCurrentValue', 'setAriClass'])

const focusElement = ref('')

const sendLogin = () => {
  if(!userInfo.email || !userInfo.password){
    console.log('아이디 / 암호 없어')
    emit('setAriClass', 'ari-error')
    return
  }

  const UserService = new userService()
  UserService.login(userInfo.email, userInfo.password)
}

const setFoucsId = (payload : string) => {
  userInfo.email = payload
  focusElement.value = 'id'
  emit('getFocusCurrentValue', focusElement.value)
}

const setFoucsPw = (payload : string) => {
  userInfo.password = payload
  focusElement.value = 'pw'
  emit('getFocusCurrentValue', focusElement.value)
}

</script>

<style lang="scss" scoped>
.login-form::v-deep(.btn){
  margin-top:20px;
}
</style>