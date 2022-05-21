const Login = {
    isMember :function(walletAddress){
        var url = '/common/nickname/';
        url = url + walletAddress;

        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", url, false ); // false for synchronous request
        xmlHttp.send();

        var data = xmlHttp.responseText;
        data = JSON.parse(data);
        console.log(data);

        if(data['nickname'] != "")
            return true;
        else {
            alert("회원가입이 필요합니다.");
            document.location.href="/register";
        }


    }
}
export default Login;