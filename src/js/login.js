const Login = {
    allUsers : [
        {address: '0x3323F1c38De5E01131a8CC2649839EDe7E277f25'},
        {address: '0x3323F1c38De5E01131a8CC2649839EDe7E277f27'},
        {address: '0x432a0Dba5099cC7766F87f32BF8Da38650Db6c71'},
        {address: '0x2Be3dB83393cBB11C57cCc32Ccaf2d4A57562941'},
        //{address: '0x3323F1c38De5E01131a8CC2649839EDe7E277f25'}
        {address: '0x6f80D058fdD5450BD28721331DDf62eB0eA98Cd8'}
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
