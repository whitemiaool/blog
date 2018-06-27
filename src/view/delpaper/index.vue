<template>
    <div>
        <div class="ad-w">
            <div class="pd-o" v-for="(item,i) in paperlist">
                <h3 class="pd-t">{{item.title}}</h3>
                <div class="pd-b">{{item.brief}}</div>
                <span class="pd-d" @click="delone(item._id)"><Icon type="close-round"></Icon></span>
            </div>
        </div>
    </div>
</template>

<script>
import API from '../../api'
import model from '../../components/modal/modal'
export default {
    name:'git',
    data() {
        return {
            paperlist:[],
        }
    },
    props:{
        clk:Boolean
    },
    watch:{
        clk:function(n,o) {
            this.getalltopic()
        }
    },
    methods:{
        delone(id) {
            this.axios.post(API.delonepaper,{data:id}).then((res)=>{
                this.getalltopic();
            })
        },
        getalltopic() {
            this.axios.get(API.getallpaper).then((res)=>{
                this.paperlist = res.data.data;
            })
        }
    },
    created() {
        this.getalltopic();
    },
    components:{
        model
    }
}
</script>

<style scoped>
.pd-d {
    position: absolute;
    right: 10px;
    top: 0px;
    color: red;
    cursor: pointer;
}
.pd-t {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.pd-b {
    font-size: 14px;
    color: #ccc;
    overflow: hidden;
    max-height: 42px;
    text-overflow: ellipsis;
    /* white-space: nowrap; */
}
.pd-o {
    margin: 10px 5px;
    width: 80%;
    min-width: 700px;
    box-shadow: 3px 3px 9px rgba(0,0,0,.15);
    padding: 10px 5px;
    position: relative;
}
.ad-w {
    width: 100%;
    background: #fff;
    text-align: left;;
    padding: 20px 20px;
}
</style>
