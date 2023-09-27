<template>
  <div class="ari-wrap">
    <ul class="ari-eye">
      <li class="left-eye"></li>
      <li class="right-eye"></li>
    </ul>
    <i class="ari-beak"></i>
  </div>
  <loginForm/>
</template>

<script>
import loginForm from './mocules/loginForm.vue';

export default {
  components:{
    loginForm 
  }
}
</script>

<style lang="scss" scoped>
  .ari-wrap{
    width:60%;
    height:0;
    margin:0 auto;
    padding-top:40%;
    position:relative;
    border-radius:30% 30% 0 0 ;
    background:#fffaac;
    border:1px solid rgba(83, 66, 22, 0.5);
    border-bottom:none;
    .ari-eye {
      position:absolute;
      top:40%;
      left:50%;
      width:35%;
      transform: translate(-50%, -50%);
      li{
        position:absolute;
        top:0;
        width:10px;
        height:4px;
        border-radius:8px;
        background:#534216;
        animation: eyeClose 1s  forwards;
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
      background:#f28d03;
      border:1px solid #7e501e;
    }
  }

  @keyframes eyeClose{
    10% {
      padding: 10px 0;
    }
    40% {
      padding: 0;
    }
    100%{
      padding: 10px 0;
    }
  }
</style>