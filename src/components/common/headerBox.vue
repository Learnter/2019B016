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
                <div class="navContent-right">
                    <ul>
                        <li  v-for="(item,index) in navInfo" :key="index" @click = "toggleId = index">
                            <span class="tabBtn" :class="toggleId == index ? 'selected': ''">{{item.name}}</span>
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
            toggleId:0, //切换导航索引
            navInfo:[{id:1,name:"首页"},{id:2,name:"店铺转让"},{id:3,name:"我要找铺"},
                    {id:4,name:"找店选址"},{id:5,name:"APP下载"},{id:6,name:"更多服务"}],
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
    components:{
         swiper,
         swiperSlide,
     }
}
</script>
<style scoped>
    .topBar{
        width:900px;
        font-size:15px;
        margin:10px auto;
        display:flex;
        align-items:center;
        justify-content:flex-end;
    }
    .login{
        padding:0 5px;
        border-right:1px solid black;
        cursor:pointer;
    }
    .register{
        padding: 0 5px;
        cursor:pointer;
    }
    .topBar-right{
        margin-left:2vw;
    }
    .navBar{
      background:#EA3323;
      height:56px;
      line-height:56px;
    }
    .navContent{
        width:900px;
        height:100%;
        margin:0 auto;
        display:flex;
        justify-content:space-between;
        align-items:center;
        color:white;
    }

    .navContent-left{
        width:78px;
        height:36px;
    }

    .navContent-right ul {
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .tabBtn{
        padding: 5px 10px;
        font-size:15px;
        cursor: pointer;
    }
    .selected{
        border-bottom:2px solid white;
    }
    .mod-banner-scroll{
        width:100%;
        height:362px;
    }

    
</style>