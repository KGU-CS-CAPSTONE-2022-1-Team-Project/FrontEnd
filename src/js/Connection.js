import connection from "../../build/contracts/Connection.json";

const Connection = {
    contract: null,
    /**
     * initialize Connection wrapper object
     */
    init: function () {
        let self = this;
        return new Promise(function (resolve, reject) {
            self.contract = new window.caver.klay.Contract(
                connection.abi,
                "0x70833A8Db44Be18a80c9D5F698e952A5d93ED0ec"
            );
            resolve();
        });
    },
    /**
     * Check given address is celebrity
     *
     * @param {string} address address to check
     *
     * @returns {boolean} if the address is celebrity
     */
    isCelebrity: function (address) {
        let self = this;
        return new Promise(function (resolve, reject) {
            self.contract.methods
                .isCelebrity(address)
                .call()
                .then((result) => resolve(result))
                .catch((err) => reject(err));
        });
    },
    /**
     * content creator requests to celebrity to mint NFT
     *
     * @param {string} tokenURI token's metadata URI
     * @param {string} celebrity celebrity's address
     *
     * @returns transaction receipt
     */
    requestNFT: function (tokenURI, celebrity) {
        let self = this;
        return new Promise(function (resolve, reject) {
            self.contract.methods
                .requestNFT(tokenURI, celebrity)
                .estimateGas({
                    from: window.klaytn.selectedAddress,
                    value: caver.utils.toPeb("1", "KLAY"),
                })
                .then((estimatedGas) => {
                    self.contract.methods
                        .requestNFT(tokenURI, celebrity)
                        .send({
                            from: window.klaytn.selectedAddress,
                            gas: estimatedGas,
                            value: caver.utils.toPeb("1", "KLAY"),
                        })
                        .then((receipt) => resolve(receipt))
                        .catch((err) => reject(err));
                });
        });
    },
    /**
     * celebrity approve the creator's request to mint NFT
     *
     * @param {string} tokenURI to be minted token's metadata URI
     *
     * @returns transaction receipt
     */
    approveNFT: function (tokenURI) {
        let self = this;
        return new Promise(function (resolve, reject) {
            self.contract.methods
                .approveNFT(tokenURI)
                .estimateGas({
                    from: window.klaytn.selectedAddress,
                    value: caver.utils.toPeb("1", "KLAY"),
                })
                .then((estimatedGas) => {
                    self.contract.methods
                        .approveNFT(tokenURI)
                        .send({
                            from: window.klaytn.selectedAddress,
                            gas: estimatedGas,
                            value: caver.utils.toPeb("1", "KLAY"),
                        })
                        .then((receipt) => resolve(receipt))
                        .catch((err) => reject(err));
                });
        });
    },
    /**
     *
     * @param tokenURI: string
     * @returns transaction receipt
     */
    rejectNFT: function (tokenURI) {
        let self = this;
        return new Promise(function (resolve, reject) {
            self.contract.methods
                .rejectNFT(tokenURI)
                .estimateGas({
                    from: window.klaytn.selectedAddress,
                })
                .then((estimatedGas) => {
                    self.contract.methods
                        .rejectNFT(tokenURI)
                        .send({
                            from: window.klaytn.selectedAddress,
                            gas: estimatedGas,
                        })
                        .then((receipt) => resolve(receipt))
                        .catch((err) => reject(err));
                });
        });
    },
    /**
     *
     * @param tokenURI
     * @returns transaction receipt
     */
    cancelRequest: function (tokenURI) {
        let self = this;
        return new Promise(function (resolve, reject) {
            self.contract.methods
                .cancelRequest(tokenURI)
                .estimateGas({
                    from: window.klaytn.selectedAddress,
                })
                .then((estimatedGas) => {
                    self.contract.methods
                        .cancelRequest(tokenURI)
                        .send({
                            from: window.klaytn.selectedAddress,
                            gas: estimatedGas,
                        })
                        .then((receipt) => resolve(receipt))
                        .catch((err) => reject(err));
                });
        });
    },
    /**
     * retrieve request and approval history of selected address
     *
     * @returns {object} history
     *
     * struct Pool{
        address celebrity;
        address creator;
        string tokenURI;
        address _hash;
        uint256 open;
        uint256 close;
        uint256 cancel;
        uint256 reject;
        }
     */
    poolHistory: function () {
        let self = this;
        return new Promise(function (resolve, reject) {
            self.contract.methods
                .poolHistory()
                .call({
                    from: window.klaytn.selectedAddress,
                })
                .then((poolHistory) => resolve(poolHistory))
                .catch((err) => reject(err));
        });
    },
    /**
     * return all of NFT informations
     *
     * @returns {object} NFT info
     */
    getAllNFTs: function () {
        let self = this;
        return new Promise(function (resolve, reject) {
            self.contract.methods
                .getAllNFTs()
                .call()
                .then((NFTs) => resolve(NFTs))
                .catch((err) => reject(err));
        });
    },
    /**
     * get all owned NFT informations
     *
     * @returns {object} NFT info
     */
    getOwnedNFTs: function () {
        let self = this;
        return new Promise(function (resolve, reject) {
            self.contract.methods
                .getOwnedNFTs()
                .call({from: window.klaytn.selectedAddress})
                .then((NFTs) => resolve(NFTs))
                .catch((err) => reject(err));
        });
    },
    getNFTByContractAddress: function (contractAddress) {
        let self = this;
        return new Promise(function (resolve, reject) {
            self.contract.methods
                .getNFTByContractAddress(contractAddress)
                .call({from: window.klaytn.selectedAddress})
                .then((NFTs) => resolve(NFTs))
                .catch((err) => reject(err));
        });
    },
    getCelebrities: function () {
        let self = this;
        return new Promise(function (resolve, reject) {
            self.contract.methods.getCelebrities().call().then(resolve).catch(reject);
        })
    }
};

export default Connection;