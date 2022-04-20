<template>
  <div>
    <button v-on:click="login">LOGIN</button>
  </div>
</template>

<script>
//import Caver from "caver-js";
export default {
  methods: {
    login: function() {
    if (typeof window.klaytn !== 'undefined') {
      console.log("no");
    }
      //const provider = window['klaytn']
      console.log("yes");
      console.log(window.klaytn);
      const acc = window.klaytn.enable();
      console.log("acc", acc);
    
      
    }
  }
}
</script>
<!-- Login.vue component 는 현재 Header.vue에서 일괄적으로 한번에 처리중임. 굳이 분리 할 필요 없어보임.-->