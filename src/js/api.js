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
            data:{
                image : formData.image,
                name : formData.name,
                description : formData.description
            }
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
    getNickname: function(address){
        axios({
            method: 'get',
            url: '/common/nickname/' + address
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