<template>
  <div class="personnel-management">
    <header>
      <div class="header-top">
        <div class="title">党员管理</div>
        <div class="features">
          <div class="features-item">
            <div class="font-icon">
              <font-awesome-icon :icon="['fas','plus']" size="lg"/>
            </div>
            新建
          </div>
          <div class="features-item">
            <div class="font-icon">
              <font-awesome-icon :icon="['fas','outdent']" size="lg"/>
            </div>
            导入
          </div>
          <div class="features-item">
            <div class="font-icon">
              <font-awesome-icon :icon="['fas','sign-in-alt']" size="lg"/>
            </div>
            导出
          </div>
        </div>
      </div>
      <div class="header-bottom">
        <select name="筛选条件" id="">
          <option value="筛选条件" selected="selected">筛选条件</option>
          <option value="年龄">年龄</option>
          <option value="姓氏">姓氏</option>
          <option value="电话">电话</option>
        </select>
      </div>
    </header>
    <table>
      <!--表头-->
      <tr>
        <th>党员姓名</th>
        <th>年龄</th>
        <th>生日</th>
        <th>联系电话</th>
        <th>操作</th>
        <th>操作</th>
        <th>操作</th>
      </tr>
      <!--表格体-->
      <tr>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td class="check-td">查看</td>
        <td class="check-td">修改</td>
        <td class="check-td">删除</td>
      </tr>
      <tr>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
      </tr>
      <tr>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
      </tr>
      <tr>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
      </tr>
      <tr>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
      </tr>
      <tr>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
      </tr>
      <tr>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
      </tr>
      <tr>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
      </tr>
      <tr>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
      </tr>
      <tr>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
      </tr>
      <tr>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
      </tr>
      <tr>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
      </tr>
      <tr>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
      </tr>
      <tr>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
      </tr>
      <tr>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
      </tr>
      <tr>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
        <td>测试</td>
      </tr>
    </table>
    <div class="batch">
      <input type="checkbox" class="batch-checkbox">
      批量操作
    </div>

  </div>
</template>

<script>
  export default {
    name: "personnel-management",
    data() {
      return {
        personnelList: {}
      }
    }
  }
</script>

<style scoped>
  table {
    width: 100%;
    height: 640px;
    border-spacing: 0;
    text-align: center;
  }

  select {
    width: 112px;
    height: 28px;
    color: #909090;
    font-size: 12px;
    padding-left: 10px;
    border: 1px solid rgba(187, 187, 187, 1);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  tr {
    height: 40px;
  }

  th {
    background: #D4D4D4;
    height: 40px;
    border: 1px solid #BBBBBB;
  }

  td {
    background: #ffffff;
    height: 40px;
    border: 1px solid #BBBBBB;
  }

  .personnel-management {
    width: 100%;
    border: 1px solid rgba(187, 187, 187, 1);
    background: #F0F0F2;
    padding: 10px;
  }

  .header-top {
    display: flex;
    height: 50px;
  }

  .header-bottom {
    height: 50px;
  }

  .title {
    width: 150px;
    color: #607D8B;
    font-size: 15px;
  }

  .features {
    display: flex;
    width: 400px;
    margin-left: 60%;
    justify-content: space-around;
  }

  .features-item {
    display: flex;
    align-items: center;
    width: 100%;
    height: 45px;
    line-height: 45px;
    font-size: 13px;
    text-align: center;
    color: #607D8B;
  }

  .batch {
    margin-top: 10px;
    font-size: 14px;
  }

  .batch-checkbox {
    margin-right: 20px;
  }

  .check-td {
    color: #607D8B;
    cursor: pointer;
  }

  .font-icon {
    width: 30px;
  }
</style>
