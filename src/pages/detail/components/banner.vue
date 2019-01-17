<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe626;</span>39</div>
      </div>
    </div>
    <fade-animation>
      <common-gallary
        :imgs="galleryImgs"
        v-show="showGallary"
        @close="handleGallaryClose"
      ></common-gallary> 
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import fadeAnimation from 'common/fade/fade'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_r_800x800_47582402.jpg',
        'http://img1.qunarzz.com/sight/p0/1506/dd/7659217cc529114eba75b42ace21ca4a.water.jpg_r_800x800_9456bcaa.jpg']
    }
  },
  props:{
    sightName:String,
    bannerImg:String,
    galleryImgs:Array
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary ,fadeAnimation
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      bottom: 0
      left: 0
      right: 0
      line-height: .6rem
      color: #ffffff
      background-image: linear-gradient(top, rgba(0,0,0,0) ,rgba(0,0,0,0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>