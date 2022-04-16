<template>
  <v-app>
    <v-navigation-drawer id="navigaition" 
      v-model="drawer"
      app
      class="pt-6"
      color="black lighten-3"
      mini-variant
      permanent
      expand-on-hover
    >
    <div id ="ALL">
    <div id ="logo">
      Logo
    </div>
    <div id ="menubar">
      <div id="lg">
        <router-link to="/login">Login</router-link>    
      </div>
        <v-list
            nav
            dense
        >
        <v-list-item link>
            <v-list-item-icon>
                <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My Files</v-list-item-title>
        </v-list-item>
        <v-list-item link>
            <v-list-item-icon>
                <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Shared with me</v-list-item-title>
        </v-list-item>
        <v-list-item link>
            <v-list-item-icon>
                <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Starred</v-list-item-title>
        </v-list-item>
        </v-list>
    </div>
    </div>
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->Hello World
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        Content
        <!-- If using vue-router -->
        <router-link to="/ss">SS</router-link> |
        <router-link to="/">Home</router-link> | 
        <router-link to="/grid">Grid</router-link>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>
<script>

export default {
  name: 'App',

  data: () => ({
  }),
  components : {
  }
};
</script>
<style scoped>
  #ALL{
    justify-content: space-between;
  }
  #menubar{
    justify-content: space-between;
  }
  #logo{
    color:red;
    text-align: center;
    justify-content: left;
  }
  #lg{
    text-align: center;
    justify-content: space-between;
    border-style: solid;
    margin: 30px 1px 30px 1px;
    padding: 40px;
    border-color: white; 
    border-radius:5px 5px 5px 5px;
    border-width: 1px 1px 1px 1px;
  }
  #mn{
    text-align: center;
    justify-content: space-between;
    border-style: solid;
    margin: 30px 1px 30px 1px;
    padding: 10px;
    border-color: white; 
    border-radius:5px 5px 5px 5px;
    border-width: 1px 1px 1px 1px;
  }
  #bt{
    display: flex;
    color: white;
    justify-content: center;
    text-align: center;
    padding :5px;
  }
  a{ 
    text-decoration: none;
    font-weight: bolder;
    font-size:larger;
  }
  .router-link-active{
      color: #eeeeee;
  }
</style>
