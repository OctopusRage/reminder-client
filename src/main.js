import Vue from 'vue'
import App from './App'
import Login from './components/Login'
import Timeline from './components/Timeline'
var VueRouter = require('vue-router')

Vue.use(VueRouter)



const routes = [
  { path: '/', component: App, name: 'home',
	  children:[
	  	{
	  		name: 'dashboard',
	  		path: 'dashboard',
        component: Timeline
	  	},
	  	{
	  		name: 'login',
	  		path: 'login',
	  		component: Login
	  	}
	  ]
	},
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
	history: true,
	hashbang: false,
  linkActiveClass: 'active-class',
  routes // short for routes: routes
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')