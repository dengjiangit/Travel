<template>
    <div class="icons">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">  
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <span class=icon-desc>{{item.desc}}</span>
                </div>
            </swiper-slide>  
            <div class="swiper-pagination"  slot="pagination"></div> 
          </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
        swiperOption:{
          pagination:'.swiper-pagination'  
        },
      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        desc: '景点门票'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
        desc: '滑雪季'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
        desc: '泡温泉'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
        desc: '动植园'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
        desc: '滑雪季'
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
        desc: '泡温泉'
      }, {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
        desc: '动植园'
      }, {
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png',
        desc: '一日游'
      },
      {
        id: '00010',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png',
        desc: '节假游'
      }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
    .icons >>>.swiper-container
        height:0
        overflow:hidden
        padding-bottom:50%
    .icons
        margin-top:.1rem
        .icon
           
            position:relative
            float:left
            height:0
            width:25%
            padding-bottom:25%
            overflow:hidden
            .icon-img
                position:absolute
                left:0
                top:0
                right:0
                bottom:.34rem
                box-sizing:border-box
                padding:0.05rem
                .icon-img-content 
                    display:block;
                    margin:0 auto 
                    height:100%
            .icon-desc
                position: absolute
                left: 0
                right: 0
                bottom: 0
                height: .34rem
                line-height: .34rem
                text-align: center
                ellipsis()

</style>