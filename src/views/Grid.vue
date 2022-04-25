<template>
  <v-app>
    <SearchBar />
      <v-row>
        <v-col id="CARD" v-for="(post, index) in posts" :key="index">
        <v-card  class="text-center" style="height: 24rem; width: 18rem;">
          <img id="IMG" v-bind:src="post.img" alt style="width:280px; height:280px;">
          <div class="card-body">
            <v-card class="text-left" title id="Title"><strong>{{ post.title }}</strong></v-card>
            <v-card-subtitle class="text-left">Subtitle 길어지면 어떻게 되는지 테스트
              <br><v-btn color="red" id="click" icon><v-icon>mdi-heart</v-icon></v-btn>
              {{ count }}
            </v-card-subtitle>
          </div>
        </v-card>
        </v-col>  
      </v-row>
      <mugen-scroll :handler="searchPosts" :should-handle="!loading">
      loading...
      </mugen-scroll>
  </v-app>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
import MugenScroll from 'vue-mugen-scroll'
import nftData from '../js/nftData' 
import EventBus from '../js/EventBus'

export default {
    data() {
      // do not run handler when it's loading
      return {
        receivedClickCount: 0,
          posts: [],
          count: 0,
          flag: 0,
          keyword: '',
          pushcount: 0,
      }
    },
    created(){
        EventBus.$on('use-eventbus', (clickedCount)=>{
          this.receivedClickCount=clickedCount;
          console.log("이벤트 잘 받았음"+clickedCount);
        });
        EventBus.$on('event-flag', (flag)=>{
          this.flag=flag;
          console.log(flag);
        });
        EventBus.$on('event-keyword', (keyword)=>{
          this.keyword=keyword;
            for(var i=0; i < nftData.length; i++)
              this.posts.pop(nftData[i])
        });

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
      },
      searchPosts(){
        this.loading = true
          console.log("키워드:"+this.keyword);
          console.log("플래그:"+this.flag);
          for(var i=0; i < nftData.length; i++) {
            if(this.flag==1){  //1은 제목
              if ((nftData[i].title).includes(this.keyword)){
                this.posts.push(nftData[i])
                this.pushcount++;
                }
            }
            else if(this.flag==2){  //2는 스트리머
              if ((nftData[i].streamer).includes(this.keyword)){
                this.posts.push(nftData[i])
                this.pushcount++;
                }
            }
            else if(this.flag==3){  //3는 등록자
              if ((nftData[i].streamer).includes(this.keyword)){
                this.posts.push(nftData[i])
                this.pushcount++;
                }
            }
            else if(this.flag==0){  //0은 통합검색
              if ((nftData[i].title || nftData[i].streamer || nftData[i].title).includes(this.keyword)){
                this.posts.push(nftData[i])
                this.pushcount++;
                }
            }
            else{
              this.posts.push(nftData[i])
              this.pushcount++;
              }
          }
          this.loading = false
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