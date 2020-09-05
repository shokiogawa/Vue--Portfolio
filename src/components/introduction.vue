<template>
<div class="con">
 <pheader>
 </pheader>

 <about v-bind:backGround = "backGround"
        v-bind:back1 = "back1"
        v-bind:back2 = "back2"
        v-bind:back3 = "back3"
        v-on:changebackGround="changebackGround"
>
 </about>

<div class="works">
 <div class="container mt-5 text-center">
    <works-data v-bind:programing="programing"
                
    >
    </works-data>
    <div class="row">
    <works-item class="col-sm-3"
                v-bind:window="window"
                v-for="work in filteredList"
                v-bind:work="work"
                v-bind:key="work.id"
                v-bind:owork="owork"
                v-on:onDetail="onDetail"
    >
    </works-item>
    </div>
 </div>
</div>


</div>



</template>

<script>
import Pheader from  './pheader.vue';
import About from './about.vue';
import worksItem from './works-item';
import worksData from './works-data';


export default {
    name: 'Introduction',
    props: ['works'],
    components: {
        'pheader' : Pheader,
        'about' : About,
        'works-data' : worksData,
        'works-item' : worksItem
    },

    data: function(){
        return {
            back1: true,
            back2: false,
            back3: false,
            backGround: '大学時代',
            programing: 'All',
            window: false,
            owork: '',
        
            

        }
    },

    methods: {  
        onDetail: function(id){
            if(!this.window){
                this.window = true;
            }
            else if(this.window){
                this.window = false;
            }
            var num = Number(id) -1
            this.owork = this.works[num]
            return  this.owork;
        },
        

        changebackGround: function(backGround){
            this.backGround = backGround;
            if (this.back1 && this.backGround == '青年海外協力隊'){
                this.back1 = !this.back1
                this.back3 = !this.back3
            }

            if(this.back1 && this.backGround == '大学院時代'){
                this.back1 = !this.back1
                this.back2 = !this.back2
            }

            if (this.back2 && this.backGround == '青年海外協力隊'){
                this.back2 = !this.back2
                this.back3 = !this.back3
            }

            if(this.back2 && this.backGround == '大学時代'){
                this.back1 = !this.back1
                this.back2 = !this.back2
            }

            if (this.back3 && this.backGround == '大学時代'){
                this.back1 = !this.back1
                this.back3 = !this.back3
            }

            if(this.back3 && this.backGround == '大学院時代'){
                this.back3 = !this.back3
                this.back2 = !this.back2
            }
        }
     },

     computed: {
        filteredList: function(){
            var newList = [];
            for (var i=0; i< this.works.length; i++){
                var isShow = true;
                if(this.programing == 'Rails' && this.works[i].kind !== 'rails'){
                    isShow = false;
                }
                if(this.programing == 'WordPress' && this.works[i].kind !== 'wordpress'){
                    isShow = false;
                }
                if(this.programing == 'Vue' && this.works[i].kind !== 'vue'){
                    isShow = false;
                }

                if(this.programing == 'All'){
                    isShow = true;
                }
                if(isShow){
                    newList.push(this.works[i]);
                }
            }

            return newList;
        }
    },


}
</script>

<style>
</style>