<template>
    <section class="storeDetails">

        <header-box></header-box>

        <div class="deMain">

           <p class="position-tips text_size_17">当前位置 : 首页 > 精选店铺</p>

           <div class="storeInfo flex_row">
               <div class="store_picture flex_col">
                   <div class="store_picture_big">
                      <img src="../../assets/zpzpwz_42.png" alt="加载失败">
                   </div>
                   <div class="store_photos flex_row">
                       <img class="store_picture_small" src="../../assets/zpzpwz_43.png" alt="加载失败">
                       <img class="store_picture_small" src="../../assets/zpzpwz_43.png" alt="加载失败">
                       <img class="store_picture_small" src="../../assets/zpzpwz_43.png" alt="加载失败">
                   </div>
               </div>
               <div class="store_right flex_col">
                   <div class="store_icon position">
                       <img src="../../assets/zpzpwz_29.png" alt="加载失败">
                   </div>
                   <div class="store_icon share">
                       <img src="../../assets/zpzpwz_30.png" alt="加载失败">
                   </div>
                   <div class="store_chapter">
                        <img src="../../assets/yz.png" alt="加载失败">
                   </div>
                   <div>
                        <div>
                            <p class="text_size_32">东莞南城步行街 ( 转让 )</p>
                            <p class="store_number">商店编号 : 13465228</p>
                        </div>
                        <div class="store_acount flex_row">
                            <p><span class="acount_size">300</span>/m&sup2;</p>
                            <p>&yen;<span class="acount_size">2500.00</span>元/月</p>
                            <p><span class="acount_size">9万</span>/转让费</p>
                        </div>
                        <div>
                            <div class="store_info_line ">
                                <p class="info_line_style">行&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;业 : <span class="text_size_16">品牌服装</span></p>
                                <p class="info_line_style">经营状态 : <span class="text_size_16">暂无</span></p>
                            </div>
                            <div class="store_info_line">
                                <p class="info_line_style">联&nbsp;&nbsp;系&nbsp;&nbsp;人 : <span class="text_size_16">李先生</span></p>
                                <p class="info_line_style">产&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;权 : <span class="text_size_16">暂无</span></p>
                            </div>
                            <div class="store_info_line">
                                <p>联系电话 : 13425494185</p>
                            </div>
                            <div class="store_info_line">
                                <p>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址 : <span class="text_size_16">东莞南城步行街b2536号</span></p>
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
                       <p class="word_red">已有1565人浏览过 , 请尽早咨询</p>
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
                    <div class="tenament_item_li flex_col" v-for="(item,index) in 20" :key="index">
                        <div class="tenament_icon">
                            <img src="../../assets/zpzpwz_32.png" alt="加载失败">
                        </div>
                        <p class="status">天然气</p>
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
                    <div class="basicInfo_items">
                        <div>
                            <span class="basic_line"></span>
                            <span class="text_size_18">经营状态</span>
                        </div>
                        <div class="basic_info_status flex_row">
                            <p class="basic_info_status_li">当前经营 : <span class="text_size_16">服装店</span></p>
                            <p class="basic_info_status_li">已有证件 : <span class="text_size_16">暂无</span></p>
                            <p class="basic_info_status_li">经营状态 : <span class="text_size_16">营业中</span></p>
                        </div>
                    </div>
                    <div class="basicInfo_items">
                        <div>
                            <span class="basic_line"></span>
                            <span class="text_size_18">物业信息</span>
                        </div>
                        <div class="basic_info_status flex_row">
                            <p class="basic_info_status_li">楼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;层 : <span class="text_size_16">服装店</span></p>
                            <p class="basic_info_status_li">商店类型 : <span class="text_size_16">店铺无</span></p>
                            <p class="basic_info_status_li">建筑面积 : <span class="text_size_16">300m&sup2;</span></p>
                            <p class="basic_info_status_li">产&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;权: <span class="text_size_16">暂无</span></p>
                        </div>
                    </div>
                    <div class="basicInfo_items">
                        <div>
                            <span class="basic_line"></span>
                            <span class="text_size_18">位置信息</span>
                        </div>
                        <div class="basic_info_status flex_row">
                            <p class="basic_info_status_li">区&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;域 : <span class="text_size_16">南城区</span></p>
                            <p class="basic_info_status_li">临近街道 : <span class="text_size_16">是</span></p>
                            <p class="basic_info_status_li">商&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;圈 : <span class="text_size_16">是</span></p>
                        </div>
                    </div>
                    <div class="basicInfo_items">
                        <div>
                            <span class="basic_line"></span>
                            <span class="text_size_18">位置信息</span>
                        </div>
                        <div class="basic_info_status flex_row">
                            <p class="basic_info_status_li">月&nbsp;&nbsp;租&nbsp;&nbsp;金 : <span class="text_size_16">2500.00元/月</span></p>
                            <p class="basic_info_status_li">支付方式 : <span class="text_size_16">-</span></p>
                        </div>
                    </div>
                    <div class="basicInfo_items">
                        <div>
                            <span class="basic_line"></span>
                            <span class="text_size_18">租约信息</span>
                        </div>
                        <div class="basic_info_status flex_row">
                            <p class="basic_info_status_li">支付方式 : <span class="text_size_16">9万元</span></p>
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
                        <div class="one_photo">
                            <img src="../../assets/zpzpwz_44.png" alt="加载失败">
                        </div>
                        <div class="two_photo">
                            <img src="../../assets/zpzpwz_45.png" alt="加载失败">
                            <img src="../../assets/zpzpwz_46.png" alt="加载失败">
                        </div>
                    </div>
            </div>

           <div class="caseList">
                <div class="caseTips">
                    更多推荐
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
                                <span class="text_size_17">转租大朗长富步行街的店铺</span>
                                <span>24小时内</span>
                            </div>
                            <div  class="store-right-li">
                                <p>行业 : 奶茶  电话 : <span class="word_blue">132156878945</span></p>
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
     <footer-box></footer-box>
    </section>
</template>
<script>
import headerBox from "@/components/common/headerBox";
import footerBox from "@/components/common/footerBox";
export default {
    name:"storeDetails",
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
    height:613px;
    border:1px solid #EEEFF2;
    padding:20px 20px 60px;
    overflow: hidden;
    margin-bottom:27px;
}

.store_picture{
    width:612px;
    height:100%;
    justify-content:space-between; 
    margin-right:30px;
    
}


.store_picture_big{
    width:612px;
    height:382px;
    cursor: pointer;
}

.store_photos{
    justify-content:space-between;
}

.store_picture_small{
    width:200px;
    height:132px;
    cursor: pointer;
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
    justify-content:space-between;
    margin: 20px 0;
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
    top: 65px;
}

.share{
    top:65px;
    right:0;
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
