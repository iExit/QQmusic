<template>
  <div class="slider">
    <swiper :options="swiperOption">
      <!-- <swiper-slide v-for="(item,index) in slider">
        <img class="swiper" :src="item" :key="index">
      </swiper-slide> -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ["slider"],
  data() {
    return {
      swiperOption: {
        autoplay: true, // 自动切换
        loop: true // 循环
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets" // 默认圆点指示点
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
</style>
