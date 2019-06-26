<template>
    <section class="storeDetails">

        <!-- <header-box></header-box> -->

        <div class="deMain">

           <p class="position-tips text_size_17">当前位置 : 首页 > 精选店铺</p>

           <div class="storeInfo flex_row">
               <div class="store_picture flex_col">
                   <div class="store_picture_big"  v-if="bigImg.show_type == 'video'"> 

                        <video width="612" height="382" controls>
                            <source :src="bigImg.img_url"  type="video/mp4">
                            您的浏览器不支持 HTML5 video 标签。
                        </video>
                   </div>
                   <div class="store_picture_big" v-else>
                      <img :src="bigImg.img_url" alt="加载失败">
                   </div>
                   <div >
                        <swiper class="store_photos_item" :options="swiperOption" ref="mySwiper">
                            <!-- slides -->
                            <swiper-slide v-for="(item,index) in storeDetail.imgs_info" :key="index">

                                <!-- 根据show_type判断是否为视频 -->
                                <video class="store_picture_small" v-if="item.show_type == 'video'"  width="100%" height="100%" @click.stop="toggleImg(item)">
                                        <source :src="item.img_url"  type="video/mp4">
                                        您的浏览器不支持 HTML5 video 标签。
                                </video>

                                <!-- 根据show_type判断是否为图片 -->
                                <img class="store_picture_small" v-else :src="item.img_url"   @click.stop="toggleImg(item)"/>

                            </swiper-slide>
                        </swiper>
                   </div>
                   
               </div>
               <div class="store_right flex_col">
                   <div class="store_chapter">
                        <img src="../../assets/yz.png" alt="加载失败">
                   </div>
                   <div>
                        <div>
                            <p class="text_size_32">{{storeDetail.detail_title}}</p>
                        </div>
                        <div class="store_acount flex_row">
                            <p class="store_acount_row" v-if="storeDetail.shop_area"><span class="acount_size">{{storeDetail.shop_area}}</span>/m&sup2;</p>
                            <p class="store_acount_row" v-if="storeDetail.month_price">&yen;&nbsp;<span class="acount_size">{{storeDetail.month_price*1}}</span>元/月</p>
                            <p class="store_acount_row" v-if="storeDetail.unit_transfer_price"><span class="acount_size">{{storeDetail.unit_transfer_price}}</span>/转让费</p>
                            <div class="store_icon position">
                                <img src="../../assets/zpzpwz_29.png">
                            </div>
                            <div class="store_icon share">
                                <img src="../../assets/zpzpwz_30.png">
                            </div>
                        </div>
                        <div>
                            <div class="store_info_line " v-if="storeDetail.cate_name || storeDetail.business_status">
                                <p class="info_line_style" v-if="storeDetail.cate_name">行&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;业&nbsp;:&nbsp;<span class="text_size_16">{{storeDetail.cate_name}}</span></p>
                                <p class="info_line_style" v-if="storeDetail.business_status">经营状态&nbsp;:&nbsp;<span class="text_size_16">{{storeDetail.business_status}}</span></p>
                            </div>
                            <div class="store_info_line" v-if="storeDetail.username">
                                <p class="info_line_style" v-if="storeDetail.username">联&nbsp;&nbsp;系&nbsp;&nbsp;人&nbsp;:&nbsp;<span class="text_size_16">{{storeDetail.username}}</span></p>
                            </div>
                            <div class="store_info_line" v-if="storeDetail.mobile">
                                <p>联系电话&nbsp;:&nbsp;{{storeDetail.mobile}}</p>
                            </div>
                            <div class="store_info_line" v-if="storeDetail.address">
                                <p>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址&nbsp;:&nbsp;<span class="text_size_16">{{storeDetail.address}}</span></p>
                            </div>
                        </div>
                    </div>
                    <div>
                       <div class="storeBtn flex_row">
                           <div class="storeBtn_icon">
                                <img src="../../assets/zpzpwz_31.png" alt="加载失败">
                           </div>
                           <span>联系店主</span>
                       </div>
                       <p class="word_red">已有{{storeDetail.browse_num}}人浏览过&nbsp;,&nbsp;请尽早咨询</p>
                   </div>
               </div>
           </div>

            <!-- 物业配套 -->
           <div class="basicInfo">
               <div class="detail_title flex_col">
                       <p>物业配套</p> 
                       <p class="first_line"></p>
                       <p class="second_line"></p>
                </div>
                <div class="tenament_items flex_row">
                    <div class="tenament_item_li flex_col" v-for="(item,index) in storeDetail.facilities_info" :key="index">
                        <div class="tenament_icon">
                            <img :src="item.img_url" alt="加载失败">
                        </div>
                        <p class="status">{{item.name}}</p>
                    </div>
                </div>
           </div>

            <!-- 基本信息 -->
            <div class="basicInfo">
                <div class="detail_title flex_col">
                       <p>基本信息</p> 
                       <p class="first_line"></p>
                       <p class="second_line"></p>
                </div>
                <div>
                    <div class="basicInfo_items" v-if="storeDetail.cate_name || storeDetail.license_info || storeDetail.licensed_info || storeDetail.business_status">
                        <div>
                            <span class="basic_line"></span>
                            <span class="text_size_18">经营状态</span>
                        </div>
                        <div class="basic_info_status flex_row">
                            <p class="basic_info_status_li" v-if="storeDetail.cate_name">当前经营&nbsp;:&nbsp; <span class="text_size_16">{{storeDetail.cate_name}}</span></p>
                            <p class="basic_info_status_li" v-if="storeDetail.license_info">已有证件&nbsp;:&nbsp; <span class="text_size_16">{{storeDetail.license_info}}</span></p>
                            <p class="basic_info_status_li" v-if="storeDetail.licensed_info">已有证件&nbsp;:&nbsp; <span class="text_size_16">{{storeDetail.licensed_info}}</span></p>
                            <p class="basic_info_status_li" v-if="storeDetail.business_status">经营状态&nbsp;:&nbsp; <span class="text_size_16">{{storeDetail.business_status}}</span></p>
                        </div>
                    </div>
                    <div class="basicInfo_items" v-if="storeDetail.shop_type || storeDetail.construction_area || storeDetail.usage_area || storeDetail.floor || storeDetail.is_split || storeDetail.main_road">
                        <div>
                            <span class="basic_line"></span>
                            <span class="text_size_18">物业信息</span>
                        </div>
                        <div class="basic_info_status flex_row">
                            <p class="basic_info_status_li" v-if="storeDetail.shop_type">商铺类型&nbsp;:&nbsp; <span class="text_size_16">{{storeDetail.shop_type}}</span></p>
                            <p class="basic_info_status_li" v-if="storeDetail.construction_area">建筑面积&nbsp;:&nbsp; <span class="text_size_16">{{storeDetail.construction_area}}m&sup2;</span></p>
                            <p class="basic_info_status_li" v-if="storeDetail.usage_area">使用面积&nbsp;:&nbsp; <span class="text_size_16">{{storeDetail.usage_area}}m&sup2;</span></p>
                            <p class="basic_info_status_li" v-if="storeDetail.floor">楼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;层&nbsp;:&nbsp;<span class="text_size_16">{{storeDetail.floor}}</span></p>
                            <p class="basic_info_status_li" v-if="storeDetail.is_split">是否分割&nbsp;:&nbsp; <span class="text_size_16">{{storeDetail.is_split}}</span></p>
                            <p class="basic_info_status_li" v-if="storeDetail.main_road">临近干道&nbsp;:&nbsp;<span class="text_size_16">{{storeDetail.main_road}}</span></p>
                        </div>
                    </div>
                    <div class="basicInfo_items" v-if="storeDetail.district || storeDetail.loop_line || storeDetail.nearby_road ">
                        <div>
                            <span class="basic_line"></span>
                            <span class="text_size_18">位置信息</span>
                        </div>
                        <div class="basic_info_status flex_row">
                            <p class="basic_info_status_li" v-if="storeDetail.district">区&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;域&nbsp;:&nbsp;<span class="text_size_16">{{storeDetail.district}}-{{storeDetail.twon}}</span></p>
                            <p class="basic_info_status_li" v-if="storeDetail.loop_line">环&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;线&nbsp;:&nbsp;<span class="text_size_16">{{storeDetail.loop_line}}</span></p>
                            <p class="basic_info_status_li" v-if="storeDetail.nearby_road">临近道路&nbsp;:&nbsp;<span class="text_size_16">{{storeDetail.nearby_road}}</span></p>
                        </div>
                    </div>
                    <div class="basicInfo_items" v-if="storeDetail.month_price || storeDetail.payment_method || storeDetail.timeshare_rental || storeDetail.longest_lease || storeDetail.renewal_method">
                        <div>
                            <span class="basic_line"></span>
                            <span class="text_size_18">租约相关</span>
                        </div>
                        <div class="basic_info_status flex_row">
                            <p class="basic_info_status_li" v-if="storeDetail.month_price">月&nbsp;&nbsp;租&nbsp;&nbsp;金&nbsp;:&nbsp;<span class="text_size_16">{{storeDetail.month_price*1}}元/月</span></p>
                            <p class="basic_info_status_li" v-if="storeDetail.payment_method">支付方式&nbsp;:&nbsp;<span class="text_size_16">{{storeDetail.payment_method}}</span></p>
                            <p class="basic_info_status_li" v-if="storeDetail.timeshare_rental">分期出租&nbsp;:&nbsp;<span class="text_size_16">{{storeDetail.timeshare_rental}}</span></p>
                            <p class="basic_info_status_li" v-if="storeDetail.longest_lease">最长租约&nbsp;:&nbsp;<span class="text_size_16">{{storeDetail.longest_lease}}</span></p>
                            <p class="basic_info_status_li" v-if="storeDetail.renewal_method">续约方式&nbsp;:&nbsp;<span class="text_size_16">{{storeDetail.renewal_method}}</span></p>
                        </div>
                    </div>
                    <div class="basicInfo_items" v-if="storeDetail.unit_transfer_price">
                        <div>
                            <span class="basic_line"></span>
                            <span class="text_size_18">转让相关</span>
                        </div>
                        <div class="basic_info_status flex_row">
                            <p class="basic_info_status_li" v-if="storeDetail.unit_transfer_price">转让费用&nbsp;:&nbsp;<span class="text_size_16">{{storeDetail.unit_transfer_price}}</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 详细信息 -->
            <div class="detail_info flex_col">
                    <div class="detail_title flex_col">
                       <p>详细信息</p> 
                       <p class="first_line"></p>
                       <p class="second_line"></p>
                    </div>
                    <div class="detail_picture">
                        <div class="one_photo" v-if="storeDetail.shop_info">
                            <img :src="storeDetail.shop_info">
                        </div>
                        <div class="two_photo" v-if="storeDetail.periphery">
                            <img :src="storeDetail.periphery">
                            <img :src="storeDetail.periphery">
                        </div>
                    </div>
            </div>

           <div class="caseList">
                <div class="caseTips">
                    更多推荐
                </div>
                <div class="storeList">
                    <div class="storeItem" v-for="(item,index) in moreCase" :key="index"  @click=toDetail(item)>
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
     <!-- <footer-box></footer-box> -->
    </section>
</template>
<script>
// import headerBox from "@/components/common/headerBox";
// import footerBox from "@/components/common/footerBox";
import "swiper/dist/css/swiper.css";
import {swiper,swiperSlide} from "vue-awesome-swiper";
export default {
    name:"storeDetails",
    data(){
        return{
            storeId:"", //店铺Id
            bigImg:{}, // 大图url
            storeDetail:{},//店铺详情信息
            moreCase:[],//更多推荐信息
            swiperOption:{ //轮播的参数
                slidesPerView: 3,
                spaceBetween:10,
                freeMode: true,
            },
        }
    },
    created(){
        this.storeId = this.$route.query.id; //获取传入的商店id;
        this.fetchData(); //调用店铺详情接口
        this.fetchMoreCase(); //调用更多推荐接口
    },
    methods:{
      fetchData(){ //获取店铺详情的数据
          let url = "index/transferShopDetail";
          let data = {
              id:this.storeId
          };
          this.$https.get(url,data).then( res => {

             this.storeDetail = res.data.data;

             if(res.data.data.imgs_info){
                 this.bigImg = res.data.data.imgs_info[0];
             }
          })
      },
      fetchMoreCase(){ //获取更多推荐数据
          let url = "index/featuredShopList";
          this.$https.get(url).then( res => {
            this.moreCase = res.data.data; 
        })  
      },
       toDetail(item){ //点击切换到详情页面
        let stopId = item.img_info.shop_id;
        this.$router.push({path:"/details",query:{id:stopId}});
       },
      toggleImg(item){ //点击切换大图
         this.bigImg = item;
      }
    },
components:{
    // headerBox,
    // footerBox,
    swiper,
    swiperSlide,
  },
  watch:{
      $route(to){ //监听路由改变,重新再获取数据 
          this.storeId = to.query.id;
          this.fetchData();
          this.fetchMoreCase();
      }
  }
}
</script>
<style scoped>

.acount_size{
    color:#EA3323;
    font-size:32px;
}

.text_size_16{
    color:#5C5C5C;
}

.status{
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(4,4,4,1);
    line-height:24px;
}


.deMain{
    width:1200px;
    margin:auto;
    text-align:left;
}

.storeInfo{
    box-sizing:border-box;
    width:100%;
    border:1px solid #EEEFF2;
    padding:20px 20px 60px;
    overflow: hidden;
    margin-bottom:27px;
}

.store_picture{
    width:612px;
    justify-content:space-between; 
    margin-right:30px;
    overflow:hidden;
}


.store_picture_big{
    width:612px;
    height:382px;
    cursor: pointer;
}

.store_photos_item{
    width:612px;
    height:132px;
    padding:10px 5px;
}

.store_picture_small:hover{
    cursor: pointer;
    opacity:0.9;
    border-radius:5px;
    box-shadow:0 0 10px 2px #979797 ;
}

.store_right{
    position: relative;
    flex:1;
    justify-content: space-between;
    padding:15px 0;

}

.store_number{
    margin-top:15px;
    color:#979797;
}

.store_acount{
    position: relative;
    justify-content:flex-start;
    margin: 20px 0;
}

.store_acount_row{
    margin-right:30px;
}

.store_info_line{
    margin-bottom:15px;
    display: flex;
    color:#A8ACAB;
}

.info_line_style{
    width:50%;
}

.storeBtn{
    width:270px;
    height:59px;
    background:#EA3323;
    border-radius:29px;
    justify-content:center;
    align-items:center;
    font-size:26px;
    color:white;
    letter-spacing:5px;
    margin-bottom:20px;
    cursor: pointer;
}

.storeBtn_icon{
    width:36px;
    height:36px;
    margin-right:20px;
}

.store_icon{
    width:30px;
    height:30px;
    position: absolute;
    cursor: pointer;
}

.position{
    right: 75px;
    top: 0px;
}

.share{
    top:0px;
    right:0px;
}

.store_chapter{
    width:180px;
    height:180px;
    position: absolute;
    right:0;
    bottom:0;
}


.tenament_items{
    flex-wrap: wrap;
}

.tenament_item_li{
    margin:35px 60px 0 0;
    align-items:center;
}

.tenament_icon{
    width:38px;
    height:38px;
    margin-bottom:15px;
}

.basicInfo{
    box-sizing:border-box;
    padding:25px 48px;
    border:2px solid #EEEFF2;
    margin-bottom:27px;
}

.basicInfo_items{
    padding:15px 0;
    border-bottom: 1px solid #868686;
}

.basic_line{
    display:inline-block;
    width:3px;
    height:14px;
    border-radius:4px;
    background:#65BFFF;
}

.basic_info_status{
    margin-top:10px;
}

.basic_info_status_li{
    width:25%;
    color:#989895;
}

.detail_info{
    align-items:center;  
    margin-top:30px;
}


.detail_picture{
    margin-top:20px;
}

.detail_title{
    font-weight:bold;
    font-size:18px;
    color:#252A33;
    margin-bottom:10px;
    align-items:center;
}


.first_line{
    width:122px;
    height:4px;
    background:#FF1A0E;
    margin-top:10px;
    border-radius:4px;
}

.second_line{
    width:40px;
    height:4px;
    background:#FF8C86;
    margin-top:3px;
    border-radius:4px;
}

.one_photo{
  width:100%;
  height:587px;
  overflow:hidden;
}

.two_photo{
    width:100%;
    height:649px;
    overflow: hidden;
    display:flex;
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
        font-size:20px;
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
