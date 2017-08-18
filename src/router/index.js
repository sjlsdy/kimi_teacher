import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/Hello'
import main from '@/components/main'
import home from '@/components/home'
import manageStudent from '@/components/Hello'
home
Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'main',
		component: main
	}, {
		path: '/main',
		name: 'main',
		component: main
	}, {
		path: '/home',
		name: 'home',
		component: home
	}, {
		path: '/manageStudent',
		name: 'manageStudent',
		component: manageStudent
	}]
})