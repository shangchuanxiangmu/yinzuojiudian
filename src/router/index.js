import Vue from 'vue'
import Router from 'vue-router'
import jiudian from '@/components/jiudian'
import huodong from '@/components/huodong'
import dingdan from '@/components/dingdan'
import wode from '@/components/wode'
import chengshi from '@/components/chengshi'
import riqi from '@/components/riqi'
import sousuo from '@/components/sousuo'
import binguan from '@/components/binguan'
import qiandao from '@/components/qiandao'
import lvxing from '@/components/lvxing'
import chajia from '@/components/chajia'
import cunchu from '@/components/cunchu'
import dan from '@/components/dan'
import dianhua from '@/components/dianhua'
import xieyi from '@/components/xieyi'
import yinsi from '@/components/yinsi'
import huiyuan from '@/components/huiyuan'
import guanyu from '@/components/guanyu'
import kefu from '@/components/kefu'
import fapiao from '@/components/fapiao'
import zhuxiao from '@/components/zhuxiao'
import denglv from '@/components/denglv'
import zhuce from '@/components/zhuce'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'jiudian',
      component: jiudian
     
    },
    {
      path: '/huodong',
      name: 'huodong',
      component: huodong
    },
    {
      path: '/dingdan',
      name: 'dingdan',
      component: dingdan
    },
    {
      path: '/wode',
      name: 'wode',
      component: wode
    },
    {
      	path: '/chengshi',
	    name: 'chengshi',
	    component: chengshi
    }, 
    {
      	path: '/riqi',
	    name: 'riqi',
	    component: riqi
    }, 
    {
      	path: '/sousuo',
	    name: 'sousuo',
	    component: sousuo
    }, 
    {
      	path: '/binguan',
	    name: 'binguan',
	    component: binguan
    }, 
    {
      	path: '/qiandao',
	    name: 'qiandao',
	    component: qiandao
    }, 
    {
      	path: '/lvxing',
	    name: 'lvxing',
	    component: lvxing
    }, 
    {
      	path: '/chajia',
	    name: 'chajia',
	    component: chajia
    },
    {
      	path: '/cunchu',
	    name: 'cunchu',
	    component: cunchu
    }, 
    {
      	path: '/fapiao',
	    name: 'fapiao',
	    component: fapiao
    }, 
    {
      	path: '/dan',
	    name: 'dan',
	    component: dan
    }, 
    {
      	path: '/kefu',
	    name: 'kefu',
	    component: kefu
    }, 
    {
      	path: '/dianhua',
	    name: 'dianhua',
	    component: dianhua
    }, 
    {
      	path: '/xieyi',
	    name: 'xieyi',
	    component: xieyi
    }, 
    {
      	path: '/yinsi',
	    name: 'yinsi',
	    component: yinsi
    }, 
    {
      	path: '/huiyuan',
	    name: 'huiyuan',
	    component: huiyuan
    }, 
    {
      	path: '/guanyu',
	    name: 'guanyu',
	    component: guanyu
    }, 
    {
      	path: '/zhuxiao',
	    name: 'zhuxiao',
	    component: zhuxiao
    }, 
    {
      	path: '/denglv',
	    name: 'denglv',
	    component: denglv
    }, 
    {
      	path: '/zhuce',
	    name: 'zhuce',
	    component: zhuce
    }
  ]
})
