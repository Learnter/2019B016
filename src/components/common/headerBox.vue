<template>
    <section class="headerBox">
        <div class="topBar">
        <div>
            <label>
               热线电话:&nbsp;<span>{{company_phone}}</span>
            </label>   
        </div>
        <!-- <div class="topBar-right">
            <span class="login">登录</span><span class="register">注册</span>
        </div> -->
       </div>
       <div class="navBar">
            <div class="navContent">
                <div class="navContent-left" @click="logoBtn">
                        <img src="../../assets/logo1_1.png">
                </div>
                <div>
                    <ul class=" navContent-right flex_row">
                        <li class="navContent_right_li" :class="active == item.path ? 'active' : ' '"  v-for="(item,index) in navInfo" :key="index" @click = "toggleNav(item)">
                            <span class="tabBtn">{{item.name}}</span>
                        </li>
                    </ul>
                </div>
            </div>
       </div>

       <swiper class="mod-banner-scroll" :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="(item,index) in swiperList" :key="index">
                <img style="cursor:pointer"  @click="openNew(item)" :src="item.ad_img"/>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
       
    </section>
</template>
<script>
import "swiper/dist/css/swiper.css";
import {swiper,swiperSlide} from "vue-awesome-swiper";
export default {
    name:"headerBox",
    data(){
        return{
            company_phone:" ",
            active:"/home", //切换导航的路径
            navInfo:[{id:0,name:"首页",path:"/home"},{id:1,name:"成功案例",path:"/success"},{id:2,name:"关于我们",path:"/aboutUs"}],
            swiperOption:{ //轮播的参数
                    pagination:{
                        el:".swiper-pagination"
                    },
                    autoplay:{
                        delay:3000
                    },
                    navigation:{
                        nextEl:".swiper-button-next",
                        prevEl:".swiper-button-prev"
                    },
                    loop:true,
                    lazy:{
                        loadPrevNext:true
                    }
            },
          swiperList:[]        
        }
    },
    created(){

        this.company_phone = sessionStorage.getItem("company_phone"); //缓存中获取公司电话

        let banner = sessionStorage.getItem("bannerInfo"); //缓存中获取轮播数据

        this.swiperList = JSON.parse(banner); //将缓存中的数据解析成json对象,并赋值;
        
       
    },
    mounted(){
        this.refresh();
    },
    methods:{
        //点击导航切换
        toggleNav(item){
            this.active = item.path;
            this.$router.push(item.path); 
            sessionStorage.setItem("activePath",item.path);
        },
        //点击logo切换到首页
        logoBtn(){
            sessionStorage.setItem("activePath","/home");
            this.active = "/home";
            this.$router.push("/home");
        },
        //页面刷新 F5
        refresh(){
           let path = sessionStorage.getItem("activePath");
            if(path){
                this.active = path;
            }
        },
        //点击轮播图跳转
        openNew(item){
            
           if(item.open_type == "new"){

               //如果返回类型为new则在新窗口打开
               window.open(item.link_url,'_blank ');
           
           }else{
               //否则就在当前窗口打开
                window.open(item.link_url, "_self");
           }
        }
    },
    components:{
         swiper,
         swiperSlide,
     },
     watch:{
         $route(){
             //路由发生变化重新获取激活的路径
             this.active = sessionStorage.getItem("activePath");
         }
     }
}
</script>
<style scoped>

     /* .login{
        padding:0 8px;
        border-right:1px solid black;
        cursor:pointer;
        transition-delay:0.2s;
    }
    .login:hover,.register:hover{
        color:red;
        font-weight:bold; 
    }
    .register{
        padding: 0 8px;
        cursor:pointer;
        transition-delay:0.2s;
    } */

    .active{
      font-size:20px;
      font-weight:700;
      color:lightgoldenrodyellow;
      padding-bottom:8px;
      border-bottom:3px solid white;
    }

    .topBar{
        width:1200px;
        font-size:14px;
        margin:10px auto;
        display:flex;
        align-items:center;
        justify-content:flex-end;
    }

    .navBar{
      background:#EA3323;
      height:74px;
      line-height:74px;
      min-width: 1200px;
    }
    .navContent{
        width:1200px;
        height:100%;
        margin:0 auto;
        display:flex;
        justify-content:space-between;
        align-items:center;
        color:white;
    }

    .navContent-left{
        width:104px;
        height:48px;
    }

    .navContent-left:hover{
        cursor: pointer;
        opacity:0.5;
    }

    .navContent-right{
        align-items:center;
        font-size:18px; 
    }

    .navContent_right_li{
        height: 40px;
        line-height:40px;
        padding:0 5px;
        margin: 0 10px;
        cursor: pointer;
        transition:all .3s linear;
    }

    .navContent_right_li:hover{
       transform:scale(0.9);
       color:lightcyan;
       opacity:0.8;
       z-index:10;
    }
    .mod-banner-scroll{
        width:100%;
        min-width:1200px;
        height:482px;
    }

    
</style>