<template>
    <v-flex>
      <div id="hd">
        <v-layout>
          <v-row>
            <v-col id="logo">
              로고||||||||||||||||||||||||||
            </v-col>
            <v-col cols="auto" id="menu" class="align-self-end">
                <router-link to="/home">Home</router-link> |
                <router-link to="/grid">Grid</router-link> | 
                <router-link to="/ss">SS</router-link> |
                <v-btn id="bt"      
                  href="https://google.com"
                  outlined
                  text value="이상현"
                  class="mx-auto"
                >이상현
                </v-btn>
            </v-col>
            <v-col cols="auto" id="login">
              <router-link to="/login">Login</router-link>
            </v-col>
          </v-row>
        </v-layout>
      </div>
        </v-flex>
</template>
<script>
export default {
  methods:{
    Research() {
    this.$route.push('/grid');
    },
  }
}
</script>

​
<style scoped>
#hd {
    /*position: sticky;
    
    border-bottom: 1px solid #ebebeb;
    padding: 300px;*/
    height: 100px;
    background :green;
    text-decoration-color: #ebebeb;
}
#logo{
  background: pink;
}
#menu{
  background: blue;
}
#login{
  background: orange;
}
  a{ 
    border-style:solid;
    text-decoration: none;
    font-weight: bolder;
    font-size:larger;
  }
  .router-link-active{
      color: red;
  }
</style>