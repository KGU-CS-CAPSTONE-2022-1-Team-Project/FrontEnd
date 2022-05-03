<template>
<v-app>
    <div id="app">
          <v-col id="title">우리 사이트를 200% 이용하는 방법</v-col>
          <v-col id="cl" cols="12" sm="10" ref="div1">
            <v-carousel
              progress
              height = '700'
              hide-delimiter-background
              show-arrows-on-hover
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
  #cl{
    margin-left: 120px;
  }
  #title{
    color:white;
    font-size: 60px;
    font-family:Georgia, 'Times New Roman', Times, serif;
    text-align: center;
  }
</style>