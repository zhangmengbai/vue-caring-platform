<template>
  <div class="home">
    <h-header></h-header>
    <div class="section">
      <tab @showDialog="setShow"></tab>
      <router-view/>
    </div>
    <base-dialog :is-show="isShowDialog" @on-close="hideDialog('isShowDialog')">
      <h2>是否退出登录</h2>
      <div class="dialog_button">
        <button @click="loginOut(true)">确认</button>
        <button @click="loginOut(false)">取消</button>
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
      getStorage: () => {
        var userInfo = localStorage.getItem("user")
        console.log(JSON.parse(userInfo))
      },
      hideDialog (param) {
        this[param] = false
      },
      setShow(show){
        this.isShowDialog = show
      },
      loginOut(is){
        if (is){
          this.$router.replace({name: 'login'})
        } else {
          this.isShowDialog = is
        }
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
  .dialog_button{
    margin-top: 50px;
    text-align: center;
  }

  .dialog_button button{
    margin: 30px;
    font-size: x-large;
    cursor: pointer;
  }
</style>
