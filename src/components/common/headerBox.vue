<template>
    <section class="headerBox">
        <div class="topBar">
        <div>
            <label>
               热线电话:<span>0769-4998215</span>
            </label>   
        </div>
        <div class="topBar-right">
            <span class="login">登录</span><span class="register">注册</span>
        </div>
       </div>
       <div class="navBar">
            <div class="navContent">
                <div class="navContent-left">
                    <img src="../../assets/zpzpwz_3.png" alt="加载失败">
                </div>
                <div>
                    <ul class=" navContent-right flex_row">
                        <li class="navContent_right_li" v-for="(item,index) in navInfo" :key="index" @click = "toggleNav(item)">
                            <div class="tabBtn" :class="active == item.name ? 'selected' : ' '">{{item.name}}</div>
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
            active:"首页", //切换导航索引
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
    mounted(){
        this.refresh();
    },
    methods:{

        toggleNav(item){
            this.active = item.name;
            this.$router.push(item.path); 
        },
        //页面刷新 F5
        refresh(){
           let path = location.hash.slice(1);
            switch (path) {
                case "/home":
                    this.active = "首页";
                    break;
                case "/encyclopedia":
                    this.active = "开店百科";
                    break;
                case "/details":
                     this.active = "转铺详情";
                    break;
                case "/success":
                     this.active = "成功案例";
                    break;
                case "/aboutUs":
                    this.active = "关于我们";
                    break;            
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
      font-size:22px;
      font-weight:400;
      color:lightgoldenrodyellow;
       border-bottom:3px solid black;
    }

    .topBar{
        width:1200px;
        font-size:20px;
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
        justify-content:center;
        align-items:center;
        font-size:20px; 
    }

    .navContent_right_li{
        padding:0 10px;
        cursor: pointer;
    }

    .navContent_right_li:hover{
       font-weight:bold;
       color:#525252;
    }
    .mod-banner-scroll{
        width:100%;
        min-width:1200px;
        height:482px;
    }

    
</style>