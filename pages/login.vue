<template>
  <div class="ari-wrap">
    <ul class="ari-eye">
      <li class="left-eye"></li>
      <li class="right-eye"></li>
    </ul>
    <i class="ari-beak"></i>
  </div>
  <loginForm @getFocusCurrentValue="getFocusCurrentValue"/>
  <nuxt-link to="/test">테스트</nuxt-link>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
import loginForm from '~/components/mocules/loginForm.vue';

const getFocusCurrentValue = (payload) => {
  console.log('전송 데이터 :: ', payload)
}
</script>

<style lang="scss" scoped>
  .ari-wrap{
    width:60%;
    height:0;
    margin:0 auto;
    padding-top:40%;
    position:relative;
    border-radius:50% 50% 0 0;
    background:#fffaac;
    box-shadow:0px -16px 20px rgba(83, 66, 22, 0.5);
    border-bottom:none;
    &:before{
      content:'';
      position:absolute;
      bottom:0;
      left:50%;
      transform:translate(-50%, 0);
      width:80%;
      height:80%;
      background:rgba(227, 176, 62, 0.5);
      border-radius:50% 50% 0 0;
      filter:blur(8px);
      z-index:2;
    }
    .ari-eye {
      position:absolute;
      top:40%;
      left:50%;
      width:35%;
      z-index:3;
      transform: translate(-50%, -50%);
      li{
        position:absolute;
        top:0;
        width:10px;
        height:4px;
        padding:10px 0;
        border-radius:8px;
        background:#534216;
        &.left-eye{
          left:0;
        }
        &.right-eye{
          right:0;
        }
      }
    }
    .ari-beak{
      position:absolute;
      width:60px;
      height:15px;
      top:55%;
      left:50%;
      transform: translate(-50%, -50%);
      border-radius:25px 25px 8px 8px;
      background:#f3a538;
      box-shadow:0px 3px 2px rgba(126, 80, 30, 0.5);
    }
  }

</style>