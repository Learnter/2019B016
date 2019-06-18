import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/Home/home";
import AboutUs from "@/components/aboutUs/aboutUs";
import Encyclopedia from "@/components/store/encyclopedia";
import Success from "@/components/success/success";

Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/aboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/encyclopedia',
      name: 'Encyclopedia',
      component: Encyclopedia
    },
    {
      path: '/',
      name: 'Success',
      component: Success
    }   
  ]
})
