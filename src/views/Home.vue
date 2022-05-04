<template>
   <v-app>
    <div id="app"><!--
        <button @click="goto('div1')">Div 1</button>
        <button @click="goto('div2')">Div 2</button>
        <button @click="goto('div3')">Div 3</button>
        <br />-->
        <v-row align="center" justify="center" v-bind:style="{ height: deviceHeight * 0.6 + 'px',}">
          <v-col cols="12" sm="10" ref="div1">
            123
            <v-carousel
               hide-delimiters
               height = '800'
               cycle :interval='interval'
               hide-delimiter-background
               show-arrows-on-hover
            >
               <v-carousel-item
                  v-for="(item,i) in items"
                  :key="i"
                  :src="item.src" contain max-height="800"
               ></v-carousel-item>
            </v-carousel>
         </v-col>
        </v-row>
        <div class="doc" ref="div2">
          <h1>우리 사이트의 장점은</h1>
          <h2>어쩌구</h2>
          <h3>저쩌구</h3>
        </div>
        <!--
        <div class="div" ref="div3">
          
          <v-row class="vrow">
          <a id="bt">
            <v-icon dark>mdi-information-outline</v-icon> 
            <router-link class="routerlink" to="/about"> HELP </router-link>
          </a>
          <a id="bt">
            <v-icon dark>mdi-image-search-outline</v-icon>
            <router-link class="routerlink" to="/grid">More...</router-link>
          </a>
          </v-row>
          <v-row class="justify-end">
            <a id="icon" href="https://www.kyonggi.ac.kr"><v-icon large dark>mdi-school-outline</v-icon></a>
            <a id="icon" href="https://www.facebook.com"><v-icon large dark>mdi-facebook</v-icon></a>
            <a id="icon" href="https://www.instagram.com"><v-icon large dark> mdi-instagram</v-icon></a>
            <a id="icon" href="https://www.twitter.com"><v-icon large dark>mdi-twitter</v-icon></a>
          </v-row>
        </div> -->
        <router-view></router-view>
      </div>
      <hr>
        <Footer />
  </v-app>
</template>
<script>
import Footer from '../components/Footer.vue'
  export default {
    
    data () {
      return {
        interval: 3000,
        items: [
          {
            src: require('../assets/darksoul1.jpg'),
          },
          {
            src: 'https://mblogthumb-phinf.pstatic.net/MjAxNzA1MTVfMjc0/MDAxNDk0Nzc4NjU1MDM5.rbVrEz_Hl1JrUx_OQZuqK5KBX52LhVKO5QB9g2oCBaog._eNCDbLhCannWgxkL60YNwAZknFXX1G0sJFKnkttawIg.JPEG.sirosaro/261A4E3858AB35D523A9AF.jpg?type=w2',
          },
          {
            src: require('../assets/darksoul2.jpg'),
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
    methods: {
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top);
    }
    },
  components : {
    Footer,
  }
  
  
  }
</script>
<style scoped>
  .routerlink{
    color:white;
  }

#app{
    overflow: hidden;
    margin:0;
    background-image: url("../assets/bgg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.doc {
  text-align: center;
  padding: 20px;
  color:white;
}
  .router-link-active{
      color: #eeeeee;
  }
</style>