<template>
  <v-app id="inspire">
    <v-app-bar
        app
        color="black"
        flat
        height="70px"
        v-if="!blank"
    >
      <v-avatar
          :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
          size="55"
          rounded
      >
        <v-img src="../assets/logo_origin.png"></v-img>
      </v-avatar>
      <v-tabs
          right
          class="ml-n9"
          color="white"
      >
        <v-tab to="/home">
          <span class="routerlink">Home</span>
        </v-tab>
        <v-tab to="/grid">
          <span class="routerlink">Grid</span>
        </v-tab>

        <!--로그인 상태-->
        <v-tab v-if="isLogin" to="/mypage">
          <span class="routerlink">MyPage</span>
        </v-tab>
        <v-tab v-if="isLogin" to="/upload">
          <span class="routerlink">UPLOAD</span>
        </v-tab>
        <v-tab v-if="isLogin" v-on:click="logout()">
          <button id="bt">LOGOUT</button>
        </v-tab>
        <!--로그 아웃 상태-->
        <v-tab v-else v-on:click="login()">
          <button id="bt">LOGIN</button>
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main class="grey lighten-3">

      <v-row>
        <v-col
            cols="12"
            sm="12"
        >
          <v-sheet
              min-height="70vh"
              rounded="lg"
          >

            <router-view></router-view>
          </v-sheet>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import api from '../js/api.js';
import VueRouter from 'vue-router';

export default {
  name: 'App',
  data: {
    return: {
      logType: true
    }
  },
  computed: {
    ...mapGetters('loginStore', {
          isLogin: 'isLogin'
        }
    ),
  },
  components: {},
  created: function () {
    klaytn.on('accountsChanged', function(accounts) {
      window.location.reload();
    })
    this.blank = window.location.pathname.includes("redirect");
    if (this.isLogin && !window.klaytn.isConnected()) {
      this.logoutEx()
    }
  },
  methods: {
    ...mapActions('loginStore', ["loginEx"]),
    ...mapActions('loginStore', ["logoutEx"]),
    login: function () {
      let saveData = {
        walletAddress: "",
        isMember: false
      };
      const router = new VueRouter({mode: 'history'})


      //Kaikas 지갑 설치 되어있음

      if (window.klaytn !== 'undefined') {
        if (window.klaytn.isKaikas) {
          window.klaytn.enable().then((result) => {
            if (result === undefined) return;

            saveData.walletAddress = result[0];
            api.getNickname(saveData.walletAddress).then(result => {
              saveData.isMember = result.data['nickname'] !== "";

              if (saveData.isMember) {

                this.loginEx(saveData);
                if (this.$route.path !== '/home') this.$router.push('/home')

              } else {
                alert("회원가입이 필요합니다.");
                this.$router.push('/register');
              }

            }).catch(() => {
              alert("회원가입이 필요합니다.");
              this.$router.push('/register');
            });
          })
        }
      }
    },
    logout: function () {
      this.logoutEx();
      if (this.$route.path !== '/home') this.$router.push('/home')
    }
  }
}
</script>

<style scoped>
.routerlink {
  color: #757575;
}

a {
  text-decoration: none;
  font-size: larger;
}

#bt {
  color: #757575;
}

.router-link-active {
  color: white;

}
</style>