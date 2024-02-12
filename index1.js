

const randomOtpGenerator=(length)=>{
    const number='1234567890'
    let otp=''
    for(let i=0;i<=number.length-1;i++){
        const randomnum=Math.floor(Math.random()*number.length)
      otp+=number[randomnum]
    }
    return otp
}

console.log(randomOtpGenerator(2))


