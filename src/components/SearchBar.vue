<template>
  <v-row id="vr">
    <v-row :style="{marginTop: '10px'}">
      <v-col cols="12" md="2" />
        <v-col cols="12" md="2"> <!-- 아래 v-select 부분이 카테고리 부분-->
          <v-select background-color=#404040 color=white dense dark outlined
              :items="searchoption" 
              item-color=#404040
              v-model="searchoptionselected"
              :style="{width:'130px', marginLeft:'90px', marginTop:'10px'}" />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="searchkeyword" dense outlined label="검색키워드" color=#808080 background-color= #404040 dark
            font-color="white" full-width :style="{marginTop:'10px'}"/>
        </v-col>
        <v-col cols="12" md="1">
          <v-btn id="bt" @click="searchstart" :style="{marginTop:'10px'}" dense>검색</v-btn>
        </v-col>
        <v-col cols="12" md="3" />
    </v-row>
  </v-row>
</template>
<script>
import EventBus from '../js/EventBus'
  export default {
    data() {
    return {
      clickedCount: 0,
      searchkeyword:'',			// 검색키워드
      searchfinish: false,		// 검색완료시 true로 바뀌고, 이때부터 표 생성
      searchoption: ['통합검색','제목','스트리머','제작자'],	// 검색옵션
      searchoptionselected: '통합검색',	// 검색옵션값 받아오기, 기본값은 제목으로 지정
      searchcnt: 0,			// 검색된 게시글 갯수
      contentlist: [],			// 게시글 리스트
    }
  },
  movetocontent(boardnum, id) {	// 검색된 게시글 클릭시 해당 게시글로 이동
	  window.location.href = 'http://127.0.0.1:8080/board/' + boardnum + '/content?id=' + id
  },
  methods:{
    handleGlobalClickButton(){
      this.clickedCount++;
      console.log("이벤트 송신");
      EventBus.$emit('use-eventbus',this.clickedCount);
    },
    searchstart(){			// 검색버튼 눌렀을때 실행
    let searchoption= this.searchoptionselected;
    let searchkeyword= this.searchkeyword;
    console.log(searchkeyword);
    console.log(searchoption);
      if(this.searchoptionselected=='제목'){
        EventBus.$emit('event-flag',1);
        EventBus.$emit('event-keyword',this.searchkeyword);
      }
      else if(this.searchoptionselected=='스트리머'){
        EventBus.$emit('event-flag',2);
        EventBus.$emit('event-keyword',this.searchkeyword);
      }
      else if(this.searchoptionselected=='제작자'){
        EventBus.$emit('event-flag',3);
        EventBus.$emit('event-keyword',this.searchkeyword);
      }
      else if(this.searchoptionselected=='통합검색'){
        EventBus.$emit('event-flag',0);
        EventBus.$emit('event-keyword',this.searchkeyword);
      }
      else{
        EventBus.$emit('event-flag',0);
        EventBus.$emit('event-keyword',this.searchkeyword);
      }
    }
  }
}
</script>
<style scoped>
  #vr{
    background-color: rgb(2, 2, 2);
  }
  #bt{
    background-color: #404040;
    color:white;
  }

</style>