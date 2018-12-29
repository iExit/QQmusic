<template>
  <div class="recommend" ref="recommend">我是推荐</div>
  <slider :slider="slider"></slider>
</template>

<script>
import axios from "axios";
// import { getRecommend, getDiscList } from "api/recommend";
// import { ERR_OK } from "api/config";
import Slider from 'base/slider/slider'
export default {
  data() {
    return {
      slider: []
    }
  },
  components:{
      Slider
  },
  created() {
    this._getRecommend();
  },
  methods: {
    // _getRecommend(){
    //     getRecommend().then((res)=>{
    //         if(res.code===ERR_OK){
    //             console.log(res)
    //         }
    //     })
    // }
    _getRecommend() {
      axios.get("/api/recommend").then(res => {
        console.log(res.data);
        console.log(res.data.data.slider);
        this.slider = res.data.data.slider;
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
</style>
