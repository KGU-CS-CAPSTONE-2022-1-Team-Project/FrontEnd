<template>
    <div class="dv" ref="div3">
        <v-row>
            <v-col md="2"><v-img height="100px" width="150px" src="../assets/kgu2.png"></v-img>
            </v-col>
            <v-col class="wi" md="2">경기대학교 캡스톤 디자인<br>
              <div class="person">
                <hr>이상현,이건회,안성수,황인철,이기철
              </div>           
            </v-col>
            <!--<v-col class="rw" md="3">
                <a id="bt">
                    <v-icon dark>mdi-information-outline</v-icon> 
                    <router-link class="routerlink" to="/about"> HELP </router-link>
                </a>
                <a id="bt">
                    <v-icon dark>mdi-image-search-outline</v-icon>
                    <router-link class="routerlink" to="/grid">More...</router-link>
                </a>
            </v-col>-->
        </v-row>
        <v-row>
        <v-col class="write" md="10">Copyright © 2022 Artblock. All rights reserved. | 개인정보처리방침 | 서비스 이용약관 | 서비스 운영정책
            <br>ArtBlcok 사업자등록번호 : xxx-xx-xxxxx | 대표이사 : XXX | 경기도 수원시 광교산로 154-42 (경기대학교)
        </v-col>
        <v-col md="2">
            <a id="icon" href="https://www.kyonggi.ac.kr"><v-icon >mdi-school-outline</v-icon></a>
            <a id="icon" href="https://www.facebook.com"><v-icon >mdi-facebook</v-icon></a>
            <a id="icon" href="https://www.instagram.com"><v-icon > mdi-instagram</v-icon></a>
            <a id="icon" href="https://www.twitter.com"><v-icon >mdi-twitter</v-icon></a>
        </v-col>
        </v-row>
        <router-view></router-view>
    </div>
</template>
<style scoped>
  .wi{
      font-size: medium;
      margin-top: 55px;
      text-justify: center;
  }
  #img{
      justify-content: right;
      text-align: center;
  }
  .routerlink{
    color:rgb(255, 255, 255);
  }
  .rw{
      text-align: right;
      margin-top: 70px;
  }
.dv {
    margin: 10px 100px 10px 100px;
    color:black;
}
.write{
    font-size:x-small;
}
  #cl{
    margin-left: 120px;
  }
  #bt{
    background-color:rgb(42, 42, 42);
    justify-content: space-between;
    border-style: solid;
    margin: 30px 10px 30px 10px;
    padding: 10px;
    border-color: black; 
    border-radius:5px 5px 5px 5px;
    border-width: 1px 1px 1px 1px;
    font-size: 15px;
  } 
  #icon{ 
    padding-left : 20px;
    text-decoration: none;
    font-weight: bolder;
    font-size:larger;
  }
  a{
    text-decoration: none;
    font-weight: bolder;
    font-size:larger;
    padding-left: 10px;
  }
  .router-link-active{
      color: black;
  }
  .person{
    text-align: right;
    margin-right: 10px;
    font-size: 3px;
  }
</style>