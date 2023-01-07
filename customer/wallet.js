document.querySelector('.tpbtn').addEventListener('click',function(){
    console.log(Number(document.querySelector('#amt').value));
    // console.log(document.querySelector('#usname').value);
    console.log(Number(document.querySelector('.cbalamt').textContent));
    if(document.querySelector('#usname').value=="suman" && document.querySelector('#pswd').value=="wsuman"){
        let cbal=Number(document.querySelector('.cbalamt').textContent);
        let topamt=Number(document.querySelector('#amt').value);
        cbal+=topamt;
        document.querySelector('.cbalamt').textContent=cbal;
        console.log(cbal);
        document.querySelector('.incpass').style.visibility="hidden";
    }
    else{
        document.querySelector('.incpass').style.visibility="visible";
    }
    
})
