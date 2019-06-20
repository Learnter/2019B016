import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/Home/home";
import AboutUs from "@/components/aboutUs/aboutUs";
import Encyclopedia from "@/components/store/encyclopedia";
import Success from "@/components/success/success";
import Details from "@/components/details/details";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
     {
      path: '/home',
      name: 'Home',
      component: resolve => require(["@/components/Home/home"],resolve)
    },
    {
      path: '/aboutUs',
      name: 'AboutUs',
      component: resolve => require(["@/components/aboutUs/aboutUs"],resolve)
    },
    {
      path: '/encyclopedia',
      name: 'Encyclopedia',
      component: resolve => require(["@/components/store/encyclopedia"],resolve)
    },
    {
      path: '/success',
      name: 'Success',
      component: resolve => require(["@/components/success/success"],resolve)
    },
    {
      path:"/details",
      name:"Details",
      component: resolve => require(["@/components/details/details"],resolve)
    }
  ]
})
