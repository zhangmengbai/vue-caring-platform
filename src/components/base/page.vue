<template>
    <div class="page">
      <ul class="pagination" >
        <li v-show="current != 1" @click="current-- && goto(current)" ><a href="#">上一页</a></li>
        <li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
          <a href="#" >{{index}}</a>
        </li>
        <li v-show="allpage != current && allpage != 0 " @click="current++ && goto(current++)"><a href="#" >下一页</a></li>
        <li><b href="#" style="cursor: default">共{{allpage}}页</b></li>

        <li>跳至 <input type="number" maxlength="5" v-model="current"> 页</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "page",
      data () {
        return{
          current:1,
          showItem:5,
          allpage:13
        }
      },
      computed:{
        pages:function(){
          var pag = [];
          if( this.current < this.showItem ){ //如果当前的激活的项 小于要显示的条数
            //总页数和要显示的条数那个大就显示多少条
            var i = Math.min(this.showItem,this.allpage);
            while(i){
              pag.unshift(i--);
            }
          }else{ //当前页数大于显示页数了
            var middle = this.current - Math.floor(this.showItem / 2 ),//从哪里开始
              i = this.showItem;
            if( middle >  (this.allpage - this.showItem)  ){
              middle = (this.allpage - this.showItem) + 1
            }
            while(i--){
              pag.push( middle++ );
            }
          }
          return pag
        }
      },
      methods:{
        goto:function(index){
          if(index == this.current) return;
          this.current = index;
          //这里可以发送ajax请求
        }
      }
    }
</script>

<style scoped>
  .page{
    margin-top: 5px;
  }
  li{
    list-style:none;
    font-size: 12px;
    color:#AEBAC7;
  }
  a{
    text-decoration:none;
  }
  .pagination {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 400px;
    height:30px;
    background: #ffffff;
  }
  .pagination li{
  }
  .pagination li input{
    background:#F2F5FB;
    width: 40px;
  }
  .pagination li a{
    padding:1px 5px;
    display:inline-block;
    background:#F2F5FB;
    font-size: 12px;
    color:#AEBAC7;
  }
  .pagination li b{
    padding:1px 5px;
    display:inline-block;
    background:#F2F5FB;
    font-size: 12px;
    color:#AEBAC7;
    font-weight: normal;
  }
  .pagination li a:hover{
    background:#7B8AA1;
    color: #ffffff;
  }
  .pagination li.active a{
    background:#7B8AA1;
    color:#fff;
  }
</style>
