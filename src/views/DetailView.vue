<template>
      <v-app>
    <div class="nft-info" style="width: 840px;">
      <div class="img-box">
        <v-card id="cd">
          <img id="IMG" v-bind:src="sdata.img">
        </v-card>
      </div>
      <div class="title-box">
        <v-card id="title">
          {{sdata.title}}
        </v-card>
      </div>
      <div class="des-box">
        <v-card id="des">
          {{sdata.description}}
        </v-card>
      </div>

    </div>
    </v-app>
</template>    

      
<!--
{{ $route.params.data }}
{{ data }}</h2>
  <v-card  id="cd" align="center" justify="center" style="height: flex; width: 18rem;">
    <img id="IMG" v-bind:src="post.img" alt style="width:280px; height:280px; padding:15px" >
    <div class="card-body">
    <v-card class="text-left" title id="Title"><pre><strong>{{ post.title }}</strong>       {{"스트리머: "+post.streamer}}</pre></v-card>
    <v-card-subtitle class="text-left"> {{"설명: "+post.description}}<br>
    <pre>{{"제작자: "+post.maker}}              <v-btn color="red" id="click" icon><v-icon>mdi-heart</v-icon></v-btn> {{ count }}</pre>
    </v-card-subtitle>
    </div>
  </v-card>
!-->

<script>
import nftData from '../js/nftData';

export default {
  data(){
    return {
      sdata: "",
      userowner: [],
    }
  },
  name: "DetailView",
  DetailView: {

  },
  methods: {
  },
  created() {
    console.log(this.$route.params.id);
    //해당 ID의 NFT 가져오기 지금은 타이틀로 비교중인데 DB 추가되면 고유값으로 비교
    nftData.forEach(datas=>{
      if(datas.title === this.$route.params.id)this.sdata = datas;
    });

    //같은 컨트랙트 목록 불러오기
    nftData.forEach(datas=>{
      if(datas.contract === this.sdata.contract){
        this.userowner.push(datas);
      }
    });
    console.log(this.userowner);
  },

}
</script>

<style scoped>
  #Title{ /* 카드 타이틀*/
    padding-left: 15px;
    font-size: 18px;
    background-color: rgb(20, 20, 20);
    color:white;
  }
  #CARD{
    margin: 40px 30px 40px 30px;
  }
  #IMG{
    border-radius: 4px;
    width: 640px;
    height: 640px;
  }
  #cd{  /* 카드 배경*/
    background-color:rgb(30, 30, 30);
    color:white;
    width: 800px;
    height: 800px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
</style>