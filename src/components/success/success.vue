<template>
    <section class="aboutUs">
        <!-- <header-box></header-box> -->
        <div class="suMain">
            <p class="position-tips text_size_17">当前位置&nbsp;:&nbsp;首页&nbsp;>&nbsp;成功案例</p>

             <div class="search-criteria">
                 <ul>
                     <li class="search_item">
                         <div class="search_left">区&nbsp;&nbsp;&nbsp;&nbsp;域&nbsp;:&nbsp;</div>
                         <div style="position:relative;flex:1">
                             <div :class="!isHidden == true?'isHidden':''" >
                                 <span class="search_right_word"  :class="regionActive == regionIndex ? 'word_red' : ''"  v-for="(regionItem,regionIndex) in region" :key="regionIndex" @click.stop="searchRegion(regionItem,regionIndex)">{{regionItem.name}}</span>
                             </div>
                            
                              <div class="search_right" style="margin-top:5px" v-if="regionChild.length !== 0">
                                  <span class="search_right_word search_rigtht_child"  :class="recondRegActive == childIndex ? 'word_red' : ''"  v-for="(childItem,childIndex) in regionChild" :key="'child-'+childIndex" @click.stop="searchRecondRegion(childItem,childIndex)" >{{childItem.name}}</span>
                              </div>
                              <div class="loadMore"  @click.stop="loadMore">
                                   <img :src="loadMoreIcon" alt="加载更多">
                              </div>
                         </div>
                     </li>
                     <div class="bottom_line"></div>
                     <li class="search_item">
                         <div class="search_left">业&nbsp;&nbsp;&nbsp;&nbsp;态&nbsp;:&nbsp;</div>
                         <div class="flex_col">
                            <div class="search_right">
                                <span class="search_right_word" :class="industryActive == industryIndex ? 'word_red' : ''" v-for="(item,industryIndex) in industryCate" :key="industryIndex" @click="searchIndustry(item,industryIndex)">
                                    {{item.name}}
                                </span>
                            </div>
                            <div class="search_right" style="margin-top:5px" v-if="categoryChild.length !== 0">
                                <span class="search_right_word search_rigtht_child" :class="recondInActive == childIndex ? 'word_red' : ''"  v-for="(childItem,childIndex) in categoryChild" :key="'child-'+childIndex" @click="searchRecondIndustry(childItem,childIndex)">
                                    {{childItem.name}}</span>
                            </div>    
                        </div> 
                     </li>
                     <div class="bottom_line"></div>
                     <li class="search_item">
                         <div class="search_left">面&nbsp;&nbsp;&nbsp;&nbsp;积&nbsp;:&nbsp;</div>
                         <div class="search_right">
                              <span class="search_right_word" :class="areaActive == areaIndex ? 'word_red' : ''" v-for="(item,areaIndex) in areas" :key="areaIndex" @click="searchArea(item,areaIndex)">{{item.title}}</span>
                         </div>
                     </li>
                     <div class="bottom_line"></div>
                     <li class="search_item">
                         <div class="search_left">月租金&nbsp;:&nbsp;</div>
                         <div  class="search_right">
                              <span class="search_right_word" :class="moneyActive == moneyIndex ? 'word_red' : ''"  v-for="(item,moneyIndex) in monthlyRent" :key="moneyIndex" @click="searchMoney(item,moneyIndex)">{{item.title}}</span>
                         </div>
                     </li>
                     <div class="bottom_line"></div>
                     <li class="search_item">
                         <div class="search_left">类&nbsp;&nbsp;&nbsp;&nbsp;型&nbsp;:&nbsp;</div>
                         <div class="search_right">
                              <span class="search_right_word" :class="typeActive == typeIndex ? 'word_red' : ''"  v-for="(item,typeIndex) in shopType" :key="typeIndex" @click="searchType(item,typeIndex)">{{item.label}}</span>
                         </div>
                     </li>
                 </ul>
             </div>


            <div class="storeList">
                    <div class="storeItem" v-for="(item,index) in successCaseList" :key="index"  @click=toDetail(item)>
                        <div class="hot-Push">
                           推荐
                        </div>
                        <div class="store-left">
                            <img :src="item.img_info.img_url">
                        </div>
                        <div class="store-right">
                            <div class="store-right-li">
                                <span v-if="item.title" class="text_size_17">{{item.title}}</span>
                                <p v-if="item.unit_month_price">&yen;&nbsp;<span class="text_size_17 word_red">{{item.unit_month_price}}</span></p>
                            </div>
                            <div  class="store-right-li">
                                <p v-if="item.mobile">临街店铺 &nbsp;&nbsp;&nbsp;&nbsp; 电话:&nbsp;<span class="word_blue">{{item.mobile}}</span></p>
                                 <p v-if="item.unit_transfer_price">转让费&nbsp;:&nbsp;<span class="word_red">{{item.unit_transfer_price}}</span></p>
                            </div>
                            <div  class="store-right-li">
                                <span v-if="item.twon">地址&nbsp;:&nbsp;{{item.twon}}</span>
                                 <p v-if="item.shop_area">面积&nbsp;:&nbsp;<span class="word_red">{{item.shop_area}}m&sup2;</span></p>
                            </div>
                            <div  class="store-right-li">
                                <span >{{item.city}}-{{item.district}}</span>
                                 <p v-if="item.cate_name">业态&nbsp;:&nbsp;{{item.cate_name}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            

            <!-- <div class="company-stores">
               <div class="stores-btn">发布找店信息</div>
               <div class="stores-btn">发布转铺信息</div>
               <div class="stores-btn">联系人工客服</div>
           </div> -->
        </div> 
        <!-- <footer-box></footer-box> -->
    </section>
</template>
<script>
// import headerBox from "@/components/common/headerBox";
// import footerBox from "@/components/common/footerBox";
export default {
    name:"aboutUs",
    data(){
        return{
            loadMoreIcon:require("../../assets/zpzp_69.png"),
            isHidden:false, //是否隐藏
            regionActive:0,//区域索引
            recondRegActive:0,//二级区域索引
            industryActive:0, //行业索引
            recondInActive:0, //二级行业索引
            areaActive:0, //面积索引
            moneyActive:0,//租金索引
            typeActive:0,//类型索引
            regionData:[],//区域列表
            regionChild:[],//区域二级数据
            categoryData:{}, //搜索列表参数
            categoryChild:{}, //行业二级数据
            successCaseList:[],//成功案例列表
            searchData:{  //搜索条件对象
                'cate_id':'', //行业id
                'area_min':'', //面积最低
                'area_max':'', //最大面积
                'rent_min':'', //最低租金
                'rent_max':'', //最高租金
                'city':'', // 市
                'district':'', // 区
                'twon':'', // 街道
                'page':1, //页码
                'rows':10, // 每页数量
                'shop_type':'', //商铺类型
            }
        }
    },
    created(){
      this.fetchRegion();
      this.fetchCategory();
      this.fetchSuccessData();
    },
    computed:{

        //区域列表
        region(){

            let region = this.regionData;
            console.log(region);
            let all = [{"id":0,name:"全部",child:[]}];

            for(let obj in region){
                all.push(region[obj]);
            }

            return all;

        },
        //行业列表
        industryCate(){

            let industryCate = this.categoryData.industryCate;
            let all = [{"id":0,name:"全部",child:[]}]

            for(let obj in industryCate){
                all.push(industryCate[obj]);
            }

            return all;
        },
        //面积列表
        areas(){

            let areas = this.categoryData.area;
            let all = [{"id":0,title:"全部",min:0,max:0}]

            for(let obj in areas){
                all.push(areas[obj]);
            }
            return all;
        },
        //租金列表
        monthlyRent(){

            let monthlyRent = this.categoryData.monthlyRent;
            let all = [{"id":0,title:"全部",min:0,max:0}]

            for(let obj in monthlyRent){
                all.push(monthlyRent[obj]);
            }
            return all;
        },
        //类型列表
        shopType(){

            let shopType = this.categoryData.shopType;

            let all = [{"value":0,"label":'全部'}]

            for(let obj in shopType){

                all.push(shopType[obj]);
            }

            return all;
        }
    },
    methods:{
        //获取区域地址信息
        fetchRegion(){
            let url = "config/region";
            this.$https.get(url).then( res => {
                this.regionData = res.data.data;
            })
        },
        //获取分类列表的数据
        fetchCategory(){ 
            let url = "config/searchParam";
            this.$https.get(url).then( res => {
                // console.log(res)
                this.categoryData = res.data.data;
            })
        },
       //获取成功案例的数据
       fetchSuccessData(){
           let url = "index/successCaseList";
           let data = this.searchData;
           this.$https.get(url,data).then( res => {
               this.successCaseList = res.data.data;
           })
       },
       //地区一级搜索
       searchRegion(item,index){

           this.recondRegActive = 0; //将二级索引清0

           this.regionActive  =  index; //确认按钮索引

           this.regionChild = item.child; //赋值二级数据

           this.searchData.city = item.id; //添加搜索条件

           if(item.id == 0){ //点击全部时  需要将二级的数据及索引清除
               this.searchData.district = 0;
           }

           this.fetchSuccessData(); //调用成功案例接口
       },
       //地区二级搜索
       searchRecondRegion(item,index){

           this.recondRegActive  =  index;

           this.searchData.district = item.id;

           this.fetchSuccessData(); 

       },
       //行业一级搜索
       searchIndustry(item,index){

          this.recondInActive = 0;

          this.industryActive = index; 

          this.categoryChild = item.child; 

          this.searchData.cate_id = item.id; 

          this.fetchSuccessData(); 

       },
       //行业二级搜索
       searchRecondIndustry(item,index){

           this.recondInActive = index; 

           this.searchData.cate_id = item.id; 

           this.fetchSuccessData(); 
       },
       //面积搜索
       searchArea(item,index){

           this.areaActive = index; 

           this.searchData.area_min = item.min;

           this.searchData.area_max = item.max;

           this.fetchSuccessData(); 
           
       },
        //租金搜索
       searchMoney(item,index){

           this.moneyActive = index; 

           this.searchData.rent_min = item.min;

           this.searchData.rent_max = item.max;

           this.fetchSuccessData(); 
           
       },
        //类型搜索
       searchType(item,index){

           this.typeActive = index; 

           this.searchData.shop_type = item.value;

           this.fetchSuccessData(); 
           
       },
       //点击切换到详情页面
       toDetail(item){
        let stopId = item.img_info.shop_id;
        this.$router.push({path:"/details",query:{id:stopId}});
       },
       //收缩或加载二级数据
       loadMore(){
           this.isHidden = !this.isHidden;
           if(this.isHidden){
               this.loadMoreIcon = require("../../assets/zpzp_24.png");
           }else{
                this.loadMoreIcon = require("../../assets/zpzp_69.png");
           }
       }

    },
 components:{
    // headerBox,
    // footerBox
  }
}
</script>
<style scoped>


    .isHidden{
        width:100%;
        overflow:hidden; 
        text-overflow:ellipsis;
        display:-webkit-box; 
        /* ! autoprefixer: off   */
        -webkit-box-orient: vertical; 
        /* autoprefixer: on */ 
        -webkit-line-clamp:2;
    }

    .loadMore{
        position:absolute;
        right:-15px;
        top:0;
        width:15px;
        height:8px;
        cursor:pointer;
    }



    .suMain{
        width:1200px;
        margin:0 auto;
        text-align:left;
    }

    .search_item{
        display:flex;
        padding:12px 20px 12px 0;
    }

    .bottom_line{
        width:100%;
        height:1px;
        background:#CDCDCD;
    }

    .search_left{
        font-size:20px;
        font-weight:bold;
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



    .search_rigtht_child{
        font-size:12px;
        font-weight:bold;
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
    }

    .storeItem:hover{
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