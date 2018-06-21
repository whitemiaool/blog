import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '@/view/demo'
import Git from '@/view/git'
import XJP from '@/view/xjp'
import Default from '@/view/blog'
import Paper from '@/view/paper'
import OnePaper from '@/view/onepaper'
import Add from '@/view/addpaper'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld,
			children:[{
				path: '',
				name: 'de',
				component: Default
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
			}]
		}
	]
})
