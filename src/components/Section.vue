<template>
  <div >
    <div class="row">
      <!-- First Card -->
      <div class="col-sm-8">
        <div class="card rounded-3 p-0 border-0 Computercard">
          <img src="../assets/NFT.jpg"  >
        </div>
      </div>
      <!-- Tools -->
      <div  style="margin-top: 10%" class="col-sm-4">  
          <div class="row  text-center mt-5 me-sm-5">
            <!-- Bootstrap -->
            <div class="col-sm ">   
              <v-avatar size="36px">
                <img src="../assets/gimp-icon.png">
              </v-avatar> 
              <div class="pt-3" >
                  <h5 class="fw-bold">Global Network</h5>
                  <p class="fs-6 text-secondary">With Appy Klaytn NFT generator, you can easily create and display your NFTs in the largest marketplace, and get more users for your NFT collection.</p>
              </div> 
            </div>
            <!-- Vue Js -->
            <div class="col-sm ">
                    <v-avatar size="36px">
                      <img src="../assets/gimp-icon.png">
                    </v-avatar> 
                <div class="pt-3" > 
                    <h5 class="fw-bold">Easily Scalable</h5>
                    <p class="fs-6 text-secondary">Whether you have 10, 100, 1000 or 10000 NFTs, our NFT generator can easily handle your NFT collection without you having to worry about its security.</p>
                </div>
            </div>
          </div> 
          <!-- JavaScript -->
            <div class="row  text-center mt-5 me-sm-5">
                <div class="col-sm ">
                  <div class="col-sm fs-3 d-inline p-2 pb shadow bg-light rounded-circle">
                            <v-avatar size="36px">
                              <img src="../assets/gimp-icon.png">
                            </v-avatar> 
                        </div> 
                        <div class="pt-3" >
                            <h5 class="fw-bold">Low Gas Fee</h5>
                            <p class="fs-6 text-secondary">Because it uses a Klaytn-based network, it supports significantly lower gas fee.</p>
                        </div> 
                </div>
                <!-- css -->
                <div class="col-sm ">
                  <div class="col-sm fs-3 d-inline p-2 pb shadow bg-light rounded-circle">
                        <v-avatar size="36px">
                              <img src="../assets/gimp-icon.png">
                        </v-avatar> 
                </div>
                    <div class="pt-3" > 
                        <h5 class="fw-bold">Copyright Proof</h5>
                        <p class="fs-6 text-secondary">Supports the proof of copyright for secondary creations, which have been vague so far, through NFT.</p>
                    </div>
                </div>
          </div>
      </div>
  </div>
  </div>
  
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Festive&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Festive&family=Varela+Round&display=swap');
	
img {
  margin-left: 10%;
  width: 150%;
  height: 100%;
}
.img2{
  margin-top: 20%;
  width: 150%;
  height: 100%;
}
.up{
  cursor: pointer;
}
.up img:hover{
  opacity: 0.4;
}
.up:hover{
  padding-top: 0px;
}

.Computercard{
        width: 40%;
        margin-left:10%;
        margin-top: 20%;
        margin-bottom: 20%;
               
}
.card-p {
  font-family: 'Festive', cursive;
font-family: 'Varela Round', sans-serif;
text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
.text-pin{
  color: #334155;
}
.text-other{
    color: #7952B3;
}
.bg-other{
    background-color: #7952B3;
}
.Computercardbody{
    background-color: #5f79ec;
}
.bg-pink{
  background-color:#a1366a ;
}
.bg-pink>h3{
  font-family: 'Festive', cursive;
  text-shadow: 2px 2px 4px #000000;
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