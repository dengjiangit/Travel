<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
       <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
         <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
import homeHeader from '@/pages/home/components/Header'
import homeSwiper from '@/pages/home/components/swiper'
import homeIcons from '@/pages/home/components/icons'
import homeRecommend from '@/pages/home/components/recommend'
import homeWeekend from '@/pages/home/components/weekend'
import { mapState} from 'vuex'
import axios from 'axios'
    export default {
        name:'home',
    components:{homeHeader//异步组件的按需加载:()=>import('@/pages/home/components/Header')
    ,homeSwiper,homeIcons,homeRecommend,homeWeekend},
    mounted() {
        this.lastcity =this.city
        this.getHomeInfo()
    },
    computed:{
        ...mapState(['city'])
    },
    methods:{
        getHomeInfo () {
            axios.get('/api/index.json?city='+this.city).then((res)=>{
                console.log(res)
                res=res.data
               if(res.data&&res.ret){
                    const data = res.data
                    this.swiperList = data.swiperList
                    this.iconList = data.iconList
                    this.recommendList = data.recommendList
                    this.weekendList = data.weekendList
               }
            }).catch((err)=>{

            })
        }
    },
    data(){
        return {
             swiperList: [],
             iconList: [],
             recommendList: [],
             weekendList: [],
             lastcity:""
        }
    },
    activated(){
        if(this.lastcity!==this.city){
             this.getHomeInfo()
             this.lastcity=this.city
        }
    }
    }
</script>

<style scoped>

</style>