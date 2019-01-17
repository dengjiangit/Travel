<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
         <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
          <city-Alphabet :cities="cities" @change="handletterChlick" ></city-Alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import cityHeader from './components/header'
import citySearch from './components/search'
import cityList from './components/list'
import cityAlphabet from './components/Alphabet'
    export default {
        name:'city',
        components:{cityHeader,citySearch,cityList,cityAlphabet},
        methods:{
            getcityList () {
                axios.get("/api/city.json").then((res)=>{
                     res =res.data
                    if(res.data&&res.ret){
                        const data =res.data
                        this.cities =data.cities
                        this.hotCities=data.hotCities
                       
                    }
                }).catch((err)=>{
                    console.err("获取城市数据失败",err)
                })
            },
            handletterChlick(letter){
                this.letter=letter
            }
        },
        mounted(){
            this.getcityList()
        },
        data(){
            return {
                cities: {},
                hotCities: [],
                letter: ''
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>