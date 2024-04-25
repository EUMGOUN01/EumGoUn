document.addEventListener('DOMContentLoaded', ()=>{

    const comImg = document.getElementById('com');
    const userImg = document.querySelector('#user'); //getElementById 랑 querySelector 똑같지만 # 차이
    const msg = document.querySelector('#msg');

    const bts = document.querySelectorAll('bts'); //section > button
    console.log(bts);

    //반복문2
    console.log('반복문');
    for(let i in bts){
        console.log(bts[i])
    }

    //반복문3
    bts.forEach(bt => {

    })

    //반복문4
    

});