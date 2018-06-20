
<template>
    <div>
        <div class="b-w" >
            <div style="margin-right: 10px;width: 694px;padding-bottom: 20px;">
                <div class="b-o" v-for="(item,i) in blogs">
                    <div class="b-f">来自话题：<span>{{item.topic}}</span></div>
                    <div class="b-t">{{item.title}}</div>
                    <div v-if="item.showCon" class="b-xx">作者及其女友觉得很赞</div>
                    <div @click="showcontent(i)" v-if="!item.showCon" style="margin-top: -10px;">
                        <div class="b-i-w" v-if="item.img">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="b-b-w">
                            <div class="b-b-c">{{item.breif}}<span class="b-c-m">阅读全文</span></div>
                        </div>
                        <div style="clear:both"></div>
                    </div>
                    <div v-if="item.showCon">
                        <div v-html="item.all" class="b-all">
                        </div>
                    </div>
                    <div class="b-c-w">
                        <div class="b-c" :class="{'isfix':item.showFix}" :data-index="i" >
                            <button aria-label="赞同" type="button" class="Button VoteButton VoteButton--up">
                            <i class="icon iconfont icon-dianzan"></i>
                            {{item.star||0}}
                            </button>
                            <!-- <span> 
                                <span>{{item.star}}</span>
                            </span> -->
                            <div class="b-c-c-w">
                                <span @click="showcomment(i)" class="b-c-c com">
                                    <i class="icon iconfont icon-icon_comment"></i>
                                    {{!item.showC?(item.commentL||0):''}}{{item.cmt}}
                                </span>
                                <span class="b-c-c fasong">
                                    <i class="icon iconfont icon-fasong"></i>
                                    分享
                                </span>
                                <span @click="addones(i)" class="b-c-c xin">
                                    <i class="icon iconfont icon-xin"></i>
                                    +1
                                    <span :class="{'lsact':item.addo}" class="ls">+1s</span>
                                </span>
                                <span @click="showcontent(i)" v-if="item.showCon" class="b-c-c shouqi">
                                    <i style="font-size: 18px;font-weight: 700;" class="icon iconfont icon-jiantouxiangshang"></i>
                                    收起
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="b-cm-w" v-if="item.showC">
                        <div class="b-cm-top">{{item.commentL}}条评论</div>
                        <div class="b-cm-o"  v-for="(cm,n) in item.comment">
                            <div class="b-cm-t">
                                <span><i class=" b-cm-i icon iconfont icon-icon_comment"></i><span>{{cm.name}}</span></span>
                                <span style="color:#ccc">{{cm.date}}</span>
                            </div>
                            <span class="b-cm-c">{{cm.content}}</span>
                        </div>
                        <div class="b-cm-f">
                            <textarea  placeholder="请写下你的评价" name="" id="" cols="10" rows="5"></textarea>
                            <button class="b-cm-p">评价</button>
                        </div>
                    </div>
                </div>
            </div>
            <right></right>
        </div>
    </div>
</template>

<script>
import API from '../../api'
import './index.css'
import './md.css'
import $ from 'jquery'
import right from '../../components/rightbar'
export default {
    name:'git',
    data() {
        return {
            blogs:[{
                    img:undefined,
                    showC:false,
                    topic:'java',
                    addo:false,
                    showCon:false,
                    date:'2018-06-11',
                    breif:'YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太…',
                    title:'为什么同样是视频网站，Youtube 感觉加载很快、很轻，B 站、优酷、爱奇艺就感觉慢且重呢？',
                    star:'20',cmt:'条评论',showFix:false,addo:false,
                    comment:[{name:'dyxuan',content:'太棒了',date:'2018-06-06'},{name:'dyxuan',content:'太棒了',date:'2018-06-07'}],
                    commentL:2,
                    all:'YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太可怕。。。再说国内情况，优酷的播放器我比较熟悉，优化比较麻烦，前端真的是最小部分，除了依赖ups播放服务外，还有cdn，广告。我接手第一步用node接过来做首屏渲染，主要是保证前端能做的优化链路尽可能的短， 本来就不好弄，再掺和个php渲染层更难受的。我要有足够的控制权，不然没法优化。ups天天在做优化，瘦身提效，做防盗链等等，合作比较近紧密，他们也需要我们做清晰度降级等，所以合作比较愉快。然后说cdn， 历史原因，有优酷cdn和阿里云cdn两种，在慢慢替换，在变好。最后说下广告，我要吐槽下，估计各家都一样，赚钱的部门最难伺候，你们懂的。本来播放器没多少代码，可是加了广告。。。你们懂的性能差不能完全怪到技术身上，如果非要怪，只能说我没能力推动他们。最后，说一下大家关注的前端，常规技术优化不讲了，对播放器做插件化，模块化也是常见手段。技术上要出成绩还是比较好做的，node部分也算。整体性能优化也算。核心分三步，首屏渲染，核心播放，其他。不能说更多了。YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太可怕。。。再说国内情况，优酷的播放器我比较熟悉，优化比较麻烦，前端真的是最小部分，除了依赖ups播放服务外，还有cdn，广告。我接手第一步用node接过来做首屏渲染，主要是保证前端能做的优化链路尽可能的短， 本来就不好弄，再掺和个php渲染层更难受的。我要有足够的控制权，不然没法优化。ups天天在做优化，瘦身提效，做防盗链等等，合作比较近紧密，他们也需要我们做清晰度降级等，所以合作比较愉快。然后说cdn， 历史原因，有优酷cdn和阿里云cdn两种，在慢慢替换，在变好。最后说下广告，我要吐槽下，估计各家都一样，赚钱的部门最难伺候，你们懂的。本来播放器没多少代码，可是加了广告。。。你们懂的性能差不能完全怪到技术身上，如果非要怪，只能说我没能力推动他们。最后，说一下大家关注的前端，常规技术优化不讲了，对播放器做插件化，模块化也是常见手段。技术上要出成绩还是比较好做的，node部分也算。整体性能优化也算。核心分三步，首屏渲染，核心播放，其他。不能说更多了。YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太可怕。。。再说国内情况，优酷的播放器我比较熟悉，优化比较麻烦，前端真的是最小部分，除了依赖ups播放服务外，还有cdn，广告。我接手第一步用node接过来做首屏渲染，主要是保证前端能做的优化链路尽可能的短， 本来就不好弄，再掺和个php渲染层更难受的。我要有足够的控制权，不然没法优化。ups天天在做优化，瘦身提效，做防盗链等等，合作比较近紧密，他们也需要我们做清晰度降级等，所以合作比较愉快。然后说cdn， 历史原因，有优酷cdn和阿里云cdn两种，在慢慢替换，在变好。最后说下广告，我要吐槽下，估计各家都一样，赚钱的部门最难伺候，你们懂的。本来播放器没多少代码，可是加了广告。。。你们懂的性能差不能完全怪到技术身上，如果非要怪，只能说我没能力推动他们。最后，说一下大家关注的前端，常规技术优化不讲了，对播放器做插件化，模块化也是常见手段。技术上要出成绩还是比较好做的，node部分也算。整体性能优化也算。核心分三步，首屏渲染，核心播放，其他。不能说更多了。YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太可怕。。。再说国内情况，优酷的播放器我比较熟悉，优化比较麻烦，前端真的是最小部分，除了依赖ups播放服务外，还有cdn，广告。我接手第一步用node接过来做首屏渲染，主要是保证前端能做的优化链路尽可能的短， 本来就不好弄，再掺和个php渲染层更难受的。我要有足够的控制权，不然没法优化。ups天天在做优化，瘦身提效，做防盗链等等，合作比较近紧密，他们也需要我们做清晰度降级等，所以合作比较愉快。然后说cdn， 历史原因，有优酷cdn和阿里云cdn两种，在慢慢替换，在变好。最后说下广告，我要吐槽下，估计各家都一样，赚钱的部门最难伺候，你们懂的。本来播放器没多少代码，可是加了广告。。。你们懂的性能差不能完全怪到技术身上，如果非要怪，只能说我没能力推动他们。最后，说一下大家关注的前端，常规技术优化不讲了，对播放器做插件化，模块化也是常见手段。技术上要出成绩还是比较好做的，node部分也算。整体性能优化也算。核心分三步，首屏渲染，核心播放，其他。不能说更多了。'
                },{
                    img:'https://pic1.zhimg.com/50/v2-b8a125d39d24cbc7bab805672f58fa22_400x224.jpg',
                    topic:'c++',
                    showC:false,
                    showCon:false,
                    date:'2018-06-19',
                    breif:'YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太…',
                    title:'为什么同样是视频网站，Youtube 感觉加载很快、很轻，B 站、优酷、爱奇艺就感觉慢且重呢？',
                    star:'20',cmt:'条评论',showFix:false,addo:false,
                    comment:[{name:'dyxuan',content:'太棒了'}],
                    all:'<pre><code>var = 8;</code></pre><h2>this is title</h2><p>this is plane</p>'
                },{
                    img:undefined,
                    showC:false,
                    showCon:false,
                    topic:'java',
                    date:'2018-06-11',
                    breif:'YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太…',
                    title:'为什么同样是视频网站，Youtube 感觉加载很快、很轻，B 站、优酷、爱奇艺就感觉慢且重呢？',
                    star:'20',cmt:'条评论',showFix:false,addo:false,
                    comment:[{name:'dyxuan',content:'太棒了',date:'2018-06-06'},{name:'dyxuan',content:'太棒了',date:'2018-06-07'}],
                    commentL:2,
                    all:'YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太可怕。。。再说国内情况，优酷的播放器我比较熟悉，优化比较麻烦，前端真的是最小部分，除了依赖ups播放服务外，还有cdn，广告。我接手第一步用node接过来做首屏渲染，主要是保证前端能做的优化链路尽可能的短， 本来就不好弄，再掺和个php渲染层更难受的。我要有足够的控制权，不然没法优化。ups天天在做优化，瘦身提效，做防盗链等等，合作比较近紧密，他们也需要我们做清晰度降级等，所以合作比较愉快。然后说cdn， 历史原因，有优酷cdn和阿里云cdn两种，在慢慢替换，在变好。最后说下广告，我要吐槽下，估计各家都一样，赚钱的部门最难伺候，你们懂的。本来播放器没多少代码，可是加了广告。。。你们懂的性能差不能完全怪到技术身上，如果非要怪，只能说我没能力推动他们。最后，说一下大家关注的前端，常规技术优化不讲了，对播放器做插件化，模块化也是常见手段。技术上要出成绩还是比较好做的，node部分也算。整体性能优化也算。核心分三步，首屏渲染，核心播放，其他。不能说更多了。'
                },{
                    img:'https://pic1.zhimg.com/50/v2-b8a125d39d24cbc7bab805672f58fa22_400x224.jpg',
                    topic:'c++',
                    showC:false,
                    showCon:false,
                    date:'2018-06-19',
                    breif:'YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太…',
                    title:'为什么同样是视频网站，Youtube 感觉加载很快、很轻，B 站、优酷、爱奇艺就感觉慢且重呢？',
                    star:'20',cmt:'条评论',showFix:false,addo:false,
                    comment:[{name:'dyxuan',content:'太棒了'}],
                    all:'YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太可怕。。。再说国内情况，优酷的播放器我比较熟悉，优化比较麻烦，前端真的是最小部分，除了依赖ups播放服务外，还有cdn，广告。我接手第一步用node接过来做首屏渲染，主要是保证前端能做的优化链路尽可能的短， 本来就不好弄，再掺和个php渲染层更难受的。我要有足够的控制权，不然没法优化。ups天天在做优化，瘦身提效，做防盗链等等，合作比较近紧密，他们也需要我们做清晰度降级等，所以合作比较愉快。然后说cdn， 历史原因，有优酷cdn和阿里云cdn两种，在慢慢替换，在变好。最后说下广告，我要吐槽下，估计各家都一样，赚钱的部门最难伺候，你们懂的。本来播放器没多少代码，可是加了广告。。。你们懂的性能差不能完全怪到技术身上，如果非要怪，只能说我没能力推动他们。最后，说一下大家关注的前端，常规技术优化不讲了，对播放器做插件化，模块化也是常见手段。技术上要出成绩还是比较好做的，node部分也算。整体性能优化也算。核心分三步，首屏渲染，核心播放，其他。不能说更多了。'
                },{
                    img:undefined,
                    showC:false,
                    showCon:false,
                    topic:'java',
                    date:'2018-06-11',
                    breif:'YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太…',
                    title:'为什么同样是视频网站，Youtube 感觉加载很快、很轻，B 站、优酷、爱奇艺就感觉慢且重呢？',
                    star:'20',cmt:'条评论',showFix:false,addo:false,
                    comment:[{name:'dyxuan',content:'太棒了',date:'2018-06-06'},{name:'dyxuan',content:'太棒了',date:'2018-06-07'}],
                    commentL:2,
                    all:'YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太可怕。。。再说国内情况，优酷的播放器我比较熟悉，优化比较麻烦，前端真的是最小部分，除了依赖ups播放服务外，还有cdn，广告。我接手第一步用node接过来做首屏渲染，主要是保证前端能做的优化链路尽可能的短， 本来就不好弄，再掺和个php渲染层更难受的。我要有足够的控制权，不然没法优化。ups天天在做优化，瘦身提效，做防盗链等等，合作比较近紧密，他们也需要我们做清晰度降级等，所以合作比较愉快。然后说cdn， 历史原因，有优酷cdn和阿里云cdn两种，在慢慢替换，在变好。最后说下广告，我要吐槽下，估计各家都一样，赚钱的部门最难伺候，你们懂的。本来播放器没多少代码，可是加了广告。。。你们懂的性能差不能完全怪到技术身上，如果非要怪，只能说我没能力推动他们。最后，说一下大家关注的前端，常规技术优化不讲了，对播放器做插件化，模块化也是常见手段。技术上要出成绩还是比较好做的，node部分也算。整体性能优化也算。核心分三步，首屏渲染，核心播放，其他。不能说更多了。'
                },{
                    img:'https://pic1.zhimg.com/50/v2-b8a125d39d24cbc7bab805672f58fa22_400x224.jpg',
                    topic:'c++',
                    showC:false,
                    showCon:false,
                    date:'2018-06-19',
                    breif:'YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太…',
                    title:'为什么同样是视频网站，Youtube 感觉加载很快、很轻，B 站、优酷、爱奇艺就感觉慢且重呢？',
                    star:'20',cmt:'条评论',showFix:false,addo:false,
                    comment:[{name:'dyxuan',content:'太棒了'}],
                    all:'YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太可怕。。。再说国内情况，优酷的播放器我比较熟悉，优化比较麻烦，前端真的是最小部分，除了依赖ups播放服务外，还有cdn，广告。我接手第一步用node接过来做首屏渲染，主要是保证前端能做的优化链路尽可能的短， 本来就不好弄，再掺和个php渲染层更难受的。我要有足够的控制权，不然没法优化。ups天天在做优化，瘦身提效，做防盗链等等，合作比较近紧密，他们也需要我们做清晰度降级等，所以合作比较愉快。然后说cdn， 历史原因，有优酷cdn和阿里云cdn两种，在慢慢替换，在变好。最后说下广告，我要吐槽下，估计各家都一样，赚钱的部门最难伺候，你们懂的。本来播放器没多少代码，可是加了广告。。。你们懂的性能差不能完全怪到技术身上，如果非要怪，只能说我没能力推动他们。最后，说一下大家关注的前端，常规技术优化不讲了，对播放器做插件化，模块化也是常见手段。技术上要出成绩还是比较好做的，node部分也算。整体性能优化也算。核心分三步，首屏渲染，核心播放，其他。不能说更多了。'
                },{
                    img:undefined,
                    showC:false,
                    showCon:false,
                    topic:'java',
                    date:'2018-06-11',
                    breif:'YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太…',
                    title:'为什么同样是视频网站，Youtube 感觉加载很快、很轻，B 站、优酷、爱奇艺就感觉慢且重呢？',
                    star:'20',cmt:'条评论',showFix:false,addo:false,
                    comment:[{name:'dyxuan',content:'太棒了',date:'2018-06-06'},{name:'dyxuan',content:'太棒了',date:'2018-06-07'}],
                    commentL:2,
                    all:'YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太可怕。。。再说国内情况，优酷的播放器我比较熟悉，优化比较麻烦，前端真的是最小部分，除了依赖ups播放服务外，还有cdn，广告。我接手第一步用node接过来做首屏渲染，主要是保证前端能做的优化链路尽可能的短， 本来就不好弄，再掺和个php渲染层更难受的。我要有足够的控制权，不然没法优化。ups天天在做优化，瘦身提效，做防盗链等等，合作比较近紧密，他们也需要我们做清晰度降级等，所以合作比较愉快。然后说cdn， 历史原因，有优酷cdn和阿里云cdn两种，在慢慢替换，在变好。最后说下广告，我要吐槽下，估计各家都一样，赚钱的部门最难伺候，你们懂的。本来播放器没多少代码，可是加了广告。。。你们懂的性能差不能完全怪到技术身上，如果非要怪，只能说我没能力推动他们。最后，说一下大家关注的前端，常规技术优化不讲了，对播放器做插件化，模块化也是常见手段。技术上要出成绩还是比较好做的，node部分也算。整体性能优化也算。核心分三步，首屏渲染，核心播放，其他。不能说更多了。YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太可怕。。。再说国内情况，优酷的播放器我比较熟悉，优化比较麻烦，前端真的是最小部分，除了依赖ups播放服务外，还有cdn，广告。我接手第一步用node接过来做首屏渲染，主要是保证前端能做的优化链路尽可能的短， 本来就不好弄，再掺和个php渲染层更难受的。我要有足够的控制权，不然没法优化。ups天天在做优化，瘦身提效，做防盗链等等，合作比较近紧密，他们也需要我们做清晰度降级等，所以合作比较愉快。然后说cdn， 历史原因，有优酷cdn和阿里云cdn两种，在慢慢替换，在变好。最后说下广告，我要吐槽下，估计各家都一样，赚钱的部门最难伺候，你们懂的。本来播放器没多少代码，可是加了广告。。。你们懂的性能差不能完全怪到技术身上，如果非要怪，只能说我没能力推动他们。最后，说一下大家关注的前端，常规技术优化不讲了，对播放器做插件化，模块化也是常见手段。技术上要出成绩还是比较好做的，node部分也算。整体性能优化也算。核心分三步，首屏渲染，核心播放，其他。不能说更多了。YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太可怕。。。再说国内情况，优酷的播放器我比较熟悉，优化比较麻烦，前端真的是最小部分，除了依赖ups播放服务外，还有cdn，广告。我接手第一步用node接过来做首屏渲染，主要是保证前端能做的优化链路尽可能的短， 本来就不好弄，再掺和个php渲染层更难受的。我要有足够的控制权，不然没法优化。ups天天在做优化，瘦身提效，做防盗链等等，合作比较近紧密，他们也需要我们做清晰度降级等，所以合作比较愉快。然后说cdn， 历史原因，有优酷cdn和阿里云cdn两种，在慢慢替换，在变好。最后说下广告，我要吐槽下，估计各家都一样，赚钱的部门最难伺候，你们懂的。本来播放器没多少代码，可是加了广告。。。你们懂的性能差不能完全怪到技术身上，如果非要怪，只能说我没能力推动他们。最后，说一下大家关注的前端，常规技术优化不讲了，对播放器做插件化，模块化也是常见手段。技术上要出成绩还是比较好做的，node部分也算。整体性能优化也算。核心分三步，首屏渲染，核心播放，其他。不能说更多了。YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太可怕。。。再说国内情况，优酷的播放器我比较熟悉，优化比较麻烦，前端真的是最小部分，除了依赖ups播放服务外，还有cdn，广告。我接手第一步用node接过来做首屏渲染，主要是保证前端能做的优化链路尽可能的短， 本来就不好弄，再掺和个php渲染层更难受的。我要有足够的控制权，不然没法优化。ups天天在做优化，瘦身提效，做防盗链等等，合作比较近紧密，他们也需要我们做清晰度降级等，所以合作比较愉快。然后说cdn， 历史原因，有优酷cdn和阿里云cdn两种，在慢慢替换，在变好。最后说下广告，我要吐槽下，估计各家都一样，赚钱的部门最难伺候，你们懂的。本来播放器没多少代码，可是加了广告。。。你们懂的性能差不能完全怪到技术身上，如果非要怪，只能说我没能力推动他们。最后，说一下大家关注的前端，常规技术优化不讲了，对播放器做插件化，模块化也是常见手段。技术上要出成绩还是比较好做的，node部分也算。整体性能优化也算。核心分三步，首屏渲染，核心播放，其他。不能说更多了。YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太可怕。。。再说国内情况，优酷的播放器我比较熟悉，优化比较麻烦，前端真的是最小部分，除了依赖ups播放服务外，还有cdn，广告。我接手第一步用node接过来做首屏渲染，主要是保证前端能做的优化链路尽可能的短， 本来就不好弄，再掺和个php渲染层更难受的。我要有足够的控制权，不然没法优化。ups天天在做优化，瘦身提效，做防盗链等等，合作比较近紧密，他们也需要我们做清晰度降级等，所以合作比较愉快。然后说cdn， 历史原因，有优酷cdn和阿里云cdn两种，在慢慢替换，在变好。最后说下广告，我要吐槽下，估计各家都一样，赚钱的部门最难伺候，你们懂的。本来播放器没多少代码，可是加了广告。。。你们懂的性能差不能完全怪到技术身上，如果非要怪，只能说我没能力推动他们。最后，说一下大家关注的前端，常规技术优化不讲了，对播放器做插件化，模块化也是常见手段。技术上要出成绩还是比较好做的，node部分也算。整体性能优化也算。核心分三步，首屏渲染，核心播放，其他。不能说更多了。YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太可怕。。。再说国内情况，优酷的播放器我比较熟悉，优化比较麻烦，前端真的是最小部分，除了依赖ups播放服务外，还有cdn，广告。我接手第一步用node接过来做首屏渲染，主要是保证前端能做的优化链路尽可能的短， 本来就不好弄，再掺和个php渲染层更难受的。我要有足够的控制权，不然没法优化。ups天天在做优化，瘦身提效，做防盗链等等，合作比较近紧密，他们也需要我们做清晰度降级等，所以合作比较愉快。然后说cdn， 历史原因，有优酷cdn和阿里云cdn两种，在慢慢替换，在变好。最后说下广告，我要吐槽下，估计各家都一样，赚钱的部门最难伺候，你们懂的。本来播放器没多少代码，可是加了广告。。。你们懂的性能差不能完全怪到技术身上，如果非要怪，只能说我没能力推动他们。最后，说一下大家关注的前端，常规技术优化不讲了，对播放器做插件化，模块化也是常见手段。技术上要出成绩还是比较好做的，node部分也算。整体性能优化也算。核心分三步，首屏渲染，核心播放，其他。不能说更多了。YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太可怕。。。再说国内情况，优酷的播放器我比较熟悉，优化比较麻烦，前端真的是最小部分，除了依赖ups播放服务外，还有cdn，广告。我接手第一步用node接过来做首屏渲染，主要是保证前端能做的优化链路尽可能的短， 本来就不好弄，再掺和个php渲染层更难受的。我要有足够的控制权，不然没法优化。ups天天在做优化，瘦身提效，做防盗链等等，合作比较近紧密，他们也需要我们做清晰度降级等，所以合作比较愉快。然后说cdn， 历史原因，有优酷cdn和阿里云cdn两种，在慢慢替换，在变好。最后说下广告，我要吐槽下，估计各家都一样，赚钱的部门最难伺候，你们懂的。本来播放器没多少代码，可是加了广告。。。你们懂的性能差不能完全怪到技术身上，如果非要怪，只能说我没能力推动他们。最后，说一下大家关注的前端，常规技术优化不讲了，对播放器做插件化，模块化也是常见手段。技术上要出成绩还是比较好做的，node部分也算。整体性能优化也算。核心分三步，首屏渲染，核心播放，其他。不能说更多了。YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太可怕。。。再说国内情况，优酷的播放器我比较熟悉，优化比较麻烦，前端真的是最小部分，除了依赖ups播放服务外，还有cdn，广告。我接手第一步用node接过来做首屏渲染，主要是保证前端能做的优化链路尽可能的短， 本来就不好弄，再掺和个php渲染层更难受的。我要有足够的控制权，不然没法优化。ups天天在做优化，瘦身提效，做防盗链等等，合作比较近紧密，他们也需要我们做清晰度降级等，所以合作比较愉快。然后说cdn， 历史原因，有优酷cdn和阿里云cdn两种，在慢慢替换，在变好。最后说下广告，我要吐槽下，估计各家都一样，赚钱的部门最难伺候，你们懂的。本来播放器没多少代码，可是加了广告。。。你们懂的性能差不能完全怪到技术身上，如果非要怪，只能说我没能力推动他们。最后，说一下大家关注的前端，常规技术优化不讲了，对播放器做插件化，模块化也是常见手段。技术上要出成绩还是比较好做的，node部分也算。整体性能优化也算。核心分三步，首屏渲染，核心播放，其他。不能说更多了。YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太可怕。。。再说国内情况，优酷的播放器我比较熟悉，优化比较麻烦，前端真的是最小部分，除了依赖ups播放服务外，还有cdn，广告。我接手第一步用node接过来做首屏渲染，主要是保证前端能做的优化链路尽可能的短， 本来就不好弄，再掺和个php渲染层更难受的。我要有足够的控制权，不然没法优化。ups天天在做优化，瘦身提效，做防盗链等等，合作比较近紧密，他们也需要我们做清晰度降级等，所以合作比较愉快。然后说cdn， 历史原因，有优酷cdn和阿里云cdn两种，在慢慢替换，在变好。最后说下广告，我要吐槽下，估计各家都一样，赚钱的部门最难伺候，你们懂的。本来播放器没多少代码，可是加了广告。。。你们懂的性能差不能完全怪到技术身上，如果非要怪，只能说我没能力推动他们。最后，说一下大家关注的前端，常规技术优化不讲了，对播放器做插件化，模块化也是常见手段。技术上要出成绩还是比较好做的，node部分也算。整体性能优化也算。核心分三步，首屏渲染，核心播放，其他。不能说更多了。YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太可怕。。。再说国内情况，优酷的播放器我比较熟悉，优化比较麻烦，前端真的是最小部分，除了依赖ups播放服务外，还有cdn，广告。我接手第一步用node接过来做首屏渲染，主要是保证前端能做的优化链路尽可能的短， 本来就不好弄，再掺和个php渲染层更难受的。我要有足够的控制权，不然没法优化。ups天天在做优化，瘦身提效，做防盗链等等，合作比较近紧密，他们也需要我们做清晰度降级等，所以合作比较愉快。然后说cdn， 历史原因，有优酷cdn和阿里云cdn两种，在慢慢替换，在变好。最后说下广告，我要吐槽下，估计各家都一样，赚钱的部门最难伺候，你们懂的。本来播放器没多少代码，可是加了广告。。。你们懂的性能差不能完全怪到技术身上，如果非要怪，只能说我没能力推动他们。最后，说一下大家关注的前端，常规技术优化不讲了，对播放器做插件化，模块化也是常见手段。技术上要出成绩还是比较好做的，node部分也算。整体性能优化也算。核心分三步，首屏渲染，核心播放，其他。不能说更多了。YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太可怕。。。再说国内情况，优酷的播放器我比较熟悉，优化比较麻烦，前端真的是最小部分，除了依赖ups播放服务外，还有cdn，广告。我接手第一步用node接过来做首屏渲染，主要是保证前端能做的优化链路尽可能的短， 本来就不好弄，再掺和个php渲染层更难受的。我要有足够的控制权，不然没法优化。ups天天在做优化，瘦身提效，做防盗链等等，合作比较近紧密，他们也需要我们做清晰度降级等，所以合作比较愉快。然后说cdn， 历史原因，有优酷cdn和阿里云cdn两种，在慢慢替换，在变好。最后说下广告，我要吐槽下，估计各家都一样，赚钱的部门最难伺候，你们懂的。本来播放器没多少代码，可是加了广告。。。你们懂的性能差不能完全怪到技术身上，如果非要怪，只能说我没能力推动他们。最后，说一下大家关注的前端，常规技术优化不讲了，对播放器做插件化，模块化也是常见手段。技术上要出成绩还是比较好做的，node部分也算。整体性能优化也算。核心分三步，首屏渲染，核心播放，其他。不能说更多了。'
                },{
                    img:'https://pic1.zhimg.com/50/v2-b8a125d39d24cbc7bab805672f58fa22_400x224.jpg',
                    topic:'c++',
                    showC:false,
                    showCon:false,
                    date:'2018-06-19',
                    breif:'YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太…',
                    title:'为什么同样是视频网站，Youtube 感觉加载很快、很轻，B 站、优酷、爱奇艺就感觉慢且重呢？',
                    star:'20',cmt:'条评论',showFix:false,addo:false,
                    comment:[{name:'dyxuan',content:'太棒了'}],
                    all:'YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太可怕。。。再说国内情况，优酷的播放器我比较熟悉，优化比较麻烦，前端真的是最小部分，除了依赖ups播放服务外，还有cdn，广告。我接手第一步用node接过来做首屏渲染，主要是保证前端能做的优化链路尽可能的短， 本来就不好弄，再掺和个php渲染层更难受的。我要有足够的控制权，不然没法优化。ups天天在做优化，瘦身提效，做防盗链等等，合作比较近紧密，他们也需要我们做清晰度降级等，所以合作比较愉快。然后说cdn， 历史原因，有优酷cdn和阿里云cdn两种，在慢慢替换，在变好。最后说下广告，我要吐槽下，估计各家都一样，赚钱的部门最难伺候，你们懂的。本来播放器没多少代码，可是加了广告。。。你们懂的性能差不能完全怪到技术身上，如果非要怪，只能说我没能力推动他们。最后，说一下大家关注的前端，常规技术优化不讲了，对播放器做插件化，模块化也是常见手段。技术上要出成绩还是比较好做的，node部分也算。整体性能优化也算。核心分三步，首屏渲染，核心播放，其他。不能说更多了。'
                },{
                    img:undefined,
                    showC:false,
                    showCon:false,
                    topic:'java',
                    date:'2018-06-11',
                    breif:'YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太…',
                    title:'为什么同样是视频网站，Youtube 感觉加载很快、很轻，B 站、优酷、爱奇艺就感觉慢且重呢？',
                    star:'20',cmt:'条评论',showFix:false,addo:false,
                    comment:[{name:'dyxuan',content:'太棒了',date:'2018-06-06'},{name:'dyxuan',content:'太棒了',date:'2018-06-07'}],
                    commentL:2,
                    all:'YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太可怕。。。再说国内情况，优酷的播放器我比较熟悉，优化比较麻烦，前端真的是最小部分，除了依赖ups播放服务外，还有cdn，广告。我接手第一步用node接过来做首屏渲染，主要是保证前端能做的优化链路尽可能的短， 本来就不好弄，再掺和个php渲染层更难受的。我要有足够的控制权，不然没法优化。ups天天在做优化，瘦身提效，做防盗链等等，合作比较近紧密，他们也需要我们做清晰度降级等，所以合作比较愉快。然后说cdn， 历史原因，有优酷cdn和阿里云cdn两种，在慢慢替换，在变好。最后说下广告，我要吐槽下，估计各家都一样，赚钱的部门最难伺候，你们懂的。本来播放器没多少代码，可是加了广告。。。你们懂的性能差不能完全怪到技术身上，如果非要怪，只能说我没能力推动他们。最后，说一下大家关注的前端，常规技术优化不讲了，对播放器做插件化，模块化也是常见手段。技术上要出成绩还是比较好做的，node部分也算。整体性能优化也算。核心分三步，首屏渲染，核心播放，其他。不能说更多了。'
                },{
                    img:'https://pic1.zhimg.com/50/v2-b8a125d39d24cbc7bab805672f58fa22_400x224.jpg',
                    topic:'c++',
                    showC:false,
                    showCon:false,
                    date:'2018-06-19',
                    breif:'YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太…',
                    title:'为什么同样是视频网站，Youtube 感觉加载很快、很轻，B 站、优酷、爱奇艺就感觉慢且重呢？',
                    star:'20',cmt:'条评论',showFix:false,addo:false,
                    comment:[{name:'dyxuan',content:'太棒了'}],
                    all:'YouTube不用阉割管兼容性，甚至说规范api的制定者，这和chrome这个入口密不可分，去参加今年的Googleio大会最大的感受就是有浏览器太可怕。。。再说国内情况，优酷的播放器我比较熟悉，优化比较麻烦，前端真的是最小部分，除了依赖ups播放服务外，还有cdn，广告。我接手第一步用node接过来做首屏渲染，主要是保证前端能做的优化链路尽可能的短， 本来就不好弄，再掺和个php渲染层更难受的。我要有足够的控制权，不然没法优化。ups天天在做优化，瘦身提效，做防盗链等等，合作比较近紧密，他们也需要我们做清晰度降级等，所以合作比较愉快。然后说cdn， 历史原因，有优酷cdn和阿里云cdn两种，在慢慢替换，在变好。最后说下广告，我要吐槽下，估计各家都一样，赚钱的部门最难伺候，你们懂的。本来播放器没多少代码，可是加了广告。。。你们懂的性能差不能完全怪到技术身上，如果非要怪，只能说我没能力推动他们。最后，说一下大家关注的前端，常规技术优化不讲了，对播放器做插件化，模块化也是常见手段。技术上要出成绩还是比较好做的，node部分也算。整体性能优化也算。核心分三步，首屏渲染，核心播放，其他。不能说更多了。'
                },],
            color1:'#fff',
            cmt:'条评论',
            allone:[],
            count:0,
            top:0,
            blogindex:0
        }
    },
    methods:{
        showcomment(index){
            this.blogs[index].showC = !this.blogs[index].showC
            if(this.blogs[index].showC)
                this.blogs[index].cmt = '收起评论'
            else 
                this.blogs[index].cmt = '条评论'
        },
        showcontent(index) {
            this.blogs[index].showCon = !this.blogs[index].showCon;
            this.blogs[index].showFix = false;
        },
        ishowfix(arr) {
            let blog = this.blogs;
            let showlist = [];
            let st = document.documentElement.scrollTop;
            let ch = document.documentElement.clientHeight||window.innerHeight
            for(let i=0;i<blog.length;i++) {
                if(blog[i].showCon) {
                    let ct = this.offset(arr[i]).top
                    let c1t = i-1>=0?this.offset(arr[i-1]).top:0
                    if(!blog[i].showFix&&ct>st+ch) {
                        if(i-1>=0) {
                            if(c1t<st) {
                                this.top = ct
                                return i
                            }
                        }else {
                            this.top = ct
                            return i
                        }
                    } else if(blog[i].showFix){
                        if(i-1>=0) {
                            if((c1t<st+ch)&&(c1t>st)) {
                                return undefined
                            }
                        }
                        if(this.top > st+ch) {
                            return i
                        }
                    }
                }
            }
            return undefined
        },
        offset(ele) {
            var rect, win,
                elem = ele;

            if ( !elem ) {
                return;
            }
            if ( !elem.getClientRects().length ) {
                return { top: 0, left: 0 };
            }

            // Get document-relative position by adding viewport scroll to viewport-relative gBCR
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
                top: rect.top + win.pageYOffset,
                left: rect.left + win.pageXOffset
            };
        },
        wheel() {
            this.count++;
            if(this.count > 10) {
                this.count = 0;
                if(this.allone[0]) {
                } else {
                    let arr = document.querySelectorAll('.b-c');
                    this.allone = arr;
                }
                let index = this.ishowfix(this.allone);
                for(let i=0;i<this.blogs.length;i++) {
                    if(i === index) {
                        this.blogs[index].showFix = true;
                        continue
                    } else {
                        this.blogs[i].showFix = false;
                    }
                }
            }
        },
        addones(index) {
            console.log(index)
            this.blogs[index].addo = true;
            setTimeout(()=>{
                this.blogs[index].addo = false;
            },400)
        }
    },
    mounted() {
        document.addEventListener('scroll',this.wheel)
    },
    components:{
        right
    }
}
</script>

<style scoped>
.xin {
    position: relative;
}
.lsact{
    color: red !important;
    top: -20px !important;
    opacity: 1 !important;
    transition: all 0.7s;
}
.xin .ls {
    position: absolute;
    top: 2px;
    font-size: 12px;
    right: 4px;
    color: #ffc2c2;
    opacity: 0;
    
}

.b-xx {
    font-size: 14px;
    color: #8590a6;
    line-height: 30px;
}

</style>
