import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '@/view/demo'
import Git from '@/view/git'
import XJP from '@/view/xjp'
import Blog from '@/view/blog'
import Paper from '@/view/paper'
import OnePaper from '@/view/onepaper'
import Add from '@/view/addpaper'
import Del from '@/view/delpaper'
import Edit from '@/view/editpaper'
import Console from '@/view/console'
import TopicPaper from '@/view/topicpaper'
import Default from '@/view/default'
// import Add from '@/view/addpaper'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{ path: '/', redirect: '/index' },
		{
			path: '/index',
			name: 'HelloWorld',
			component: HelloWorld,
			children:[{
				path: '/',
				name: 'de',
				component: Default,
				children:[{
					path: '/',
					name: 'de',
					component: Blog},
					{
					path: 'topic/:id',
					name: 'git',
					component: TopicPaper,
				}]
			},{
				path: 'demo',
				name: 'demo',
				component: Demo
			},{
				path: 'loveCCPloveXjp',
				name: 'xjp',
				component: XJP
			},{
				path: 'git',
				name: 'git',
				component: Git
			},{
				path: 'paper',
				name: 'git',
				component: Paper,
			},{
				path: 'paper/:id',
				name: 'git',
				component: OnePaper,
			},{
				path: 'addpaper',
				name: 'git',
				component: Add,
			},{
				path: 'console',
				name: 'git',
				component: Console,
				children:[{
					path: 'add',
					name: 'de',
					component: Add
				},{
					path: 'del',
					name: 'de',
					component: Del
				},{
					path: 'edit',
					name: 'de',
					component: Edit
				}]
			}]
		}
	]
})
