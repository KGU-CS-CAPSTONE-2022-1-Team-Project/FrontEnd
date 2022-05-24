<template>
  <div>
    <div class="row py-4">
      <div class="col-lg-6 mx-auto">
        <validation-observer
            ref="observer"
            v-slot="{ invalid }"
        >
          <form>
            <!-- Upload image input-->
            <div class="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
              <validation-provider
                  v-slot="{ errors }"
                  name="Image"
                  rules="required"
              >
                <v-file-input label="File Input" v-model="image" @change="getFile($event)"
                              :error-messages="errors"></v-file-input>
              </validation-provider>
            </div>
            <!-- Uploaded image area-->
            <p class="font-italic text-white text-center">이미지 미리보기</p>
            <div class="image-area mt-4" v-if="url!== ''">
              <v-img :src="url"></v-img>
            </div>
            <div style="margin-top: 2%" class="inputBox">
              <validation-provider
                  v-slot="{ errors }"
                  name="Name"
                  rules="required"
              >
                <v-text-field v-model="name"
                              :error-messages="errors"
                              label="Name"
                ></v-text-field>
              </validation-provider>

            </div>
            <div class="inputBox">
              <validation-provider
                  v-slot="{ errors }"
                  name="Description"
                  rules="required"
              >
                <v-text-field v-model="description"
                              label="Description"
                              :error-messages="errors"
                ></v-text-field>
              </validation-provider>
            </div>
            <validation-provider
                v-slot="{ errors }"
                name="Description"
                rules="required"
            >
              <v-select
                  style="margin-top: 1%"
                  v-model="originAuthor"
                  :items="celebrities"
                  label="Original Author"
                  solo
                  :error-messages="errors"
              ></v-select>
            </validation-provider>
            <v-btn color="primary" :disabled="invalid"
                   @click="submitForm($event)">등록
            </v-btn>
          </form>
        </validation-observer>
      </div>
    </div>
    <v-dialog
        v-model="dialog"
        persistent
        max-width="700"
    >
      <v-card>
        <v-card-title class="text-h5 justify-center">
          요청 성공
        </v-card-title>
        <v-card-text class="justify-center">
          TX HASH : {{ txHash }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
          >
            닫기
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
        v-model="failDialog"
        persistent
        max-width="300"
    >
      <v-card>
        <v-card-title class="text-h5 justify-center">
          요청 실패
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="red darken-1"
              text
              @click="failDialog = false"
          >
            닫기
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Connection from "../js/Connection"
import api from "../js/api.js";
import {required, digits, email, max, regex} from 'vee-validate/dist/rules'
import {extend, ValidationObserver, ValidationProvider, setInteractionMode} from 'vee-validate'

setInteractionMode('eager')

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    url: '',
    name: '',
    description: '',
    image: '',
    celebrities: [],
    originAuthor: '',
    dialog: false,
    txHash: '',
    failDialog: false
  }),
  created() {
    Connection.init();
    Connection.getCelebrities().then(res => {
      Promise.all(res.map(address => {
        return new Promise((resolve, reject) => {
          api.getNickname(address).then(response => {
            resolve(`${response.data.nickname} (${address})`)
          }).catch(() => {
            resolve(`${address} `)
          })
        })
      })).then(celebrities => {
        this.celebrities = celebrities
        console.log(celebrities)
      });

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
      console.log(this.image)
      formData.append('name', this.name);
      formData.append('description', this.description);
      formData.append('image', this.image);

      this.originAuthor = this.originAuthor.substring(this.originAuthor.length - 43, this.originAuthor.length - 1)
      console.log(this.originAuthor)

      api.uploadNFT(formData, this.originAuthor).then(response => {
        Connection.requestNFT("https://capston-blockapp.greenflamingo.dev:10321" + "/partner/nft/" + response.data.id, this.originAuthor).then(receipt => {
          this.txHash = receipt.transactionHash
          this.dialog = true
        }).catch(err => {
          this.failDialog = true;
        })
      });
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