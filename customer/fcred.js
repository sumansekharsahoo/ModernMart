const date = new Date();

let day = String(date.getDate());
let month = String(date.getMonth() + 1);
let year = String(date.getFullYear());
if(day.length=1){
    day="0"+day;
}
if(month.length=1){
    month="0"+month;
}
let dstr= day+month+year;
console.log(dstr);

document.querySelector('.dsub').addEventListener('click',function(){
    if(document.querySelector('#date').value==dstr){
        let x=document.querySelector('#date').value;
        if(x==dstr){
            document.querySelector('.hid1').style.visibility="visible";
            document.querySelector('.hid2').style.visibility="visible";
            document.querySelector('.star1').style.display="none";
            document.querySelector('.star2').style.display="none";
            document.querySelector('.incdate').style.visibility="hidden";

        }
    }
    else{
        document.querySelector('.hid1').style.visibility="hidden";
        document.querySelector('.hid2').style.visibility="hidden";
        document.querySelector('.star1').style.display="inline";
        document.querySelector('.star2').style.display="inline";
        document.querySelector('.incdate').style.visibility="visible";
    }
})

document.querySelector('.home').addEventListener('click',function(){
    location.href="index.html";
})