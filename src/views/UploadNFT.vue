<template>
    <form>
        <div class="inputBox">
          <v-file-input label="File Input" @change="getFile($event)"></v-file-input>
        </div>
        <div class="inputBox">
          <label for="address">name</label>
          <input type="text" name="name" id="name" required>
        </div>
        <div class="inputBox">
          <label for="address">description</label>
          <input type="text" name="description" id="description" required>
        </div>
        <button @click="submitForm($event)">버튼</button>
    </form>
</template>

<script>
import axios from 'axios'
import api from "../js/api.js";
 
export default {
  data: ()=>({
    name: '',
    description: '',
    image: ''
  }),
  methods: {
    getFile(event) {
        this.image = event.target.files[0];
        console.log(this.image);
    },
    submitForm(event) {
        event.preventDefault();
        let formData = new FormData();
        formData.append('name', this.name);
        formData.append('description', this.description);
        console.log(formData.description);
        formData.append('image', this.image);

        api.uploadNFT(formData);
    }
  }
}
</script>