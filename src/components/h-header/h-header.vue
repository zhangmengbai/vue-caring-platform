<template>
<div class="h-header">
  <div class="icon"></div>
  <hr>
  <h1 class="text">曲靖市委组织部党员关爱平台</h1>
  <h2 class="user-name">管理员XXX</h2>
</div>
</template>

<script>
    export default {
        name: "h-header"
    }
</script>

<style scoped>
  hr{
    height: 18px;
    border: 1px solid #ffffff;
    display: inline;
    margin-left: 50px;
    margin-right: 50px;
  }
  .h-header {
    display: inline-block;
    position: relative;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 55px;
    line-height: 20px;
    background-color: rgba(102, 102, 102, 1);
  }
  .icon{
    float: left;
    background: url("logo.png") no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    margin-left: 23px;
    width: 54px;
    height: 50px;
  }
  .text{
    display: inline-block;
    width: 196px;
    height: 55px;
    line-height: 55px;
    color: rgba(255, 255, 255, 1);
    font-size: 15px;
    text-align: left;
    font-family: Roboto;
  }
  .user-name{
    float: right;
    margin-right: 100px;
    height: 55px;
    line-height: 55px;
    color: rgba(255, 255, 255, 1);
    font-size: 12px;
    text-align: center;
    font-family: Roboto;
  }
</style>
