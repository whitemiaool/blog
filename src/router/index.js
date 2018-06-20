import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '@/view/demo'
import Git from '@/view/git'
import XJP from '@/view/xjp'
import Default from '@/view/blog'

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
			}]
		}
	]
})
