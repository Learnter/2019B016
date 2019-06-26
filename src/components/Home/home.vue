<template>
    <div id="homePage">

        <!-- <header-box></header-box> -->

        <!-- 中间主内容 -->
        <div class="main">
            <div class="logBox">
                <div class="logItem text_size_17">
                    <img class="logImg" src="../../assets/zpzpwz_4.png"/>
                    <p>开店百科</p>
                </div>
                <div class="logItem text_size_17"  @click="toggleBtn('/success')">
                    <img class="logImg" src="../../assets/zpzpwz_6.png"/>
                    <p>成功案例</p>
                </div>
                <div class="logItem text_size_17"  @click="toggleBtn('/aboutUs')">
                    <img class="logImg" src="../../assets/zpzpwz_5.png"/>
                    <p>关于我们</p>
                </div>
            </div>
            <div class="caseList">
                <div class="caseTips">
                    联系客服
                </div>
                <div class="connectService">
                    <div class="connect-item" v-for="(item,index) in servicesInfo" :key="index">
                          <div class="connect-item-img">
                            <img class="connect-img-size" :src="item.avatar" alt="加载失败">
                          </div>
                          <div class="connect-service-info">
                              <div class="store-right-li text_size_12">
                                  <span>客服</span>
                                  <span>已有{{item.service_num}}人咨询</span>
                              </div>
                              <div class="store-right-li margin-top text_size_18">
                                  <span>{{item.username}}</span>
                                  <span style="color:#2A9DFF">{{item.mobile}}</span>
                              </div>
                          </div>
                          <div>
                            <a class=" connect-btn text_size_14 flex_row" :href="'tencent://message/?Site=baidu.com&Menu=yes&uin='+item.qq">
                                <div class="connect_btn_icon ">
                                        <img src="../../assets/zpzp_2.png"/>
                                </div>
                                <span>在线咨询</span>
                            </a>
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
                            <img class="case_img" src="../../assets/zpzpwz_12.png" alt="加载失败">
                        </div>
                        <h3>联系预约</h3>
                        <p class="text_size_14">预约店铺信息实地考察</p>
                    </div>
                    <div class="case-process-li">
                        <div class="case-process-img">
                            <img src="../../assets/zpzpwz_13.png" alt="加载失败">
                        </div>
                        <h3>开通转店资质</h3>
                        <p class="text_size_14">店家考察后确认合作签订法律合同</p>
                    </div>
                    <div class="case-process-li">
                        <div class="case-process-img">
                            <img src="../../assets/zpzpwz_14.png" alt="加载失败">
                        </div>
                        <h3>客服服务</h3>
                        <p class="text_size_14">凭条广告推送 专业转店客服服务跟踪店铺转让过程</p>
                    </div>
                    <div class="case-process-li">
                       <div class="case-process-img">
                            <img  src="../../assets/zpzpwz_15.png" alt="加载失败">
                        </div>
                        <h3>人工售后服务</h3>
                        <p class="text_size_14">服务到转铺成功为止</p>
                    </div>
                </div>
            </div>
            <div class="caseList">
                <div class="caseTips">
                    精选店铺
                </div>
                <div class="storeList">
                    <div class="storeItem" v-for="(item,index) in choicenessData" :key="index"  @click=toDetail(item)>
                        <div class="hot-Push">
                            热推
                        </div>
                        <div class="store-left">
                            <img :src="item.img_info.img_url">
                        </div>
                        <div class="store-right">
                            <div class="store-right-li">
                                <span class="text_size_17">{{item.title}}</span>
                                <!-- <span>24小时内</span> -->
                            </div>
                            <div  class="store-right-li">
                                <p>行业&nbsp;:&nbsp;{{item.cate_name}}&nbsp;&nbsp;&nbsp;&nbsp;电话&nbsp;:&nbsp;<span class="word_blue">{{item.mobile}}</span></p>
                                <span v-if="item.shop_area">{{item.shop_area}}平方米</span>
                            </div>
                            <div  class="store-right-li">
                                <span>地址&nbsp;:&nbsp;{{item.twon}}</span>
                                <span>转让租金&nbsp;:&nbsp;{{item.unit_transfer_price}}</span>
                            </div>
                            <div  class="store-right-li">
                                <span>{{item.city}}-{{item.district}}</span>
                                <span>被查看{{item.browse_num}}次</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 底部栏 -->
        <!-- <footer-box></footer-box>  -->
        
    </div>
</template>
<script>  
    // import headerBox from "@/components/common/headerBox";
    // import footerBox from "@/components/common/footerBox";
 export default {
     data(){
        return{
            servicesInfo:[],
            choicenessData:[]
        }
     },
     created(){
         this.fetchService();
         this.fetchChoiceness();
     },
     methods:{
         //切换页面
         toggleBtn(path){
            sessionStorage.setItem("activePath",path);
            this.$router.push(path);
         },
         //获取客服资料
         fetchService(){
             let url = "index/customerServiceList";
             this.$https.get(url).then( res => {
                 this.servicesInfo = res.data.data;
             })
         },
         //获取精选店铺内容
         fetchChoiceness(){
             let url = "index/featuredShopList";
             this.$https.get(url).then( res => {
                 this.choicenessData = res.data.data;
             })
         },
         //精选店铺跳转详情页面
         toDetail(item){
           let stopId = item.img_info.shop_id; //获取店铺id
           this.$router.push({path:"/details",query:{id:stopId}}) //跳转详情
         }
     },
 components:{
    // headerBox,
    // footerBox
  }
 }
</script>
<style scoped>

    .main{
        width:1200px;
        margin:30px auto;
    }

    .logBox{
        width:100%;
        display:flex;
        justify-content: space-between;
    }

    .logItem{
        width:387px;
        height:455px;
        border:2px solid rgba(239, 239, 239, 1);
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        cursor: pointer;
        transition: transform 0.2s linear;
        overflow: hidden;
        transition:all .3s linear;
    }

    .logItem:hover{
        transform:scale(0.9);
        background:linear-gradient(30deg,lightcyan,white,lightcyan);
        border-radius:10px;
        font-size:26px;
        font-weight:bold;
        
    }

    .logImg{
        width:108px;
        height:108px;
        opacity:0.8;
        margin-bottom:50px;
    }

    .caseList{
        display:flex;
        flex-direction:column;
        align-items:center;
    }

    .caseTips{
        width:177px;
        height:69px;
        line-height:69px;
        margin: 45px 0;
        font-size:30px;
        font-weight:bold;
        background:url("../../assets/zpzpwz_7.png");
        background-size:100%;
        background-position:50%;
        background-repeat:no-repeat;
    }



    .connectService{
        position: relative;
        width:100%;
        display:flex;
        justify-content:space-between;
    }



    .connect-item{
        box-sizing:border-box;
        width:285px;
        height:373px;
        border:2px solid rgba(239,239,239,1);
        padding:30px 17px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-between;
        cursor: pointer;
        transition:transform .2s ease;

    }

    .connect-item:hover{
        transform:scale(1.1);
        box-shadow:0 0 10px #c4d9f5;
        background:linear-gradient(30deg,lightblue,white,lightcyan);
        border-radius:10px;
        z-index:10;

    }
    .connect-item-img{
        width:128px;
        height:128px;
        background:#999999;
        overflow: hidden;
        border-radius:50%;
        transition:transform 0.5s linear;
    }

    .connect-item-img:hover{
        transform:rotate(360deg) scale(1.1);
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
        color:white;
        background:#EA3323;
        width:166px;
        height:40px;
        border-radius:20px;
        align-items:center;
        justify-content:center;
        cursor: pointer;
    }


    .connect_btn_icon{
        width:23px;
        height:21px;
        margin-right:10px;
    }


    .case-process{
        width:100%;
        height:338px;
        border:2px solid rgba(239,239,239,1);
        display:flex;
    }

    .case-process-li{
        width:25%;
        padding-top:55px;
    }

    .case-process-img{
        width:80px;
        height:80px;
        margin:0 auto;
        transition:transform .3s linear;
    }

    .case-process-img:hover{
        cursor: pointer;
        transform: scale(1.1) rotate(360deg);
    }

    h3{
        margin:20px 0;
        font-size:26px;
        font-weight:bold;
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
        text-align:center;
        margin: 45px 0;
        font-size:23px;
        font-weight:bold;
        background:url("../../assets/zpzpwz_7.png");
        background-size:100%;
        background-position:50%;
        background-repeat:no-repeat;
    }

    .storeList{
        width:100%;
    }

    .storeItem{
        position:relative;
        display:flex;
        border:2px solid rgba(239,239,239,1);
        padding:5px 15px 10px 2px;
        margin-bottom:10px;
    }

    .storeItem:hover{
        cursor: pointer;
        background:linear-gradient(to left bottom,lightcyan,white,lightblue);
        transform: scaleY(1.1);
        border-radius:10px;
        z-index:10;
    }

    .hot-Push{
        position: absolute;
        left:0;
        top:0;
        padding:5px 12px;
        text-align:center;
        background:red;
        color:white;
        border-radius: 0 0 12px 0;
    }

    .store-left{
        width:141px;
        height:123px;
    }

    .store-right{
        flex:1;
        text-align:left;
        padding:10px;
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
    
</style>