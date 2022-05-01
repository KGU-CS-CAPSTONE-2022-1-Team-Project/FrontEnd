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
          <v-btn id="bt">
            <v-icon>mdi-information-outline</v-icon> Help
          </v-btn>
          <v-btn id="bt">
            <v-icon>mdi-image-search-outline</v-icon>
            <router-link to="/grid">More...</router-link>
          </v-btn>
          <v-row class="justify-end">
            <a id="ab" href="https://www.kyonggi.ac.kr"><v-icon large>mdi-school-outline</v-icon></a>
            <a id="ab" href="https://www.facebook.com"><v-icon large>mdi-facebook</v-icon></a>
            <a id="ab" href="https://www.instagram.com"><v-icon large> mdi-instagram</v-icon></a>
            <a id="ab" href="https://www.twitter.com"><v-icon large>mdi-twitter</v-icon></a>
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
.div {
  text-align: center;
  padding: 20px;
  border: 2px solid yellow;
}
  #cl{
    margin-left: 120px;
  }
  #bt{
    text-align: center;
    justify-content: space-between;
    border-style: solid;
    margin: 30px 1px 30px 1px;
    padding: 40px;
    border-color: white; 
    border-radius:5px 5px 5px 5px;
    border-width: 1px 1px 1px 1px;
    font-size: 20px;
  } 
  #ab{ 
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