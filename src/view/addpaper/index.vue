<template>
    <div>
        <div class="ad-w">
            <div class="ad-o">
                <textarea style="height:inherit"  v-model="content"  placeholder="请写下你的评价" name="" id="" cols="40" rows="20"></textarea>
            </div>
            <div class="ad-o">
                <label for="">话题:</label>
                <Select v-model="model1" style="width:200px">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <button @click="addTopic" class="b-cm-p">+添加</button>
            </div>
            <div class="ad-o ad-c">
                <button @click="save" class="b-cm-p">发送</button>
            </div>
        </div>
        <model :show="show" slot="s1" :confirm="cf" :close="closeM" title="新增标签">
            <div>
                <label for="">标签</label>
                <Input v-model="value" placeholder="Enter something..." style="width:400px"></Input>
             </div>
        </model>
    </div>
</template>

<script>
import API from '../../api'
import model from '../../components/modal/modal'
export default {
    name:'git',
    data() {
        return {
            gits:[],
            content:'',
            show:false,
            value:'',
            cityList: [
                    {
                        value: '23',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model1: ''
        }
    },
    methods:{
        cf() {
            this.show = false;
            if(this.value.trim()) {
                this.axios.post(API.addtopic,{content:this.value}).then((res)=>{
                    console.log(res);
                })
            }
            this.value = '';
        },
        addTopic() {
            this.show = true
        },
        closeM() {
            this.show = false
        },
        change() {
            // console.log(this.content)
        },
        save() {
            // this.axios.post(API.addpaper,{content:this.content}).then((res)=>{
            //     console.log(res)
            // })
            console.log(this.model1)
        }
    },
    mounted() {

    },
    components:{
        model
    }
}
</script>

<style scoped>
/* .ad-t,.ad-c {
    text-align: left;
} */
.ad-o {
    margin: 20px;
    display: block;
}
.ad-w {
    width: 100%;
    background: #fff;
    text-align: left;;
    padding: 40px 20px;
}
.ad-w textarea {
    resize: none;
    width: 80%;
    margin: 0 auto;
}
.git-w {
    width: 70%;
    margin: 0px auto;
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
}
.g-o-w {
    width: 120px;
    /* height: 80px; */
    margin: 4px;
    box-sizing: border-box;
    box-shadow: 3px 3px 9px rgba(0,0,0,.15);
    overflow: hidden;
    padding: 4px 4px;
    transition: background 0.5s;
}
.g-o-w:hover {
    background: #e88b8b;
}
.g-o-w:hover span.g-o-i {
    color: #fff;
}
.g-o-i {
    display: inline-block;
    /* width: 100%; */
    overflow: hidden;
    text-overflow: ellipsis;
}

.lin {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;    
}
.name {
    color: #1765b7 !important;
    width: 100%;
    margin-bottom: 0px;
    white-space: nowrap;
    font-size: 14px;
}
span.star {
    overflow: hidden;
    vertical-align: bottom;
}
span.g-o-i {
    color: #ccc;
}
.lan {
    margin-left: 7px;
    vertical-align: bottom;
}
</style>
