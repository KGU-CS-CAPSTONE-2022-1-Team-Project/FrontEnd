<template>
  <v-app id="inspire">
    <div :style="{'background-image':'url(https://vuejs.org/images/logo.png)'}">
  </div>
        <Header /> 
  </v-app>
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
    Footer,
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
  #box2-2{
        width: 300px;
        height: 150px;
        background-image: url("assets/logo.png");
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
