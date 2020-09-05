<template>
    <div class="works_contents">
        <div class=" mt-5">
          <v-card
                 class="mx-auto"
                 max-width="400"
          >
    <v-img
      class="white--text align-end"
      height="200px"
      v-bind:src="work.image"
    >
    </v-img>

    <v-card-subtitle class="pb-0">{{work.kind}}</v-card-subtitle>
    <v-card-title>{{work.name}}</v-card-title>
    <v-card-actions>
      <v-btn
        class="text-info"
        text
        v-on:click="$emit('onDetail', work.id)"
      >
        Detail
      </v-btn>
    </v-card-actions>
  </v-card>
        </div>

        <div class="detail text-center" v-if="window">
            <div class="card">
                <h5 class="card-header">{{owork.name}}</h5>
                <div class="card-body">
                    <p class="card-text">{{owork.explain}}</p>
                    <button class="btn btn-danger" v-on:click="$emit('onDetail')">戻る</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'worksItem',
    props: ['work', 'window', 'owork'],


}
</script>

<style scoped>
.detail{
    background-color:rgb(88, 84, 84,0.4);
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
}

.works_contents{
    position: relative;;
}

.detail .card{
    position:absolute;
    top:25%;
    left:15%;
    width:70%;
    height:auto;
}

.item .card{
    height: 20em;
    
    transition: all 1.0s;
}

.item .card:hover{
    
    border:5px solid rgb(94, 165, 223);
    
}


@media(max-width: 850px){
    .detail .card{
        position: fixed;
        width:100%;
        top:150px;
        left:0;
        
    }

    .item .card{
        height:26em;
    }





}
</style>