<template>
    <section class="headerBox">
        <div class="topBar">
        <div>
            <label>
               热线电话:&nbsp;<span>{{company_phone}}</span>
            </label>   
        </div>
        <div class="topBar-right">
            <span class="login">登录</span><span class="register">注册</span>
        </div>
       </div>
       <div class="navBar">
            <div class="navContent">
                <div class="navContent-left" @click="logoBtn">
                        <img src="../../assets/zpzpwz_3.png" alt="加载失败">
                </div>
                <div>
                    <ul class=" navContent-right flex_row">
                        <li class="navContent_right_li" :class="active == item.path ? 'selected' : ' '"  v-for="(item,index) in navInfo" :key="index" @click = "toggleNav(item)">
                            <span class="tabBtn">{{item.name}}</span>
                        </li>
                    </ul>
                </div>
            </div>
       </div>

       <swiper class="mod-banner-scroll" :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="(item,index) in swiperList" :key="index">
                <img :src="item"/>
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
            navInfo:[{id:0,name:"首页",path:"/home"},{id:1,name:"开店百科",path:"/encyclopedia"},
                    {id:2,name:"成功案例",path:"/success"},{id:3,name:"关于我们",path:"/aboutUs"}],
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
         swiperList:["https://qn.kemean.cn/upload/201812/30/9def8f65f53c4a96b28232b3b5d5cf68", "https://qn.kemean.cn/upload/201812/30/4b6f813967de4d8d954ba4b096e4a858", "https://qn.kemean.cn/upload/201812/30/82f4c4a05be44e9fa607ff066903cb59"]           
        }
    },
    created(){
        this.company_phone = sessionStorage.getItem("company_phone");
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
        //点击logo
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
        }
    },
    components:{
         swiper,
         swiperSlide,
     }
}
</script>
<style scoped>

    .selected{
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
    .login{
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
    }
    .topBar-right{
        margin-left:2vw;
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