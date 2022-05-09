<template>
	<div>
		<v-data-table
			:headers="historyHeaders"
			:items="histories"
			:items-per-page="-1"
			class="history"
			calculate-widths
		>
			<template v-slot:item._hash="{ item }">
				{{ p(tokenInfos) }}

				<div v-if="tokenInfos[item._hash] != undefined">
					{{ tokenInfos[item._hash].name }}
				</div>
				<div v-else>-</div>
			</template>
			<template v-slot:item.celebrity="{ item }">
				{{ ellipsisAddress(item.celebrity) }}
			</template>
			<template v-slot:item.creator="{ item }">
				{{ ellipsisAddress(item.creator) }}
			</template>

			<template v-slot:item.open="{ item }">
				<span v-if="item.open != 0">
					{{ convertTime(item.open) }}
				</span>
				<span v-else> - </span>
			</template>
			<template v-slot:item.close="{ item }">
				<span v-if="item.close != 0">
					{{ convertTime(item.close) }}
				</span>
				<span v-else> - </span>
			</template>
			<template v-slot:item.cancel="{ item }">
				<span v-if="item.cancel != 0">
					{{ convertTime(item.cancel) }}
				</span>
				<span v-else> - </span>
			</template>
			<template v-slot:item.button="{ item }">
				<v-dialog
					v-model="dialog[item._hash]"
					width="40%"
					v-if="tokenInfos[item._hash] != undefined"
				>
					<template v-slot:activator="{ on, attrs }">
						<v-btn color="lighten-2" dark v-bind="attrs" v-on="on" small>
							More
						</v-btn>
					</template>

					<v-card>
						<v-flex justify-center>
							<v-img width="100%" :src="tokenInfos[item._hash].image"></v-img>
							<v-img
								v-if="tokenInfos[item._hash].value != undefined"
								width="100%"
								:src="tokenInfos[item._hash].value"
							></v-img>
						</v-flex>
						<v-card-title class="text-h5 grey lighten-4">
							{{ tokenInfos[item._hash].name }}</v-card-title
						>
						<v-card-text>
							<div class="font-weight-bold pt-6">
								{{ tokenInfos[item._hash].description }}
							</div>
						</v-card-text>
						<v-card-text>
							<v-layout class="pt-5 pl-3">
								<v-flex>
									<v-row class="font-weight-bold"
										>NFT 크리에이터 : {{ item.creator }}</v-row
									>
									<v-row class="font-weight-bold"
										>요청 시간 : {{ convertTime(item.open) }}
									</v-row>
									<v-row
										class="font-weight-bold"
										justify="center"
										align="center"
										><v-col cols="auto"
											><v-chip color="green" @click="approve(item.tokenURI)"
												>승인</v-chip
											></v-col
										><v-col cols="auto"
											><v-chip color="red accent-2">거절</v-chip></v-col
										></v-row
									>
								</v-flex>
							</v-layout>
						</v-card-text>

						<v-divider></v-divider>

						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn color="primary" text @click="dialog[item._hash] = false">
								Close
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
			</template>
		</v-data-table>
	</div>
</template>

<script>
import Connection from "../js/Connection";
import NFT from "../js/NFT";
import axios from "axios";

export default {
	name: "RequestsReceived",
	props: ["isCelebrity"],
	data() {
		return {
			histories: [],
			tokenInfos: {},
			historyHeaders: [
				{ text: "이름", value: "_hash", align: "center" },
				{
					text: "스트리머",
					value: "celebrity",
					align: "center",
				},
				{ text: "NFT 크리에이터", value: "creator", align: "center" },
				{ text: "요청", value: "open", align: "center" },
				{ text: "승인", value: "close", align: "center" },
				{ text: "취소", value: "cancel", align: "center" },
				{ text: "", value: "button" },
			],
			dialog: {},
		};
	},
	beforeCreate: function () {
		Connection.init().then((result) => this.poolHistory());
	},
	methods: {
		poolHistory: function () {
			Connection.poolHistory().then((h) =>
				h.map((history) => {
					this.histories = [];
					if (
						history.celebrity.toLowerCase() == window.klaytn.selectedAddress &&
						history.close == 0 &&
						history.cancel == 0
					) {
						console.log("XXXX");
						this.histories.push(history);
						axios
							.get(history.tokenURI)
							.then((result) => {
								let key = history._hash;
								this.$set(this.tokenInfos, key, result.data);
							})
							.catch((error) => {
								console.log(error);
							});
					}
				})
			);
		},
		convertTime: function (timestamp) {
			let date = new Date(timestamp * 1000);
			return (
				date.getFullYear() +
				"년 " +
				(date.getMonth() + 1) +
				"월 " +
				date.getDate() +
				"일 " +
				date.getHours() +
				":" +
				date.getMinutes() +
				":" +
				date.getSeconds()
			);
		},
		ellipsisAddress: function (address) {
			let newAddress =
				address.substring(0, 10) +
				"..." +
				address.substring(address.length - 10);
			return newAddress;
		},
		getTokenInfo: function (history) {
			axios
				.get(history.tokenURI)
				.then(
					(tokenInfo) => (
						console.log(tokenInfo.data),
						(this.tokenInfos[history._hash] = tokenInfo.data),
						console.log(this.tokenInfos)
					)
				)
				.catch((error) => (this.tokenInfos[history._hash] = "None"));
		},
		approve: function (tokenURI) {
			Connection.approveNFT(tokenURI).then((result) => {
				console.log(100);
				this.poolHistory();
				this.dialog = {};
			});
		},
		p: function (x) {
			console.log("aaa", x);
		},
	},
};
</script>
