<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:'2342'
    }
  },
  methods:{
    getdata(){
      let that=this;//赋值that为全局this
      this.$axios.get('/xingzuo').then(function(res){
          console.log("%c DM控制==》Mock数据","color:red;font-size:24px");
          console.log(res.data);
          that.msg=res.data.list;
        })
    }
  },
  mounted:function(){
   this.getdata();
  }
}
</script>

<!-- 添加 "scoped" 属性限制css样式仅在组件内生效 -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
