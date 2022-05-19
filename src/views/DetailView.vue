<template>
  <v-app>
    <v-row>
      <v-col sm="2">left</v-col>
      <v-col sm="8" id="detail-box" justify="center" align="center">
        <v-col id="img-box">
          <v-card id="IMG-BG" color="rgb(177, 204, 255)" dark tile flat>
            <img id="IMG" v-bind:src="sdata.img" />
          </v-card>
        </v-col>
        <v-col id="title-box">
          <table style="margin-top: 48px;">
            <tbody>
              <tr>
                <v-card-text class="ntitle" style="width:48rem">{{ sdata.title }}</v-card-text>
              </tr>
              <tr>
                <td>
                <v-card-text>
                  <table style="display: table-cell; width: 24rem;">
                    <tbody>
                      <tr style="font-size:20px">
                        Creator
                      </tr>
                      <tr class="producer">
                        {{ sdata.maker }}
                      </tr>
                    </tbody>
                  </table>
                  <table style="display: table-cell; width: 24rem;">
                    <tbody>
                      <tr style="font-size:20px">
                        Streamer
                      </tr>
                      <tr class="producer">
                        {{ sdata.maker }}
                      </tr>
                    </tbody>
                  </table>
                </v-card-text>
                </td>
              </tr>
            </tbody>
          </table>
        </v-col>
        <v-col id="des-box">
          <v-card-text class="des-title">설명</v-card-text>
          <v-card-text class="des">
            {{ sdata.description }}
          </v-card-text>
        </v-col>
        <v-col id="other-nft-box">
          <v-row flat>
            <v-card class="small-img-bg" v-for="(sdata, index) in userowner.slice(0,5)" :key="index">
              <img class="small-img" v-bind:src="sdata.img" />
            </v-card>
            <v-card v-if="userowner.length>5" style="vertical-align: middle;" flat>
              <img class="hwasal" style="width:48px; heigth:48px;" src="../assets/arrow.png"/> 
            </v-card>
          </v-row>
        </v-col>
      </v-col>
      <v-col sm="2">right</v-col>
    </v-row>
  </v-app>
</template>

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
  #IMG{
    border-radius: 4px;
    width: 640px;
    height: 640px;
  }
  #IMG-BG{  /* 카드 배경*/
    background-color:rgb(255, 255, 255);
    color:rgb(255, 255, 255);
    width: 800px;
    height: 800px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  .hwasal{ /* 화살표 */
    margin-top:150%;
  }
  .small-img-bg{
    background-color:rgb(255, 255, 255);
    color:rgb(255, 255, 255);
    width: 128px;
    height: 128px;
    margin:3%;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  .small-img{
    margin:10%;
    border-radius: 4px;
    width: 108px;
    height: 108px;
  }
  .ntitle{
    font-size: 4.5rem;
    color: #2d3741;
    font-weight: 700;
    line-height: 64px;
    width: 520px;
    word-break: break-all;
  }
  .producer{
    color: #2d3741;
    font-weight: 1000;
    font-size: 2rem;
    line-height: 64px;
    width: 520px;
    word-break: break-all;
  }
  .des-title{
    font-size:1.7rem;
    font-weight: 600;
    text-align:left;
    width:48rem;
  }
  .des{
    font-size:1.2rem;
    font-weight: 600;
    text-align:left;
    width:48rem;
  }
</style>