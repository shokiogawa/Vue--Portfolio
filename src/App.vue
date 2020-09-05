<template>
  <div id="app">
   <introduction  v-bind:works="works"></introduction>
  </div>
</template>

<script>
import Introduction from './components/introduction.vue'

export default {
  name: 'App',
  components: {
    'introduction' : Introduction
  },
  data :function(){
    return{
      works:[
                     {id:1, name: 'JOCV', image: require('./assets/images/JOCV.png'), kind: 'rails',explain: 'このアプリは、アフリカの生徒に向けた教科要約アプリです。先生は、授業内容をPOSTすることが出来ます。'},
                     {id:2, name: 'Connect', image: require('./assets/images/Connect.png'), kind: 'rails', explaun: 'Connectは駆け出しエンジニアのためのアプリケーションです。駆け出しエンジニアがロードマップなどを共有することが出来ます。'},
                     {id:3, name: 'Introduction', image: require('./assets/images/WordPress.png'), kind: 'wordpress', explain: 'WordPressを用いて自己紹介サイトを作成。動きのあるモダンなサイトにしました。'},
                     {id:4, name: 'Talk Time', image: require('./assets/images/TalkTime.png'), kind: 'rails',explain: '第二言語を学びたい人が簡単につながることが出来るアプリです。自分の趣味などを共有しコミュニケーションを取りやすいようにしています。'},
                     {id:5, name: 'Introduction(Vue)', image: require('./assets/images/Vue.png'), kind: 'vue',explain: 'Vueを用いて簡単な自己紹介サイトを作成。今後はVue cliを使いコンポーネント化していく。'}
            ]
    }
  }
}
</script>

<style>

</style>
