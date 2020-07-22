var Mock=require('mockjs');

// 星座数据方法
Mock.Random.extend({
    constellation: function() {
        var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
        return this.pick(constellations)
    }
})

// 邮箱数据接口
Mock.mock('/test',function(){
    return{
        list: Mock.Random.email()
        
        
    };
})

// 星座数据接口
Mock.mock('/xingzuo',function(){
    return{
        list: Mock.Random.constellation()
    };
})