<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a-input placeholder="Basic usage" v-model="test" />
    <a-button type="primary" @click="getJsonData">获取数据</a-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";


@Component
export default class HelloWorld extends Vue {
  msg='初始化';
  test='初始化';

getJsonData(){
    // const url = "https://api.apiopen.top/musicRankings";
    const url = "/date";

    this.axios
    .post(url)
    .then(response => {
      console.log("%c DM控制==》Mock数据","color:#40A9FF;font-size:24px");
      console.log("%c 成功", "color:green;font-size:24px");
      console.log(response.data);
      this.test = response.data.list[0];
      this.msg = response.data.list[2];;
    })
    .catch(response => {
      console.log("%c 失败", "color:red;font-size:24px");
      // console.log(response.data);
    });
  };
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
