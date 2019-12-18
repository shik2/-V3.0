import Vue from 'vue'
import Router from 'vue-router'

import TargetSail from '@/components/TargetSail'
import TargetSky from '@/components/TargetSky'
import TargetMissile from '@/components/TargetMissile'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      redirect:'/targetSail'
    },
    {
        path:'/targetSail',
        name:'TargetSail',
        component:TargetSail
    },
    {
        path:'/targetSky',
        name:'TargetSky',
        component:TargetSky
    },
    {
        path:'/targetMissile',
        name:'TargetMissile',
        component:TargetMissile
    }
  ]
})
