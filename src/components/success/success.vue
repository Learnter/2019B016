<template>
    <section class="aboutUs">
        <header-box></header-box>

        <div class="suMain">
            <p class="position-tips text_size_17">当前位置 : 首页 > 成功案例</p>

             <div class="search-criteria">
                 <ul>
                     <li class="search_item">
                         <div class="search_left">区&nbsp;&nbsp;&nbsp;&nbsp;域&nbsp;:&nbsp;<span class="word_red text_size_14">全部</span></div>
                         <div class="search_right text_size_14">
                              <p v-for="(item,index) in 20" :key="index" style="margin-right:10px;padding-bottom:8px">虎门镇</p>
                         </div>
                     </li>
                     <hr/>
                     <li>
                         <div class="search_left">业&nbsp;&nbsp;&nbsp;&nbsp;态&nbsp;:&nbsp;<span class="word_red text_size_14">全部</span></div>
                         <div>
                              
                         </div>
                     </li>
                     <hr/>
                     <li>
                         <div class="search_left">面&nbsp;&nbsp;&nbsp;&nbsp;积&nbsp;:&nbsp;<span class="word_red text_size_14">全部</span></div>
                         <div>
                              
                         </div>
                     </li>
                     <hr/>
                     <li>
                         <div class="search_left">月租金&nbsp;:&nbsp;<span class="word_red text_size_14">全部</span></div>
                         <div>
                              
                         </div>
                     </li>
                     <hr/>
                     <li>
                         <div class="search_left">类&nbsp;&nbsp;&nbsp;&nbsp;型&nbsp;:&nbsp;<span class="word_red text_size_14">全部</span></div>
                         <div>
                              
                         </div>
                     </li>
                 </ul>
             </div>


            <div class="storeList">
                    <div class="storeItem" v-for="(item,index) in 3" :key="index">
                        <div class="hot-Push text_size_17">
                            已转出
                        </div>
                        <div class="store-left">
                            <img src="../../assets/zpzpwz_16.png" alt="加载失败" style="width：100%;height:100%">
                        </div>
                        <div class="store-right">
                            <div class="store-right-li">
                                <span class="text_size_17">转租大朗长富步行街的店铺</span>
                                <p>&yen;<span class="text_size_17 word_red">1200</span>/月</p>
                            </div>
                            <div  class="store-right-li">
                                <p>临街店铺  &nbsp;&nbsp;&nbsp;&nbsp; 电话:<span class="word_blue">132156878945</span></p>
                                 <p>转让费 : <span class="word_red">3.8万</span></p>
                            </div>
                            <div  class="store-right-li">
                                <span>地址 : 大朗长富步行街108号</span>
                                 <p>面积 : <span class="word_red">56m&sup2;</span></p>
                            </div>
                            <div  class="store-right-li">
                                <span>上水 下水</span>
                                 <p>业态 : 奶茶店</p>
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
        width:900px;
        margin:0 auto;
        text-align:left;
    }

    .search_item{
        display:flex;
    }

    .search_left{
        font-size:15px;
        font-weight:bold;
        margin-right:15px;
        flex-shrink:0;
    }

    .search_right{
        display:flex;
        flex-wrap: wrap;
    }

    .storeList{
        margin-top:20px;
    }

    .storeItem{
        position:relative;
        display:flex;
        border:2px solid rgba(239,239,239,1);
        padding:5px 15px 10px 2px;
        margin-bottom:10px;
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