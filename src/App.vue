<template>
  <div id="app">
  <v-app dark>
    <v-container fluid >
        <Header />
        <v-main>
            <!-- <Body /> -->
            <router-view></router-view>
        </v-main>        
      <Footer />
    </v-container> 
  </v-app>
</div>
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',

  data: () => ({
  }),
  components : {
    Header,
    Footer
  }
};
</script>
<style scoped>
  #hd{
    justify-content: flex-end;
  }
  #app{
    background: white;
  }
  /*
  a{ 
    text-decoration: none;
    font-weight: bolder;
    font-size:larger;
  }
  .router-link-active{
      color: #eeeeee;
  }*/
</style>
