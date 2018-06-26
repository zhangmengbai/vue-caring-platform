<template>
  <div class="login">
    <h1 class="title">曲靖市委组织部党员关爱平台</h1>
    <div id="form">
      <input v-model="name" class="login-input" type="text" placeholder="用户名" @blur="setStorage(name)">
      <input v-model="passWord" class="login-input" type="password" placeholder="密码">
      <button class="login-submit" @click="submit(name,passWord)">登录</button>
      <div id="tip">如忘记账号密码，请与后台人员联系</div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "login",

    data() {
      return {
        name: '',
        passWord: '',

      }
    },
    methods: {
      // 账户输入完成时存入本地
      data(){
        return{
          userInfo: {
            userName: null
          }
        }
      },
      setStorage: (name) => {
        // 声明一个json对象来存储name
        var userInfo = {
          userName:'',
          passWord:31
        }
        console.log(name)
        userInfo.userName = name
        console.log(userInfo)
        localStorage.setItem("user",JSON.stringify(userInfo))
        console.log(localStorage.getItem("user"))
      },
      // 登录事件
      submit:function (name,passWord){
        this.$router.replace({name: 'home'})
      },
    },
  }
</script>

<style scoped>
  @import "login.css";
</style>
