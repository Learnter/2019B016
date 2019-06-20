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
                           首页 | 商铺转让 | 我要找店 | 找店地址 | APP下载 | 关于我们 | 开店百科 | 站内新闻
                       </p>
                       <p>
                           联系电话 : <span class="word_blue">0769-459215</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司地址 : 广东省东莞市虎门镇北栅社区东坊路东方大厦1301
                       </p>
                   </div>             
             </div>
             <p>copyright&copy;东莞市铺经理网络科技有限公司  备案号 : 粤ICP备17066789号-1站长统计</p>
           </div>
           <div class="footer-right">
               <img src="../../assets/zpzpwz_17.png" alt="二维码图片">
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
    .footerBox{
        width:100%;
        min-width:1200px;
        height:259px;
        background:#EA3323;
    }
    .footerContent{
        width:1200px;
        height:100%;
        color:white;
        margin:0 auto;
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-size:18px;
        font-weight:400;
    }
    .footer-left{
        flex:1;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
    }
    .footer-right{
        width:158px;
        height:158px;
        overflow:hidden;
    }

    .footer-right:hover{
        transform:scale(1.2);
        box-shadow: 0 0 10px 1px white;
    }

    .footer-left-top{
       display:flex;
       margin-bottom:20px;
    }
    .footer-left-logo{
        width:157px;
        height:71px;
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
