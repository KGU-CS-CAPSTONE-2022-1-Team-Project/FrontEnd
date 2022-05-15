<template>
  <div class="container-fluid">
    <!-- Header -->
    <div class="row mb-5">
    <lefthead class="lefthead col-sm ps-4"/>
    <righthead class="righthead col-sm d-none d-md-block "/>
    </div>
    <Footer />
  </div>
</template>
<script>
import righthead from '../layouts/righthead.vue'
import lefthead from '../layouts/lefthead.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Home',
  components:{
    righthead,
    lefthead,
    Footer
  }, 
}
</script>
<style scoped>
.lefthead{
  padding-top: 15%;
}
@media screen and (max-width: 850px) {
 .lefthead{
  padding-top: 15%;
}
}
</style>