<template>
  <div class="tab">
    <ul>
      <router-link tag="li" class="ul-item" to="/home/system-management" active-class="active">
        <div class="font-icon">
          <font-awesome-icon :icon="['fas','home']" size="lg"/>
        </div>
        系统管理
      </router-link>

      <router-link tag="li" class="ul-item" to="/home/api-management" active-class="active">
        <div class="font-icon">
          <font-awesome-icon :icon="['fas','cogs']" size="lg"/>
        </div>
        短信接口管理
      </router-link>

      <router-link tag="li" class="ul-item" to="/home/log-management" active-class="active">
        <div class="font-icon">
          <font-awesome-icon :icon="['fas','calendar-alt']" size="lg"/>
        </div>
        日志管理
      </router-link>

      <router-link tag="li" class="ul-item" to="/home/personnel-management" active-class="active">
        <div class="font-icon">
          <font-awesome-icon :icon="['fas','users']" size="lg"/>
        </div>
        党员管理
      </router-link>

      <li tag="li" class="ul-item" @click="exitConfirm" active-class="active">
        <div class="font-icon">
          <font-awesome-icon :icon="['fas','sign-out-alt']" size="lg"/>
        </div>
        退出
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "tab",
    methods:{
      exitConfirm(){
        this.$emit("showDialog", true)
      }
    }
  }
</script>

<style scoped>
  .tab {
    display: inline-block;
    width: 170px;
    /*height: 100%;*/
    line-height: 20px;
    text-align: center;
    border: 1px solid rgba(187, 187, 187, 1);
    border-right: 0;
    border-bottom: 0;
  }

  .font-icon {
    width: 50px;
  }

  .ul-item {
    display: flex;
    align-items: center;
    width: 100%;
    height: 45px;
    line-height: 45px;
    font-size: 13px;
    color: #888888;
  }

  .tab li.active,
  .tab li:hover {
    background: #4fc08d;
    color: #fff;
  }
</style>
