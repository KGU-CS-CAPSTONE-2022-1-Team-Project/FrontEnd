import axios from 'axios'

const api ={
    getGoogle: function(){

    },
    uploadNFT: function(formData){
        axios({
            method: 'POST',
            url: '/partner/nft',
            headers:{
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        })
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });
    },
    getNickname(address) {
        var url = '/common/nickname/' + address;
        const response = axios.get(url);
        console.log(response.data);
        return response;
    },
    signUser: function(address, nickname){
        axios({
            method: 'POST',
            url: '/common/nickname/',
            data:{
                address : address,
                nickname : nickname
            }
        })
        .then(function (response) {
            alert("회원가입이 완료되었습니다.");
            document.location.href="/home";
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