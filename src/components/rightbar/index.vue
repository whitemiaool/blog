
<template>
    <div class="r-b">
        <div class="r-b-t">
            <div style="text-align: center;width: 100px;height:100%;display: table;">
                <span style="display: table-cell;vertical-align: middle;"><img alt="" src="../../assets/ava.jpg" style="display: inline-block;"></span>
            </div>
            <div class="r-b-w">
                <div class="r-b-n">dyxuan</div>
                <div class="r-b-y">lif is shit,taste well</div>
                <a class="u-email" href="mailto:dyx_uestc@163.com">dyx_uestc@163.com</a>
            </div>
        </div>
        <div class="r-b-c"></div>
    </div>
</template>

<script>
import API from '../../api'
export default {
    name:'git',
    data() {
        return {
            gits:[]
        }
    },
    mounted() {
        this.axios.get(API.getrepo).then((res)=>{
            if(res.data.code > 10) {
                this.gits = res.data.data.sort((a,b)=>{
                    return b.stargazers_count - a.stargazers_count
                });
            }
        })
    }
}
</script>

<style scoped>
.r-b-w {
    padding: 10px 5px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}
.u-email {
    font-size: 13px;
}
.r-b-y {
    color: #666;
    font-size: 13px;
}
.r-b-n {
    font-size: 18px;
    font-weight: 600;
}
.r-b-t {
    height: 100px;
    width: 300px;
    background: #fff;
    margin-bottom: 20px;
    display: flex;
    position: fixed;
}
</style>
