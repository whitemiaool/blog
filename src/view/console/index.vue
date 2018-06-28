<template>
    <div style="background:#fff;padding-top:40px">
        <Tabs :value="label" @on-click="test">
            <TabPane label="添加文章" name='1t' icon="edit">
                <add></add>
            </TabPane>
            <TabPane  label="整理论文" name='2t' icon="gear-b">
                <Del :clk="clk"></Del>
            </TabPane>
            <TabPane label="..." name='3t' icon="ios-medical-outline">开发中</TabPane>
        </Tabs>
    </div>
</template>

<script>
import API from '../../api'
import model from '../../components/modal/modal'
import add from '../addpaper'
import Del from '../delpaper'

export default {
    name:'git',
    data() {
        return {
             clk:false,
             label:'1t'
        }
    },
    methods:{
        test() {
           this.clk = !this.clk;
        }
    },
    components:{
        model,
        add,
        Del
    }
}
</script>

<style scoped>
</style>
