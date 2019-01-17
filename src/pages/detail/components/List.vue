<template>
    <div>
      <div
        class="item"
        v-for="(item, index) of list"
        :key="index"
      >
        <div class="item-title border-bottom">
          <span class="item-title-icon"></span>
          {{item.title}}
        </div>
        <div
          v-if="item.children"
          class="item-children"
        >
          <detail-list :list="item.children"></detail-list>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DetailList',
  props: {
    list: Array,
  },
  methods:{
     
  },
  data(){
    return{
     
    }
  },
  mounted() {
  },
}
</script>

<style lang="stylus" scoped>
  .item-title
    line-height .8rem
    font-size .32rem
    padding 0 .5rem
    .item-title-icon
      display inline-block
      position absolute
      width .36rem
      height .36rem
      top .205rem
      left .1rem
      background url('//s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -.45rem no-repeat
      margin-right .1rem
      background-size .4rem 3rem
  .item-children
    padding 0 .4rem
</style>