<template>
    <div id="homePage">
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
        
        <!-- 中间主内容 -->
        <div class="main">
            <div class="logBox">
                <div class="logItem">
                    <img class="logImg" src="../../assets/zpzpwz_4.png"/>
                    <p class="text_size_2">开店百科</p>
                </div>
                <div class="logItem">
                    <img class="logImg" src="../../assets/zpzpwz_5.png"/>
                    <p class="text_size_2">关于我们</p>
                </div>
                <div class="logItem">
                    <img class="logImg" src="../../assets/zpzpwz_6.png"/>
                    <p class="text_size_2">成功案例</p>
                </div>
            </div>
            <div class="caseList">
                <div class="caseTips">
                    联系客服
                </div>
                <div class="connectService">
                    <div class="connect-item" v-for="(item,index) in 4" :key="index">
                          <div class="connect-item-img">
                            <img src="../../assets/zpzpwz_8.png" alt="加载失败">
                          </div>
                          <div class="connect-service-info">
                              <div class="store-right-li">
                                  <span>客服</span>
                                  <span>已有2561人咨询</span>
                              </div>
                              <div class="store-right-li margin-top">
                                  <span class="text_size_2">张小姐</span>
                                  <span style="color:#2A9DFF">12546789456</span>
                              </div>
                          </div>
                          <div class="connect-btn">
                              <i></i>
                              <span>在线咨询</span>
                          </div>  
                    </div>
                </div>
            </div>
            <div class="caseList">
                <div class="caseTips">
                    服务流程
                </div>
                <div class="case-process">
                    <div class="case-process-li" >
                        <div class="case-process-img">
                            <img src="../../assets/zpzpwz_12.png" alt="加载失败">
                        </div>
                        <h3>联系预约</h3>
                        <p class="text_size_1">预约店铺信息实地考察</p>
                    </div>
                    <div class="case-process-li">
                        <div class="case-process-img">
                            <img src="../../assets/zpzpwz_13.png" alt="加载失败">
                        </div>
                        <h3>开通转店资质</h3>
                        <p class="text_size_1">店家考察后确认合作签订法律合同</p>
                    </div>
                    <div class="case-process-li">
                        <div class="case-process-img">
                            <img src="../../assets/zpzpwz_14.png" alt="加载失败">
                        </div>
                        <h3>客服服务</h3>
                        <p class="text_size_1">凭条广告推送 专业转店客服服务跟踪店铺转让过程</p>
                    </div>
                    <div class="case-process-li">
                       <div class="case-process-img">
                            <img src="../../assets/zpzpwz_15.png" alt="加载失败">
                        </div>
                        <h3>人工售后服务</h3>
                        <p class="text_size_1">服务到转铺成功为止</p>
                    </div>
                </div>
            </div>
            <div class="caseList">
                <div class="caseTips">
                    精选店铺
                </div>
                <div class="storeList">
                    <div class="storeItem" v-for="(item,index) in 3" :key="index">
                        <div class="hot-Push">
                            热推
                        </div>
                        <div class="store-left">
                            <img src="../../assets/zpzpwz_16.png" alt="加载失败" style="width：100%;height:100%">
                        </div>
                        <div class="store-right">
                            <div class="store-right-li">
                                <span class="text_size_2">转租大朗长富步行街的店铺</span>
                                <span>24小时内</span>
                            </div>
                            <div  class="store-right-li">
                                <p>行业 : 奶茶  电话 : <span style="color:#2A9DFF">132156878945</span></p>
                                <span>45平方米</span>
                            </div>
                            <div  class="store-right-li">
                                <span>地址 : 大朗长富步行街108号</span>
                                <span>转让租金 : 面议</span>
                            </div>
                            <div  class="store-right-li">
                                <span>上水 下水</span>
                                <span>被查看548次</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 底部栏 -->
        <footer-box></footer-box>
    </div>
</template>
<script>
    import "swiper/dist/css/swiper.css";
    import {swiper,swiperSlide} from "vue-awesome-swiper";
    import footerBox from "@/components/common/footerBox";
 export default {
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
     created(){

     },
     components:{
         swiper,
         swiperSlide,
         footerBox
     }
 }
</script>
<style scoped>

    .text_size_1{
        font-size:14px;
        font-weight:bold;
        color:#666666;
    }

    .text_size_2{
        font-size:17px;
        font-weight:400;
        color:#333333;
    }

    .topBar{
        width:900px;
        min-width:900px;
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
        min-width:900px;
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

    .main{
        width:900px;
        min-width:900px;
        margin:20px auto;
    }

    .logBox{
        width:100%;
        display:flex;
        justify-content: space-between;
    }

    .logItem{
        width:290px;
        height:341px;
        border:2px solid rgba(239, 239, 239, 1);
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        cursor: pointer;
    }

    .logImg{
        width:90px;
        height:90px;
        opacity:0.8;
        margin-bottom:50px;
    }

    .caseList{
        display:flex;
        flex-direction:column;
        align-items:center;
    }

    .caseTips{
        width:133px;
        height:52px;
        line-height:52px;
        margin: 45px 0;
        font-size:23px;
        font-weight:bold;
        background:url("../../assets/zpzpwz_7.png");
        background-size:100%;
        background-position:50%;
        background-repeat:no-repeat;
    }



    .connectService{
        width:100%;
        display:flex;
        justify-content:space-between;
    }



    .connect-item{
        box-sizing:border-box;
        width:214px;
        height:280px;
        border:2px solid rgba(239,239,239,1);
        padding:30px 17px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-between;


    }

    .connect-item-img{
        width:107px;
        height:107px;
        border-radius:50%;
    }


    .connect-service-info{
        width:100%;
        color:#999999;
        font-size:14px;
    }

    .margin-top{
        margin-top:15px;
    }

    .connect-btn{
        width:125px;
        height:30px;
        line-height:30px;
        font-size:14px;
        color:white;
        background:#EA3323;
        border-radius:15px;
    }


    .case-process{
        width:100%;
        height:254px;
        border:2px solid rgba(239,239,239,1);
        display:flex;
    }

    .case-process-li{
        width:25%;
        padding-top:45px;
    }

    .case-process-img{
        width:59px;
        height:59px;
        margin:0 auto;
    }

    h3{
        margin:20px 0;
        font-size:20px;
        font-weight:bold;
    }

    .storeList{
        width:100%;
    }

    .storeItem{
        position:relative;
        display:flex;
        height:146px;
        border:2px solid rgba(239,239,239,1);
        margin-bottom:10px;
    }

    .hot-Push{
        position: absolute;
        left:0;
        top:0;
        width:66px;
        height:27px;
        line-height:27px;
        font-size:17px;
        font-weight:400;
        background:red;
        color:white;
        border-radius: 0 0 12px 0;
    }

    .store-left{
        padding: 5px 10px 5px 5px;
    }

    .store-right{
        width:100%;
        text-align:left;
        padding:10px 20px 10px 0;
        color:#999999;
        font-size:14px;
        display:flex;
        flex-direction: column;
        justify-content:space-between;
    }

    .store-right-li{
        display:flex;
        justify-content:space-between;
    }
    img{
        width:100%;
        height:100%;
    }
</style>