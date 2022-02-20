<template>
    <div>
        <h1>{{msg}}</h1>
        <h1 ref="sch">学校名称：{{name}} -- {{city}}</h1>
        <button @click="test">点我运行测试代码</button>
        <button @click="showName">点我运行混合</button>
    </div>
</template>

<script>
// 引入一个混合
import {mixin} from '../mixin'

export default {
    name:'School',
    data(){
        return{
            msg:'你好！！',
            // name:'上海大学',
            // city:'上海',
        }
    },
    //props:['name','city'], // 简单接收
    // 对数据接收类型进行限制
    // props:{
    //     name:String,
    //     city:String,
    // },
    props:{
        name:{
            type:String, //类型是字符串
            required:true, // 名字是必要的
        },
        city:{
            type:String,
            default:'上海(默认)', //默认值
        }
    },
    methods: {
        test(){
            console.log(this.$refs.sch,typeof(this.$refs.sch));
        }
    },
    mixins:[mixin],
}
</script>

<style scoped>

</style>>
 