<template>
  <div class="page">
    <ul class="pagination">
      <li v-show="personnelListParam.current !== 1"
          @click="personnelListParam.current-- && goto(personnelListParam.current)"><a href="#">上一页</a></li>
      <li v-for="index in pages" @click="goto(index)" :class="{'active':personnelListParam.current === index}"
          :key="index">
        <a href="#">{{index}}</a>
      </li>
      <li v-show="personnelListParam.totalPages !== personnelListParam.current && personnelListParam.totalPages !== 0 "
          @click="personnelListParam.current++ && goto(personnelListParam.current++)"><a href="#">下一页</a></li>
      <li><b style="cursor: default">共{{personnelListParam.totalPages}}页</b></li>

      <li>跳至第 <input type="number" maxlength="5" v-model="personnelListParam.current" style="text-align: center"> 页</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "page",
    props: {
      personnelListParam: {
        type: Object,
        default: {}
      },
      personnelList: {
        type: Array,
        default: {}
      }
    },
    data() {
      return {
        showItem: 5,

      }
    },
    computed: {
      pages: function () {
        let i;
        const pag = [];
        if (this.personnelListParam.current < this.showItem) { //如果当前的激活的项 小于要显示的条数
          //总页数和要显示的条数那个大就显示多少条
          i = Math.min(this.showItem, this.personnelListParam.totalPages);
          // 向pag添加i次数组项，返回新数组的长度
          while (i) {
            pag.unshift(i--);
          }
        } else { //当前页数大于显示页数了
          let middle = this.personnelListParam.current - Math.floor(this.showItem / 2);
          i = this.showItem;
          if (middle > (this.personnelListParam.totalPages - this.showItem)) {
            middle = (this.personnelListParam.totalPages - this.showItem) + 1
          }
          while (i--) {
            pag.push(middle++);
          }
        }
        return pag
      }
    },
    methods: {
      goto: function (index) {
        if (index === this.personnelListParam.current) return;
        this.personnelListParam.current = index;
        //这里可以发送ajax请求
      }
    }
  }
</script>

<style scoped>
  .page {
    margin-top: 5px;
  }

  li {
    list-style: none;
    font-size: 12px;
    color: #AEBAC7;
  }

  a {
    text-decoration: none;
  }

  .pagination {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 400px;
    height: 30px;
    background: #ffffff;
  }

  .pagination li {
  }

  .pagination li input {
    background: #F2F5FB;
    width: 40px;
  }

  .pagination li a {
    padding: 1px 5px;
    display: inline-block;
    background: #F2F5FB;
    font-size: 12px;
    color: #AEBAC7;
  }

  .pagination li b {
    padding: 1px 5px;
    display: inline-block;
    background: #F2F5FB;
    font-size: 12px;
    color: #AEBAC7;
    font-weight: normal;
  }

  .pagination li a:hover {
    background: #7B8AA1;
    color: #ffffff;
  }

  .pagination li.active a {
    background: #7B8AA1;
    color: #fff;
  }
</style>
