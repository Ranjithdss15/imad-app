console.log('Loaded!');

//window.onload = function(){

var imageele = document.getElementById('image');
marginLeft=0;
function moveRight() {
    marginLeft += 50;
    imageele.style.marginLeft = marginLeft+'px' ;
    if(marginLeft== '300px')
    'break';
    }
imageele.onclick = function () {
    var interval =setInterval(moveRight,50);
    
};
var b1element= document.getElementById("b1");
b1element.onclick = function1;
function function1() {
    
      alert('Started');
      
      var b1color=document.getElementsByClassName('body');
  b1color.style.bgcolor= '#f90053';

}

//};
/*b1element
  
   var b1color=document.getElementsByClassName('body');
  b1color.style.bgcolor= '#f90053';
    
};*/
//alert('Hi,this is main.js');
//var element = document.getElementById('main-text');
//element.innerText = `
//The main.js file is getting executed now`;
