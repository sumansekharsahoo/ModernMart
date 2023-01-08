let count1=0;
document.querySelector('.add1').addEventListener('click',function(){
    count1++;
    let qs= Number(document.querySelector('.no1').textContent);
    document.querySelector('.no1').textContent=count1;
    
})
document.querySelector('.subt1').addEventListener('click',function(){
    if(count1>0){
    count1--;
    let qs= Number(document.querySelector('.no1').textContent);
    document.querySelector('.no1').textContent=count1;
    }
    console.log("hi: "+count1);
})

let count2=0;
document.querySelector('.add2').addEventListener('click',function(){
    count2++;
    let qs= Number(document.querySelector('.no2').textContent);
    document.querySelector('.no2').textContent=count2;
    
})
document.querySelector('.subt2').addEventListener('click',function(){

    if(count2>0){
    count2--;
    let qs= Number(document.querySelector('.no2').textContent);
    document.querySelector('.no2').textContent=count2;
    
    }
})


let count3=0;
document.querySelector('.add3').addEventListener('click',function(){
    count3++;
    let qs= Number(document.querySelector('.no3').textContent);
    document.querySelector('.no3').textContent=count3;
    
})
document.querySelector('.subt3').addEventListener('click',function(){
    if(count3>0){
    count3--;
    let qs= Number(document.querySelector('.no3').textContent);
    document.querySelector('.no3').textContent=count3;
    
    }
})


let count4=0;
document.querySelector('.add4').addEventListener('click',function(){
    count4++;
    let qs= Number(document.querySelector('.no4').textContent);
    document.querySelector('.no4').textContent=count4;
    
})
document.querySelector('.subt4').addEventListener('click',function(){
    if(count4>0){
    count4--;
    let qs= Number(document.querySelector('.no4').textContent);
    document.querySelector('.no4').textContent=count4;
    
    }
})



let count5=0;
document.querySelector('.add5').addEventListener('click',function(){
    count5++;
    let qs= Number(document.querySelector('.no5').textContent);
    document.querySelector('.no5').textContent=count5;
    
})
document.querySelector('.subt5').addEventListener('click',function(){
    if(count5>0){

        count5--;
        let qs= Number(document.querySelector('.no5').textContent);
        document.querySelector('.no5').textContent=count5;
        
    }
})


let count6=0;
document.querySelector('.add6').addEventListener('click',function(){
    count6++;
    let qs= Number(document.querySelector('.no6').textContent);
    document.querySelector('.no6').textContent=count6;
    
})
document.querySelector('.subt6').addEventListener('click',function(){
    if(count6>0){
    count6--;
    let qs= Number(document.querySelector('.no6').textContent);
    document.querySelector('.no6').textContent=count6;
    
    }
})


let count7=0;
document.querySelector('.add7').addEventListener('click',function(){
    count7++;
    let qs= Number(document.querySelector('.no7').textContent);
    document.querySelector('.no7').textContent=count7;
    
})
document.querySelector('.subt7').addEventListener('click',function(){
    if(count7>0){
    count7--;
    let qs= Number(document.querySelector('.no7').textContent);
    document.querySelector('.no7').textContent=count7;
    
    }
})


let count8=0;
document.querySelector('.add8').addEventListener('click',function(){
    count8++;
    let qs= Number(document.querySelector('.no8').textContent);
    document.querySelector('.no8').textContent=count8;
    
})
document.querySelector('.subt8').addEventListener('click',function(){
    if(count8>0){
    count8--;
    let qs= Number(document.querySelector('.no8').textContent);
    document.querySelector('.no8').textContent=count8;
    
    }
})


let count9=0;
document.querySelector('.add9').addEventListener('click',function(){
    count9++;
    let qs= Number(document.querySelector('.no9').textContent);
    document.querySelector('.no9').textContent=count9;
    
})
document.querySelector('.subt9').addEventListener('click',function(){
    if(count9>0){
        count9--;
        let qs= Number(document.querySelector('.no9').textContent);
        document.querySelector('.no9').textContent=count9;
        
    }
})

let tcart=0;
let flag1=0, flag2=0, flag3=0, flag4=0, flag5=0, flag6=0, flag7=0, flag8=0, flag9=0;

function icart(x){
    document.querySelector(x).addEventListener('click', function(){
    if(count1>0){
        flag1=1;
    }
    else{
        flag1=0;
    }
    
    if(count2>0){
        flag2=1;
    }
    else{
        flag2=0;
    }


    if(count3>0){
        flag3=1;
    }
    else{
        flag3=0;
    }

    if(count4>0){
        flag4=1;
    }
    else{
        flag4=0;
    }

    if(count5>0){
        flag5=1;
    }
    else{
        flag5=0;
    }

    if(count6>0){
        flag6=1;
    }
    else{
        flag6=0;
    }

    if(count7>0){
        flag7=1;
    }
    else{
        flag7=0;
    }

    if(count8>0){
        flag8=1;
    }
    else{
        flag8=0;
    }

    if(count9>0){
        flag9=1;
    }
    else{
        flag9=0;
    }
    tcart=flag1+flag2+flag3+flag4+flag5+flag6+flag7+flag8+flag9;
    console.log("hello:" +tcart);

    let qs= Number(document.querySelector('.cartnum').textContent);
    document.querySelector('.cartnum').textContent=tcart;

})
}

icart('.subt1');
icart('.subt2');
icart('.subt3');
icart('.subt4');
icart('.subt5');
icart('.subt6');
icart('.subt7');
icart('.subt8');
icart('.subt9');
icart('.add1');
icart('.add2');
icart('.add3');
icart('.add4');
icart('.add5');
icart('.add6');
icart('.add7');
icart('.add8');
icart('.add9');


