<template>
  <v-app>
    <SearchBar />
      <v-row id="vrow">
        <v-col id="CARD" v-for="(post, index) in posts" :key="index">
        <v-card  id="cd" class="text-center" style="height: flex; width: 18rem;">
          <img id="IMG" v-bind:src="post.img" alt style="width:280px; height:280px;">
          <div class="card-body">
            <v-card class="text-left" title id="Title"><pre><strong>{{ post.title }}</strong>       {{"스트리머: "+post.streamer}}</pre></v-card>
            <v-card-subtitle class="text-left"> {{"설명: "+post.description}}<br>
            <pre>{{"제작자: "+post.maker}}              <v-btn color="red" id="click" icon><v-icon>mdi-heart</v-icon></v-btn> {{ count }}</pre>
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
import EventBus from '../js/EventBus'

export default {
    data() {
      // do not run handler when it's loading
      return {
        receivedClickCount: 0,
          posts: [],
          count: 0,
          flag: 100,
          keyword: '',
          pushcount: 0,
          loading: false,
      }
    },
    created(){
        this.getPosts();
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
          var length = nftData.length * this.pushcount;
            for(var i=0; i < length; i++)
              this.posts.pop(nftData[i])
            this.searchPosts();
        });
    },
    methods: {
      fetchData() {
        this.loading = true
        for(var i=0; i < 30; i++) {
              this.posts.push(nftData[i])
        }
        this.loading = false
      },
      getPosts() {  
          for(var i=0; i < nftData.length; i++) {
            this.pushcount = this.posts.length + i
              this.posts.push(nftData[i])
          }
      },
      searchPosts(){
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
              if ((nftData[i].maker).includes(this.keyword)){
                this.posts.push(nftData[i])
                this.pushcount++;
                }
            }
            else if(this.flag==0){  //0은 통합검색
                console.log(nftData[i].title.includes(this.keyword)+"타이틀")
                console.log(nftData[i].streamer.includes(this.keyword)+"스트리머")
                console.log(nftData[i].maker.includes(this.keyword)+"메이커")
                if(((nftData[i].title.includes(this.keyword))||(nftData[i].streamer.includes(this.keyword)) )||(nftData[i].maker.includes(this.keyword))){
                  this.posts.push(nftData[i])
                  this.pushcount++;
                  this.count++;
                  console.log(this.count+"가능")
                }
                else{
                  this.count++;
                  console.log(this.count+"결과가 없어요.");
                }
                /*
                if ((nftData[i].title).includes(this.keyword)){
                  this.posts.push(nftData[i])
                  this.pushcount++;
                  this.count++;
                  console.log(this.count+"title 가능")
                }
                else if ((nftData[i].streamer).includes(this.keyword)){
                  this.posts.push(nftData[i])
                  this.pushcount++;
                  this.count++;
                  console.log(this.count+"streamer 가능")
                }
                else if ((nftData[i].maker).includes(this.keyword)){
                  this.posts.push(nftData[i])
                  this.pushcount++;
                  this.count++;
                  console.log(this.count+"maker 가능")
                }
                else{
                  this.count++;
                  console.log(this.count+"결과가 없어요.");
                }*/
            }
            else{
              this.posts.push(nftData[i])
              this.pushcount++;
              }
          }
          this.loading = true
      }
    },
    components: {MugenScroll,SearchBar}
}
</script>
<style scoped>
  #vrow{
  overflow: hidden;
  margin:0;
  background-image: url("../assets/bgg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  }
  #Title{
    padding-left: 15px;
    font-size: 18px;
    background-color: rgb(20, 20, 20);
    color:white;
  }
  #CARD{
    padding : 50px;
  }
  #IMG{
    height: flex;
    text-align: center;
  }
  #cd{
    background-color:rgb(30, 30, 30);
    color:white;
  }
</style>