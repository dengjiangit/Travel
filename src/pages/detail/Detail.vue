<template>
    <div class="detail">
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :galleryImgs="galleryImgs"></detail-banner>   
        <detail-header></detail-header>
        <detail-List :list="list"></detail-List>
        <div class="content">
            
            </div>   
    </div>
</template>

<script>
import detailBanner from './components/banner'
import detailHeader from './components/header'
import detailList from './components/List'
import axios from 'axios'
    export default {
        name:'detail',
        components:{ detailBanner , detailHeader ,detailList },
        methods:{
             getDetailInfo(){
          axios.get("/api/detail.json",{
              params:{
            id:this.$route.params.id
          }}).then((res)=>{
            res =res.data
            if(res.ret&&res.data){
              const data =res.data
              console.log(data)
              this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.galleryImgs = data.galleryImgs
        this.list = data.categoryList
        
            }
          })
      }
        },
        data(){
            return {
                 sightName: '',
                 bannerImg: '',
                 galleryImgs: [],
                 list: []
            }
        },
        mounted() {
            this.getDetailInfo()
        },
    }
</script>

<style lang="stylus" scoped>
.content
    height: 50rem
</style>