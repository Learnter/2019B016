<template>
    <!-- 开店百科 -->
    <section class="encyclopedia">
        <header-box></header-box>

        <div class="encyMain">
            <p class="position-tips text_size_17">当前位置 : 首页 &gt; 开店百科</p>

            <div class="encyNav">
                <ul class="encyNav_lists">
                    <li v-for="(item,index) in navList" :key="index" @click="toggleNav(index)">
                        <span class="nav_style text_size_15" :class="selected == index ? 'selected' : ''">{{item.title}}</span>
                    </li>
                </ul>
            </div>

            <div class="encyStores">
                <ul>
                    <li class="store_item" v-for="(item,index) in 4" :key="index">
                        <div class="store_picture">
                            <img src="../../assets/zpzpwz_25.png" alt="加载失败">
                        </div>
                        <div class="store_right">
                            <p class="text_size_17">新媒体带来的一些餐饮营销变数</p>
                            <p class="text_size_12">2019-05-30 &nbsp;&nbsp;&nbsp;&nbsp;浏览次数 : 324</p>
                            <p class="text_size_14">1111111111111111111122222222222222222222222222222211111111111111111111111111111111111111111111111111111111111111111111111111111</p>
                            <div>
                                <span class="store_tips">新媒体带来的营销变数</span>
                                <span class="store_tips">新媒体带来的营销变数</span>
                                <span class="store_tips">新媒体带来的营销变数</span>
                            </div>
                        </div>
                    </li>
                </ul>
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
    name:"encyclopedia",
    data(){
        return{
            selected:0,
            navList:[
                {id:0,title:"营销策略"},
                {id:1,title:"找店选址"},
                {id:2,title:"空间装修"},
                {id:3,title:"员工管理"},
                {id:4,title:"财务管理"},
                {id:5,title:"加盟培训"}  
            ]
        }
    },
    methods:{
        toggleNav(val){
            console.log(val);
            this.selected = val;
        }
    },
    components:{
        headerBox,
        footerBox
    }
}
</script>
<style scoped>



p{
    word-break: break-all;
}

.selected{
    color:#EA3323;
    font-weight:bold;
    border-bottom:3px solid #EA3323;
}

.encyMain{
    width:900px;
    margin:0 auto;
    text-align:left;
}

.encyNav_lists{
    display:flex;
    background:#F2F2F2;
}

.nav_style{
    padding: 10px; 
    display:block;
    cursor: pointer;
}

.store_item{
    margin-top:10px;
    padding:10px;
    border:1px solid rgba(0, 0, 0, 0.1);
    display:flex;
}

.store_picture{
    flex-shrink:0;
    width:199px;
    height:100px;
    margin-right:10px;
}

.store_right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
}

.store_tips{
    padding:2px 15px;
    background:#EA3323;
    font-size:12px;
    color:white;
    margin-right:5px;
}

</style>

