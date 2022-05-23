<template>

</template>

<script>
import axios from "axios";

export default {
  name: "Redirect.vue",
  mounted() {
    let accessToken = this.$route.query.access_token;
    let config = {
      method: 'put',
      url: 'https://capston-blockapp.greenflamingo.dev:10321/owner/youtuber',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      data: {
        "address": window.klaytn.selectedAddress
      }
    };
    axios(config)
        .then(function (response) {
          if (response.data.message === "success") {
            setTimeout(() => {
              opener.alert("회원가입이 완료되었습니다.");
              opener.location.href = "/home";
            }, 4)
            window.close();
          }
        })
        .catch(function (error) {
          setTimeout(() => {
            opener.alert("회원가입에 실패하였습니다.");
          }, 4)
          window.close();
        });
  }
}
</script>

<style scoped>

</style>