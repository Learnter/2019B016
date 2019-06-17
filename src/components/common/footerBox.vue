<template>
    <section class="footerBox">
        <div class="footerContent">
           <div class="footer-left">
                <div class="footer-left-top">
                    <div class="footer-left-logo">
                        <img src="../../assets/zpzpwz_3.png" alt="">
                    </div>
                   <div class="footer-tips">
                       <p>
                           <!-- <span class="span_1">首页</span>
                           <span class="span_1">商铺转让</span>
                           <span class="span_1">我要找店</span>
                           <span class="span_1">找店地址</span>
                           <span class="span_1">APP下载</span>
                           <span>关于我们</span>
                           <span>开店百科</span>
                           <span>站内新闻</span> -->
                           首页 | 商铺转让 | 我要找店 | 找店地址 | APP下载 | 关于我们 | 开店百科 | 站内新闻
                       </p>
                       <p>
                           联系电话 : <span style="color:#2A9DFF">0769-459215</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司地址 : 广东省东莞市虎门镇北栅社区东坊路东方大厦1301
                       </p>
                   </div>             
             </div>
             <p>copyright&copy;东莞市铺经理网络科技有限公司  备案号 : 粤ICP备17066789号-1站长统计</p>
           </div>
           <div class="footer-right">
               <img src="../../assets/zpzpwz_17.png" alt="">
           </div>
        </div>
    </section>
</template>
<script>
export default {
    name:"footerBox"
}
</script>
<style scoped>
    p{
        text-align:left;
    }
    img{
        width:100%;
        height:100%;
    }
    .footerBox{
        width:100%;
        height:194px;
        background:#EA3323;
        display:flex;
        align-items:center;
    }
    .footerContent{
        width:900px;
        color:white;
        margin:0 auto;
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-size:14px;
        font-weight:400;
    }
    .footer-left{
        flex:1;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
    }
    .footer-right{
        width:118px;
        height:118px;
        overflow:hidden;
    }
    .footer-left-top{
       display:flex;
       margin-bottom:20px;
    }
    .footer-left-logo{
        width:118px;
        height:53px;
    }
    .footer-tips{
        margin-left:30px;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
    }
    .span_1{
        border-left:1px solid white;
        border-right:1px solid white;
    }
    
</style>
