<template>
  <div>
    <div class="row py-4">
      <div class="col-lg-6 mx-auto">
        <!-- Upload image input-->
        <div class="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
          <v-file-input label="File Input" v-model="image" @change="getFile($event)"></v-file-input>
        </div>

        <!-- Uploaded image area-->
        <p class="font-italic text-white text-center">이미지 미리보기</p>
        <div class="image-area mt-4" v-if="url!== ''">
          <v-img :src="url"></v-img>
        </div>
        <div style="margin-top: 2%" class="inputBox">
          <label>Name</label>
          <v-text-field v-model="name"></v-text-field>
        </div>
        <div class="inputBox">
          <label>Description</label>
          <v-text-field v-model="description"></v-text-field>
        </div>
        <label>Original Author</label>
        <v-select
            style="margin-top: 1%"
            v-model="originAuthor"
            :items="celebrities"
            label="스트리머"
            solo
        ></v-select>
        <v-btn color="primary" @click="submitForm($event)">등록</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import Connection from "../js/Connection"
import api from "../js/api.js";

export default {
  data: () => ({
    url: '',
    name: '',
    description: '',
    image: '',
    celebrities: [],
    originAuthor: ''
  }),
  created() {
    Connection.init();
    Connection.getCelebrities().then(res => {
      this.celebrities = res;
      console.log(this.celebrities);
    });
  },
  methods: {
    getFile(event) {
      this.image = event
      try {
        this.url = URL.createObjectURL(this.image)
      } catch (e) {
        this.url = "";
      }
      console.log(this.image);
    },
    submitForm(event) {
      event.preventDefault();
      let formData = new FormData();
      formData.append('name', this.name);
      formData.append('description', this.description);
      formData.append('image', this.image);

      api.uploadNFT(formData, this.originAuthor);
      // alert("NFT등록이 완료되었습니다.");
      // document.location.href="/mypage";
    },
  }
}
</script>

<style>
#upload {
  opacity: 0;
}

#upload-label {
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
}

.image-area {
  border: 2px dashed rgba(255, 255, 255, 0.7);
  padding: 1rem;
  position: relative;
}

.image-area::before {
  content: 'Uploaded image result';
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.8rem;
  z-index: 1;
}

.image-area img {
  z-index: 2;
  position: relative;
}
</style>