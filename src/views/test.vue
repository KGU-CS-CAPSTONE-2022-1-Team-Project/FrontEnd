<template>
  <v-app>
      aaa
      {{adata}}
  </v-app>
</template>

<script>

export default {
  data(){
    return {
      adata: "",
    }
  },
  methods: {
  },
  created() {
	var url = '/common/nickname/';
	
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open( "POST", url, false );
    console.log('aaa');
    var inputdata = {'address': '0x3323F1c38De5E01131a8CC2649839EDe7E277fc0', 'nickname': 'narme'};
    xmlHttpRequest.setRequestHeader("Content-Type", "application/json");

    console.log(xmlHttpRequest);
    xmlHttpRequest.send(JSON.stringify(inputdata));

    var data = xmlHttpRequest;
    console.log(data);
  },

}
</script>