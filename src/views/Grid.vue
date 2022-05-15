<template>
  <v-app>
    <SearchBar />
    <v-row>
      <v-col cols="12" sm="1"></v-col>
      <v-col sm="10">
        <v-row id="vrow" >
          <v-col id="CARD" v-for="(post, index) in posts" :key="index">
          <v-card style="height: 390px; width: 250px;">
            <div id="cd" style="height: 260px; width: 250px;">
            <router-link :to="{ name: 'DetailView', params: { id: post.title },}">
              <img id="IMG" v-bind:src="post.img" alt style="width:200px; height:205px; padding:1px" >
            </router-link>
            </div>
            <div class="card-body">
              <div class="text-left">
                <v-row>
                  <v-col sm="7">
                    <div class="post_title" >{{ post.title }}</div>
                    <div class="post_maker">{{"Created by "+post.maker}} </div>
                  </v-col>
                  <v-col class="img_streamer" sm="5">
                    <v-avatar
                      size="36px"
                    ><img v-bind:src="post.img"></v-avatar>
                    <div class="post_streamer">{{post.streamer}}</div>
                  </v-col>
                </v-row>
                <hr>
                <v-row class="btn-mdi">
                  <v-col v-if="fill" sm="9" class="btn-heart">
                    <v-btn color="red" v-on:click="FillIn" icon>
                      <v-icon small>mdi-cards-heart-outline</v-icon>
                    </v-btn> {{ count }}
                  </v-col>
                  <v-col v-else sm="9" class="btn-heart">
                    <v-btn color="red" v-on:click="FillOut" icon>
                      <v-icon small>mdi-cards-heart</v-icon>
                    </v-btn> {{ count }}
                  </v-col>
                  <v-col sm="3" class="btn-dots">
                    <v-btn color="black" icon>
                      <v-icon small>mdi-dots-horizontal</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-card>
          </v-col>  
        </v-row>
      </v-col>
      <v-col cols="12" sm="1"></v-col>
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
          fill: true,
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
    FillIn(){
      console.log("FillIn@@@@@@@@@@@@22");
      this.fill= false;
      this.count++;
    },
    FillOut(){
      this.fill= true;
      this.count--;
    },
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

    background-color: #ffffff;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  #Title{ /* 카드 타이틀*/
    padding-left: 15px;
    font-size: 18px;
    background-color: rgb(255, 255, 255);
    color:rgb(0, 0, 0);
  }
  #CARD{
    margin-bottom: 15px;
  }
  #IMG{
    height: flex;
    text-align: center;
  }
  #cd{  /* 카드 배경*/
    background-color:rgb(220, 240, 220);
    color:rgb(14, 13, 13);
    text-align: center;
    padding-top: 25px;
  }
  .subtitle{
    text-align: left;
    background-color:#ffffff
  }
  .post_title{
    text-align: left;
    padding-left:20px;
    padding-top: 15px;
    padding-bottom:2px;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .post_maker{
    text-align: left;
    color:rgb(150, 150, 150);
    padding-left:20px;
    padding-bottom: 20px;
    font-size:11px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .img_streamer{
    text-align: center;
    margin-top: 15px;
    justify-content: center;
  }
  .post_streamer{
    text-align: center;
    justify-content: center;
    margin-top: 4px;
    font-size: 10px;
    color:rgb(130, 130, 130);
  }
  .btn-heart{
    text-align: left;
    padding-left: 20px;
    padding-top: 16px;
    font-size: 10px;
  }
  .btn-dots{
    padding-top: 16px;
  }
  hr {
  height:1px;
  width:90%;
  margin-left:5%;
  background-color: #e2e2e2;
  border: none;
}
</style>