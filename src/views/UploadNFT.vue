<template>
  <form>
    <div class="inputBox">
      <v-file-input label="File Input" @change="getFile($event)"></v-file-input>
    </div>
    <div class="inputBox">
      <v-text-field v-model="name"></v-text-field>
    </div>
    <div class="inputBox">
      <v-text-field v-model="description"></v-text-field>
    </div>
    <button @click="submitForm($event)">버튼</button>
  </form>
</template>

<script>
import axios from 'axios'
import api from "../js/api.js";

export default {
  data: () => ({
    name: '',
    description: '',
    image: ''
  }),
  methods: {
    getFile(event) {
      this.image = event
      console.log(this.image);
    },
    submitForm(event) {
      event.preventDefault();
      let formData = new FormData();
      formData.append('name', this.name);
      formData.append('description', this.description);
      formData.append('image', this.image);
      for (var key of formData.keys()) {
        console.log(key);
      }
      for (var value of formData.values()) {
        console.log(value);
      }
      api.uploadNFT(formData);

    }
  }
}
</script>