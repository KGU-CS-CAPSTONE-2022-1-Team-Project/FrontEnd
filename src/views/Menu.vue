<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="pt-6"
      color="black lighten-3"
      mini-variant
      permanent
      expand-on-hover
    >
    <div>
      <v-btn
        href="https://localhost:8080/login"
        elevation="1"
        outlined
        text value="Login"
        color="white"
        class="d-block text-center mx-auto mb-6"
      >Login 
      </v-btn>
    </div>    
    <div>
      <v-btn :style="{color:'white'}"      
        href="https://google.com"
        elevation="1"
        outlined
        text value="이상현"
        class="d-block text-center mx-auto mb-6"
      >이상현
      </v-btn>
    </div>
    <div>
      <v-btn :style="{color:'white'}"      
        href="https://google.com"
        elevation="1"
        outlined
        v-text="2"
        class="d-block text-center mx-auto mb-6"
      >
      </v-btn>
    </div>
    <div>
      <v-btn
        href="https://google.com"
        elevation="1"
        outlined
        v-text="3"
        color="white"
        size="n === 1 ? 36 : 20"
        class="d-block text-center mx-auto mb-6"
      >
      </v-btn>
    </div>
    <div>
      <v-btn
        href="https://google.com"
        elevation="1"
        outlined
        v-text="4"
        color="white"
        size="n === 1 ? 36 : 20"
        class="d-block text-center mx-auto mb-6"
      >
      </v-btn>
    </div>
    <div>
      <v-btn
        href="https://google.com"
        elevation="1"
        outlined
        v-text="6"
        color="white"
        size="n === 1 ? 36 : 20"
        class="d-block text-center mx-auto mb-6"
      >
      </v-btn>                         
    </div>
    </v-navigation-drawer>
  </v-app>
</template>
<script>
export default {
  name: 'App',

  data: () => ({
      
  }),
};
</script>
<style scoped>
div {
  flex: 1;
  padding:10px;
}

</style>
