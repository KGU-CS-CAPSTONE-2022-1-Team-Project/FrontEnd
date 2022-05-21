import api from './api.js';



const Login = {
    isMember :function(walletAddress){
        var nick;
        var result = api.getNickname(walletAddress).then(result => {
            console.log(result.data['nickname']);
            nick = result.data['nickname'];
        });
        if(nick != "")return true;
        return false;
    }
}
export default Login;
