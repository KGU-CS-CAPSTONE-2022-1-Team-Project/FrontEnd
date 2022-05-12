const Login = {
    allUsers : [
        {address: '0x3323F1c38De5E01131a8CC2649839EDe7E277f25'},
        //{address: '0x3323F1c38De5E01131a8CC2649839EDe7E277f25'}
    ],

    isMember :function(walletAddress){
        let check = false;

        this.allUsers.forEach(user=>{
            if(user.address.toUpperCase() === walletAddress.toUpperCase())check = true;
        })
        return check;
    }
}
export default Login;
