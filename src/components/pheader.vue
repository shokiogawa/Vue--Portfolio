<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">INTRODUCTION</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto ">
          <li class="nav-item active">
            <a class="nav-link" href="#">Top <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Works</a>
          </li>
        </ul>
      </div>
    </nav>
      <div class="img">
      <div class=" text-center">
       <h1 class="text-white title"> Welcome to my Portfolio cite</h1>
      </div>
     </div>
  </div>



  

</template>

<script>
export default {
    name: 'Pheader'
}




</script>

<style scoped>
 .img{
    background-image: url('~@/assets/images/camp.jpg');
    background-size: cover;
    height:500px;
}

.title{
    padding-top: 10%;
}



</style>