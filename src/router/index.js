import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'
import login from '@/components/login'
import main from '@/components/main'
import home from '@/components/home'
import manageStudent from '@/components/Hello'
Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'index',
		component: index
	}, {
		path: '/login',
		name: 'login',
		component: login
	}, {
		path: '/main',
		name: 'main',
		component: main,
		children: [{
			path: '/home',
			name: 'home',
			component: home
		}, {
			path: '/manageStudent',
			name: 'manageStudent',
			component: manageStudent
		}]
	}]
})