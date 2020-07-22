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
      let that=this;
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
