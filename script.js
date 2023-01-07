document.querySelector('.csubmit').addEventListener('click',function(){
    console.log(document.querySelector('#cphno').value);

    if(document.querySelector('#cphno').value==600061 && document.querySelector('#cpwd').value=="msuman"){
        location.href="customer/chome.html";
    }
    else{
        document.querySelector('.incpass').style.visibility="visible";
    }

})
