<template>
  <div class="data">
           <div class="works_title ">
                <h3 class="border-bottom border-info d-inline">Works</h3>
            </div>

            
            <div class="radio mt-4">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="university" id="type1" value="Rails" v-model="programing">
                <label class="form-check-label" for="type1">Ruby on rails</label>
              </div>
          
              <div class="form-check form-check-inline">
                 <input class="form-check-input" type="radio" name="Graduate" id="type2" value="WordPress" v-model="programing">
                 <label class="form-check-label" for="type2">Word Press</label>
              </div>
          
               <div class="form-check form-check-inline">
                 <input class="form-check-input" type="radio" name="JOCV" id="type3" value="Vue" v-model="programing">
                 <label class="form-check-label" for="type3">Vue.js</label>
               </div>
          
               <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="JOCV" id="type4" value="All" v-model="programing">
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