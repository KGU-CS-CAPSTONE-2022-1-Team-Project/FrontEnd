<template>

</template>

<script>
import axios from "axios";

export default {
  name: "Redirect.vue",
  beforeMount() {
    window.document.body.innerHTML = "";

    let accessToken = this.$route.query.access_token;
    let config = {
      method: 'put',
      url: '/owner/youtuber',
      baseURL: 'https://capston-blockapp.greenflamingo.dev:10321',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      data: {
        "address": window.klaytn.selectedAddress
      }
    };
    let self = this
    axios(config)
        .then(function (response) {
          console.log(response)
          if (response.data.message === "success") {
            setTimeout(() => window.close(), 0)
            self.success()

          } else {
            setTimeout(() => window.close(), 0)
            opener.alert("회원가입에 실패하였습니다.");
          }
        }).catch(function (error) {

      setTimeout(() => window.close(), 0)
      opener.alert("회원가입에 실패하였습니다.");
    })
  },
  mounted: function () {
    window.document.body.innerHTML = "";
  },
  methods: {
    success: function () {
      opener.alert("회원가입에 성공하였습니다.")
      opener.location.href = "/home";
    }
  }
}
</script>

<style scoped>

</style>