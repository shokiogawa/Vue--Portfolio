<template>
  <div class="works">
        <div class="container mt-5 text-center">
        <works-data v-bind:programing = "programing"
                    
        >
        </works-data>
        <works-item v-for="work in filteredList"
                    v-bind:key="work.id"
                    v-bind:window = "window"
                    v-bind:work = "work"
                    v-on:programingChange = "programingChange"
        >
        </works-item>
          
        </div>
    </div>
</template>

<script>
import worksItem from './works-item';
import worksData from './works-data';

export default {
     name: 'Works',
     propts: ['works'],
     components: {
       'works-data' : worksData,
       'works-item' : worksItem
     },

     data: function(){
       return{
            window: false,
            programing: 'All',
            work: ''
       }
     },

     

     


 }
</script>

<style>

</style>