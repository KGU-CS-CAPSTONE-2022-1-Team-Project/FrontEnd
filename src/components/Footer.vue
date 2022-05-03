<template>
    <div class="dv" ref="div3">
        <v-row>
            <v-col md="1"><v-img height="100px" width="100px" src="../assets/logo_origin.png"></v-img>
            </v-col>
            <v-col class="wi" md="3">경기대학교 캡스톤 디자인</v-col>
            <v-col class="rw" md="7">
                <a id="bt">
                    <v-icon dark>mdi-information-outline</v-icon> 
                    <router-link class="routerlink" to="/about"> HELP </router-link>
                </a>
                <a id="bt">
                    <v-icon dark>mdi-image-search-outline</v-icon>
                    <router-link class="routerlink" to="/grid">More...</router-link>
                </a>
            </v-col>
        </v-row>
        <v-row>
        <v-col class="write" md="9">Copyright © 2022 Artblock. All rights reserved. | 개인정보처리방침 | 서비스 이용약관 | 서비스 운영정책
            <br>ArtBlcok 사업자등록번호 : xxx-xx-xxxxx | 대표이사 : XXX | 경기도 수원시 광교산로 154-42 (경기대학교)
        </v-col>
        <v-col class="justify-end">
            <a id="icon" href="https://www.kyonggi.ac.kr"><v-icon dark>mdi-school-outline</v-icon></a>
            <a id="icon" href="https://www.facebook.com"><v-icon dark>mdi-facebook</v-icon></a>
            <a id="icon" href="https://www.instagram.com"><v-icon dark> mdi-instagram</v-icon></a>
            <a id="icon" href="https://www.twitter.com"><v-icon dark>mdi-twitter</v-icon></a>
        </v-col>
        </v-row>
        <router-view></router-view>
    </div>
</template>
<style scoped>
  .wi{
      font-size: medium;
      margin-top: 25px;
      text-justify: center;
  }
  #img{
      justify-content: right;
      text-align: center;
  }
  .routerlink{
    color:white;
  }
  .rw{
      text-align: right;
      margin-top: 70px;
  }
.dv {
    margin: 10px 100px 10px 100px;
    color:white;
}
.write{
    font-size:x-small;
}
  #cl{
    margin-left: 120px;
  }
  #bt{
    background-color:rgb(20,20,20);
    justify-content: space-between;
    border-style: solid;
    margin: 30px 10px 30px 10px;
    padding: 10px;
    border-color: white; 
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
      color: #eeeeee;
  }
</style>