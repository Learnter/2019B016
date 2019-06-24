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
                           联系电话 : <span class="word_blue">{{storeInfo.contact_number}}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司地址&nbsp;:&nbsp;{{storeInfo.company_address}}
                       </p>
                   </div>             
             </div>
             <p>{{storeInfo.copyright}}&nbsp;&nbsp;&nbsp;备案号&nbsp;:&nbsp;{{storeInfo.case_number}}站长统计</p>
           </div>
           <div class="footer-right">
               <img :src="storeInfo.qr_code">
           </div>
        </div>
    </section>
</template>
<script>
export default {
    name:"footerBox",
    data(){
        return {
            storeInfo:{}
        }
    },
    created(){
        this.fetchData();
    },
    methods:{
        fetchData(){
            let url = "config/getInfo";
            this.$https.get("config/getInfo").then( res =>{

            this.storeInfo = res.data.data.webInfo; //获取公司信息

            let phone =  res.data.data.webInfo.web_tel_phone; //获取公司座机号码

            //将号码设置到缓存里面
            phone ? sessionStorage.setItem("company_phone",phone) : sessionStorage.setItem("company_phone","000-0000-000");
         });
        }
    }
}
</script>
<style scoped>
    p{
        text-align:left;
    }
    .footerBox{
        width:100%;
        min-width:1200px;
        height:208px;
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
        font-size:16px;
        font-weight:400;
    }
    .footer-left{
        flex:1;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
    }
    .footer-right{
        width:128px;
        height:128px;
        transition:all .5s ease;
        overflow: hidden;
    }

    .footer-right:hover{
        transform:scale(1.2);
        box-shadow: 0 0 10px 1px white;
        border-radius:10px;
    }

    .footer-left-top{
       display:flex;
       margin-bottom:15px;
    }
    .footer-left-logo{
        width:127px;
        height:57px;
    }
    .footer-tips{
        margin-left:30px;
        padding:5px 0;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
    }
    .span_1{
        border-left:1px solid white;
        border-right:1px solid white;
    }
    
</style>
