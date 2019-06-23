<template>
    <section class="aboutUs">
        <header-box></header-box>
        <div class="suMain">
            <p class="position-tips text_size_17">当前位置 : 首页 > 成功案例</p>

             <div class="search-criteria">
                 <ul>
                     <li class="search_item">
                         <div class="search_left">区&nbsp;&nbsp;&nbsp;&nbsp;域&nbsp;:&nbsp;<span class="word_red text_size_14">全部</span></div>
                         <div class="search_right ">
                              <p class="search_right_word " v-for="(item,index) in 20" :key="index" >虎门镇</p>
                         </div>
                     </li>
                     <div class="bottom_line"></div>
                     <li class="search_item">
                         <div class="search_left">业&nbsp;&nbsp;&nbsp;&nbsp;态&nbsp;:&nbsp;<span class="word_red text_size_14">全部</span></div>
                         <div>
                              
                         </div>
                     </li>
                     <div class="bottom_line"></div>
                     <li class="search_item">
                         <div class="search_left">面&nbsp;&nbsp;&nbsp;&nbsp;积&nbsp;:&nbsp;<span class="word_red text_size_14">全部</span></div>
                         <div>
                              
                         </div>
                     </li>
                     <div class="bottom_line"></div>
                     <li class="search_item">
                         <div class="search_left">月租金&nbsp;:&nbsp;<span class="word_red text_size_14">全部</span></div>
                         <div>
                              
                         </div>
                     </li>
                     <div class="bottom_line"></div>
                     <li class="search_item">
                         <div class="search_left">类&nbsp;&nbsp;&nbsp;&nbsp;型&nbsp;:&nbsp;<span class="word_red text_size_14">全部</span></div>
                         <div>
                              
                         </div>
                     </li>
                 </ul>
             </div>


            <div class="storeList">
                    <div class="storeItem" v-for="(item,index) in successCaseList" :key="index"  @click=toDetail(item)>
                        <div class="hot-Push text_size_17">
                           {{item.tag_info[0].name}}
                        </div>
                        <div class="store-left">
                            <img :src="item.img_info.img_url" alt="加载失败">
                        </div>
                        <div class="store-right">
                            <div class="store-right-li">
                                <span class="text_size_17">{{item.title}}</span>
                                <p>&yen;&nbsp;<span class="text_size_17 word_red">{{item.month_price*1}}</span>/月</p>
                            </div>
                            <div  class="store-right-li">
                                <p>临街店铺  &nbsp;&nbsp;&nbsp;&nbsp; 电话:&nbsp;<span class="word_blue"></span></p>
                                 <p>转让费&nbsp;:&nbsp;<span class="word_red">{{item.unit_transfer_price}}</span></p>
                            </div>
                            <div  class="store-right-li">
                                <span>地址&nbsp;:&nbsp;{{item.twon}}</span>
                                 <p>面积&nbsp;:&nbsp;<span class="word_red">{{item.shop_area}}m&sup2;</span></p>
                            </div>
                            <div  class="store-right-li">
                                <span>{{item.city}} {{item.district}}</span>
                                 <p>业态&nbsp;:&nbsp;{{item.cate_name}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            

            <div class="company-stores">
               <div class="stores-btn">发布找店信息</div>
               <div class="stores-btn">发布转铺信息</div>
               <div class="stores-btn">联系人工客服</div>
           </div>
        </div> 
        <footer-box></footer-box>
    </section>
</template>
<script>
import headerBox from "@/components/common/headerBox";
import footerBox from "@/components/common/footerBox";
export default {
    name:"aboutUs",
    data(){
        return{
            successCaseList:[]
        }
    },
    created(){
      this.fetchSuccessData();
    },
    methods:{
       fetchSuccessData(){
           let url = "index/successCaseList";
           this.$https.get(url).then( res => {
               this.successCaseList = res.data.data;
           })
       },
       //点击切换到详情页面
       toDetail(item){
        let stopId = item.img_info.shop_id;
        this.$router.push({path:"/details",query:{id:stopId}});
       }
    },
 components:{
    headerBox,
    footerBox
  }
}
</script>
<style scoped>


    .suMain{
        width:1200px;
        margin:0 auto;
        text-align:left;
    }

    .search_item{
        display:flex;
        padding:12px 0;
    }

    .bottom_line{
        width:100%;
        height:1px;
        background:#CDCDCD;
    }

    .search_left{
        font-size:20px;
        font-weight:bold;
        margin-right:15px;
        flex-shrink:0;
    }

    .search_right{
        display:flex;
        flex-wrap: wrap;
    }

    .search_right_word{
        margin-right:15px;
        line-height:24px;
        cursor:pointer;
    }

    .search_right_word:hover{
        font-weight:bold;
        color:#6A6AFF;
    }

    .storeList{
        margin-top:20px;
    }

    .storeItem{
        position:relative;
        display:flex;
        border:1px solid #CDCDCD;
        padding:5px 15px 10px 2px;
        margin-bottom:20px;
        cursor: pointer;
        transition: all .3s linear;
    }

    .storeItem:hover{
        background:linear-gradient(30deg,white,lightcyan,lightcyan);
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