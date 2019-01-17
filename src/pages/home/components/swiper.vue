<template>
    <div class="swiper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item in list" :key="item.id">
                <img :src="item.imgUrl" alt="" width=100%>
            </swiper-slide>
            <!-- Optional controls -->
             <div class="swiper-pagination"  slot="pagination"></div> 
        </swiper>
    </div>
</template>

<script>
    export default {
        name:'homeSwiper',
        props: {
    list: Array
  },
        data() {
            return {
                swiperOption: {
                    pagination:'.swiper-pagination',
                    loop:true
                },
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .swiper >>> .swiper-pagination-bullet-active
       background-color:#fff 
    .swiper
        overflow:hidden
        width:100%
        height:0
        padding-bottom 31.75%
        background: #eeeeee
    
</style>