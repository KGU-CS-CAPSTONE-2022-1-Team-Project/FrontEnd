import axios from 'axios'

const api ={
    getGoogle: function(){

    },
    uploadNFT: function(formData){
        axios({
            method: 'POST',
            url: '/partner/nft',
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
    async getNickname(address) {
        var url = '/common/nickname/' + address;
        const response = await axios.get(url);
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