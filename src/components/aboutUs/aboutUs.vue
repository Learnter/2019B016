<template>
    <section class="aboutUs">
        <header-box></header-box>

        <div class="usMain">
           <p class="position-tips text_size_17">当前位置 : 首页 > 关于我们</p>
           <div class="company-vision">
               企业愿景 : 服务中国千万实体的领先互联网平台
           </div>
           <div class="company-Info">
               <ul class="flex_col ">
                   <li class="company-Info-item">
                       <div class="company-picture">
                           <img src="../../assets/zpzpwz_23.png" alt="加载失败">
                       </div>
                       <div class="company-introduce">
                           <p class="introduce-title">公司<span  style="color:#2A9DFF">简介</span></p>
                           <p class="introduce-content">
                                广东铺经理网络科技有限公司通过互联网十大数据+AI智能匹配系统+专业团队一对一跟踪
                                服务和成熟的信息资源整合能力,广东铺经理通过物联网大数据将全国商铺信息整合到铺经理大数据平台,
                                为各商业人及企业提供灵活易用商铺，写字楼等商业,地产租买方案。
                           </p>
                           <p class="introduce-content">
                               公司下设网络研发部、客户服务部、选址专家部 , 以用户交易周期为考核指标、
                                高效 满足 ( 智能匹配 )  ( 快速转铺 )  ( 快速选址 )  ( 快速招商 )
                           </p>
                       </div>
                   </li>
                   <li class="company-Info-item">
                       <div class="company-picture">
                           <img src="../../assets/zpzpwz_23.png" alt="加载失败">
                       </div>
                       <div class="company-introduce">
                           <p class="introduce-title">公司<span  style="color:#2A9DFF">文化</span></p>
                           <p class="introduce-content">
                                铺经理智能服务平台是公司自创立以来就秉承 “科技创新、服务社会” 的理念， 持续投入重金
                                研发 “高效、快捷转铺找铺智能匹配系统” 。让广大实体商户和前期创业者能够快速的找到自己理想的商铺铺位
                                和项目刷选、从而减少前期投入，节省人力、物力和时间成本，同时将全国店铺的租售信息整合
                                到大数据平台，分析客户所需，智能匹配进行统一管控，为各种商业及规模的企业提供灵活易用的大数据
                                分析、解决方案，让每一位用户都使用这一平台轻松发掘大数据价值和便捷。
                           </p>
                       </div>
                   </li>
               </ul>
           </div>
           <div class="company-style">
              <div class="style-border"></div>
               <p>公司风采</p>
           </div>
           <div class="company-teams">
               <div class="team-picture">
                   <img src="../../assets/zpzpwz_25.png" alt="加载失败">
               </div>
               <div class="team-picture">
                   <img src="../../assets/zpzpwz_26.png" alt="加载失败">
               </div>
               <div class="team-picture">
                   <img src="../../assets/zpzpwz_25.png" alt="加载失败">
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
.usMain{
    width:1200px;
    margin:0 auto;
    text-align:left;
}

.company-vision{
    background:#EA3323;
    color:white;
    text-align:center;
    padding:10px 0;
    border-radius:20px;
    font-size:26px;
    margin: 20px 0 ;
}

.company-Info-item{
    margin:35px 0;
    display: flex;
}

.company-picture{
    flex-shrink: 0;
    width:470px;
    height:270px;
    margin-right:30px;
}

.introduce-title{
    text-align:center;
    font-size:34px;
    font-weight:400;
    margin-bottom:15px;
}

.introduce-content{
    font-size:20px;
    font-size:400;
    color:#666666;
    line-height:30px;
    text-indent:40px;
}

.company-Info-item:nth-child(even){
    flex-direction: row-reverse;
}

.company-Info-item:nth-child(even) .company-picture {
   margin-left:30px;
   margin-right:0;
}

.company-style{
    display:flex;
    align-items:center;
    font-size:34px;
    font-weight:400;
    margin:30px 0;
}

.style-border{
    width:10px;
    height:54px;
    background:#EA3323;
    border-radius:4px;
    margin-right:15px;
}

.company-teams{
    display:flex;
    justify-content:space-between;
    margin:35px 0;
}

.team-picture{
    width:394px;
    height:227px;
}

/* .company-stores{
    margin:20px 0;
    display:flex;
    justify-content:space-between;
}

.stores-btn{
    width:295px;
    height:65px;
    line-height:65px;
    background:#CDCDCD;
    font-size:21px;
    font-weight:400;
    text-align:center;
} */

</style>
