import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import register from '@/components/register'
import sao from '@/components/sao'
import yaoqing from '@/components/yaoqing'
import axios from 'axios'

Vue.use(Router)
Vue.prototype.axios = axios;
export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
		{
		  path: '/login',
		  component: login
		},
		{
		  path: '/register',
		  component: register
		},
		{
		  path: '/sao',
		  component: sao
		},
		{
		  path: '/yaoqing',
		  component: yaoqing
		}
  ]
})