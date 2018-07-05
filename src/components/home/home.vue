<template>
  <div class="home">
    <h-header></h-header>
    <div class="section">
      <tab @showDialog="setShow(true)"></tab>
      <router-view/>
    </div>
    <!--二次确认退出-->
    <base-dialog :is-show="isShowDialog" @on-close="hideDialog('isShowDialog')">
      <div class="dialog-content">
        <p class="dialog-close" @click="close()">x</p>
        <h2>是否退出登录</h2>
        <div class="dialog_button">
          <button @click="loginOut(true)" style="background-color: #21A465">确认</button>
          <button @click="loginOut(false)" style="background-color: #DD5145">取消</button>
        </div>
      </div>
    </base-dialog>
  </div>
</template>

<script>
  import HHeader from 'components/h-header/h-header'
  import Tab from 'components/tab/tab'

  export default {
    name: "home",
    data(){
      return{
        isShowDialog: false
      }
    },
    methods: {
      // 获取本地用户信息
      getStorage: () => {
        var userInfo = localStorage.getItem("user")
        console.log(JSON.parse(userInfo))
      },
      // 关闭dialog
      hideDialog (param) {
        this[param] = false
      },
      // 退出确认
      setShow(show){
        this.isShowDialog = show
      },
      //
      loginOut(is){
        if (is){
          this.$router.replace({name: 'login'})
        } else {
          this.isShowDialog = is
        }
      },
      close(){
        this.isShowDialog = false;
      }
    },
    mounted() {
      this.getStorage()

    },
    components: {
      HHeader,
      Tab
    },
  }
</script>

<style scoped>
  .home {
    height: 100%;
  }
  .section{
    display: flex;
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .dialog-content {
    width: 20%;
    position: fixed;
    max-height: 50%;
    overflow: auto;
    background: #fff;
    top: 20%;
    left: 40%;
    z-index: 10;
    border: 2px solid #464068;
    padding: 2%;
    line-height: 1.6;
  }
  .dialog-content h2{
    text-align: center;
  }
  .dialog-close {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 20px;
    height: 20px;
    text-align: center;
    cursor: pointer;
  }
  .dialog-close:hover {
    color: #4fc08d;
  }
  .dialog_button{
    margin-top: 50px;
    text-align: center;
  }

  .dialog_button button{
    margin: 30px;
    font-size: x-large;
    cursor: pointer;
    padding: 10px 20px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    color: #ffffff;
  }
</style>
