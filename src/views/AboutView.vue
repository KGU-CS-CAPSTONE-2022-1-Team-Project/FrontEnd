<template>
  <v-app>
    <div id="app" flat>
      <v-row align="center" justify="center" v-bind:style="{ height: deviceHeight * 0.6 + 'px',}">
        <v-col style="margin-top: 1%" cols="12" sm="10" ref="div1">
          <v-btn v-on:click="wallet" elevation="2">지갑</v-btn>
          <v-btn style="margin-left: 5px" v-on:click="register" elevation="2">회원가입</v-btn>
          <v-carousel
              style="margin-top: 1%"
              progress
              hide-delimiter-background
              height='auto'
              reverse-transition="fade-transition"
              transition="fade-transition"
          >
            <v-carousel-item
                v-for="(item,i) in a"
                :key="i"
                :src="item"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </div>
    <br>
    <hr>
    <Footer/>
  </v-app>
</template>
<script>
import Footer from '../components/Footer.vue'

export default {
  data() {
    return {
      a: [],
      items: [{src: 'https://kr.object.ncloudstorage.com/help-image/installkaikas.png'},
        {src: 'https://kr.object.ncloudstorage.com/help-image/agreekaikas.png'},
        {src: 'https://kr.object.ncloudstorage.com/help-image/registerKaikas.png'}],
      items2: [{src: 'https://kr.object.ncloudstorage.com/help-image/loginArtBlock.png'},
        {src: 'https://kr.object.ncloudstorage.com/help-image/userRegisterArtBlock.png'},
        {src: 'https://kr.object.ncloudstorage.com/help-image/orignalRegisterArtBlock.png'}],
      flag: false,
    }
  },
  methods: {
    wallet() {
      this.a = this.items
      this.flag = true
    },
    register() {
      this.a = this.items2
      this.flag = false
    },
    upload() {
      this.a = this.items3
      this.flag = false
    }
  }
  ,
  components: {
    Footer,
  }
}
</script>
<style scoped>
#app {
  overflow: hidden;
  margin: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

#title {
  color: white;
  font-size: 60px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  text-align: center;
}
</style>