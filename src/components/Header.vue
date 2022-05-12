<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="black"
      flat
      height="70px"
    >
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="55"
        rounded
      ><v-img src="../assets/logo_origin.png"></v-img></v-avatar>
      <v-tabs
        right
        class="ml-n9"
        color="white"
      >
        <v-tab>
          <router-link class="routerlink" to="/home">Home</router-link>
        </v-tab>
        <v-tab>
          <router-link class="routerlink" to="/grid">Grid</router-link>
        </v-tab>

          <!--로그인 상태-->
          <v-tab v-if="isLogin">
            <router-link class="routerlink" to="/mypage">MyPage</router-link>
          </v-tab>
          <v-tab v-if="isLogin">
            <button id="bt" v-on:click="logout">LOGOUT</button>
          </v-tab>
          <!--로그 아웃 상태-->
          <v-tab v-else>
            <button id="bt" v-on:click="login">LOGIN</button>
          </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main class="grey lighten-3">
      
        <v-row>
          <!--
          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
            왼쪽
              
            </v-sheet>
          </v-col> -->

          <v-col
            cols="12"
            sm="12"
          >
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <!-- 중간부분 -->
              
              <router-view></router-view>
            </v-sheet>
          </v-col>
          <!--
          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
            오른쪽
                
            </v-sheet>
          </v-col>-->
        </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Loginjs from '../js/login.js';
import {mapState, mapActions} from "vuex";
import VueRouter from 'vue-router';

  export default {
    name: 'App',
    data: {
      return: {
        logType:true
      }
    },
    computed: {
      ...mapState(["isLogin"])
    },
    components : {  
    },
    methods: {
      ...mapActions(["loginEx"]),
      login: function() {
        let saveData = {
          walletAddress : "",
          isMember : false
        };

        const router = new VueRouter();
        
        
        //Kaikas 지갑 설치 되어있음
        if (window.klaytn !== 'undefined') {
          if(window.klaytn.isKaikas){
            if(window.klaytn.enable() !== ""){
              saveData.walletAddress = window.klaytn.selectedAddress;
              saveData.isMember = Loginjs.isMember(saveData.walletAddress);
              //console.log(saveData);
            }
            //이미 회원 가입 했다면
            if(saveData.isMember){
              this.$store.dispatch('loginEx', saveData);
              this.$router.push({
                name: "home"
              })
            }
            //아니라면 회원가입으로 진행
            else{
              this.$router.push({
                name: "join"
              })
            }
          }
        }
    },
    logout: function(){
      console.log(this.$store.state["isLogin"]);
      this.$store.dispatch('logoutEx');
      this.$router.push({
        name: "home"
      })
      console.log(this.$store.state["isLogin"]);
    }
  }
  }
</script>

<style scoped>
  .routerlink{
    color:#757575;
  }

  a{
    text-decoration: none; 
    font-size:larger;
  }
  #bt{
    color: #757575;
  }
  .router-link-active{
    color: white;
  
  }
</style>