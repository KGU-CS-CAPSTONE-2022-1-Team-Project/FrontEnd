import _NFT from "../../build/contracts/NFT.json";

const NFT = {
	contract: null,

	/**
	 * initialize NFT object
	 *
	 * @param {string} contractAddress NFT contract address
	 */
	init: function (contractAddress) {
		let self = this;
		return new Promise(function (resolve, reject) {
			self.contract = new window.caver.klay.Contract(_NFT.abi, contractAddress);
			resolve();
		});
	},
	/**
	 * get owner address
	 * owner = celebrity
	 *
	 * @returns owner address
	 */
	owner: function () {
		let self = this;
		return new Promise(function (resolve, reject) {
			self.contract.methods
				.owner()
				.call()
				.then((owner) => resolve(owner))
				.catch((err) => reject(err));
		});
	},
	/**
	 * get name of NFT
	 *
	 * @returns name
	 */
	name: function () {
		let self = this;
		return new Promise(function (resolve, reject) {
			self.contract.methods
				.name()
				.call()
				.then((name) => resolve(name))
				.catch((err) => reject(err));
		});
	},
	/**
	 * get symbol of NFT
	 *
	 * @returns symbol
	 */
	symbol: function () {
		let self = this;
		return new Promise(function (resolve, reject) {
			self.contract.methods
				.symbol()
				.call()
				.then((symbol) => resolve(symbol))
				.catch((err) => reject(err));
		});
	},
	/**
	 * get tokenURI
	 *
	 * @param {int} tokenId token number
	 *
	 * @returns tokenURI
	 */
	tokenURI: function (tokenId) {
		let self = this;
		return new Promise(function (resolve, reject) {
			self.contract.methods
				.tokenURI(tokenId)
				.call()
				.then((tokenURI) => resolve(tokenURI))
				.catch((err) => reject(err));
		});
	},
	creatorOf: function (tokenId) {
		let self = this;
		return new Promise(function (resolve, reject) {
			self.contract.methods
				.creatorOf(tokenId)
				.call()
				.then((creator) => resolve(creator))
				.catch((err) => reject(err));
		});
	},
};

export default NFT;
