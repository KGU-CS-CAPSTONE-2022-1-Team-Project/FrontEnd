<template>
  <v-app>
    <v-container>
      <v-tabs>
        <v-tab>보유중인 NFT</v-tab>
        <v-tab>대기중인 요청</v-tab>
        <v-tab>전체 NFT 요청</v-tab>
        <v-tab-item>
          <OwnedNFTs/>
        </v-tab-item>
        <v-tab-item>
          <PendingRequests v-bind:isCelebrity="isCelebrity"/>
        </v-tab-item>
        <v-tab-item>
          <History v-bind:isCelebrity="isCelebrity"/>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </v-app>
</template>

<script>
import Connection from "../js/Connection";
import History from "../components/History.vue";
import PendingRequests from "../components/PendingRequests.vue";
import OwnedNFTs from "../components/OwnedNFTs.vue";

export default {
  setup() {
  },
  components: {
    History,
    PendingRequests,
    OwnedNFTs
  },
  data() {
    return {
      isCelebrity: false,
    };
  },
  beforeCreate: function () {
    Connection.init().then(
        Connection.isCelebrity(window.klaytn.selectedAddress).then(
            (result) => (this.isCelebrity = result)
        )
    );
  },
};
</script>
