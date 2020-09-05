<template>
  <div class="data">
           <div class="works_title ">
                <h3 class="border-bottom border-info d-inline">Works</h3>
            </div>

            
            <div class="radio mt-4">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="Programing" id="type1" value="Rails" v-on:change="$emit('changePrograming', $event.target.value)">
                <label class="form-check-label" for="type1">Ruby on rails</label>
              </div>
          
              <div class="form-check form-check-inline">
                 <input class="form-check-input" type="radio" name="Programing" id="type2" value="WordPress" v-on:change="$emit('changePrograming', $event.target.value)">
                 <label class="form-check-label" for="type2">Word Press</label>
              </div>
          
               <div class="form-check form-check-inline">
                 <input class="form-check-input" type="radio" name="Programing" id="type3" value="Vue" v-on:change="$emit('changePrograming', $event.target.value)">
                 <label class="form-check-label" for="type3">Vue.js</label>
               </div>
          
               <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="Programing" id="type4" value="All" v-on:change="$emit('changePrograming', $event.target.value)">
                <label class="form-check-label" for="type4">All</label>
               </div>
            </div>
  </div>
</template>

<script>
export default {
   name: 'worksData',
   props: ['programing'],
   
}
</script>

<style>
</style>