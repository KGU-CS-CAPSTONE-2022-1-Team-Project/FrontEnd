<template>
  <v-app id="inspire">
    <Header/>
  </v-app>
</template>
<script>
import Header from './components/Header.vue'

export default {
  name: 'App',

  data: () => ({
    blank: false
  }),
  components: {
    Header,
  },
};
</script>
<style scoped>
#hd {
  justify-content: flex-end;
}

#app {
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
