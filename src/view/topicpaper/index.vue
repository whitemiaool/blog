
<template>
    <div>
        <div >
            <Blog :plist="list"></Blog>
        </div>
    </div>
</template>

<script>
import API from '../../api'
import Blog from "../blog";
export default {
    name:'git',
    data() {
        return {
            name:['富强','民主','文明','和谐','自由','平等','公正','法治','爱国','敬业','诚信','友善'],
            color1:'#fff',
            list:[]
        }
    },
    methods:{
        async getPath() {
            let res = await this.axios.post(API.getpact,{id:this.$route.query.id})
                if(res.data.code > 10) {
                    this.list = res.data.data.map((item,i)=>{
                    item.showC    = false
                    item.addo     = false
                    item.cmt      = '条评论'
                    item.showFix  = false
                    item.showCon  = false
                    item.topic    = item.topic.name
                    item.paperindex = '/index/paper/'+item.paperindex
                    return item
                })
            }
        }
    },
    watch: {
        '$route':'getPath'
    },
    async created() {
        this.getPath()
    },
    components:{
        Blog
    }
}
</script>

<style scoped>
</style>
