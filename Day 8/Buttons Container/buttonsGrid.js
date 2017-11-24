var b=document.getElementById('btn5');
var arr=[1,2,3,6,9,8,7,4];
b.onclick=function()
{
arr.unshift(arr.pop());
 document.getElementById('btn1').innerHTML =arr[0];
    document.getElementById('btn2').innerHTML =arr[1] ;
    document.getElementById('btn3').innerHTML =arr[2];
    document.getElementById('btn6').innerHTML =arr[3];
    document.getElementById('btn9').innerHTML =arr[4];
    document.getElementById('btn8').innerHTML =arr[5];
    document.getElementById('btn7').innerHTML =arr[6];
    document.getElementById('btn4').innerHTML =arr[7];
    
}