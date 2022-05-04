<template>
<v-app>
    <div id="app">
          <v-col id="title">우리 사이트를 200% 이용하는 방법</v-col>
          <v-row align="center" justify="center" v-bind:style="{ height: deviceHeight * 0.6 + 'px',}">
            <v-col cols="12" sm="10" ref="div1">
              <v-carousel
                progress
                height = '700'
                hide-delimiter-background
                
                reverse-transition="fade-transition"
                transition="fade-transition"
              >
                <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                ></v-carousel-item>
              </v-carousel>
          </v-col>
          </v-row>
    </div>
    <br>
          <hr>
        <Footer />
</v-app>
</template>
<script>
import Footer from '../components/Footer.vue'
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://c8.alamy.com/comp/2F5730F/step-1-handwritten-on-a-white-background-2F5730F.jpg',
          },
          {
            src: 'https://c8.alamy.com/comp/2F5730J/step-2-handwritten-on-a-white-background-2F5730J.jpg',
          },
          {
            src: 'https://c8.alamy.com/comp/2F5730M/step-3-handwritten-on-a-white-background-2F5730M.jpg',
          },
          {
            src: 'https://thumbs.dreamstime.com/z/step-handwritten-white-background-215885115.jpg',
          },
        ],
      }
    },
      components : {
    Footer,
  }
  }
</script>
<style scoped>
#app{
    overflow: hidden;
    margin:0;
    background-image: url("../assets/bgg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
  #title{
    color:white;
    font-size: 60px;
    font-family:Georgia, 'Times New Roman', Times, serif;
    text-align: center;
  }
</style>