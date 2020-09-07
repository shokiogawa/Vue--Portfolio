<template>
  <div class="about">
        <div class="container text-center mt-5">
           <div class="about_title">
             <h3 class="border-bottom border-info d-inline">About Me</h3>
           </div>
           <div class="radio mt-4">
             <div class="form-check form-check-inline">
               <input class="form-check-input" type="radio" name="backGround" id="type1"  value="大学時代" v-on:change="$emit('changebackGround', $event.target.value)">
               <label class="form-check-label" for="type1">大学時代</label>
             </div>

             <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="backGround" id="type2"   value="大学院時代" v-on:change="$emit('changebackGround', $event.target.value)">
                <label class="form-check-label" for="type2">大学院時代</label>
              </div>

              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="backGround" id="type3" value="青年海外協力隊" v-on:change="$emit('changebackGround', $event.target.value)">
                <label class="form-check-label" for="type3">青年海外協力隊</label>
              </div>
           </div>

           <div class="contents container">
               <div class="university border container mt-5 text-left" v-if="backGround == '大学時代'">
                  <div class="row">
                   <label class="offset-sm-4 col-sm-2 text-info">Name:</label>
                   <p class="col-sm-6">小川翔生(23)</p>
                   <label class="offset-sm-4 col-sm-2 text-info">University:</label>  
                   <p class="col-sm-6">近畿大学理工学部理学科物理コース</p>
                   <label class="offset-sm-4 col-sm-2 text-info">TOEIC:</label>  
                   <p class="col-sm-6">725点</p>
                   <label class="offset-sm-4 col-sm-2 text-info">研究:</label>  
                   <p class="col-sm-6">マランゴニ対流の研究</p>
                   <label class="offset-sm-4 col-sm-2 text-info">使用プログラミング言語:</label>  
                   <p class="col-sm-6">LabView</p>
                   <label class="offset-sm-4 col-sm-2 text-info">部活動:</label>  
                   <p class="col-sm-6">天文研究会</p>
                   <label class="offset-sm-4 col-sm-2 text-info">大学時代の夢:</label>  
                   <p class="col-sm-6">青年海外協力隊に参加すること</p>
                  </div>
               </div>

               <div class="Graduate border mt-5 container text-left" v-else-if="backGround == '大学院時代'">
                <div class="row border">
                 <label class="offset-sm-4 col-sm-2 text-info">Name:</label>
                 <p class="col-sm-6">小川翔生(23)</p>
                 <label class="offset-sm-4 col-sm-2 text-info">Graduate School:</label>  
                 <p class="col-sm-6">広島大学大学院人間社会学研究科</p>
                 <label class="offset-sm-4 col-sm-2 text-info">研究:</label>  
                 <p class="col-sm-6">ザンビアの理科教育</p>
                 <label class="offset-sm-4 col-sm-2 text-info">参加プロジェクト:</label>  
                 <p class="col-sm-6">ザンビアプログラム</p>
                 <label class="offset-sm-4 col-sm-2 text-info">活動:</label>  
                 <p class="col-sm-6">青年海外協力隊参加のため英語力を磨く</p>
                </div>
               </div>

               <div class="Graduate border mt-5 container text-left" v-else-if="backGround == '青年海外協力隊'">
                <div class="row border">
                 <label class="offset-sm-4 col-sm-2 text-info">Name:</label>
                 <p class="col-sm-6">小川翔生(23)</p>
                 <label class="offset-sm-4 col-sm-2 text-info">活動国:</label>  
                 <p class="col-sm-6">ザンビア</p>
                 <label class="offset-sm-4 col-sm-2 text-info">職種:</label>  
                 <p class="col-sm-6">理科教員</p>
                 <label class="offset-sm-4 col-sm-2 text-info">使用言語:</label>  
                 <p class="col-sm-6">英語</p>
                 <label class="offset-sm-4 col-sm-2 text-info">主な活動:</label>  
                 <p class="col-sm-6">理科の実験器具を作成</p>
                </div>
               </div>
           </div>
        </div>
   </div>
</template>

<script>
 export default {
     name :'About',
     props: ['backGround']
 }
</script>

<style>

</style>