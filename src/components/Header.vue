<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="black"
      flat
    >
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="50"
        rounded
      ><v-img src="../assets/logo_origin.png"></v-img></v-avatar>
      <!-- v-tabs 중앙은 centerd / 오른쪽은 right
      <GoHome v-if="$route.name == 'home'">asd</GoHome>-->
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
          <v-tab v-if= true>
            <router-link class="routerlink" to="/mypage">MyPage</router-link>
          </v-tab>
          <v-tab v-if= true>
            <button id="bt" v-on:click="logout">LOGOUT</button>
          </v-tab>
          <!--로그 아웃 상태-->
          <v-tab v-if= true>
            <button id="bt" v-on:click="login">LOGIN</button>
          </v-tab>
      </v-tabs>

      <!--
      <v-avatar 
        class="hidden-sm-and-down"
        color="blue darken-1 shrink"
        size="50"
        rounded
      ><button v-on:click="login">LOGIN</button></v-avatar>-->
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
import GoHome from '../components/GoHome.vue'
  export default {
    name: 'App',
    data: {
      return: {
        logType:true
      }
    },
    components : {  
      GoHome
    },
    methods: {
    login: function() {
    if (typeof window.klaytn !== 'undefined') {
      console.log("no");
    }
      //const provider = window['klaytn']
      console.log("yes");
      console.log(window.klaytn);
      const acc = window.klaytn.enable();
      console.log("acc", acc);
    },
    logout: function(){
      console.log("no");
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