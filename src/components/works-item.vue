<template>
    <div class="works_contents">
        <div class=" mt-5">
            <div class="item" > 
                <div class="card mt-5"  >
                    <img v-bind:src="work.image" class="card-img-top" alt="...">
                    <div class="card-body">
                       <h5 class="card-title">{{work.name}}</h5>
                       <p class="card-text">使用言語:{{work.kind}}</p>
                       <button class="btn btn-primary" v-on:click="$emit('onDetail', work.id)">詳細</button>
                    </div>
                </div>
            </div>
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