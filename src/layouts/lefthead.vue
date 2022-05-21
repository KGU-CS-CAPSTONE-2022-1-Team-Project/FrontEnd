<template>
    <div>
      <h1 class="text-left text-capitalize fs-1 fw-bold">NFT Creator </h1>
      <h1 class="text-left text-capitalize fs-1 fw-bold">to Make Your NFT</h1>
      <h1 class="text-left text-capitalize fs-1 fw-bold">Art Collection</h1>
      <br><br>
      <h2 class="text-lefter text-capitalize fs-1 fw-bold">Art Block relays NFT generation between original creators and secondary creators through Smart Contract.</h2>
      <br><br>
      <div>
        <img src="../assets/banner.png">
      </div>
        <div class="btclass">
          <router-link id="bt" class="routerlink"  to="/grid">Get Started</router-link>
          <router-link id="bt" class="routerlink"  to="/about">Help</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name:'lefthead'
    }
</script>

<style scoped>
div {
  padding: 8px;
  position: relative;
}

p:first-child {
  font-size: x-large;
  color: #000000;
}

p {
  text-align: justify;
  letter-spacing: 3px;
  line-height: 1.6;
}
.Stars{
  background-color: #334155;
}
  .routerlink{
    color:rgb(255, 255, 255);
  }
    #bt{
    background-color:rgb(42, 42, 42);
    justify-content: space-between;
    border-style: solid;
    margin: 30px 10px 30px 10px;
    padding: 20px 60px 20px 60px;
    border-color: black; 
    border-radius:5px 5px 5px 5px;
    border-width: 1px 1px 1px 1px;
    font-size: 15px;
  } 
    a{
    text-decoration: none;
  }
  .btclass{
    font-family:Arial, Helvetica, sans-serif;
    text-align: center;
  }
</style>