<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


img{
  width:100%;
  height:100%;
}

/*文字样式*/
.text_size_17{
    font-size:17px;
    color: #343434;
    font-weight:400;
}

.text_size_14{
  font-size:14px;
  color:#525252;
  line-height:15px;
  font-weight:400;
}

.text_size_12{
    font-size:12px;
    color:#979797;
    font-weight:400;
}

.text_size_15{
    font-size:15px;
    color: #666666;
    font-weight:400;
}


/* 文字颜色 */
.word_red{
  color:#EA3323;
}

.word_blue{
  color:#2A9DFF;
}


.position-tips{
  margin:15px 0;
  color:#343434;
}

.company-stores{
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
}
</style>
