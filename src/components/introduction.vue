<template>
<div class="con">
 <pheader>
 </pheader>

 <about v-bind:backGround = "backGround"
        v-on:changebackGround="changebackGround"
>
 </about>

<div class="works">
 <div class="container mt-5 text-center">
    <works-data 
                
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
            backGround: '大学時代',
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
            this.backGround = backGround 
         },
     },

     computed: {
        filteredList: function(){
            var newList = [];
            for (var i=0; i< this.works.length; i++){
                var isShow = true;
                if(this.$store.state.programing == 'Rails' && this.works[i].kind !== 'rails'){
                    isShow = false;
                }
                if(this.$store.state.programing == 'WordPress' && this.works[i].kind !== 'wordpress'){
                    isShow = false;
                }
                if(this.$store.state.programing == 'Vue' && this.works[i].kind !== 'vue'){
                    isShow = false;
                }

                if(this.$store.state.programing == 'All'){
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