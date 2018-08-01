<template>
  <div class="system-management">
    <div class="system-header">
      <span @click="isContentShow = false">系统管理</span><span v-if="isContentShow"> > 管理员权限</span>
    </div>
    <div class="system-content" v-if="isContentShow">
      <div class="content-header">
        <img src="../../assets/logo.png">
        <ul>
          <li>
            <span>管理员:</span><span>XXX</span>
          </li>
          <li>
            <span>编号:</span><span>123456</span>
          </li>
          <li>
            <span>权限等级:</span><span>中</span>
          </li>
        </ul>
      </div>
      <div class="content-con">
        <h5 style="margin: 15px;">基本信息</h5>
        <div class="content-con-list">
          <ul>
            <li>
              <span>XX权限</span>
              <span>权限等级</span>
            </li>
            <li>
              <span>XX权限</span>
              <span>权限等级</span>
            </li>
            <li>
              <span>XX权限</span>
              <span>权限等级</span>
            </li>
            <li>
              <span>XX权限</span>
              <span>权限等级</span>
            </li>
            <li>
              <span>XX权限</span>
              <span>权限等级</span>
            </li>
          </ul>

          <ul>
            <li>
              <span>XX权限</span>
              <span>权限等级</span>
            </li>
            <li>
              <span>XX权限</span>
              <span>权限等级</span>
            </li>
            <li>
              <span>XX权限</span>
              <span>权限等级</span>
            </li>
            <li>
              <span>XX权限</span>
              <span>权限等级</span>
            </li>
            <li>
              <span>XX权限</span>
              <span>权限等级</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="system-list" v-else>
      <ul>
        <li v-for="item in systemList">
          <div class="content-item" @click="itemClick(item.to)">
            <h3>{{item.name}}</h3>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    name: "system-management",
    data() {
      return {
        isContentShow: false,
        systemList: [
          {
            name: "管理员权限",
            to: "manger"
          },
          {
            name: "短信接口",
            to: "api-management"
          },
          {
            name: "日志管理",
            to: "log-management"
          },
          {
            name: "党员管理",
            to: "personnel-management"
          }
        ]
      }
    },
    methods: {
      // 路由跳转的方法 ps：判断如果为manger就显示管理员界面
      itemClick(where) {
        if (where === "manger") {
          this.isContentShow = true
        }
        else {
          this.$router.replace({name: where})
        }
      }
    }
  }
</script>

<style scoped>

  .system-management {
    width: 100%;
    height: 800px;
    border: 1px solid rgba(187, 187, 187, 1);
    background: #F0F0F2;
    padding: 20px;
  }

  .system-header {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid rgba(187, 187, 187, 1);
    line-height: 40px;
    padding-left: 20px;
    color: #607D8B;
  }

  .system-header span {
    cursor: pointer;
  }

  .system-list {
    width: 100%;

  }

  .system-list ul {
    list-style: none;
    margin-top: 150px;
    width: 100%;
    text-align: left;
  }
  .system-list li{
    float: left;
    width: 25%;
  }
  .content-item {
    width: 150px;
    height: 120px;
    background-color: #ffffff;
    border: 2px solid rgba(187, 187, 187, 1);
    border-radius: 5px;
    text-align: center;
    line-height: 120px;
    cursor: pointer;
    margin: 0 auto;
  }

  .system-content {
    background-color: #ffffff;
    display: flex;
    border: 1px solid rgba(187, 187, 187, 1);
    flex-direction: column;
    width: 100%;
    height: auto;
  }

  .content-header{
    display: flex;
    width: 100%;
    height: 170px;
    border-bottom: 1px solid rgba(187, 187, 187, 1);
  }

  .content-header ul{
    list-style: none;
    margin-left: 30px;
    margin-top: 30px;
  }

  .content-header img{
    margin-top: 30px;
    margin-left: 27px;
    left: 187px;
    top: 137px;
    width: 85px;
    height: 85px;
    opacity: 0.8;
  }

  .content-con{
    width: 100%;
    height: auto;
  }

  .content-con-list{
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
  }
  .content-con-list ul{
    height: 400px;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
</style>
