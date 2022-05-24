import axios from 'axios'
import Connection from './Connection';

var dev = "https://capston-blockapp.greenflamingo.dev:10321/partner/nft/"
var server = "https://capston-blockapp.greenflamingo.dev:10321"

const api = {
    getGoogle: function () {

    },
    uploadNFT: function (formData, address) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: server + '/partner/nft',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                data: formData
            })
                .then(resolve)
                .catch(reject);
        })
    },
    getNickname(address) {
        return new Promise((resolve, reject) => {
            let url = server + '/common/nickname/' + address;
            axios.get(url).then(response => {
                console.log(response.data)
                resolve(response)
            }).catch((err, response) => {
                console.log(err.response)
                if (err.response === undefined) {
                    reject(err);
                }
                if (err.response.status === 404) {
                    reject(err);
                }
            });
        })
    }
    ,
    signUser: function (signature, nickname) {
        axios({
            method: 'POST',
            url: server + '/common/nickname/',
            data: {
                address: signature,
                nickname: nickname
            }
        })
            .then(function (response) {
                alert("회원가입이 완료되었습니다.");
                document.location.href = "/home";
                console.log(response);
                return response;
            })
            .catch(function (error) {
                console.log(error);
                return error;
            });
    }

}

export default api;