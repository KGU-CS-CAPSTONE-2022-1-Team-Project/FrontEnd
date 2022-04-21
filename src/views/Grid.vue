<template>
  <v-app>
    <SearchBar />
      <v-row>
        <v-col id="CARD" v-for="(post, index) in posts" :key="index">
        <v-card  class="text-center" style="height: 24rem; width: 18rem;">
          <img id="IMG" v-bind:src="post.img" alt style="width:280px; height:280px;">
          <div class="card-body">
            <v-card class="text-left" title id="Title"><strong>{{ post.description }}</strong></v-card>
            <v-card-subtitle class="text-left">Subtitle 길어지면 어떻게 되는지 테스트
              <br><v-btn color="red" id="click" icon><v-icon>mdi-heart</v-icon></v-btn>
              {{ count }}
            </v-card-subtitle>
          </div>
        </v-card>
        </v-col>  
      </v-row>
      <mugen-scroll :handler="fetchData" :should-handle="!loading">
      loading...
      </mugen-scroll>
  </v-app>
</template>
 
<script>
import SearchBar from '../components/SearchBar.vue'
import MugenScroll from 'vue-mugen-scroll'
import nftData from '../js/nftData'
export default {
    data() {
      // do not run handler when it's loading
      return {
          posts: [],
          count: 0
      }
    },
    methods: {
      fetchData() {
        this.loading = true
        for(var i=0; i < 5; i++) {
              this.posts.push(nftData[i])
        }
        this.loading = false
      },
      getPosts() {
          for(var i=0; i < nftData.length; i++) {
              this.posts.push(nftData[i])
          }
      }
    },
    components: {MugenScroll,SearchBar}
}
</script>
<style scoped>
  #Title{
    padding-left: 15px;
    font-size: 18px;
  }
  #CARD{
    padding : 50px;
  }
  #IMG{
    height: flex;
    text-align: center;
  }
</style>