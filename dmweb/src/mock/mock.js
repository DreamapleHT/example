
import Mock from 'mockjs';

const Random=Mock.Random;
const produceData=function(){

    const  data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|3-10': [Random.date()]
    })
    
    return data;
}

const getDate=function(){
return '324'
}


Mock.mock('/test',produceData);
Mock.mock('/date',produceData);




