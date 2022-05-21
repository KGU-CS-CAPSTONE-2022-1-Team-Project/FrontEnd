<template>
    <div>
        <p class="text-center text-capitalize fs-1 fw-bold">Art Block</p>
        <p class="text-secondary">This text is styled with some of the text formatting properties. The heading uses the text-align, text-transform, and color properties.
        The paragraph is indented, aligned, and the space between characters is specified. The underline is removed from this colored.</p>
        <!-- <a href="https://github.com/mohammedmoutawakkil/MKTemplate" class="btn text-uppercase text-light fw-bold px-sm-4 py-sm-3 Stars">Github Star</a>-->
        <br><br>
        <div class="btclass">
          <a id="bt" ><router-link class="routerlink" to="/grid">Get Started</router-link></a>
          <a id="bt" ><router-link class="routerlink" to="/about">HELP</router-link></a>
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
  color: #667EEA;
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