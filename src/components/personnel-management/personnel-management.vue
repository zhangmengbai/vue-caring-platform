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
    <table v-if="personnelListParam.current >= 1 && personnelListParam.current <= personnelListParam.totalPages">
      <!--表头-->
      <tr>
        <th v-if="isBatch">批量操作</th>
        <th>党员姓名</th>
        <th>年龄</th>
        <th>生日</th>
        <th>联系电话</th>
        <th>操作</th>
        <th>操作</th>
        <th>操作</th>
      </tr>
      <!--表格体-->
      <tr v-for="item in personnelList">
        <td v-if="isBatch" style="padding: 0;"><input type="checkbox" class="td-checkbox" v-model="item.isChecked"></td>
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
        <td>{{item.birthday}}</td>
        <td>{{item.phone}}</td>
        <td class="check-td">查看</td>
        <td class="check-td">修改</td>
        <td class="check-td" @click="remove(item.id)">删除</td>
      </tr>
    </table>
    <div v-else class="error">
      您输入的页码有误，请确认是否在1—{{personnelListParam.totalPages}}范围内
    </div>
    <div style="display: flex;justify-content: space-between;width: 100%;">
      <div class="batch">
        <div style="display: flex;color: #888888; align-items: center">
          <input type="checkbox" class="batch-checkbox" v-model="isBatch">
          批量操作
        </div>
        <div v-if="isBatch" style="display: flex;margin-left: 50px; color: #888888; align-items: center">
          <input type="button" class="delete-btn" @click="selectAll()" :value="SelectAllValue">
        </div>
        <div v-if="isBatch" style="display: flex;margin-left: 50px;color: #888888;">
          <input type="button" class="delete-btn" value="删除选中项" @click="batchDeletion()">
        </div>
      </div>
      <page :listParam="personnelListParam"></page>
    </div>
  </div>

</template>

<script>
  export default {
    name: "personnel-management",

    data() {
      return {
        isSelectAll: false,
        SelectAllValue: '全选',
        isBatch: false,
        personnelListParam: {
          current: 1,
          totalPages: 14
        },
        personnelList: [
          {
            id:1,
            isChecked: false,
            name: '测试名称',
            age: 20,
            birthday: '1998.10.10',
            phone: 13000000

          },
          {
            id:2,
            isChecked: false,
            name: '测试名称',
            age: 20,
            birthday: '1998.10.10',
            phone: 13000000
          },
          {
            id:3,
            isChecked: false,
            name: '测试名称',
            age: 20,
            birthday: '1998.10.10',
            phone: 13000000
          }
        ]
      }
    },
    computed: {
    },
    methods: {
      // getPersonnelList() {
      //   this.$http.post(
      //
      //   )
      //
      // }
      // 是否全选
      selectAll() {
        if (this.isSelectAll === false) {
          for (let i = 0; i < this.personnelList.length; i++) {
            this.personnelList[i].isChecked = true;
            this.selectAllValue = '取消全选';
            this.isSelectAll = true;
          }
        }
        else {
          for (let i = 0; i < this.personnelList.length; i++) {
            this.personnelList[i].isChecked = false;
            this.selectAllValue = '全选';
            this.isSelectAll = false;
          }
        }
      },
      // 单项删除
      remove(removeId){
        console.log(removeId)
      },
      // 批量删除
      batchDeletion() {
        let removeId = [];
        for (let i = 0; i < this.personnelList.length; i++) {
          if (this.personnelList[i].isChecked) {
            removeId.push(this.personnelList[i].id)
          }
        }
        console.log(removeId)
      },
    },
  }
</script>

<style scoped>
  table {
    width: 100%;
    /*height: 640px;*/
    border-spacing: 0;
    text-align: center;
    border-top: 1px solid #BBBBBB;
    border-left: 1px solid #BBBBBB;
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
    border-right: 1px solid #BBBBBB;
    border-bottom: 1px solid #BBBBBB;
  }

  td {
    background: #ffffff;
    height: 40px;
    border-right: 1px solid #BBBBBB;
    border-bottom: 1px solid #BBBBBB;
    padding: 0 50px;
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
    font-size: 20px;
    font-weight: bold;
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
    font-size: 14px;
    text-align: center;
    color: #607D8B;
    cursor: pointer;
  }

  .batch {
    display: flex;
    margin-top: 10px;
    font-size: 14px;
  }

  .batch-checkbox {
    margin-right: 10px;
    width: 18px;
    height: 18px;
  }

  .delete-btn {
    width: 100px;
    height: 30px;
    background-color: #D84C29;
    color: #ffffff;
    font-weight: bold;
    letter-spacing: 3px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .check-td {
    color: #607D8B;
    cursor: pointer;
  }

  .font-icon {
    width: 30px;
  }

  .td-checkbox {

    width: 20px;
    height: 20px;
  }

  .error {

  }
</style>
