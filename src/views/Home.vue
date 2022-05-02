<template>
   <v-app>
    <div id="app">
        <button @click="goto('div1')">Div 1</button>
        <button @click="goto('div2')">Div 2</button>
        <button @click="goto('div3')">Div 3</button>
        <br />

          <v-col id="cl" cols="12" sm="10" ref="div1">
            <v-carousel
               hide-delimiters
               height = '700'
               cycle :interval='interval'
               hide-delimiter-background
               show-arrows-on-hover
            >
               <v-carousel-item
                  v-for="(item,i) in items"
                  :key="i"
                  :src="item.src"
               ></v-carousel-item>
            </v-carousel>
         </v-col>
        <div class="div" ref="div2">
          <h1>우리 사이트의 장점은</h1>
          <h2>어쩌구</h2>
          <h3>저쩌구</h3>
        </div>
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
  
          <router-view></router-view>
        </div>
      </div>
    
  </v-app>
</template>
<script>
  export default {
    
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
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
  }
  
  }
</script>
<style scoped>
  .vrow{
    justify-content:center;
  }
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
.div {
  text-align: center;
  padding: 20px;
  color:white;
}
  #cl{
    margin-left: 120px;
  }
  #bt{
    background-color:rgb(20,20,20);
    text-align: center;
    justify-content: space-between;
    border-style: solid;
    margin: 30px 50px 30px 50px;
    padding: 40px;
    border-color: white; 
    border-radius:5px 5px 5px 5px;
    border-width: 1px 1px 1px 1px;
    font-size: 20px;
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