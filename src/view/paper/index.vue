<template>
    <div>
        <div class="b-w">
            <div class="p-w" >
            
            </div>
            <right></right>
        </div>
    </div>
</template>

<script>
import API from '../../api'
import right from '../../components/rightbar'
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
    },
    components:{
        right
    }
}
</script>

<style >
.p-w {
    margin-right: 10px;
    width: 694px;
    height: 100px;
    padding-bottom: 20px;
}

</style>
