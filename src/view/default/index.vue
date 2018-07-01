<template>
    <div>
        <div class="b-w" >
            <div style="margin-right: 10px;width: 694px;padding-bottom: 20px;">
                <router-view class="Router"></router-view>
            </div>
            <right></right>
        </div>
    </div>
</template>

<script>
import API from '../../api'
import right from '../../components/rightbar'
export default {
    name:'default',
    data() {
        return {
            gits:[]
        }
    },
    components:{
        right
    }
}
</script>

<style scoped>
</style>
