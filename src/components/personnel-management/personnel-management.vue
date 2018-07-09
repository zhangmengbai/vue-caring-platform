<template>
  <div class="personnel-management">
    <header>
      <div class="header-top">
        <div class="title">党员管理</div>
        <div class="features">
          <div class="features-item" @click="showDialog('isShowCreate')">
            <div class="font-icon">
              <font-awesome-icon :icon="['fas','plus']" size="lg"/>
            </div>
            新增
          </div>
          <div class="features-item" @click="showDialog('isShowUpload')">
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
      <!--页码组件-->
      <page :personnelListParam="personnelListParam" :personnelList="personnelList"
            @switch-page="switchPage(personnelListParam.current)"></page>
    </div>
    <!--二次确认删除窗口-->
    <base-dialog :is-show="isShowDelete" @on-close="hideDialog('isShowDelete')">
      <div class="dialog-content">
        <div class="dialog-header">
          <p class="dialog-header-tip">提示</p>
          <div class="dialog-close" @click="hideDialog('isShowDelete')">
            <font-awesome-icon :icon="['fas','times']" size="1x"/>
          </div>
        </div>
        <div class="dialog-section">
          <div>
            <font-awesome-icon :icon="['fas','question-circle']" size="3x"/>
          </div>
          <h3>确定要删除吗？</h3>
        </div>
        <div class="dialog-button">
          <button @click="isRemove(true)" class="determine">确认</button>
          <button @click="isRemove(false)" class="cancel">取消</button>
        </div>
      </div>
    </base-dialog>
    <!--新建党员信息窗口-->
    <base-dialog :is-show="isShowCreate" @on-close="hideDialog('isShowCreate')">
      <div class="dialog-content">
        <div class="dialog-header">
          <p class="dialog-header-tip">新增党员</p>
          <div class="dialog-close" @click="hideDialog('isShowCreate')">
            <font-awesome-icon :icon="['fas','times']" size="1x"/>
          </div>
        </div>
        <div class="dialog-section" id="createSection">
          <h3>填入党员信息</h3>
        </div>
        <div class="from">
          <div class="from-item">
            <p>党员姓名：</p>
            <input class="from-input" type="text" v-model="createName">
          </div>
          <div class="from-item">
            <p>年龄：</p>
            <input class="from-input" type="number" maxlength="3" v-model="createAge">
          </div>
          <div class="from-item">
            <p>生日：</p>
            <input class="from-input" type="text" v-model="createBirthday">
          </div>
          <div class="from-item">
            <p>联系电话：</p>
            <input class="from-input" type="let" maxlength="11" v-model="createPhone" id="create-phone">
          </div>
          <b v-show="error !== ''&& isShowError === true" class="error">{{error}}</b>
        </div>
        <div class="dialog-button">
          <button class="determine" @click="submitCreate(createName,createAge,createBirthday,createPhone)">确认</button>
          <button class="cancel" @click="hideDialog('isShowCreate')">取消</button>
        </div>
      </div>
    </base-dialog>
    <!--导入数据-->
    <base-dialog :is-show="isShowUpload" @on-close="hideDialog('isShowUpload')">
      <div class="dialog-content" id="upload-content">
        <div class="dialog-header">
          <p class="dialog-header-tip">导入数据</p>
          <div class="dialog-close" @click="hideDialog('isShowUpload')">
            <font-awesome-icon :icon="['fas','times']" size="1x"/>
          </div>
        </div>
        <div class="dialog-section" id="upload-section">
          <div class="dialog-section-item">
            <div id="download-template">
              <div class="font-icon">
                <font-awesome-icon :icon="['fas','cloud-download-alt']" size="1x"/>
              </div>
              <p>下载模板</p>
            </div>
            <div class="tip">为提高导入的效率，请下载并使用系统提供的模板。</div>
            <button class="download-button">下载模板</button>
          </div>
          <div class="dialog-section-item">
            <div id="upload-template">
              <div class="font-icon">
                <font-awesome-icon :icon="['fas','cloud-upload-alt']" size="1x"/>
              </div>
              <p>上传文件</p>
            </div>
            <div class="tip">仅支持*******文件类型，文件大小*****</div>
            <div>
              <input type="file" class="upload-button">
            </div>
          </div>
        </div>
        <div class="dialog-button">
          <button class="determine" @click="">确认</button>
          <button class="cancel" @click="hideDialog('isShowUpload')">取消</button>
        </div>
      </div>
    </base-dialog>
  </div>
</template>

<script>
  export default {
    name: "personnel-management",

    data() {
      return {
        error: '',
        isShowError: false,
        isShowDelete: false,
        isShowCreate: false,
        isShowUpload: false,
        isSelectAll: false,
        SelectAllValue: '全选',
        isBatch: false,
        removeList: [],
        createName: '',
        createAge: null,
        createBirthday: '',
        createPhone: null,
        personnelListParam: {
          current: 1,
          totalPages: 14
        },
        personnelList: [
          {
            id: 1,
            isChecked: false,
            name: '测试名称',
            age: 20,
            birthday: '1998.10.10',
            phone: 13000000

          },
          {
            id: 2,
            isChecked: false,
            name: '测试名称',
            age: 20,
            birthday: '1998.10.10',
            phone: 13000000
          },
          {
            id: 3,
            isChecked: false,
            name: '测试名称',
            age: 20,
            birthday: '1998.10.10',
            phone: 13000000
          }
        ]
      }
    },
    computed: {},
    methods: {
      // 切页
      switchPage(param) {
        console.log(param)
      },
      // 公共弹出dialog方法
      showDialog(param) {
        this[param] = true;
      },
      // 确认新建党员
      submitCreate(createName, createAge, createBirthday, createPhone) {
        // 检测提交的信息格式是否正确
        if (createName !== '' &&
          createAge !== null && createAge.length <= 3 &&
          createBirthday !== '' &&
          createPhone !== null && createPhone.length === 11) {
          // 发送请求提交信息，同时返回新的用户列表信息
          this.isShowCreate = false;
          this.isShowError = false;
          console.log("aa")
        } else {
          this.error = '党员信息格式有误，提示：优先核对手机号码位数';
          this.isShowError = true;
          console.log("bb")
        }
      },
      // 是否全选
      selectAll() {
        if (this.isSelectAll === false) {
          for (let i = 0; i < this.personnelList.length; i++) {
            this.personnelList[i].isChecked = true;
            this.SelectAllValue = '取消全选';
            this.isSelectAll = true;
          }
        }
        else {
          for (let i = 0; i < this.personnelList.length; i++) {
            this.personnelList[i].isChecked = false;
            this.SelectAllValue = '全选';
            this.isSelectAll = false;
          }
        }
      },
      // 单项删除
      remove(removeId) {
        console.log(removeId);
        this.removeList.push(removeId);
        this.isShowDelete = true;
      },

      // 批量删除
      batchDeletion() {
        let removeIdList = [];
        // 将被选中项的索引添加到一个列表
        for (let i = 0; i < this.personnelList.length; i++) {
          if (this.personnelList[i].isChecked) {
            removeIdList.push(this.personnelList[i].id)
          }
        }
        console.log(removeIdList);
        this.removeList = removeIdList;
        this.isShowDelete = true;
      },

      // 二次确认删除
      isRemove(isRemove) {
        if (isRemove) {
          // 这里发送删除请求
          this.isShowDelete = false;
        } else {
          this.isShowDelete = false;
        }
      },
      // 关闭Dialog
      hideDialog(param) {
        this[param] = false
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
    color: #EA2000;
    font-size: 14px;
    margin-left: 20px;
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

  #upload-content {
    width: 40%;
    left: 30%;
    height: 450px;
  }

  .dialog-content h2 {
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

  .dialog-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: auto;
    margin-top: 20px;
    color: #7A797A;
  }

  #upload-section {
    align-items: start;
    padding-left: 20px;
  }

  .dialog-section-item {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100px;
    margin-bottom: 20px;
  }

  #download-template {
    display: flex;
    flex-direction: row;
    justify-content: start;
  }

  .tip {
    font-size: 14px;
    margin-left: 30px;
  }

  .download-button {
    width: 110px;
    font-size: 16px;
    cursor: pointer;
    padding: 5px 20px;
    outline: none;
    margin-left: 30px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    background-color: #78909C;
    color: #ffffff;
  }

  #upload-template {
    display: flex;
    flex-direction: row;
    justify-content: start;
  }

  .upload-button {
    margin-left: 30px;
  }

  .dialog-button {
    position: relative;
    bottom: -60px;
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

  .determine {
    background-color: #78909C;
    color: #ffffff;
  }

  .cancel {
    background-color: #ffffff;
    color: #78909C;
    border: 1px solid #BBBBBB;
  }

  .dialog-button button:hover {
    background-color: #666666;
    color: #ffffff;
  }

  .from {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 300px;

  }

  .from-item {
    width: 260px;
    margin-left: 20px;
  }

  .from-item input {
    border: 1px solid #BBBBBB;
    font-size: 18px;
  }

  #create-phone::-webkit-outer-spin-button,
  #create-phone::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
  }

  #createSection {
    height: auto;
  }
</style>
