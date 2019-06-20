<template>
  <div id="app">
    <header-box></header-box>

    <router-view/>
    
    <footer-box></footer-box>
  </div>
</template>

<script>
import headerBox from "@/components/common/headerBox";
import footerBox from "@/components/common/footerBox";
export default {
  name: 'App',
  components:{
    headerBox,
    footerBox
  }
}
</script>

<style>
#app {
  font-family:MicrosoftYaHei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


img{
  width:100%;
  height:100%;
}

/*flex 布局样式 */

.flex_row{   
  display:flex;
  flex-direction:row;
}

.flex_col{
  display:flex;
  flex-direction: column;
}

.flex_between_center{
  justify-content:space-between;
  align-items:center;
}

.flex_1{
  flex:1;
}

.flex_shrink{
  flex-shrink:0;
}

/*文字样式大小*/
.text_size_32{
  font-size:32px;
  font-weight:bold;
  color:#343434;
}
.text_size_18{
  font-size:18px;
  font-weight:bold;
  color:#252A33;
  line-height:24px;
}

.text_size_17{
    font-size:22px;
    color: #343434;
    font-weight:400;
}

.text_size_16{
  font-size:16px;
 font-weight:bold;
  color:#252A33;
  line-height:24px;
}

.text_size_14{
  font-size:18px;
  color:#525252;
  line-height:24px;
  font-weight:400;
}

.text_size_12{
    font-size:16px;
    color:#979797;
    font-weight:400;
}

.text_size_15{
    font-size:20px;
    color: #666666;
    font-weight:400;
}


/* 文字颜色样式*/
.word_red{
  color:#EA3323;
}

.word_blue{
  color:#2A9DFF;
}


.position-tips{
  margin:30px 0;
  color:#343434;
}

.company-stores{
    margin:30px 0;
    display:flex;
    justify-content:space-between;
}

.stores-btn{
    width:387px;
    height:67px;
    line-height:67px;
    background:#CDCDCD;
    font-size:28px;
    font-weight:400;
    text-align:center;
}
</style>
