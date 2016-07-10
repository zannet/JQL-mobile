import Vue from 'vue'
import Router from 'vue-router'
import App from './app.vue'
import Resource from 'vue-resource'
import Index from './views/index.vue'
import Register1 from './views/register1.vue'
import Register2 from './views/register2.vue'
import Register3 from './views/register3.vue'
import Login from './views/login.vue'
import List from './views/list.vue'
import Content from './views/content.vue'
import User from './views/user.vue'
import VuxDemo from './views/vux-demo.vue'

Vue.use(Router)
Vue.use(Resource)
Vue.config.debug = false
Vue.config.silent = true

var router = new Router({
    hashbang: false,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
})


router.map({
	'/': {
		component: Index
	},
	'/register1': {
		component: Register1
	},
	'/register2': {
		component: Register2
	},
	'/register3': {
		component: Register3
	},
	'/login': {
		component: Login
	},
	'/list': {
		component: List
	},
	'/content/:id': {
		component: Content
	},
	'/user': {
		component: User
	},
	'/vux-demo': {
		component: VuxDemo
	}
})

router.start(App, '#app')