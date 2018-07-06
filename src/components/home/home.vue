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
        <div class="dialog-header">
          <p class="dialog-header-tip">提示</p>
          <div class="dialog-close" @click="close()">
            <font-awesome-icon :icon="['fas','times']" size="1x"/>
          </div>
        </div>
        <div class="dialog-section">
          <div>
            <font-awesome-icon :icon="['fas','question-circle']" size="3x"/>
          </div>
          <h3>确定要退出当前账号吗？</h3>
        </div>
        <div class="dialog-button">
          <button @click="loginOut(true)" class="determine">确认</button>
          <button @click="loginOut(false)" class="cancel">取消</button>
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
    max-height: 80%;
    overflow: auto;
    background: #fff;
    top: 5%;
    left: 40%;
    z-index: 10;
    border: 1px solid #707070;
    line-height: 1.6;
  }
  .dialog-content h2{
    text-align: center;
  }
  .dialog-header {
    display: flex;
    height: 40px;
    justify-content: space-between;
    align-items: center;
    background-color: #78909C;
    color: #ffffff;
  }
  .dialog-header-tip {
    margin-left: 10px;
  }
  .dialog-close {
    margin-right: 10px;
    font-size: 18px;
    cursor: pointer;
    color: #ffffff;
  }
  .dialog-close:hover {
    color: #000000;
  }
  .dialog-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100px;
    margin-top: 20px;
    color: #7A797A ;
  }
  .dialog-button {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    text-align: center;
  }

  .dialog-button button {
    margin: 16px 16px;
    font-size: 16px;
    cursor: pointer;
    padding: 5px 20px;
    outline: none;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
  }
  .determine{
    background-color: #78909C;
    color: #ffffff;
  }
  .cancel{
    background-color: #ffffff;
    color: #78909C;
    border: 1px solid #BBBBBB;
  }
  .dialog-button button:hover{
    background-color: #666666;
    color: #ffffff;
  }
</style>
