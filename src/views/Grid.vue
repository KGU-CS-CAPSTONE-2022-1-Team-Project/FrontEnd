<template>
  <v-app>
    <SearchBar/>
    <v-container>
      <v-row id="vrow">
        <v-col id="CARD" v-for="(post, index) in posts" :key="index">
          <v-card style="height: 390px; width: 250px;">
            <div id="cd" style="height: 260px; width: 250px;">
              <router-link
                  :to="{ name: 'DetailView', params: { contractAddress: post.tokenContractAddress, tokenId: post.tokenId },}">
                <img id="IMG" v-bind:src="post.image" alt style="width:200px; height:205px; padding:1px">
              </router-link>
            </div>
            <div class="card-body">
              <div class="text-left">
                <v-row>
                  <v-col sm="9">
                    <div class="post_title">{{ post.name }}</div>
                    <div class="post_maker">
                      {{ "Created by " + displayUserName(post.creator) }}
                      <button @click="test(index)" v-clipboard:copy="post.creator">
                        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10px" height="10px"
                             viewBox="0 0 10 10" enable-background="new 0 0 10 10" xml:space="preserve">
                            <image
                                id="image0" width="10" height="10" x="0" y="0"
                                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                                  AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN
                                  RQfmBRAMMTPkpxUQAAAAb0lEQVQI13XKMQ4BURiF0fOQSZQyhVCpJKbWWIhaotEpbOtVlqAyhViF
                                  zFNYhMJPIXzVzclNmJh6V3QkY2eXD2aZvpm5vdpdUYwsXAdgq9bG9+D0wkorB65VPT/6gw/Hb0xg
                                  Z+MWsrRKMRvDWJ3yBCaIE5MFd0ewAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA1LTE2VDEyOjQ5
                                  OjUxKzAwOjAwl3mJygAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wNS0xNlQxMjo0OTo1MSswMDow
                                  MOYkMXYAAAAASUVORK5CYII="/>
                          </svg>
                      </button>
                    </div>
                  </v-col>
                </v-row>
                <hr>
                <v-row class="btn-mdi">
                  <v-col v-if="fill" sm="9" class="btn-heart">
                    <v-btn color="red" v-on:click="FillIn" icon>
                      <v-icon small>mdi-cards-heart-outline</v-icon>
                    </v-btn>
                    {{ count }}
                  </v-col>
                  <v-col v-else sm="9" class="btn-heart">
                    <v-btn color="red" v-on:click="FillOut" icon>
                      <v-icon small>mdi-cards-heart</v-icon>
                    </v-btn>
                    {{ count }}
                  </v-col>
                  <v-col sm="3" class="btn-dots">
                    <v-btn color="black" icon
                           :href="`https://testnets.opensea.io/assets/baobab/${post.tokenContractAddress}/${post.tokenId}`"
                           target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="auto" viewBox="0 0 90 90" fill="none">
                        <path
                            d="M90 45C90 69.8514 69.8514 90 45 90C20.1486 90 0 69.8514 0 45C0 20.1486 20.1486 0 45 0C69.8566 0 90 20.1486 90 45Z"
                            fill="#2081E2"/>
                        <path
                            d="M22.2011 46.512L22.3953 46.2069L34.1016 27.8939C34.2726 27.6257 34.6749 27.6535 34.8043 27.9447C36.76 32.3277 38.4475 37.7786 37.6569 41.1721C37.3194 42.5683 36.3948 44.4593 35.3545 46.2069C35.2204 46.4612 35.0725 46.7109 34.9153 46.9513C34.8413 47.0622 34.7165 47.127 34.5824 47.127H22.5432C22.2196 47.127 22.0301 46.7756 22.2011 46.512Z"
                            fill="white"/>
                        <path
                            d="M74.38 49.9149V52.8137C74.38 52.9801 74.2783 53.1281 74.1304 53.1928C73.2242 53.5812 70.1219 55.0052 68.832 56.799C65.5402 61.3807 63.0251 67.932 57.4031 67.932H33.949C25.6362 67.932 18.9 61.1727 18.9 52.8322V52.564C18.9 52.3421 19.0803 52.1618 19.3023 52.1618H32.377C32.6359 52.1618 32.8255 52.4022 32.8024 52.6565C32.7099 53.5072 32.8671 54.3764 33.2693 55.167C34.0461 56.7435 35.655 57.7283 37.3934 57.7283H43.866V52.675H37.4673C37.1391 52.675 36.9449 52.2959 37.1345 52.0277C37.2038 51.9214 37.2824 51.8104 37.3656 51.6856C37.9713 50.8257 38.8358 49.4895 39.6958 47.9684C40.2829 46.9421 40.8516 45.8463 41.3093 44.746C41.4018 44.5472 41.4758 44.3438 41.5497 44.1449C41.6746 43.7936 41.804 43.4653 41.8965 43.1371C41.9889 42.8597 42.0629 42.5684 42.1369 42.2956C42.3542 41.3617 42.4467 40.3723 42.4467 39.3459C42.4467 38.9437 42.4282 38.523 42.3912 38.1207C42.3727 37.6815 42.3172 37.2423 42.2617 36.8031C42.2247 36.4147 42.1554 36.031 42.0814 35.6288C41.9889 35.0416 41.8595 34.4591 41.7115 33.8719L41.6607 33.65C41.5497 33.2478 41.4573 32.864 41.3278 32.4618C40.9626 31.1996 40.5418 29.9698 40.098 28.8186C39.9362 28.3609 39.7512 27.9217 39.5663 27.4825C39.2935 26.8213 39.0161 26.2203 38.7619 25.6516C38.6324 25.3927 38.5214 25.1569 38.4105 24.9165C38.2857 24.6437 38.1562 24.371 38.0268 24.112C37.9343 23.9132 37.8279 23.7283 37.754 23.5434L36.9634 22.0824C36.8524 21.8836 37.0374 21.6478 37.2546 21.7079L42.2016 23.0487H42.2155C42.2247 23.0487 42.2294 23.0533 42.234 23.0533L42.8859 23.2336L43.6025 23.437L43.866 23.511V20.5706C43.866 19.1512 45.0034 18 46.4089 18C47.1116 18 47.7496 18.2866 48.2073 18.7536C48.665 19.2206 48.9517 19.8586 48.9517 20.5706V24.935L49.4787 25.0829C49.5204 25.0968 49.562 25.1153 49.599 25.143C49.7284 25.2401 49.9133 25.3835 50.1491 25.5591C50.3341 25.7071 50.5329 25.8874 50.7733 26.0723C51.2495 26.4561 51.8181 26.9508 52.4423 27.5194C52.6087 27.6628 52.7706 27.8107 52.9185 27.9587C53.723 28.7076 54.6245 29.5861 55.4845 30.557C55.7249 30.8297 55.9607 31.1071 56.2011 31.3984C56.4415 31.6943 56.6958 31.9856 56.9177 32.2769C57.209 32.6652 57.5233 33.0674 57.7961 33.4882C57.9256 33.687 58.0735 33.8904 58.1984 34.0892C58.5497 34.6209 58.8595 35.1711 59.1554 35.7212C59.2802 35.9755 59.4097 36.2529 59.5206 36.5257C59.8489 37.2608 60.1078 38.0098 60.2742 38.7588C60.3251 38.9206 60.3621 39.0963 60.3806 39.2535V39.2904C60.436 39.5124 60.4545 39.7482 60.473 39.9886C60.547 40.756 60.51 41.5235 60.3436 42.2956C60.2742 42.6239 60.1818 42.9336 60.0708 43.2619C59.9598 43.5763 59.8489 43.9045 59.7056 44.2143C59.4282 44.8569 59.0999 45.4996 58.7115 46.1006C58.5867 46.3225 58.4388 46.5583 58.2908 46.7802C58.129 47.016 57.9626 47.238 57.8146 47.4553C57.6112 47.7327 57.3939 48.0239 57.172 48.2828C56.9732 48.5556 56.7697 48.8284 56.5478 49.0688C56.2381 49.434 55.9422 49.7808 55.6324 50.1137C55.4475 50.331 55.2487 50.5529 55.0452 50.7517C54.8464 50.9736 54.643 51.1724 54.4581 51.3573C54.1483 51.6671 53.8894 51.9075 53.6721 52.1063L53.1635 52.5733C53.0896 52.638 52.9925 52.675 52.8908 52.675H48.9517V57.7283H53.9079C55.0175 57.7283 56.0716 57.3353 56.9223 56.6141C57.2136 56.3598 58.485 55.2594 59.9876 53.5997C60.0384 53.5442 60.1032 53.5026 60.1771 53.4841L73.8668 49.5265C74.1211 49.4525 74.38 49.6467 74.38 49.9149Z"
                            fill="white"/>
                      </svg>
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <mugen-scroll :handler="fetchData" :should-handle="!loading">
    </mugen-scroll>
  </v-app>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
import MugenScroll from 'vue-mugen-scroll'
import nftData from '../js/nftData'
import EventBus from '../js/EventBus'
import Connection from '../js/Connection'
import axios from 'axios'

export default {
  data() {
    // do not run handler when it's loading
    return {
      receivedClickCount: 0,
      posts: [],
      count: 0,
      flag: 100,
      keyword: '',
      loading: true,
      fill: true,
      loadedPosts: 0,
      NFTData: [],
      allPosts: [],
      nicknames: {}
    }
  },
  beforeCreate() {
    Connection.init();
  },
  created() {
    this.getPosts();
    EventBus.$on('use-eventbus', (clickedCount) => {
      this.receivedClickCount = clickedCount;
      console.log("이벤트 잘 받았음" + clickedCount);
    });
    EventBus.$on('event-flag', (flag) => {
      this.flag = flag;
      console.log(flag);
    });
    EventBus.$on('event-keyword', (keyword) => {
      this.keyword = keyword;
      this.searchPosts();
    });
  },
  methods: {
    FillIn() {
      console.log("FillIn@@@@@@@@@@@@22");
      this.fill = false;
      this.count++;
    },
    FillOut() {
      this.fill = true;
      this.count--;
    },
    fetchData() {
      this.loading = true;
      console.log(this.allPosts)
      let temp = this.allPosts.slice(this.loadedPosts, this.loadedPosts + 20)
      this.posts = this.posts.concat(temp)
      this.loadedPosts += 20;
      this.loading = false;
    },
    getPosts() {
      Connection.getAllNFTs().then((NFTs) => {
            NFTs = [].concat(...NFTs);
            NFTs.sort((a, b) => {
              return b.time - a.time
            })
            Promise.all(NFTs.map((NFT, index) => {
                  return new Promise(function (resolve, reject) {
                    axios.get(NFT.tokenURI).then((result) => {
                      resolve(Object.assign(result.data, NFT));
                    }).catch((err) => {
                      console.log(err);
                      reject();
                    });
                  })
                })
            ).then((NFTs) => {
                  this.NFTData = NFTs;
                  this.allPosts = NFTs;
                  this.fetchData();
                  NFTs.map((NFT, index) => {
                    this.$set(this.nicknames, NFT.contractOwner, "");
                    this.$set(this.nicknames, NFT.creator, "");
                  })
                  this.retrieveNicknames();
                }
            )
          }
      )
    },
    retrieveNicknames: function () {
      Object.keys(this.nicknames).map(async (address) => {
        axios.get(`https://capston-blockapp.greenflamingo.dev:10321/common/nickname/${address}`).then((res) => {
          this.$set(this.nicknames, address, res.data.nickname);
        })
      })
    },
    searchPosts() {
      console.log("키워드:" + this.keyword);
      console.log("플래그:" + this.flag);
      let NFTs = this.NFTData;
      console.log(NFTs)
      this.allPosts = [];
      this.posts = [];
      this.loadedPosts = 0;

      if (this.flag === 1) {  // NFT 이름 검색
        this.allPosts = NFTs.filter((NFT) => {
          return NFT.name.includes(this.keyword)
        })
      } else if (this.flag === 2) {  // 스트리머 검색
        this.allPosts = NFTs.filter((NFT) => {
          return NFT.contractOwner.includes(this.keyword) || this.nicknames[NFT.contractOwner].includes(this.keyword);
        })
      } else if (this.flag === 3) {  // creator 검색
        this.allPosts = NFTs.filter((NFT) => {
          return NFT.creator.includes(this.keyword) || this.nicknames[NFT.creator].includes(this.keyword);
        })
      } else if (this.flag === 0) {  // 통합 검색
        this.allPosts = NFTs.filter(NFT => {
          console.log(NFT)
          return NFT.name.includes(this.keyword) ||
              NFT.contractOwner.includes(this.keyword) ||
              this.nicknames[NFT.contractOwner].includes(this.keyword) ||
              NFT.creator.includes(this.keyword) ||
              this.nicknames[NFT.creator].includes(this.keyword);
        })
      }
      this.fetchData();
    },
    displayUserName: function (address) {
      if (this.nicknames[address] !== "")
        return this.nicknames[address]
      else
        return this.ellipsisAddress(address)
    },
    ellipsisAddress: function (address) {
      return address.substring(0, 7) + "..." + address.substring(address.length - 5);
    }
  },
  components: {MugenScroll, SearchBar}
}
</script>
<style scoped>
#vrow {
  overflow: hidden;
  margin: 0;

  background-color: #ffffff;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

#Title { /* 카드 타이틀*/
  padding-left: 15px;
  font-size: 18px;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

#CARD {
  margin-bottom: 15px;
}

#IMG {
  height: flex;
  text-align: center;
}

#cd { /* 카드 배경*/
  background-color: rgb(220, 240, 220);
  color: rgb(14, 13, 13);
  text-align: center;
  padding-top: 25px;
}

.subtitle {
  text-align: left;
  background-color: #ffffff
}

.post_title {
  text-align: left;
  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 2px;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
}

.post_maker {
  text-align: left;
  color: rgb(150, 150, 150);
  padding-left: 20px;
  padding-bottom: 20px;
  font-size: 11px;
  font-family: Arial, Helvetica, sans-serif;
}

.img_streamer {
  text-align: center;
  margin-top: 15px;
  justify-content: center;
}

.post_streamer {
  text-align: center;
  justify-content: center;
  margin-top: 4px;
  font-size: 10px;
  color: rgb(130, 130, 130);
}

.btn-heart {
  text-align: left;
  padding-left: 20px;
  padding-top: 16px;
  font-size: 10px;
}

.btn-dots {
  padding-top: 16px;
}

hr {
  height: 1px;
  width: 90%;
  margin-left: 5%;
  background-color: #e2e2e2;
  border: none;
}

:root {
  --dialog-xpos: 22px;
  --dialog-ypos: 55px;
}

.v-overlay__content {
  top: var(--dialog-ypos);
  left: var(--dialog-xpos);
}

.v-alert {
  margin: 0px;
}
</style>