<template>
    <div style="background:#fff;padding-top:40px">
        <Tabs :value="label" @on-click="test">
            <TabPane label="macOS" name='1t' icon="social-apple">
                <add></add>
            </TabPane>
            <TabPane  label="Windows" name='2t' icon="social-windows">
                <Del :clk="clk"></Del>
            </TabPane>
            <TabPane label="Linux" name='3t' icon="social-tux">标签三的内容</TabPane>
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
