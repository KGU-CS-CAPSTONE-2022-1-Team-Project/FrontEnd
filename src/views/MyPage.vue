<template>
	<v-app>
		<v-container>
			<v-tabs>
				<v-tab>보유중인 NFT</v-tab>
				<v-tab v-if="isCelebrity">받은 NFT 발행 요청</v-tab>
				<v-tab>NFT 발행 요청 기록</v-tab>
				<v-tab-item>
					<template>
						<v-container fill-height>
							<v-row
								justify="center"
								align="center"
								style="height: calc(100vh)"
							>
								<v-col cols="auto" class="font-weight-bold text-h5">
									소유한 NFT가 없습니다.
								</v-col>
							</v-row>
						</v-container>
					</template>
				</v-tab-item>
				<v-tab-item v-if="isCelebrity">
					<RequestsReceived v-bind:isCelebrity="isCelebrity" />
				</v-tab-item>
				<v-tab-item> <History v-bind:isCelebrity="isCelebrity" /> </v-tab-item>
			</v-tabs>
		</v-container>
	</v-app>
</template>

<script>
import Connection from "../js/Connection";
import History from "../components/History.vue";
import RequestsReceived from "../components/RequestsReceived.vue";

export default {
	setup() {},
	components: {
		History,
		RequestsReceived,
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
